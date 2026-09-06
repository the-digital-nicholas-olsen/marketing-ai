---
name: lumenis-hubspot-page-draft
description: Prepare a Lumenis HubSpot landing-page brief, draft content and implementation handoff with explicit division and approval prerequisites. Use before a page build; does not supply live CRM configuration.
---

# HubSpot page draft

Resolve division, product, market, audience, campaign label, period, desired conversion and external output folder. Read the relevant approved design and claims references; do not assume this public repository contains them. Use ../../../templates/campaign-brief.md when a brief is useful.

Run `node scripts/name.mjs <AES|VIS> "<campaign>" "<Qn YYYY>" <country-code>` from the repository root for proposed names. Confirm the naming convention applies to the selected market. The helper does not determine CRM values.

Draft requested content and page structure using approved evidence. Use the image-search skill for catalog candidates if available. Keep code, copy and selected IDs in the external project folder. Do not invent conversion URLs or live identifiers.

Before configuring a lead form, obtain the approved private division mapping, current property values and explicit consent rule. Separate observed portal state from intended requirements. A missing mapping blocks configuration; local content drafting may continue with clear placeholders.

Check tools actually available in the chosen client. If authorized page/form creation or cloning is supported, use it; otherwise provide a precise manual handoff. This skill is a draft workflow, not a complete portal-specific implementation recipe. Record required implementation inputs and gaps rather than claim a page was built.

Read back saved objects after authorized work. Publishing, sending, activation and imports follow AGENTS.md and existing task authorization. Never imply a draft is live.
