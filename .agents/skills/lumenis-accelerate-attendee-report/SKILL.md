---
name: lumenis-accelerate-attendee-report
description: Profile the practices registered for an Accelerate - devices they already own and products they're interested in, per division - for the sales VPs, marketing leadership and the session line-up. Use about two weeks before an Accelerate. Reads Smartsheet and Salesforce; writes a report, not records. The current-owners list for the service team is its own skill, lumenis-accelerate-current-owners.
---

# Accelerate attendee report

Owner: EJ (marketing operations).
Status: draft procedure, written 2026-10-29 from the Vision Accelerate planning session; not yet run. Review required.

Two weeks out, the team decides which sessions to run (for example a double DMST track versus the medical model session) from who is coming. Service also wants to know which current owners are coming so it can prepare; that list has its own skill, [lumenis-accelerate-current-owners](../lumenis-accelerate-current-owners/SKILL.md), and uses the same read.

## Inputs

- The VIS and AES Rep Approval sheets for the show (registered prospects and their Salesforce opportunity links, product of interest).
- Salesforce, read-only, through the logged-in browser session or connector the team uses for [pipeline sync](../lumenis-accelerate-pipeline-sync/SKILL.md). Never request credentials.

## Procedure

1. **Read** every registered row on both sheets (paginate). Skip rows marked Duplicate by pipeline sync.
2. **Owned devices:** for each account, take the devices owned from the sheet (Current Devices Owned, objections and notes) and the account's won opportunities in Salesforce. The Asset object is empty in this org, so won deals are the ownership record. Use the same rules as the [current owners list](../lumenis-accelerate-current-owners/SKILL.md#2-find-owners-on-the-approval-sheets). If the read fails, mark "unknown", don't guess.
3. **Interest:** the sheet's Product of Interest plus the opportunity's product.

### S3 Attendee profile (T-14)

Per division, a one-page summary:

- Registered practices and people.
- Counts by device already owned and by product of interest, and how many are new to IPL or dry eye (no Lumenis IPL owned).
- Three lines on what this means for the session line-up. Recommend; the content owner decides (C9).

Send to the division's sales VP, marketing leadership and the marketing team. Save in the project folder.

### S2 Current owners list (T-16)

Follow [lumenis-accelerate-current-owners](../lumenis-accelerate-current-owners/SKILL.md). It builds the "<City> - Existing Customers Attending" sheet for Jeff Thompson's service team from the same read. If that list already exists for the show, reuse its owner findings here.

## Boundaries

- Read-only in Salesforce and Smartsheet.
- Practice names and pipeline figures stay in the work systems and the project folder, never in this repository.
