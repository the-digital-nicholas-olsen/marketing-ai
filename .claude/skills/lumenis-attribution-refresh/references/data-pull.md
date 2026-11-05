# Data pull for the attribution refresh

How to pull each source into `inbox/<YYYY-MM-DD>/` in the Campaign-Attribution-Engine work folder. Every pull is read-only. Files with people in them stay in that folder.

## Salesforce → `salesforce/`

Use a Salesforce connector with read-only queries, or have the requester run report exports with the same fields and filters. For every dataset, save:

- `<name>.json`: an array of records exactly as the API returns them, with nested relationships kept (for example `Account.Name`, `RecordType.Name`). Removing the `attributes` blocks is fine.
- `<name>.csv`: the same records flattened, UTF-8, dotted column names.

**Get every row.**
- Follow `nextRecordsUrl` until `done = true`. If a connector truncates large responses, page by `Id` instead: `... AND Id > '<last Id>' ORDER BY Id LIMIT n`.
- Check each dataset against `SELECT COUNT() FROM <object> WHERE <same filter>`.
- If a field doesn't exist, drop it and say so. Never skip a dataset silently.
- Don't convert any values. Amounts stay in their original currency, because the refresh script converts CAD.

| File | Query |
|---|---|
| `opportunities` (also saved as `all_us_opps_sf_<date>.json`) | `SELECT Id, Name, AccountId, Account.Name, Account.BillingState, Account.BillingCity, Account.Website, Amount, CurrencyIsoCode, StageName, IsClosed, IsWon, CreatedDate, CloseDate, Type, LeadSource, CampaignId, Campaign.Name, Owner.Name, RecordType.Name, Product__c FROM Opportunity WHERE RecordType.Name IN ('USA Ophthalmic Opportunity','USA Aesthetics Opportunity') AND (CreatedDate >= 2025-01-01T00:00:00Z OR CloseDate >= 2025-01-01)` |
| `accounts` | `SELECT Id, Name, ParentId, BillingState, BillingCity, BillingCountry, Website, RecordType.Name FROM Account WHERE BillingCountry IN ('United States','US','USA','U.S.','Canada','CA') OR BillingCountry = null` |
| `contacts` | `SELECT Id, FirstName, LastName, Email, AccountId, Account.Name, Account.BillingState, MailingState, MailingCountry FROM Contact WHERE Email != null AND AccountId != null` |
| `opportunity_contact_roles` | `SELECT OpportunityId, ContactId, Contact.Email, Contact.AccountId, Role, IsPrimary FROM OpportunityContactRole WHERE Opportunity.RecordType.Name IN (...) AND (Opportunity.CreatedDate >= 2025-01-01T00:00:00Z OR Opportunity.CloseDate >= 2025-01-01)` |
| `leads` | `SELECT Id, FirstName, LastName, Email, Company, State, Country, LeadSource, Status, CreatedDate, IsConverted, ConvertedContactId, ConvertedAccountId, ConvertedOpportunityId, Owner.Name, <UTM fields> FROM Lead WHERE Email != null`. Every lead with an email, of any age, so that older leads who attend now still match an account. Describe Lead first and add every field whose name or label contains "UTM"; list them in `PULL_LOG.md`. |
| `campaign_members` | `SELECT Id, CampaignId, Campaign.Name, Campaign.Type, Campaign.StartDate, Status, HasResponded, ContactId, LeadId, Email, CompanyOrAccount, CreatedDate FROM CampaignMember WHERE Campaign.StartDate >= 2025-01-01` |
| `campaigns` | `SELECT Id, Name, Type, Status, StartDate, EndDate, ParentId, Parent.Name, NumberOfContacts, NumberOfLeads, CreatedDate FROM Campaign WHERE StartDate >= <Jan 1 this year> OR CreatedDate >= <Jan 1 this year>`. Never filter by `Type`: some campaigns have none. |
| `campaign_influence` (optional) | `SELECT CampaignId, OpportunityId, ContactId, Influence, RevenueShare FROM CampaignInfluence WHERE <same opportunity filter>` |

**`PULL_LOG.md` must include:**
- the pull time and Salesforce user
- for each dataset: the exact query, row count against `COUNT()`, and any dropped fields
- won deals by record type for the AOP window
- opportunity counts by currency
- this year's campaigns with a blank `Type`

A currency other than USD or CAD has no rate in the table. The refresh leaves it unconverted and flags it.

## ON24 → `on24/`

- **What:** one audience report per 2026 webinar, both divisions, covering every registrant. It needs minutes viewed, attendance (Live, On Demand, Live & OD, or `-` for registered only), registration time, practice and state.
- **File name:** `<ON24 event ID>_<short title>.csv`.
- **Skip** test and deleted copies of events.
- **Business unit:** every event ID must be in `weekly-agent/webinar_bu_map.csv` with its Salesforce campaign ID. A webinar missing from the map, or missing its campaign ID, is left out and reported. It is never assigned a division by guess.
- **How:** the [ON24 skill](../../lumenis-on24/SKILL.md) covers the platform. In the analytics app, the webinar list gives each event ID and report key, and the event's audience report lists the registrants.

## HubSpot ads → `hubspot/`

- **Where:** Ads › Manage, "This year", all statuses.
- **Files:**
  - `ads_campaigns.csv`: Meta and Google campaigns with spend, impressions, clicks, contacts, deals and revenue.
  - `ads_deals.csv`: ad-attributed deals by campaign.
  - `ads_totals.json`: the totals.
- **Check coverage:** compare spend per ad account with the AOP's paid-media spend. Ad accounts not connected to HubSpot are missing here, and their spend has to come from the ad platform or the agency.

## HubSpot contacts → `hubspot/contacts.csv`

Required every week. Export all US contacts, or at least everyone on this year's event and webinar lists, with email, name, company, state and the Salesforce IDs (`salesforceaccountid`, `salesforcecontactid`, `salesforceleadid`). Those IDs are often the only link from an attendee to the Salesforce account that holds the deal; without them such deals drop out.

## Smartsheet → `smartsheet/`

- **Source:** the connector. The rep approval sheets for each completed Accelerate in the current year's Accelerate workspace. Ignore same-named copies in older workspaces.
- **What to save:** sheet IDs and attended counts by division in `accelerate_sheets.json`. The refresh reads rows live through the connector at run time.
- **"Attended" is free text** (Yes, yes, No, blank). Compare case-insensitively.
- **Personal data:** these sheets also hold travel and ID details. Use counts or the specific attendee and account columns only.

## OneTap → `onetap/`

After an in-person event, save its check-in list. In-person events count attendees only, so without check-ins nobody from that event can be credited. The longer-term plan is to store check-ins as a sheet in each event's Smartsheet folder, so the connector can read them.
