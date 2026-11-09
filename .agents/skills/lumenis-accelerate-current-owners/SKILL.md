---
name: lumenis-accelerate-current-owners
description: Build the "<City> - Existing Customers Attending" Smartsheet for an Accelerate - every registered attendee whose practice already owns a Lumenis device, with devices owned, the rep, where the evidence is and a Salesforce check - so Jeff Thompson's service team can prepare before the show. Use for sprint step S2 (about T-16), or whenever someone asks which current customers or owners are coming to an Accelerate. Reads the show's Smartsheet sheets and Salesforce; writes one new sheet.
---

# Accelerate current owners list

Owner: EJ (marketing operations). Recipient: Jeff Thompson and the service team.
Status: draft procedure, written 2026-11-09 from two completed runs (Q3 Nashville, Q4 Scottsdale). Review required.

Service wants to know which current owners are coming so they can check device history, open cases and training needs before the show. This skill finds them and puts them in one sheet in the show's Smartsheet folder. It is sprint step **S2** in the Accelerate template.

## Inputs

- **The show's Smartsheet folder** (`Qn City Accelerate` under the year's Accelerate workspace). Find it with Smartsheet search; ask only if two folders match.
- **Four sheets in that folder:** VIS Rep Approval, AES Rep Approval, the Flight registration sheet and the Non-Flight / Local registration sheet.
- **Salesforce**, read-only, through Claude in Chrome with the user already logged in. Never request or enter credentials. Use the REST query method in [pipeline sync](../lumenis-accelerate-pipeline-sync/references/salesforce-reading.md) or the browser session's REST API on the `my.salesforce.com` domain.
- Run [pipeline sync](../lumenis-accelerate-pipeline-sync/SKILL.md) (step S1) first when it hasn't run recently. Its `Duplicate` and stage values make this step faster, but they are not required.

**When an input is missing:** if a sheet can't be read, stop and say which. If Salesforce isn't reachable, build the list from Smartsheet evidence only, write "Salesforce not checked" in every Salesforce Check cell, and say so in the report.

## Procedure

### 1. Read every row

Read all four sheets in full and check each read is not sampled (rows returned = rows in sheet). Ask for only the columns you need on the approval sheets; the registration sheets can be read whole. Exclude test rows and summary rows. An approval row can hold two attendees: Attendee #2 is a person.

### 2. Find owners on the approval sheets

An account is a current owner when any of these says it already has a Lumenis device:

| Where | Signal |
|---|---|
| **Current Devices Owned** (AES sheet) | A Lumenis device. Ignore other brands (see below) and "N/A", "None" |
| **Potential Objections**, **Product of Interest** | "already bought", "just purchased", "has OptiLight", "owns both", "current customer" |
| **Notes** (pipeline review notes) | "Has an OptiLight", "existing customer", "one of our biggest users", "owns TriLift, Plus, Light" |
| **Opportunity Stage** | `Won` or `owner` on the row's linked opportunity |

Read the Notes column. Owners are often only mentioned there, and Vision accounts sometimes own Aesthetics devices (an oculoplastic practice with an old Stellar M22).

**Lumenis devices** include OptiLIGHT, OptiLIFT, OptiPLUS, triLift, FoLix, Stellar M22 (and XPL, ResurFX, Q-switched handpieces), Splendor X, UltraPulse (Alpha, Encore), AcuPulse, LightSheer, PiQo4, Legend Pro, Geneo, NuEra, Antares. Devices from other companies (BTL, Rohrer, Aerolase, InMode, MDElite and similar) do not make a practice a customer; list them in brackets only when the practice also owns a Lumenis device. If you aren't sure a product is Lumenis, flag it rather than including it.

### 3. Check Salesforce

For every account on the approval sheets, owners and prospects alike:

1. Get the account from the row's opportunity link (`Opportunity.AccountId`). For rows without a usable link, search the account by practice name; a practice can sit under a doctor's name or a "dba" name.
2. Query the account's **won opportunities** (`IsWon = true`): name and close date. In this org the Asset object is empty, so won deals are the ownership record. A won lease or financing deal also counts.
3. Record the result in Salesforce Check, for example `Won: OptiLight (Mar 2024)` or `No won deal on this account in Salesforce (rep notes only)`.

Salesforce adds owners the sheets miss: a prospect row whose account has an older won device deal is a current owner. Include it and say "Found through Salesforce only". Salesforce can also miss owners (account under another name, purchase through a leasing company): keep rep-stated owners on the list and mark them "Not confirmed".

### 4. Add people from the registration sheets

For each owner account, look on the Flight and Non-Flight sheets for:

- **More attendees** at that practice who aren't on an approval sheet (a spouse, an office manager). Add them and note "Not on an approval sheet".
- **Registrants with no approval row** at all whose practice is a Salesforce customer. Check these too: a customer can register without a rep row.
- **Better data:** an email missing from the approval sheet, the travel status (Flights Booked, Send to Travel Agent) and the legal name.

### 5. Decide who is attending

- **Leave off** anyone marked cancelled or "not attending" in Notes or on the flight sheet. List them in the report as owners who won't be there.
- **Keep, with a flag:** attendance TBD, RSM Approval = No, AES RSM confirmation blank, registered but not yet approved, flight not yet booked.
- **Duplicates:** one row per person. A shared email is not a duplicate (see [attendee lists](../lumenis-accelerate-attendee-lists/SKILL.md#duplicate-resolution)).

### 6. Write the sheet

Create **`<City> - Existing Customers Attending`** in the show's folder (one sheet per show; if it already exists, add only missing people and update flags, never a second sheet). Columns, in order:

| Column | Type | Content |
|---|---|---|
| Account Name | Text (primary) | Practice name as on the approval sheet; add the Salesforce or legal name in brackets when different |
| Division | Picklist: Vision, Aesthetics | From the approval sheet the person is on |
| Attendee Name | Text | |
| Attendee Email | Text | Note the source when it came from a registration sheet |
| Rep Name | Text | |
| Devices Owned (as listed in Smartsheet) | Text | Normalized product names; "(per Salesforce)" when only Salesforce shows it |
| Where Noted in Rep Approval Sheet | Text | Column name and a short quote of the evidence |
| Salesforce Link | Text | Opportunity URL, or account URL marked "(Account link, not an opportunity)" |
| Salesforce Check | Text | Won deals found, or why not confirmed |
| Status / Flags | Text | Travel status and anything the service team or owner should know |

Group rows by division, then account. Read the row count back after writing.

## Output

Report in chat: the sheet link; counts of accounts and attendees by division; owners found only through Salesforce; owners not confirmed in Salesforce; owners who won't be attending; and every flag that needs an owner's decision. Share the sheet with Jeff Thompson only when the user asks; an Excel export is available from Smartsheet if he prefers a file. Put the counts in the S2 row's Key Info.

## Boundaries

- Read-only in Salesforce and on the four source sheets. The only write is the new Existing Customers sheet.
- Never build the list from HubSpot.
- Attendee names, emails and practice details stay in Smartsheet. Never copy them into this repository, a public link or an issue.
