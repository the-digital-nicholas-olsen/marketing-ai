---
title: Campaigns, Salesforce setup and form-fill segments
summary: Exact observed labels, object associations and common UI traps.
status: source-derived
owner: marketing operations
reviewed: 2026-09-07
---
# Campaigns and segments

Search Salesforce and HubSpot for the agreed full name and legacy separator variants before creating. Check active sessions first; preserve IDs after each save so a browser crash does not cause duplicate creation.

## Salesforce

Lumenis campaign UI: `https://lumenis.lightning.force.com/lightning/o/Campaign/list`.

The US Vision tradeshow setup recorded `US Ophthalmic` as campaign record type; Campaign Specialty `Ophthalmic`, Type `Tradeshow` (one word), Status `2/3 In Progress`, Active checked, Event Coordinator `None`. These are **observed tradeshow settings**, not automatic Accelerate or Aesthetics defaults. For Accelerate, verify an approved comparable campaign and the brief, including campaign type, reporting start/end dates, coordinator and budget. The prior AAO build used setup date to year end; do not assume those are event dates or apply them universally. Budget comes from the owner, never a previous event.

Vision's contact routing value `Ophthalmic` is different from the Salesforce campaign record-type label `US Ophthalmic`. There is no evidence here for Aesthetics' Salesforce campaign record-type ID; obtain it live. Never guess an ID from a display label.

Division was read-only/absent in the documented Salesforce create and edit screens; new records had it blank. Escalate to the Salesforce admin if still true. Do not attempt to create a substitute property.

Save and capture the Salesforce record ID and CP number. For a needed member status: Related → Campaign Member Statuses → New. Use the exact approved status text and its intended Responded flag; in the source event response statuses needed Responded checked for response reporting. Do not mark invitation-only statuses responded by default.

Save can appear to do nothing in Lightning. Reload the related list and verify the new row and count; text left in a dialog is not a saved status. A Chrome retry worked where a different browser failed. Inspect existing rows before retrying, and stop for a supported manual/admin handoff if persistence still fails.

## HubSpot campaign

Campaigns → Create campaign → Start from scratch. Name matches the agreed Salesforce campaign name. Recorded US convention: VIS blue (`rgb(2, 0, 255)`), AES red. Verify the saved color in the list/picker. Mirror the agreed reporting dates; currency USD for US work. Budget may be under the campaign's Budget tab after creation rather than on the create panel. Record the saved campaign GUID and read back fields.

## Active form-fill segments

One segment per division/form/conversion, named `DIV-US-Accelerate City Form Fills-Qn YYYY`. Contacts → Segments → Create segment → Contacts → Next. Rename before adding filters. Add filter → **Events** → **Form submissions**; not Properties or the object dropdown. Select the exact form: has filled out, Any page, any number of times, anytime (unless the brief requires a bounded window). Choose **Active** processing.

The filter binds to a GUID, not merely the displayed form name. Read back both. A zero-member segment before launch may be correct. Segment membership is distinct contacts; it need not equal raw submission count because one person can submit repeatedly. Reconcile unique eligible contacts and identified QA records rather than force equality with total submissions.

## Associations

Campaign → Add assets → Landing pages / Forms / Contact segments / Files / marketing emails as applicable. Wait for the modal to render before selecting; selection can persist while changing categories. Save once, then verify every intended asset on **Assets**. A success toast or the segment save-dialog picker did not establish persistence in source runs. Segment Settings had no campaign field; associate from the campaign side.

Workflow association may be configured in workflow review/settings, then verified from campaign Assets. Shared EM4 may require both division campaign associations; confirm that decision with its sender/subscription setup. Remove only inherited associations that the intended new object should not retain; do not modify the donor.

A FORM-assets API response cannot prove a segment or email association. Query the relevant supported asset type or inspect the Assets tab. Follow pagination in all API inventory checks.
