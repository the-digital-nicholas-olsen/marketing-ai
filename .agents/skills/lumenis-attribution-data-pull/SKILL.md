---
name: lumenis-attribution-data-pull
description: Pull the week's Salesforce, ON24, HubSpot (ads, ad contacts and contacts), Smartsheet rep-approval and OneTap data into a dated inbox for the marketing attribution refresh - read-only queries, every row, JSON and CSV, a pull log with row-count checks. Use before lumenis-attribution-refresh, or when asked to "pull the attribution data", "export this week's Salesforce data" or prepare the weekly inbox.
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
3. **Check the pull.**
   - Every source is present and from the same date.
   - Salesforce row counts match each query's `COUNT()`.
   - Won deals in the reporting window are within about 5% of last week's.
   - Every ON24 file's registrant and attendee counts match ON24's own totals.
   - **Every campaign with members this year has a home** (see "Campaign coverage" below).
   - Report anything missing or partial; never fill a gap by guessing.
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
| `contacts` | `SELECT Id, FirstName, LastName, Email, AccountId, Account.Name, Account.BillingState, MailingState, MailingCountry, LeadSource, CreatedDate, <UTM fields> FROM Contact WHERE Email != null AND AccountId != null`. `LeadSource` and `CreatedDate` matter: the paid, organic and vendor channels start from leads **and contacts** with a given Lead Source created this year. Add Contact UTM fields the same way as for leads. |
| `opportunity_contact_roles` | `SELECT OpportunityId, ContactId, Contact.Email, Contact.AccountId, Role, IsPrimary FROM OpportunityContactRole WHERE Opportunity.RecordType.Name IN (...) AND (Opportunity.CreatedDate >= 2025-01-01T00:00:00Z OR Opportunity.CloseDate >= 2025-01-01)` |
| `leads` | `SELECT Id, FirstName, LastName, Email, Company, State, Country, LeadSource, Status, CreatedDate, IsConverted, ConvertedDate, ConvertedContactId, ConvertedAccountId, ConvertedOpportunityId, RecordType.Name, Owner.Name, <UTM fields> FROM Lead WHERE Email != null`. `RecordType.Name` gives the lead's division and identifies service leads, which are excluded. Every lead with an email, of any age, so that older leads who attend now still match an account. Describe Lead first and add every field whose name or label contains "UTM"; list them in `PULL_LOG.md`. Later forms and imports can overwrite these, so the refresh checks paid leads against HubSpot and the ad platforms as well. |
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

Export every registrant and attendee of **every** ON24 event this year, not only the ones already in the map. New webinars are exactly the ones that go missing otherwise.

1. **Sign in.** Work in the requester's signed-in browser session (see the [ON24 skill](../lumenis-on24/SKILL.md)). If ON24 asks for a password, stop and ask the requester to sign in; never enter one.
2. **List the events.** The analytics app's webinar list (`analytics.on24.com/eliteservice/webcast/api/v1/webcastinfo`, date range from January 1) gives each event ID, title, live date and report key. Skip test copies and events titled "DELETE".
3. **Export each event's audience.** Open `wcc.on24.com/webcast/report?e=<event ID>&k=<report key>` and the audience report (`rdReport=audience.webcast`). Use its export, or read every page (20 rows each) until the last.
   - Columns needed: email, name, practice, title, city, state, country, registration time, attendance (Live, On Demand, Live & OD, or `-` for registered only), minutes viewed, registration source and UTMs.
   - Save as `<ON24 event ID>_<short title>.csv`.
4. **Check the counts.** Each file's registrant and attendee counts must match the event's own totals in ON24. List both per event in `PULL_LOG.md`. A mismatch means the export stopped early: export again.
5. **Map every event.** Each event ID needs a row in `weekly-agent/webinar_bu_map.csv`: event ID, title, division, live date, Salesforce campaign ID and, when known, cost.
   - **For a new webinar,** find its campaign in this pull's `campaigns` by name and date. For example, "Seeing Eye to Eye" (Amberg & Greenbaum, live 10/22) is `VIS-US-Seeing Eye to Eye ft. Amberg and Greenbaum-Q4 2026`.
   - Ask the requester to confirm the division and campaign when they aren't certain, and the cost when it's unknown. **Never guess a division, and never leave the campaign ID blank:** the refresh leaves out a webinar without one.

**Webinars not in ON24** (sponsored sessions such as Lappin "Eyes on Dry Eye", and the Woo U series) are counted from their Salesforce campaign members and the HubSpot lists named for them. Ask the requester for the host's attendee list when there is one.

## HubSpot ads → `hubspot/`

