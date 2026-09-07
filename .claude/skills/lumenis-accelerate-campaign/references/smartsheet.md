---
title: Smartsheet event backend procedure
summary: Existing copy/setup lessons; connector deployment is a later rollout stage.
status: historical procedure; current capability and template inspection required
owner: event manager and marketing operations
reviewed: 2026-09-07
---
# Event backend

This preserves existing operational knowledge, not a claim that the team MCP is configured. Confirm available connector operations and permission scope at runtime. The source connector lacked form/automation tools; use the current web UI for unsupported actions rather than assume that limitation is permanent.

## Shape

One event folder (`Qn City Accelerate`) in the approved workspace, with four sheets: AES Rep Approval, VIS Rep Approval, City Flight Registration (AES+VIS), City Non-Flight Registration (AES+VIS). Six forms: one per approval sheet, two division forms on each registration sheet. Source branding was orange/peach for Aesthetics and blue for Vision.

## Copy and inspect

1. Inspect the approved current template, its sharing and automations. Do not blindly select the newest file or named historical city.
2. Browse → workspace → template folder → Save as New. Name the destination and confirm it. Include needed forms/formatting. Understand the option to include automated workflow recipients/permissions: unchecked can drop them; checked can propagate stale recipients or live alerts. Keep copied notifications disabled or otherwise contained until reviewed; do not send to old recipients during setup.
3. Verify all four destination sheets and newly assigned IDs before modifying. The folder resorts after rename; refresh the list rather than reuse row positions.
4. If old rows copied, remove them only from the verified new copy under the authorized cleanup scope. Confirm total rows and all IDs with pagination; column-filtered summaries can omit blank rows. Preserve intentional spacer/template rows and never clear the source.
5. On both approval sheets update Event Interested in Attending to the new event. Fetch fresh column IDs; copied IDs differ.
6. For all six forms update title, description and confirmation message. Save and reopen; the sidebar sometimes rendered the previous form's content. Check division branding and actual form ID before editing. Do not activate a form until its destination and permissions are ready.
7. Inspect travel and internal notifications: triggers, conditions, recipients, subject, full body and permission constraints. Source travel alert used Send to Travel Agent checked; source internal alert used new rows. Confirm current business recipients, not names copied from old docs.
8. Collect six Share Form links and four sheet links, then produce the Master Links and internal document set. Verify destination, division and access from the intended user's account.

## Known source-template failures

RSM alerts showed Unable to run because recipients could not receive notifications under sharing/domain settings. Adding sharing or approved domains is a real access change, not a cosmetic fix; get the appropriate authority and test intended recipients. A copied travel alert's subject was updated while its body still named the old city. The shared Flight sheet's Division picklist had only Vision; check that both intended divisions can be represented and routed. Never call the backend ready while a required notification remains broken.

Test a synthetic approved registration through every intended division/path and confirm storage and notification behavior. Avoid changing live operational sheets as part of documentation work. The future source-of-truth schema, MCP authentication and team access remain a separate rollout milestone.
