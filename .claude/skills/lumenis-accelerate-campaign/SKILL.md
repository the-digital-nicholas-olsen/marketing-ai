---
name: lumenis-accelerate-campaign
description: Build or continue an Accelerate campaign across briefs, pages, forms, emails, segments, Salesforce routing and event communications. Use for end-to-end Accelerate work or one stage; resolve division explicitly.
---
# Accelerate campaign

Owner: Vision lead with Aesthetics lead and marketing operations for their scopes.
Status: source-derived operational procedure, consolidated 2026-09-07; full second-person pilot pending.

Accelerate is a Lumenis education and hands-on event program. Vision and Aesthetics can share event logistics but have different audiences, products, forms and CRM routing. A HubSpot interest form is not a confirmed event registration: rep approval and flight/non-flight registration are a separate event process.

Resolve division(s), market, city, event dates/timezone, products, audience, requested stage and external output folder. Start with the [campaign blueprint](references/blueprint.md) for a new campaign. For a continuation, read only the matching row below and the external handoff; do not reread every reference.

| Current step | Load |
|---|---|
| Names, inputs, deliverables, dependencies | [Blueprint](references/blueprint.md) |
| CRM properties or native form configuration | [Forms](references/forms.md), then the selected division mapping only |
| Registration or agenda page implementation | [Pages](references/pages.md) |
| Salesforce campaign, HubSpot campaign or segment | [Campaigns and segments](references/campaigns-and-segments.md) |
| Promo, KBYG, post-event or autoresponder email | [Emails](references/emails.md), then [copy templates](references/email-copy-templates.md) if drafting |
| Enrollment, branches and Salesforce membership | [Workflows](references/workflows.md) |
| Venue assets, design and flyers | [Assets and flyers](references/assets-and-flyers.md) |
| Rep/prospect communications and registration backend | [Internal communications](references/internal-comms.md); [Smartsheet](references/smartsheet.md) only for backend work |
| Account access, API reads, editor failures | [HubSpot access and verification](../../../integrations/hubspot/access-and-verification.md) |
| Readiness or launch | [Acceptance checklist](references/acceptance.md) |

Use [known conflicts](../../../guides/known-conflicts.md) when a cited issue affects the step. Do not choose an arbitrary winner between conflicting source documents. For final copy, run [Ted's clarity gate](../copy-clarity-gate/SKILL.md). Clarity is not clinical or regulatory approval.

Follow the root execution contract and authorization already given. Record object IDs, links, what was read back, unresolved inputs and next actions outside Git after each stage. A missing prerequisite blocks that stage, not unrelated work. Never report a campaign ready while required email settings, registration links, mappings or tests remain unresolved.
