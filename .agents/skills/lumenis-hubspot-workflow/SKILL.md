---
name: lumenis-hubspot-workflow
description: Set up or change a Lumenis HubSpot workflow safely, kept OFF until activation is authorized, using a source-derived pattern (form conversion to a Salesforce campaign, or segment membership). Conversion workflows set Latest Lead Info first; other workflows leave it alone. Use for any HubSpot automation in Vision or Aesthetics; lists proposed patterns for other activities.
---

# HubSpot workflow

Owner: marketing operations.
Status: draft procedure, consolidated 2026-10-26 from the Accelerate workflow reference; subject-owner review required. The proposed patterns in the pattern reference have no recorded source build yet.

Use this whenever a HubSpot workflow is created or changed: lead routing from a form, segment-triggered conversions, automated emails and Salesforce campaign membership. Campaign-specific settings stay with the campaign skill; for Accelerate, see the [Accelerate workflow reference](../lumenis-accelerate-campaign/references/workflows.md).

## Safety first

Create/configure only within task authorization; keep new workflows OFF during setup. Inspect any existing workflow before changing it: an email or action already connected to an active workflow can affect live contacts. Save existing IDs/configuration in the external handoff.

Do not inherit an old playbook's automatic Turn on instruction. Activation requires the task's explicit authority and a decision about existing matches and re-enrollment. Review existing enrollment counts, exclusions, test handling and downstream sends before activation. A fresh segment is not guaranteed empty.

## Is it a conversion workflow?

A **conversion workflow** enrolls a contact because they just converted (a form submission, or joining a conversion segment) and hands that lead to sales. Only conversion workflows:
- set Latest Lead Info, as the first action;
- add their form to the corporate recent-conversion workflow's exclusion list;
- set a Salesforce campaign and member status for the new lead.

Other workflows, such as reminders, follow-up emails or status updates for people who already converted, must not write Latest Lead Info: it would overwrite the rep's context from the contact's actual latest conversion. Each pattern in the [pattern reference](references/patterns.md) says which kind it is. If you can't tell, ask marketing operations before building.

## Procedure

1. **Pick the pattern** from [workflow patterns](references/patterns.md). Use a recorded pattern when one fits. A proposed pattern needs marketing operations to confirm the design before you build it.
2. **Prepare only what the chosen pattern uses,** before the workflow points at it: the form ([HubSpot form skill](../lumenis-hubspot-form/SKILL.md)), the segment, the automated email ([HubSpot email skill](../lumenis-hubspot-email/SKILL.md)) and, for a conversion workflow, the Salesforce campaign with its approved member status. A missing piece blocks the step that uses it.
3. **Clone an approved reference workflow once** and wait for it to appear in the list. Search before retrying; clones took time and repeated clicks created duplicates.
4. **Set enrollment.** In a conversion workflow, make **Latest Lead Info the first action** (see below), then delays, branches, Salesforce actions and emails. Other workflows go straight to their own actions.
5. **Conversion workflows only: exclude the form from the corporate override,** so the workflow's own Latest Lead Info isn't replaced.
6. **Read the saved canvas back:** triggers, branches, the chosen email and Salesforce campaign and status where the pattern has them, re-enrollment, and that the workflow is OFF.
7. **Test** with authorized, identifiable submissions (see Acceptance). Record what was configured versus activated outside Git.

## Latest Lead Info goes first

This section applies to conversion workflows only.

The sales new-lead notification ("New Lead Assigned!") is sent by **Salesforce**, not HubSpot. When a lead converts, or a lead or contact reconverts, Salesforce updates the Capture Date, and that update triggers the email. The email shows whatever Latest Lead Info holds at that moment.

A HubSpot form fill writes a generic value into Latest Lead Info straight away (`from: <page title>: <form name>`), and the contact can sync to Salesforce before a delayed workflow step runs. If the workflow sets Latest Lead Info after a delay or after the Salesforce campaign action, the rep receives the generic form-name text and the plain-language description arrives too late.

- **Exclude the form from the portal-wide override.** A published corporate workflow, *Corporate - copy recent conversion to latest lead info*, enrolls every form submission (re-enrollment on) and about a minute later overwrites Latest Lead Info with the recent-conversion string. It skips only forms listed in its trigger's *Form name is none of* filter, and conversions whose Recent Conversion contains "Accelerate". For every new conversion form that has its own Latest Lead Info step, open that workflow → trigger → Edit criteria → add the form to the *none of* list → Save, and read the trigger back. Without this, your value is replaced before Salesforce syncs the lead, however early your step runs.
- Put the Latest Lead Info action first in every conversion workflow, immediately after enrollment, including segment-triggered workflows.
- In branched workflows, the per-branch description still needs to land before any delay. Branch first, then make Latest Lead Info the first action in each branch, with the delay and Salesforce actions after it.
- Moving an existing action: use the card's move icon, choose the first **Place here** under the trigger, then **Save**. Read the numbered steps back; the DOM text order can differ from the step numbers.
- Test with an identifiable submission and check the notification email itself, not only the contact record. Read the contact's Latest Lead Info **history** after the Salesforce lead ID appears (a few minutes), not seconds after submission: another workflow can overwrite a correct value after you look.
- Contacts already waiting in a delay when you reorder will skip the moved action. Re-test with a new submission.

## Member-status and action pitfalls

Status values are campaign-specific. Requested Info, Requested Info from Sales and Responded appeared in different sources/records. They are not interchangeable defaults. Confirm the current intended status and its Responded flag; create a missing approved status in Salesforce, verify it persisted, then choose it in HubSpot. New records may take time to appear; search/reload before deciding they are absent.

Click the action card header rather than the email title or Details link to edit a Send email action. A preview thumbnail may update before the saved canvas; reopen and read the selected email name. Reopen Salesforce actions to read Campaign and Status: a temporary record ID on the card alone is not sufficient.

## Acceptance

Use authorized test cases for each intended division, unknown routing value, repeat submission and missing consent. Verify correct branch, member status and email eligibility. A missing/unknown branch must not default to another division. For a workflow that isn't a conversion workflow, confirm a test contact's Latest Lead Info is unchanged afterwards. Confirm final OFF/ON state directly. Record what was configured versus actually activated, whether any messages were sent, and the evidence for each result.
