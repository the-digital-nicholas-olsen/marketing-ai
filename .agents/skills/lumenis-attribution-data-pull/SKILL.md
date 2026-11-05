---
name: lumenis-attribution-data-pull
description: Pull the week's Salesforce, ON24, HubSpot (ads and contacts), Smartsheet rep-approval and OneTap data into a dated inbox for the marketing attribution refresh - read-only queries, every row, JSON and CSV, a pull log with row-count checks. Use before lumenis-attribution-refresh, or when asked to "pull the attribution data", "export this week's Salesforce data" or prepare the weekly inbox.
---

# Marketing attribution data pull

Owner: marketing operations.
Status: draft procedure, 2026-11-05; subject-owner review required (data requirements: Nicholas).

This skill fills `inbox/<YYYY-MM-DD>/` in the private **Campaign-Attribution-Engine** work folder (Vision marketing SharePoint site) with this week's data. The [attribution refresh skill](../lumenis-attribution-refresh/SKILL.md) then re-runs the attribution from it. Pulled data never goes into this repository.

## Safety

- **Read-only.** Never create, edit or delete anything in Salesforce, HubSpot, ON24, Smartsheet or OneTap.
- **Personal data stays in the inbox.** Names, emails and phone numbers never go into a dashboard, note, issue or this repository.
- **Smartsheet event sheets also hold travel and ID details.** Read counts or the specific columns named below, never whole rows.

## Procedure

1. **Open the inbox.** Copy `inbox/_TEMPLATE` to `inbox/<YYYY-MM-DD>/` (normally Monday). Folders: `salesforce/`, `on24/`, `hubspot/`, `smartsheet/`, `onetap/`.
2. **Pull each source** as set out below. If someone runs the Salesforce queries for you (for example Copilot), give them `inbox/_TEMPLATE/SALESFORCE_PULL_PROMPT.md` with the date filled in.
3. **Check the pull.** Every source is present and from the same date. Salesforce row counts match each query's `COUNT()`. Won deals in the reporting window are within about 5% of last week's. Report anything missing or partial; never fill a gap by guessing.
4. **Mark it ready.** Add an empty `READY.txt` only when every source is in. The refresh does not start without it.

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
- **How:** the [ON24 skill](../lumenis-on24/SKILL.md) covers the platform. In the analytics app, the webinar list gives each event ID and report key, and the event's audience report lists the registrants.

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
- **What to save:**
  - `accelerate_sheets.json`: sheet IDs and attended counts by division.
  - `rep_sheet_attendees.txt`: one line per practice for rows marked attended, `event key|division|emails (;-separated)|practice|Salesforce Id`. The Id is the 006 opportunity, 001 account or 003 contact taken from the "Opportunity Link from Salesforce" column. Use `-` when there is none, or `N:<name>` when the rep typed an opportunity name.
  - Merge repeat rows for the same practice. Leave out @lumenis.com addresses.
- **"Attended" is free text** (Yes, yes, No, blank). Compare case-insensitively.
- **Personal data:** these sheets also hold travel and ID details. Use counts or the specific attendee and account columns only.

## OneTap → `onetap/`

After an in-person event, save its check-in list. In-person events count attendees only, so without check-ins nobody from that event can be credited. The longer-term plan is to store check-ins as a sheet in each event's Smartsheet folder, so the connector can read them.

## Report

The inbox path, row counts per dataset against `COUNT()`, fields dropped, sources missing or partial, and whether `READY.txt` was added.
