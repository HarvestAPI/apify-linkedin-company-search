// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/).
import {
  ApiPagination,
  Company,
  CompanyShort,
  createLinkedinScraper,
  LinkedinCompanySize,
  ScrapeLinkedinCompaniesParams,
  SearchLinkedinCompaniesParams,
} from '@harvestapi/scraper';
import { Actor } from 'apify';
import { config } from 'dotenv';

config();

// The init() call configures the Actor for its environment. It's recommended to start every Actor with an init().
await Actor.init();

enum ScraperMode {
  SHORT,
  FULL,
}

const scraperModeInputMap1: Record<string, ScraperMode> = {
  short: ScraperMode.SHORT,
  full: ScraperMode.FULL,
};
const scraperModeInputMap2: Record<string, ScraperMode> = {
  '1': ScraperMode.SHORT,
  '2': ScraperMode.FULL,
};

interface Input {
  scraperMode: string;
  searchQuery?: string;
  locations?: string[];
  industryIds?: string[];
  companySize?: string[];
  maxItems?: number;
  startPage?: number;
  takePages?: number;
}

// Structure of input is defined in input_schema.json
const input = await Actor.getInput<Input>();
if (!input) throw new Error('Input is missing!');

const scraperMode =
  scraperModeInputMap1[input.scraperMode] ??
  scraperModeInputMap2[input.scraperMode] ??
  ScraperMode.FULL;

const query: SearchLinkedinCompaniesParams = {
  location: (input.locations || []) as any,
  search: input.searchQuery,
  companySize: (input.companySize || []) as LinkedinCompanySize[],
  industryId: input.industryIds || [],
};

for (const key of Object.keys(query) as (keyof typeof query)[]) {
  if (Array.isArray(query[key]) && query[key].length) {
    (query[key] as string[]) = query[key]
      .map((v) => (v || '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim())
      .filter((v) => v && v.length);
  }
  if (!query[key] || (Array.isArray(query[key]) && !(query[key] as string[]).length)) {
    delete query[key];
  }
}

if (Object.keys(query).length === 0) {
  console.warn('No search parameters provided, exiting');
  await Actor.exit({
    statusMessage: 'No search parameters provided, exiting',
  });
}

const { actorId, actorRunId, actorBuildId, userId, actorMaxPaidDatasetItems, memoryMbytes } =
  Actor.getEnv();
const client = Actor.newClient();

const user = userId ? await client.user(userId).get() : null;
const cm = Actor.getChargingManager();
const pricingInfo = cm.getPricingInfo();
const isPaying = (user as Record<string, any> | null)?.isPaying === false ? false : true;

const state: {
  scrapedItems: number;
} = {
  scrapedItems: 0,
};

const pushItem = async ({
  item,
  pagination,
}: {
  item: Company | CompanyShort;
  pagination: ApiPagination | null;
}) => {
  console.info(`Scraped company ${item.linkedinUrl || item?.universalName || item?.id}`);
  state.scrapedItems += 1;
  let pushResult: { eventChargeLimitReached: boolean } | null = null;

  item = {
    ...item,
    _meta: {
      pagination,
    },
  } as (Company | CompanyShort) & { _meta: { pagination: ApiPagination | null } };

  if (scraperMode === ScraperMode.SHORT) {
    pushResult = await Actor.pushData(item, 'short-company');
  }
  if (scraperMode === ScraperMode.FULL) {
    pushResult = await Actor.pushData(item, 'full-company');
  }

  if (pushResult?.eventChargeLimitReached) {
    await Actor.exit({
      statusMessage: 'max charge reached',
    });
  }
};

const scraper = createLinkedinScraper({
  apiKey: process.env.HARVESTAPI_TOKEN!,
  baseUrl: process.env.HARVESTAPI_URL || 'https://api.harvest-api.com',
  addHeaders: {
    'x-apify-userid': userId!,
    'x-apify-actor-id': actorId!,
    'x-apify-actor-run-id': actorRunId!,
    'x-apify-actor-build-id': actorBuildId!,
    'x-apify-memory-mbytes': String(memoryMbytes),
    'x-apify-actor-max-paid-dataset-items': String(actorMaxPaidDatasetItems) || '0',
    'x-apify-username': user?.username || '',
    'x-apify-user-is-paying': (user as Record<string, any> | null)?.isPaying,
    'x-apify-user-is-paying2': String(isPaying),
    'x-apify-max-total-charge-usd': String(pricingInfo.maxTotalChargeUsd),
    'x-apify-is-pay-per-event': String(pricingInfo.isPayPerEvent),
    'x-apify-user-max-items': String(input.maxItems),
  },
});

const scrapeParams: Omit<ScrapeLinkedinCompaniesParams, 'query'> = {
  scrapePeopleTab: true,
  outputType: 'callback',
  onItemScraped: async ({ item, pagination }) => {
    return pushItem({ item, pagination });
  },
  onPageFetched: async ({ page, data }) => {
    if (page === 1) {
      if (data?.status === 429) {
        console.error('Too many requests');
      } else if (data?.pagination) {
        console.info(
          `Found ${data.pagination.totalElements} companies total for input ${JSON.stringify(query)}`,
        );
      }
    }

    console.info(
      `Scraped search page ${page}. Found ${data?.elements?.length} profiles on the page.`,
    );
  },
  scrapeDetails: scraperMode === ScraperMode.FULL,
  takePages: input.takePages || 20,
  startPage: input.startPage || 1,
  maxItems: input.maxItems || 1000,
  disableLog: true,
  overrideConcurrency: 20,
  overridePageConcurrency: 1,
};

await scraper.scrapeCompanies({
  query: query,
  ...scrapeParams,
  maxItems: input.maxItems,
});

// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit().
await Actor.exit();
// process.exit(0);
