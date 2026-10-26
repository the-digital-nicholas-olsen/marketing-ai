---
name: lumenis-hubspot-landing-page
description: Build a Lumenis HubSpot landing page as one self-contained Custom HTML module written by the AI, from brief to read-back. Use for any HubSpot landing, registration, agenda or campaign page in Vision or Aesthetics. Not for ON24 webinar pages.
---

# HubSpot landing page

Owner: marketing operations.
Status: draft procedure, consolidated 2026-10-26 from the former HubSpot page draft skill and the Accelerate page reference; subject-owner review required.

Use this for any HubSpot CMS landing page: campaign, registration or interest, agenda, product or event. Webinar registration pages are built in ON24, not HubSpot. Campaign-specific page structure stays with its campaign skill; for Accelerate, see the [Accelerate page reference](../lumenis-accelerate-campaign/references/pages.md).

## Inputs

Resolve division, product, market, audience, campaign label, period, desired conversion and the external output folder. Select one brand system (Lumenis Corporate, OptiLIGHT or OptiLIFT) through [the design entry point](../../../assets/design-system/README.md) and read only that system's guidance. This procedure doesn't grant claim approval or make any brand system a division default. Consult the [claims library](../../../assets/claims-reference/index.md) for evidence status; source copy is not approval. Use [the campaign brief](../../../templates/campaign-brief.md) when a brief helps.

Run `node scripts/name.mjs <AES|VIS> "<campaign>" "<Qn YYYY>" <country-code>` from the repository root for proposed names. Confirm the convention applies to the selected market. The helper doesn't determine CRM values.

## Procedure

1. **Search before creating.** Look for existing agency drafts and published variants. Record which page owns future links and registrations; don't create competing live pages.
2. **Clone when you can.** Cloning a current approved reference preserves the template and its HTML module. Create a shell manually only if current tool capability requires it.
3. **Draft structure and copy** from approved evidence. Use the [image search skill](../lumenis-image-search/SKILL.md) for catalog candidates rather than loading the whole catalog. Run [Ted's clarity gate](../copy-clarity-gate/SKILL.md) before delivering copy.
4. **Build the page as one Custom HTML module.** Markup, scoped style and page script go in one block, written by the AI in the external output folder. Keep the editable HTML, CSS and JS, the assembled module, the copy and selected IDs there, never in this repository. This is the established new-build pattern. Keep Settings Head HTML and Footer HTML empty: repeated edits there failed to persist in source builds. Existing split CSS/JS pages can keep working; don't redesign them without need.
   - Never embed image or font bytes as base64. It caused megabyte-scale pages and publication failures.
   - Resolve every asset to its actual hosted URL before delivery: no local `assets/` or font paths, no placeholder form GUIDs, no invented conversion URLs or live IDs.
5. **Add the form** if the page converts. Build or resume its dedicated form with the [HubSpot form skill](../lumenis-hubspot-form/SKILL.md) and embed that form's actual GUID. An agenda or information page needs no form unless the brief asks for a distinct conversion.
6. **Put it into HubSpot** following [editor, template and verification lessons](references/editor-and-css.md): names and title before slug, replace the module source instead of appending, one editor per page, then read back.
7. **Associate the campaign** and verify the association in page Settings; clone-dialog selections didn't persist in source builds.
8. **Verify before and after publishing.** Check desktop and mobile render before an authorized publication, then the public URL afterwards (see the verification section of the lessons).
9. **Record the result** outside Git: object IDs, URLs, what was read back, open gaps and next actions.

Check the tools actually available in the chosen client. If authorized page creation or cloning is supported, use it; otherwise give a precise manual handoff. Record required inputs and gaps rather than claim a page was built. Use the read-back checklist in [HubSpot access and verification](../../../integrations/hubspot/access-and-verification.md).

Publishing follows AGENTS.md and existing task authorization. Never imply a draft is live.

## Mistakes to avoid

- Base64 images or fonts inside the module.
- Appending to the Custom HTML source instead of replacing it.
- Editing global header or footer resources from a single page.
- Hiding the legal footer without its approved replacement in place.
- Two editors open on the same page.
- Treating "published" or a passing preview as proof the public page is current.
