---
title: Accelerate workflow routing
summary: The Accelerate interest workflow's settings; general workflow rules follow the HubSpot workflow skill.
status: source-derived
owner: marketing operations
reviewed: 2026-09-24
---
# Workflow setup

Build and check the Accelerate interest workflow with the [HubSpot workflow skill](../../lumenis-hubspot-workflow/SKILL.md). It holds the safety rules, why Latest Lead Info goes first, the corporate-override exclusion, member-status pitfalls and acceptance tests. This file records only the Accelerate settings.

## Accelerate interest workflow

1. Prepare the intended automated interest acknowledgment before selecting it in the workflow. Confirm the shared/division sender and subscription decision first.
2. Clone the approved reference once and wait for it to appear in the workflow list. Search before retrying; source clones took time and repeated clicks created duplicates.
3. Enrollment: two OR groups when both divisions are in scope, each selecting the exact event/division form. Recorded condition: has filled out [form], Any page, any number of times, anytime. Do not include the other division if the task is Vision-only.
4. Make **Edit record → Latest Lead Info** the first action, directly under the enrollment trigger and before any delay, branch or Salesforce action (see [Latest Lead Info goes first](../../lumenis-hubspot-workflow/SKILL.md#latest-lead-info-goes-first)). Add the interest form to the corporate recent-conversion workflow's exclusion list. Write the actual city/dates/interest description. In a rich-text field, select and replace the visible content; normal fill previously appended to hidden content. Save and reopen to verify.
5. Recorded template delayed 15 minutes before downstream Salesforce handling; retain when still intended, but always after the Latest Lead Info action. Do not mistake this for proof that all CRM sync completes in 15 minutes.
6. Branch by Imported Record Type: Aesthetics vs Ophthalmic. Inspect actual branch meaning, not historical action numbers 6/7. Reordering changes numbers.
7. Each branch writes to that division's correct Salesforce campaign with its approved member status. Selecting a different campaign resets Status; reselect before saving. Search full exact name, then legacy separators/distinctive words if necessary.
8. Select the intended automated email; preserve Capture Date behavior only when its current meaning is confirmed. Verify the linked email on the saved canvas.
9. Associate with intended HubSpot campaign(s) using the available current UI and verify from campaign Assets.

## Accelerate acceptance

Test each division in scope, an unknown routing value and a repeat submission. Confirm EM4 is the selected email, each branch sets its division's Accelerate campaign and status, and the saved state is OFF until activation is authorized.
