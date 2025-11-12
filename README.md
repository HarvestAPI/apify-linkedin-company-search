## LinkedIn Company Search scraper

Our powerful tool helps you search LinkedIn Companies and filter by locations, company sizes, industries and more without compromising security or violating platform policies.

## How It Works

1. Choose Scraper Mode

- Short. The Actor will be scraping only search pages and will output only basic company data. One search page is up to 50 results (short companies).
- Full. Additionally to scraping search pages, it will open company links found on search page, and scrape all company details.

2. Provide at least one of the following search parameters to find LinkedIn companies:

- (optional) Search query (e.g., `Marketing`)
- (optional) List of locations (e.g., `New York`, `San Francisco`, `London`). Please note that LinkedIn does not always understand your text queries. For example for "UK" query it will apply "Ukraine" location, so you should use "United Kingdom" in this case. Try this out first in the location filter input of LinkedIn search at `https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D` - we will use the first suggestion from the autocomplete popup when you type your location.
- (optional) List of LinkedIn industry IDs (e.g., `4`, `5`, `6`). You can find the full list of IDs in the [LinkedIn Industries](https://github.com/HarvestAPI/linkedin-industry-codes-v2/blob/main/linkedin_industry_code_v2_all_eng_with_header.csv).
- (optional) `maxItems` - Maximum number of companies to scrape for all queries. If you set to 0, it will scrape all available items or up to 1000 items per search query (LinkedIn doesn't allow to extract more than 1000 per one query).

### Sample output data

Here is the example Full company output of this actor:

```json
{
  "id": "1043",
  "universalName": "siemens",
  "linkedinUrl": "https://www.linkedin.com/company/siemens/",
  "name": "Siemens",
  "tagline": "We create technology to transform the everyday, for everyone.",
  "website": "http://www.siemens.com",
  "phone": null,
  "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFK_4wGnzwPTQ/company-logo_400_400/company-logo_400_400/0/1719931174735/siemens_logo?e=1764806400&v=beta&t=FMihUaVRIYcj7weWoJWCaLiblaAUs4egiQi5vAM7TOU",
  "foundedOn": {
    "month": null,
    "year": 1847,
    "day": null
  },
  "employeeCount": 215641,
  "employeeCountRange": {
    "start": 10001,
    "end": null
  },
  "followerCount": 8252865,
  "description": "Siemens AG (Berlin and Munich) is a leading technology company focused on industry, infrastructure, mobility, and healthcare. The company’s purpose is to create technology to transform the everyday, for everyone. By combining the real and the digital worlds, Siemens empowers customers to accelerate their digital and sustainability transformations, making factories more efficient, cities more livable, and transportation more sustainable. Siemens also owns a majority stake in the publicly listed company Siemens Healthineers, a leading global medical technology provider pioneering breakthroughs in healthcare. For everyone. Everywhere. Sustainably. In fiscal 2024, which ended on September 30, 2024, the Siemens Group generated revenue of €75.9 billion and net income of €9.0 billion. As of September 30, 2024, the company employed around 312,000 people worldwide on the basis of continuing operations. ",
  "locations": [
    {
      "country": "BG",
      "city": "Sofia",
      "geographicArea": null,
      "line1": "ul. Kukush 2",
      "line2": null,
      "postalCode": "1309",
      "headquarter": false,
      "description": "Siemens EOOD",
      "parsed": {
        "text": "Sofia, Bulgaria",
        "countryCode": "BG",
        "regionCode": null,
        "country": "Bulgaria",
        "countryFull": "Bulgaria",
        "state": "Sofia City Province",
        "city": "Sofia"
      }
    },
    {
      "country": "GB",
      "city": "Manchester",
      "geographicArea": null,
      "line1": "Sir William Siemens House Princess Road  ",
      "line2": null,
      "postalCode": "M20 2UR ",
      "headquarter": false,
      "description": "Siemens, UK Head Office",
      "parsed": {
        "text": "Manchester, United Kingdom",
        "countryCode": "GB",
        "regionCode": null,
        "country": "UK",
        "countryFull": "United Kingdom",
        "state": "England",
        "city": "Manchester"
      }
    },
    {
      "country": "GB",
      "city": "London",
      "geographicArea": null,
      "line1": null,
      "line2": null,
      "postalCode": null,
      "headquarter": false,
      "description": "Siemens Mobility GB",
      "parsed": {
        "text": "London, United Kingdom",
        "countryCode": "GB",
        "regionCode": null,
        "country": "UK",
        "countryFull": "United Kingdom",
        "state": "England",
        "city": "London"
      }
    },
    {
      "country": "GB",
      "city": "Nottingham",
      "geographicArea": "England",
      "line1": "Woodyard Lane",
      "line2": null,
      "postalCode": "NG8 1GB",
      "headquarter": false,
      "description": null,
      "parsed": {
        "text": "Nottingham, United Kingdom",
        "countryCode": "GB",
        "regionCode": null,
        "country": "UK",
        "countryFull": "United Kingdom",
        "state": "England",
        "city": "Nottingham"
      }
    },
    {
      "country": "CO",
      "city": "Bogotá",
      "geographicArea": null,
      "line1": "Autopista Medellín, Km 8.5 Costado Sur",
      "line2": null,
      "postalCode": null,
      "headquarter": false,
      "description": "Siemens S.A.S.",
      "parsed": {
        "text": "Bogotá, Colombia",
        "countryCode": "CO",
        "regionCode": null,
        "country": "Colombia",
        "countryFull": "Colombia",
        "state": "Bogotá D.C.",
        "city": "Bogotá"
      }
    },
    {
      "country": "SG",
      "city": "Singapore",
      "geographicArea": null,
      "line1": "60 MacPherson Rd",
      "line2": null,
      "postalCode": "348615",
      "headquarter": false,
      "description": "Siemens Singapore",
      "parsed": {
        "text": "Singapore, Singapore",
        "countryCode": "SG",
        "regionCode": null,
        "country": "Singapore",
        "countryFull": "Singapore",
        "state": "Central Singapore Community Development Council",
        "city": "Singapore"
      }
    }
  ],
  "specialities": [
    "Electrification",
    "Automation",
    "Digitalization",
    "Innovation",
    "Technology",
    "Engineering",
    "Manufacturing",
    "Artificial Intelligence",
    "Internet of Things",
    "Cybersecurity",
    "Infrastructure",
    "Sustainability",
    "Digital Twin",
    "Metaverse",
    "Transport",
    "Smart Buildings"
  ],
  "industries": [
    {
      "id": "147",
      "name": "Industrial Automation",
      "urn": "urn:li:fsd_industry:147"
    }
  ],
  "logos": [
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D0BAQFK_4wGnzwPTQ/company-logo_400_400/company-logo_400_400/0/1719931174735/siemens_logo?e=1764806400&v=beta&t=FMihUaVRIYcj7weWoJWCaLiblaAUs4egiQi5vAM7TOU",
      "width": 400,
      "height": 400,
      "expiresAt": 1764806400000
    },
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D0BAQFK_4wGnzwPTQ/company-logo_200_200/company-logo_200_200/0/1719931174735/siemens_logo?e=1764806400&v=beta&t=ZG9flf_kpHC0xUpkClTRVflJRWXQsz3sHXFGK5KnooQ",
      "width": 200,
      "height": 200,
      "expiresAt": 1764806400000
    },
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D0BAQFK_4wGnzwPTQ/company-logo_100_100/company-logo_100_100/0/1719931174735/siemens_logo?e=1764806400&v=beta&t=saf5fy2cmkNCN1YDCbCzqGX7v3lPwJ_wB2AyNdXaov4",
      "width": 100,
      "height": 100,
      "expiresAt": 1764806400000
    }
  ],
  "backgroundCover": "https://media.licdn.com/dms/image/v2/D4D1BAQGJIJeHNZEpzQ/company-background_10000/B4DZfFv9QcGUAY-/0/1751369373172/siemens_cover?e=1763560800&v=beta&t=yzlncMynq760nMnqtk1FA0rQIFaOjtvFDrh-CJUC978",
  "backgroundCovers": [
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D1BAQGJIJeHNZEpzQ/company-background_10000/B4DZfFv9QcGUAY-/0/1751369373172/siemens_cover?e=1763560800&v=beta&t=yzlncMynq760nMnqtk1FA0rQIFaOjtvFDrh-CJUC978",
      "width": 1128,
      "height": 191,
      "expiresAt": 1763560800000
    },
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D1BAQGJIJeHNZEpzQ/company-background_400/B4DZfFv9QcGUAc-/0/1751369373172/siemens_cover?e=1763560800&v=beta&t=n5ZoSEHueu8S3TMhFl4uEAcPfpqNYUN-odJofUb_Myc",
      "width": 400,
      "height": 67,
      "expiresAt": 1763560800000
    },
    {
      "url": "https://media.licdn.com/dms/image/v2/D4D1BAQGJIJeHNZEpzQ/company-background_200/B4DZfFv9QcGUAg-/0/1751369373172/siemens_cover?e=1763560800&v=beta&t=eIIZZq6fVxNEEL32UqC1aHrkij1_0fs5KeJ1acOzmqs",
      "width": 200,
      "height": 33,
      "expiresAt": 1763560800000
    }
  ],
  "active": true,
  "jobSearchUrl": "https://www.linkedin.com/jobs/search?geoId=92000000&f_C=1043%2C367181%2C79992924%2C157241",
  "fundingData": null,
  "pageVerified": true,
  "announcement": null,
  "pageType": "COMPANY",
  "autoGenerated": false,
  "callToActionUrl": "http://www.siemens.com",
  "similarOrganizations": [
    {
      "id": "28423178",
      "universalName": "siemenssoftware",
      "linkedinUrl": "https://www.linkedin.com/company/siemenssoftware/",
      "name": "Siemens Digital Industries Software",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQFTiUh1DUJ3fA/company-logo_400_400/company-logo_400_400/0/1719793387652/siemenssoftware_logo?e=1764806400&v=beta&t=Qy5iBiLtEWezZukoZJ0euG1oDVyhDXQSfH4Fa6PXEnA",
      "employeeCountRange": {
        "start": 5001,
        "end": 10000
      },
      "followerCount": 881428,
      "description": "We help organizations of all sizes digitally transform using software, hardware and services from the Siemens Xcelerator business platform. Our software and the comprehensive digital twin enable companies to optimize their design, engineering and manufacturing processes to turn today's ideas into the sustainable products of the future. From chips to entire systems, from product to process, across all industries. We help transform the everyday as part of @Siemens, To learn more, visit http://sw.siemens.com.",
      "industries": [
        {
          "id": "4",
          "name": "Computer Software",
          "urn": "urn:li:fsd_industry:4"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D561BAQHbPUZUPtMLNQ/company-background_10000/B56Zh6QOBbHcAY-/0/1754397729427/siemenssoftware_cover?e=1763560800&v=beta&t=QCu8jorr8r0LrWkVX6MtFDW-d8LLXk4Yy2v-qxUyqEk",
      "callToActionUrl": null
    },
    {
      "id": "18049058",
      "universalName": "siemens-mobility",
      "linkedinUrl": "https://www.linkedin.com/showcase/siemens-mobility/",
      "name": "Siemens Mobility",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFFIvp97dZTuw/company-logo_400_400/company-logo_400_400/0/1719779654010/siemens_mobility_logo?e=1764806400&v=beta&t=t6xAbIpxDyv4kXo5fycmUy5-rZFADUeiPyFOOITrIE4",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 287080,
      "description": "Siemens Mobility, part of Siemens AG, provides rail traffic technology that helps transform the everyday for everyone. \n\nOur solutions enable customers and partners worldwide to shape the future of mobility for people, economies, and societies.\n\nWe combine the real and the digital worlds like no other in rail ​to provide the very best in passenger and freight transportation. ​\n\nOur holistic approach integrates physical rail assets, digitalization, and automation. \n\nOur aim is to enable transport operators worldwide to implement mobility solutions with a positive and long-lasting impact for their customers and the environment. Working in an open ecosystem, we bring together rolling stock, rail infrastructure, services, and software for sustainable, cost effective, and comfortable rail travel.",
      "industries": [
        {
          "id": "92",
          "name": "Transportation/Trucking/Railroad",
          "urn": "urn:li:fsd_industry:92"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4D1BAQGOREHmu2lgrg/company-background_10000/B4DZpyS8bHH4AY-/0/1762854161071/siemens_mobility_cover?e=1763560800&v=beta&t=T7q457wPG7yo7LoahiSn92U2W_P8yIMT0T15CNT1cRc",
      "callToActionUrl": null
    },
    {
      "id": "17953523",
      "universalName": "siemensinfrastructure",
      "linkedinUrl": "https://www.linkedin.com/showcase/siemensinfrastructure/",
      "name": "Siemens Infrastructure",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQGk-y_xp6-r7w/company-logo_400_400/company-logo_400_400/0/1688367342595/siemensinfrastructure_logo?e=1764806400&v=beta&t=kGFsI9zkmEmnuWcN3goKYEiV-nbfkwcAMlv1ttek0k4",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 317736,
      "description": "Siemens Smart Infrastructure combines the real and digital worlds across energy systems, buildings and industries, enhancing the way people live and work and significantly improving efficiency and sustainability. We work together with customers and partners to create an ecosystem that both intuitively responds to the needs of people and helps customers achieve their business goals. It helps our customers to thrive, communities to progress and supports sustainable development to protect our planet for the next generation.\n\nSmart infrastructure is sustainable infrastructure\nAs the global population grows, humanity is putting increased pressure on the planet, changing the climate, depleting resources and polluting the environment.\n\nSmart Infrastructure is the ideal partner for customers on their sustainability and digitalization journey. Our portfolio addresses the complete value chain across buildings and electrification, both increasingly growing together at the grid edge. Our smart building and electrification products, systems, solutions and services improve energy and resource efficiency, facilitate the transition towards renewables and decentralized power generation, while ensuring resilient and reliable power supply.",
      "industries": [
        {
          "id": "59",
          "name": "Utilities",
          "urn": "urn:li:fsd_industry:59"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4D1BAQEEhilUR2I6zA/company-background_10000/B4DZm4p9tcGgAU-/0/1759739633407/siemensinfrastructure_cover?e=1763560800&v=beta&t=h_kyX5zrFUtZ_xHCZ2W4WgyX98ZFtjLc9ZtoaAa7mxs",
      "callToActionUrl": null
    },
    {
      "id": "73873291",
      "universalName": "mercedes-benz-deutschland",
      "linkedinUrl": "https://www.linkedin.com/company/mercedes-benz-deutschland/",
      "name": "Mercedes-Benz Deutschland ",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFdhOkgPfAY_Q/company-logo_400_400/B4DZWPvGpeGcAg-/0/1741873245226/mercedes_benz_deutschland_logo?e=1764806400&v=beta&t=KcPZHijnyuG2hplHH0tvp0uOSJs8Fn0D6lREaxFivOQ",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 190363,
      "description": "Der Mercedes-Benz Vertrieb Deutschland der Mercedes-Benz AG (MBVD Mercedes-Benz AG) steuert von seiner Zentrale in Berlin den Vertrieb und Service der Marken Mercedes-Benz und smart in Deutschland. Mit rund 1.000 Mercedes-Benz und smart Vertriebs- und Servicestützpunkten bietet der MBVD Mercedes-Benz AG seinen Kund*innen die bestmögliche Betreuung.\n\nSie haben Fragen oder möchten mehr erfahren?\nSchicken Sie uns eine E-Mail an: cs.deu@cac.mercedes-benz.com\n\nAnbieter:\n\nMercedes-Benz AG\nMercedesstraße 120\nD-70372 Stuttgart\nDeutschland\n\nTel.: +49 7 11 17-0\nE-Mail: dialog.mb@mercedes-benz.com\n\nDatenschutzhinweise:\nhttps://www.mercedes-benz.de/passengercars/content-pool/tool-pages/legal/privacy-statement.html\nSocial Media: https://mb4.me/privacy-statement-de\n\nVertreten durch den Vorstand:\nOla Källenius (Vorsitzender), Jörg Burzer, Renata Jungo Brüngger, Sabine Kohleisen, Harald Wilhelm, Markus Schäfer, Britta Seeger\nVorsitzender des Aufsichtsrats: Martin Brudermüller\n\nHandelsregister beim Amtsgericht Stuttgart, Nr. HRB 762873\nUmsatzsteueridentifikationsnummer: DE321281763",
      "industries": [
        {
          "id": "53",
          "name": "Automotive",
          "urn": "urn:li:fsd_industry:53"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4D1BAQHzLuC5IH-U_w/company-background_10000/B4DZk0PFRbJgAU-/0/1757517996538/mercedes_benz_deutschland_cover?e=1763560800&v=beta&t=m2flqWe-6QlQb4xbYio51Ax63jkFqau0gm7Y37RjRs8",
      "callToActionUrl": null
    },
    {
      "id": "213520",
      "universalName": "siemens-industry-",
      "linkedinUrl": "https://www.linkedin.com/showcase/siemens-industry-/",
      "name": "Siemens Industry",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQFJ8VQzhFYw5Q/company-logo_400_400/company-logo_400_400/0/1719990359268/siemens_industry__logo?e=1764806400&v=beta&t=kAFEmPOOC_CW_DRbYnGIiGJWNGto4sChaFJ1diSH9wc",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 825733,
      "description": "Siemens is the world’s leading supplier of innovative and environmentally friendly products, solutions and services for industrial customers. http://sie.ag/imprint ",
      "industries": [
        {
          "id": "147",
          "name": "Industrial Automation",
          "urn": "urn:li:fsd_industry:147"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4D1BAQFjHInnpxEaqw/company-background_10000/B4DZfFOT27GkAY-/0/1751360552874/siemens_industry__cover?e=1763560800&v=beta&t=ZyhqiyiU2S-fhJtDCZdNI9WGF6-JkCHVm0bjJ-mVS-Y",
      "callToActionUrl": null
    },
    {
      "id": "157241",
      "universalName": "siemens-healthineers",
      "linkedinUrl": "https://www.linkedin.com/company/siemens-healthineers/",
      "name": "Siemens Healthineers",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/C4D0BAQE5hmEcQGYmLg/company-logo_400_400/company-logo_400_400/0/1635709402063/siemens_healthineers_logo?e=1764806400&v=beta&t=-ZbGQdhbMDLiG2E1Gd2ITu2k3nu8toi4jMmBMWmaucM",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 1579111,
      "description": "Siemens Healthineers is a leading medtech company with over 125 years of experience. We pioneer breakthroughs in healthcare. For everyone. Everywhere. Sustainably. Our portfolio, spanning in vitro and in vivo diagnostics to image-guided therapy and cancer care, is crucial for clinical decision-making and treatment pathways. \n\nWith our strengths in patient twinning, precision therapy, as well as digital, data, and artificial intelligence (AI), we are well positioned to take on the greatest challenges in healthcare. We will continue to build on these strengths to help overcome the world’s most threatening diseases, enable efficient operations, and expand access to care. \n\nWe are a team of more than 71,000 Healthineers in over 70 countries passionately pushing the boundaries of what is possible in healthcare to help improve the lives of people around the world. ",
      "industries": [
        {
          "id": "14",
          "name": "Hospital & Health Care",
          "urn": "urn:li:fsd_industry:14"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4E1BAQE08Ds8QmePkA/company-background_10000/company-background_10000/0/1688392310340/siemens_healthineers_cover?e=1763560800&v=beta&t=q67zcOSewSNv-r9B7mNanedL6ZgM5hafHEJ1jqDBgIw",
      "callToActionUrl": null
    },
    {
      "id": "607957",
      "universalName": "siemens-energy",
      "linkedinUrl": "https://www.linkedin.com/company/siemens-energy/",
      "name": "Siemens Energy",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQHJrmcq29R6nA/company-logo_400_400/B4EZfEvuGOGwAY-/0/1751352533824/siemens_energy_logo?e=1764806400&v=beta&t=oXK41w_ucH93KvJxuYZFpK1r9oj77erl35pzm1OzQNs",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 2562714,
      "description": "Siemens Energy is one of the world’s leading energy technology companies. The company works with its customers and partners on energy systems for the future, thus supporting the transition to a more sustainable world. With its portfolio of products, solutions and services, Siemens Energy covers almost the entire energy value chain – from power generation and transmission to storage. The portfolio includes conventional and renewable energy technology, such as gas and steam turbines, hybrid power plants operated with hydrogen, and power generators and transformers. A majority stake in the wind power subsidiary Siemens Gamesa Renewable Energy (SGRE) makes Siemens Energy a global market leader for renewable energies. An estimated one-sixth of the electricity generated worldwide is based on technologies from Siemens Energy. Siemens Energy employs 100,000 people worldwide in more than 90 countries and generated revenue of around €34.5 billion in fiscal year 2024. \n\nSiemens Energy is a trademark licensed by Siemens AG",
      "industries": [
        {
          "id": "144",
          "name": "Renewables & Environment",
          "urn": "urn:li:fsd_industry:144"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/C4D1BAQHXKwj-vquGDA/company-background_10000/company-background_10000/0/1636365271082/siemens_energy_cover?e=1763560800&v=beta&t=QmtI6_7QYvhxbyIriKlG6SgjcJQvRkJKG_6j5OCs_8U",
      "callToActionUrl": null
    },
    {
      "id": "40874143",
      "universalName": "bsibund",
      "linkedinUrl": "https://www.linkedin.com/company/bsibund/",
      "name": "Federal Office for Information Security (BSI)",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQHpYpasKBdFQQ/company-logo_400_400/company-logo_400_400/0/1676388414735/bsibund_logo?e=1764806400&v=beta&t=30LOB4YLzsouDfdCPWncPCoi0e_L8Q2mOfeyhljYs9U",
      "employeeCountRange": {
        "start": 1001,
        "end": 5000
      },
      "followerCount": 260214,
      "description": "The BSI as the Federal Cyber Security Authority shapes information security in digitization through prevention, detection and reaction to government, business and society.",
      "industries": [
        {
          "id": "75",
          "name": "Government Administration",
          "urn": "urn:li:fsd_industry:75"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4E1BAQEqwT6waVNyHA/company-background_10000/company-background_10000/0/1716362631856/bsibund_cover?e=1763560800&v=beta&t=_GtE-GYcyRwFwkHnoGuQ8hc44RrqWYMDJQVh2nBh5jY",
      "callToActionUrl": null
    },
    {
      "id": "5383634",
      "universalName": "mercedes-benz_ag",
      "linkedinUrl": "https://www.linkedin.com/company/mercedes-benz_ag/",
      "name": "Mercedes-Benz AG",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQHl_9JezRZLIQ/company-logo_400_400/B4EZidBMwAGUAY-/0/1754980994787/mercedes_benz_ag_logo?e=1764806400&v=beta&t=dAOWnCia_9DWyT-YPMe3j5dhYDCQpux0xYjO42Oq9cA",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 2246989,
      "description": "\"Love of invention will never end.\" - Carl Benz\n\nLearn more about us as we continue to pioneer the future of driving excellence. \n\nData privacy: mb4.me/provider_privacy\n\nMercedes-Benz AG\nMercedesstraße 120\n70372 Stuttgart\nGermany\n\nPhone: +49 7 11 17-0\nE-Mail: dialog@mercedes-benz.com\n\nFor inquiries regarding the content on this website, please contact any of the provided contacts. You may address your concerns in English or your respective native language.\n\nRepresented by the Board of Management:\n\nOla Källenius, Chairman; Jörg Burzer, Mathias Geisen, Renata Jungo Brüngger, Markus Schäfer, Britta Seeger, Oliver Thöne, Harald Wilhelm\n\nChairman of the Supervisory Board: Martin Brudermüller\n\nCourt of Registry: Stuttgart; commercial register no. 76 2873\n\nVAT ID: DE321281763",
      "industries": [
        {
          "id": "53",
          "name": "Automotive",
          "urn": "urn:li:fsd_industry:53"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4E1BAQE7aoJ9PbfJzQ/company-background_10000/B4EZklcjSUGUAU-/0/1757269866170/mercedes_benz_ag_cover?e=1763560800&v=beta&t=iBdWlUn-UkxPbzRIXMEc1oMYndVkcx7MfXuZaHAVPlw",
      "callToActionUrl": null
    },
    {
      "id": "2508619",
      "universalName": "bosch",
      "linkedinUrl": "https://www.linkedin.com/company/bosch/",
      "name": "Bosch",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQFZSc1rOABvMw/company-logo_400_400/company-logo_400_400/0/1722849161753/bosch_logo?e=1764806400&v=beta&t=3vIbodgx7I6pDF8-mxgnbVMR827JYTlMYGQeJHtjQWA",
      "employeeCountRange": {
        "start": 10001,
        "end": null
      },
      "followerCount": 1581187,
      "description": "The Bosch Group is a leading global supplier of technology and services. It employs roughly 417,900 associates worldwide (as of December 31, 2024). According to preliminary figures, the company generated sales of 90.5 billion euros in 2024. Its operations are divided into four business sectors: Mobility, Industrial Technology, Consumer Goods, and Energy and Building Technology. With its business activities, the company aims to use technology to help shape universal trends such as automation, electrification, digitalization, connectivity, and an orientation to sustainability. In this context, Bosch’s broad diversification across regions and industries strengthens its innovativeness and robustness. Bosch uses its proven expertise in sensor technology, software, and services to offer customers cross-domain solutions from a single source. It also applies its expertise in connectivity and artificial intelligence in order to develop and manufacture user-friendly, sustainable products. With technology that is “Invented for life,” Bosch wants to help improve quality of life and conserve natural resources. The Bosch Group comprises Robert Bosch GmbH and its roughly 470 subsidiary and regional companies in over 60 countries. Including sales and service partners, Bosch’s global manufacturing, engineering, and sales network covers nearly every country in the world. Bosch’s innovative strength is key to the company’s further development. At 136 locations across the globe, Bosch employs some 86,900 associates in research and development, of which nearly 48,000 are software engineers.\n\nInstagram: https://www.instagram.com/boschglobal/\nFacebook: https://www.facebook.com/BoschGlobal\nGlassdoor: https://bit.ly/3raTZnH \n\nImprint: www.bosch.com/corporate-information\nPrivacy statement: https://www.bosch.com/data-protection-notice-bosch-linkedin/",
      "industries": [
        {
          "id": "4",
          "name": "Computer Software",
          "urn": "urn:li:fsd_industry:4"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/D4E1BAQE7fd29YHGgjw/company-background_10000/B4EZjgCTsSIIAU-/0/1756105358901/bosch_cover?e=1763560800&v=beta&t=wQAVIbQmOsPoeRMAJvUSBpE45n3Ot5wPFVvzUDCqOp4",
      "callToActionUrl": null
    },
    {
      "id": "12625069",
      "universalName": "manturkiye",
      "linkedinUrl": "https://www.linkedin.com/company/manturkiye/",
      "name": "MAN Türkiye A.Ş.",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQEFPtG74ergbA/company-logo_400_400/B4DZpenU2DIAAY-/0/1762523959067/manturkiye_logo?e=1764806400&v=beta&t=YeTkO61a-xnpWdWM5ceqF8Vxggmf9b7Od-F0aXJ-qfk",
      "employeeCountRange": {
        "start": 1001,
        "end": 5000
      },
      "followerCount": 114510,
      "description": "1966 yılında MAN Truck & Bus, tarihinde bir ilke imza attı ve Almanya dışındaki ilk üretim tesisini Türkiye’de kurdu. 2002 yılında ise MAN Türkiye A.Ş. olarak Firma ismi tescillendi. \n MAN Türkiye, Başkent Ankara’nın Akyurt İlçesi’nde 317.000 metrekareye yayılan dev üretim merkezinde MAN ve NEOPLAN markaları için şehir içi, seyahat ve orta mesafe otobüsler geliştirilmekte ve üretmektedir.",
      "industries": [
        {
          "id": "53",
          "name": "Automotive",
          "urn": "urn:li:fsd_industry:53"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/C4D1BAQHqSkJBwfVpmA/company-background_10000/company-background_10000/0/1623229373342/manturkiye_cover?e=1763560800&v=beta&t=ZYPZ2phm5l6R1nPqUJ_RyqIu2_2Tu6WjAE045igUHW8",
      "callToActionUrl": null
    },
    {
      "id": "3040074",
      "universalName": "handelsblatt",
      "linkedinUrl": "https://www.linkedin.com/company/handelsblatt/",
      "name": "Handelsblatt",
      "website": null,
      "logo": "https://media.licdn.com/dms/image/v2/C4D0BAQE01vYqPJaEvQ/company-logo_400_400/company-logo_400_400/0/1630524790571/handelsblatt_logo?e=1764806400&v=beta&t=NFSpiwKgjhojG9tGU6C9rEp67uATSkc5iq_Hq9jrlYY",
      "employeeCountRange": {
        "start": 51,
        "end": 200
      },
      "followerCount": 772608,
      "description": "Das Handelsblatt ist die größte Wirtschafts- und Finanzzeitung in deutscher Sprache. Rund 200 Redakteure und Korrespondenten weltweit stehen für einen fundierten und unabhängigen Qualitätsjournalismus, der zu nationalen und globalen Themen und Anlässen exklusiv und aktuell recherchiert und analysiert. Mit rund 40 Korrespondenten im Ausland ist das Handelsblatt in allen Wirtschaftszentren der Welt vor Ort.",
      "industries": [
        {
          "id": "81",
          "name": "Newspapers",
          "urn": "urn:li:fsd_industry:81"
        }
      ],
      "backgroundCover": "https://media.licdn.com/dms/image/v2/C4D1BAQHuL7vjC2inCw/company-background_10000/company-background_10000/0/1583545822653/handelsblatt_cover?e=1763560800&v=beta&t=ZB9fds7_PwmymuNrt-We2fYrlaWayUaB80H3m-ovj2g",
      "callToActionUrl": null
    }
  ]
}
```

### Support and Feedback

We continuously enhance our tools based on user feedback. If you encounter technical issues or have suggestions for improvement:

- Create an issue on the actor’s Issues tab in Apify Console
- Or contact us at contact@harvest-api.com
