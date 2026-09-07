---
title: Accelerate workflow routing
summary: Enrollment, division branches, automated email and Salesforce member-status checks.
status: source-derived
owner: marketing operations
reviewed: 2026-09-07
---
# Workflow setup

Create/configure only within task authorization; keep new workflows OFF during setup. Inspect any existing workflow before changing it: an email or action already connected to an active workflow can affect live contacts. Save existing IDs/configuration in the external handoff.

## Shared interest workflow pattern

1. Prepare the intended automated interest acknowledgment before selecting it in the workflow. Confirm the shared/division sender and subscription decision first.
2. Clone the approved reference once and wait for it to appear in the workflow list. Search before retrying; source clones took time and repeated clicks created duplicates.
3. Enrollment: two OR groups when both divisions are in scope, each selecting the exact event/division form. Recorded condition: has filled out [form], Any page, any number of times, anytime. Do not include the other division if the task is Vision-only.
4. Update Latest Lead Info with the actual city/dates/interest description. In a rich-text field, select and replace the visible content; normal fill previously appended to hidden content. Save and reopen to verify.
5. Recorded template delayed 15 minutes before downstream handling; retain when still intended. Do not mistake this for proof that all CRM sync completes in 15 minutes.
6. Branch by Imported Record Type: Aesthetics vs Ophthalmic. Inspect actual branch meaning, not historical action numbers 6/7. Reordering changes numbers.
7. Each branch writes to that division's correct Salesforce campaign with its approved member status. Selecting a different campaign resets Status; reselect before saving. Search full exact name, then legacy separators/distinctive words if necessary.
8. Select the intended automated email; preserve Capture Date behavior only when its current meaning is confirmed. Verify the linked email on the saved canvas.
9. Associate with intended HubSpot campaign(s) using the available current UI and verify from campaign Assets.

## Member-status and action pitfalls

Status values are campaign-specific. Requested Info, Requested Info from Sales and Responded appeared in different sources/records. They are not interchangeable defaults. Confirm the current intended status and its Responded flag; create a missing approved status in Salesforce, verify it persisted, then choose it in HubSpot. New records may take time to appear; search/reload before deciding they are absent.

Click the action card header rather than the email title or Details link to edit a Send email action. A preview thumbnail may update before the saved canvas; reopen and read the selected email name. Reopen Salesforce actions to read Campaign and Status: a temporary record ID on the card alone is not sufficient.

## Alternate segment-triggered workflow

For an approved single-conversion event, the source AAO pattern used Contact → Memberships → Segment/List membership → is member of [segment], re-enrollment OFF, then CRM → Set Salesforce campaign. Multiple conversions such as dinner and treatment should preserve separate segments/statuses or explicit branches. A single combined status loses conversion meaning.

Do not inherit the old playbook's automatic Turn on instruction. Activation requires the task's explicit authority and a decision about existing matches/re-enrollment. Review existing enrollment counts, exclusions, test handling and downstream sends before activation. A fresh segment is not guaranteed empty.

## Acceptance

Use authorized test cases for each intended division, unknown routing value, repeat submission and missing consent. Verify correct branch, member status and email eligibility. A missing/unknown branch must not default to another division. Confirm final OFF/ON state directly. Record what was configured versus actually activated, whether any messages were sent, and the evidence for each result.