- **Where:** Ads › Manage, "This year", all statuses.
- **Files:**
  - `ads_campaigns.csv`: Meta and Google campaigns with spend, impressions, clicks, contacts, deals and revenue.
  - `ads_deals.csv`: ad-attributed deals by campaign.
  - `ads_contacts.csv`: the contacts HubSpot attributes to each ad campaign, with campaign, ad account, network and the contact's email and Salesforce IDs. This is the ad-platform record the refresh uses to verify paid leads.
  - `ads_totals.json`: the totals.
- **Check coverage:** compare spend per ad account with the AOP's paid-media spend. Ad accounts not connected to HubSpot are missing here (currently Folix, Noetic and the Vision Meta account). Ask the requester for their spend and lead-form exports from the ad platform or the agency, save them as `hubspot/external_<network>_<account>.csv`, and list any you couldn't get in the pull log.

## HubSpot contacts → `hubspot/contacts.csv`

Required every week. Export all US contacts, or at least everyone on this year's event and webinar lists and everyone created by an ad.

Include these fields:
- email, name, company and state;
- the Salesforce IDs (`salesforceaccountid`, `salesforcecontactid`, `salesforceleadid`). They are often the only link from an attendee to the Salesforce account that holds the deal; without them such deals drop out.
- the source fields used to verify paid leads: `hs_analytics_source` and `hs_analytics_source_data_1`/`_2` (Original Source), `original_utm_source`, `original_utm_medium` and `original_utm_campaign`, `hs_analytics_first_touch_converting_campaign`, `hs_google_click_id`, `hs_facebook_click_id`, `hs_latest_source`, `utm_source`, `utm_medium` and `utm_campaign`.

HubSpot sets Original Source once, but the plain UTM fields and Latest Source change with later visits. Keep both sets: the refresh compares them to spot overwritten values.

## HubSpot event lists → `hubspot/lists/`

The October analysis also counted attendance from HubSpot event lists: attendees, registered/KBYG, booth scans, treatments, dinners and OneTap check-ins. Each event's lists are named in `AOP-2027-Basis/events/scripts/events_config.py` (`hs_att`, `hs_reg`), and the manual webinar lists are named in the webinar configuration.

- Export each list's members to `hubspot/lists/<list ID>_<short name>.csv`, with email, name, company, state, the Salesforce IDs and the date added.
- The HubSpot CLI has no list access, so export in the requester's browser session (Contacts › Segments › the list › Export).
- A new event's lists must be added to the event configuration first (see "Campaign coverage").

## Campaign coverage

List every campaign with members this year from `campaigns` and `campaign_members`, and give each one a home in `PULL_LOG.md`:
- a webinar in `webinar_bu_map.csv`;
- an Accelerate or tradeshow in `events_config.py`;
- a paid-media campaign (for example `AES - COR - triLift 2.0 - meta paid ads`, which has no Type);
- or **not marketing-attributed**, with the reason: SDR or renewal outreach, info-request lists, non-US campaigns.

Anything without a home stops the run until the requester places it. A new in-person event (for example Accelerate Scottsdale Q4, or the Aesthetics "Unveiled" regional shows) needs its date, division, cost, Salesforce campaign IDs and HubSpot lists added to the event configuration before the refresh can credit anyone from it.

## Smartsheet → `smartsheet/`

- **Source:** the connector. The rep approval sheets for each completed Accelerate in the current year's Accelerate workspace. Ignore same-named copies in older workspaces.
- **What to save:**
  - `accelerate_sheets.json`: sheet IDs and attended counts by division.
  - `rep_sheet_attendees.txt`: one line per practice for rows marked attended, `event key|division|emails (;-separated)|practice|Salesforce Id`. The Id is the 006 opportunity, 001 account or 003 contact taken from the "Opportunity Link from Salesforce" column. Use `-` when there is none, or `N:<name>` when the rep typed an opportunity name.
  - Merge repeat rows for the same practice. Leave out @lumenis.com addresses.
- **"Attended" is free text** (Yes, yes, No, blank). Compare case-insensitively.
- **Personal data:** these sheets also hold travel and ID details. Use counts or the specific attendee and account columns only.

## OneTap → `onetap/`

After an in-person event, save its check-in list (or confirm that the check-ins are in the event's HubSpot attendee list, which is exported above). In-person events count attendees only, so without check-ins nobody from that event can be credited. The longer-term plan is to store check-ins as a sheet in each event's Smartsheet folder, so the connector can read them.

## Report

The inbox path, row counts per dataset against `COUNT()`, fields dropped, sources missing or partial, and whether `READY.txt` was added.
