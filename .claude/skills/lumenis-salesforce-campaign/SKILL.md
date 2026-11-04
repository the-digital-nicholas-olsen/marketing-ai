---
name: lumenis-salesforce-campaign
description: Create a Lumenis Salesforce campaign for a marketing program (webinar, Accelerate, trade show) with every field set from the brief, the approved member statuses added, and the record read back. Use before building HubSpot campaigns or workflows that route leads into it. Vision and Aesthetics.
---

# Salesforce campaign

Owner: marketing operations.
Status: draft procedure, written 2026-10-27. Webinar values were stated by the Vision team on that date; trade show values are observations recorded in the [Accelerate campaigns reference](../lumenis-accelerate-campaign/references/campaigns-and-segments.md). Review required.

HubSpot workflows put leads into a Salesforce campaign with a member status. If the campaign or a status is wrong, leads land in the wrong place and reporting breaks. Build it once, the same way every time, before anything points at it.

## Who can create

Creating a campaign needs Salesforce permission for that division. For Vision (as of 2026-10-27) only Nicholas creates campaigns; EJ's access covers Aesthetics only. If the person running this lacks access, prepare the field list and hand it to someone who has it. Never borrow a login.

## Inputs

- Division and program type, the agreed campaign name (`node scripts/name.mjs`), budget from the owner (never from a past campaign), and the reporting dates.
- Member statuses the HubSpot workflow will set, each with its approved **Responded** flag. For a webinar: **Registered** and **Attended**. Which of them count as responded is a reporting decision for marketing operations; confirm it rather than copying another campaign. A status without a confirmed Responded flag blocks step 3.

## Webinar fields (Vision, stated by the team 2026-10-27)

| Field | Value |
|---|---|
| Record type | US Ophthalmic. For Aesthetics, confirm the record type live; never guess it from a label |
| Campaign name | Naming convention |
| Active | Checked |
| Status | 2/3 In Progress |
| Type | Webinar |
| Campaign Specialty | Ophthalmic |
| Event Coordinator | None |
| Start date | The day the campaign is created |
| End date | December 31 of the same year |
| Budgeted Cost / Actual Cost | The honorarium total in the campaign record |
| Division | Ophthalmic, if the field is editable |

**Accelerate** member statuses (stated by the Vision team 2026-10-29): **Requested More Info** (set by the interest workflow), **Registered** (from the Smartsheet registrant list the Monday before the show) and **Attended** (from OneTap the Monday after). Their Responded flags and the other field values aren't confirmed yet; take them from an approved recent Vision Accelerate campaign and confirm with marketing operations.

**Trade show** member statuses (stated by the Vision team 2026-11-04): **Badge Scanned**, **Registered for Dinner** (only if the show has a dinner), **Session Attended** (only if we have a speaking session, such as a sponsored breakfast or lunch) **Signed Up for Treatment** (booked a booth demo before the show) and **Received Treatment** (treated at the booth, from the Jotform consents). Every trade show status is marked **Responded** (decided by the marketing director, 2026-11-04). One campaign covers the whole show: booth, dinner and sessions roll up into it. Vision trade show campaigns are created by the marketing director, who has the Vision Salesforce permissions, and then hands off to marketing operations for HubSpot.

**Other programs** (Accelerate, trade shows) don't inherit the webinar values. Take every field from the brief and an approved comparable campaign. The [campaigns reference](../lumenis-accelerate-campaign/references/campaigns-and-segments.md) records one observed trade show setup; it's evidence of what was done once, not a default.

The Division field has been read-only or missing on some create screens; see that reference before escalating.

## Procedure

1. **Search first** for the agreed name and close variants in Salesforce. Reuse a correct existing campaign rather than creating a duplicate.
2. **Create** the campaign with every field above, then save and capture the record ID.
3. **Add member statuses.** First open Related → Campaign Member Statuses and list what already exists (new campaigns come with defaults). Reuse a matching status; don't add a near-duplicate. For each missing status: New, the exact approved text, and its approved Responded flag. Reload the related list and confirm each row shows the right text and Responded value; a dialog that closes isn't proof it saved.
4. **Read back** every field from the saved record, and every member status with its Responded flag.
5. **Record** the campaign name and ID in the campaign's Smartsheet row (Key Info), not in Git.

## Later updates

After the event, confirm Actual Cost against the final invoices and update it if extra costs came in. Change nothing else without the owner's say-so.

## Stop and ask

- No one with access is available: hand off the field list.
- The budget or program type isn't approved.
- A needed member status can't be saved after one reload and retry: stop and ask the Salesforce admin, don't create a look-alike status.
