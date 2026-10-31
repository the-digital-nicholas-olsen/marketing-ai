---
name: lumenis-accelerate-campaign
description: Build or continue an Accelerate campaign across briefs, pages, forms, emails, segments, Salesforce routing and event communications. Use for end-to-end Accelerate work or one stage; resolve division explicitly.
---
# Accelerate campaign

Owner: Vision lead with Aesthetics lead and marketing operations for their scopes.
Status: source-derived operational procedure, consolidated 2026-09-07; full second-person pilot pending.

Accelerate is a Lumenis education and hands-on event program. Vision and Aesthetics can share event logistics but have different audiences, products, forms and CRM routing. A HubSpot interest form is not a confirmed event registration: rep approval and flight/non-flight registration are a separate event process.

Resolve division(s), market, city, event dates/timezone, products, audience, requested stage and external output folder. Start with the [campaign blueprint](references/blueprint.md) for a new campaign. For a show run from the Smartsheet template, [lumenis-accelerate-playbook](../lumenis-accelerate-playbook/SKILL.md) decides what's due; this skill builds the pieces. For a continuation, read only the matching row below and the external handoff; do not reread every reference.

| Current step | Load |
|---|---|
| Names, inputs, deliverables, dependencies | [Blueprint](references/blueprint.md) |
| When each piece is due (T-minus), launch day | [Timeline](references/timeline.md) |
| CRM properties or native form configuration | [Accelerate forms](references/forms.md), then the [HubSpot form skill](../lumenis-hubspot-form/SKILL.md) |
| Registration or agenda page implementation | [Accelerate pages](references/pages.md), then the [HubSpot landing page skill](../lumenis-hubspot-landing-page/SKILL.md) |
| Salesforce campaign, HubSpot campaign or segment | [Campaigns and segments](references/campaigns-and-segments.md) |
| Promo, attendee KBYG, post-event or autoresponder email | [Accelerate emails](references/emails.md), [copy templates](references/email-copy-templates.md) if drafting, then the [HubSpot email skill](../lumenis-hubspot-email/SKILL.md) |
| KOL presenter KBYG email | [KOL KBYG skill](../lumenis-accelerate-kbyg-emails/SKILL.md) |
| Enrollment, branches and Salesforce membership | [Accelerate workflows](references/workflows.md), then the [HubSpot workflow skill](../lumenis-hubspot-workflow/SKILL.md) |
| Venue assets, design and flyers | [Assets and flyers](references/assets-and-flyers.md) |
| Rep/prospect communications and registration backend | [Internal communications](references/internal-comms.md); [Smartsheet](references/smartsheet.md) only for backend work |
| Account access, API reads, editor failures | [HubSpot access and verification](../../../integrations/hubspot/access-and-verification.md) |
| Pipeline amount, stage and expected value on rep approval sheets | [Pipeline sync skill](../lumenis-accelerate-pipeline-sync/SKILL.md) |
| Flight approvals once flight registrations come in (Vision or Aesthetics, with separate gates; draft) | [Flight approval check](../../../divisions/vision/smartsheet/accelerate-flight-approval-check.md) |
| Landing page and form test before launch | [Landing page check](../lumenis-landing-page-check/SKILL.md) |
| Badge, OneTap, KBYG and attended lists | [Attendee lists](../lumenis-accelerate-attendee-lists/SKILL.md) |
| Readiness or launch | [Acceptance checklist](references/acceptance.md) |

Use [known conflicts](../../../guides/known-conflicts.md) when a cited issue affects the step. Do not choose an arbitrary winner between conflicting source documents. For final copy, run [Ted's clarity gate](../copy-clarity-gate/SKILL.md). Clarity is not clinical or regulatory approval.

Follow the root execution contract and authorization already given. Record object IDs, links, what was read back, unresolved inputs and next actions outside Git after each stage. A missing prerequisite blocks that stage, not unrelated work. Never report a campaign ready while required email settings, registration links, mappings or tests remain unresolved.
