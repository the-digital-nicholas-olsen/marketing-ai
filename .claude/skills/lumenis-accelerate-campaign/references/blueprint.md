---
title: Accelerate process blueprint
summary: Inputs, dependency order, outputs and ownership for a complete campaign.
status: source-derived
owner: division lead
reviewed: 2026-09-07
---
# Build a complete campaign

## Gather the brief

Use the external campaign folder for the completed brief and handoff. Capture: division(s), country/market, products, target audience, business goal, city, quarter/year, dates with timezone, venue/address, session schedule and room status, verified faculty names/credentials/bios, approved claims, asset/design references, budget and owner, registration eligibility, travel policy, hotel link, survey and calendar destinations, sender/subscription choices, audience exclusions, send schedule, approval owners and permitted live actions.

Retrieve operational facts from the configured source; if Smartsheet is not ready, use a user-accepted dated brief and mark its limits. Do not invent a default budget, send interval, calendar link or speaker bio.

## Naming first

From repository root: `node scripts/name.mjs VIS "Accelerate Example City" "Q1 2030" US` (synthetic example). Use AES for Aesthetics. The established US pattern is `DIV-US-Accelerate City-Qn YYYY`. Page, dedicated interest form and campaign use the same string for new work. Agenda adds `Agenda`; the segment adds `Form Fills`. Local folder uses the generated slug. Quarter refers to when the event runs. EM1–EM3 append the email descriptor/number; the shared EM4 has a legacy convention documented in emails.md.

Search both systems before creating anything. Older names using USA, LMV/LMAES or different quarter separators may still be the right existing record. Preserve published URLs and asset IDs; resolve duplicate pages before deciding which is canonical. Do not change a live slug just to enforce the new convention. Set page title before slug because the editor can regenerate the slug from the title.

## Dependency order and outputs

1. Confirm inputs, permissions, current objects and official names. Save existing IDs before editing.
2. Select approved product/design sources; prepare venue collages before designs that reuse them.
3. Create/reuse HubSpot and Salesforce campaigns with the right division and record type. No invented dates/budget/status values.
4. Build/reuse the dedicated interest form(s), registration landing page and separate agenda page. The agenda page has no form unless the brief specifically requires a distinct conversion.
5. Build one Active contact form-fill segment per division per city, tied to that form's GUID; associate assets.
6. Produce print and digital flyers and any requested social formats from approved artwork.
7. Draft EM1 promo, EM2 know-before-you-go, EM3 attended thank-you/survey, and EM4 interest autoresponder. These are four distinct purposes, not four interchangeable automated sends.
8. Configure workflow routing after the intended automated email exists; keep new workflows OFF until activation is authorized. Verify both division branches if shared.
9. Prepare event backend and internal communications. Backend links must exist before the seven internal documents can be finalized. This can run independently of creative production.
10. Run the acceptance checklist, complete permitted publication/sending/activation separately, and read back results. Capture a reusable lesson as a proposed Git change.

Per city with both divisions: two form-fill segments, normally one interest form per division, the required division pages/campaigns, a separate agenda page as specified, four marketing-email purposes and seven internal documents. Two cities make four segments; do not mistakenly create four segments for one city. Additional conversion paths require their own form/segment/status plan.

## Who maintains what

Content writer: message, story, copy clarity and reusable writing examples. Event manager: dates, faculty, rooms, travel/registration facts, internal documents. Marketing operations: fields, consent, campaigns, segments, routing and persisted-state QA. Division leads: product/audience fit and business approval. Technical maintainer: shared skill packaging and checks. A reviewer role is not proof that a named person has accepted a deadline.

Completion is demonstrated by the linked outputs and acceptance evidence, not by exhausting the checklist mechanically. Preserve process goals, dependencies and exceptions; improve the implementation when a supported tool offers a better route.
