---
title: HubSpot HTML email rules
summary: Custom HTML body module, inline-CSS layout rules, links, and inbox and editor QA.
status: source-derived (moved from the Accelerate email reference 2026-10-26)
owner: marketing operations
reviewed: 2026-09-07
---
# HTML email rules

These come from Accelerate source builds but apply to any HubSpot marketing email built from one HTML body.

## The body module

Use one Custom HTML body module. Remove default logo/body modules when the new design replaces them, and delete empty leftover sections. Retain the approved footer/subscription controls. Set the containing section to zero padding and no background if the module owns the design. Target the actual source textbox, select all and replace; filling without selection appended duplicate content.

For the recorded Custom HTML email path:
- Inline body CSS; style tags were rejected. Page CSS rules do not belong in email HTML.
- Use percentage columns because the editor/preview content width varied around 540–580px, not an assumed 600px.
- In the source hybrid layout, min-width around 85% of a column, capped at 300px, enabled stacking. Treat that as a pattern to test, not a universal formula. Three columns may wrap two-plus-one; check deliberately at 320px.
- Give paragraphs explicit margins; avoid adding duplicate side gutters inside HubSpot's section.
- Vertically center text beside tall images where intended. Keep content reading order sensible when stacked.
- Use absolute hosted links/images. Preserve aspect ratio; forcing a portrait into square width/height distorts it. Crop a derivative explicitly if a square is needed.
- Use broadly compatible image formats for email and test actual inboxes; verify any CDN conversion returns the intended format. Browser-only previews do not establish Outlook rendering.
- Web fonts may fall back in email. The source used Lato/Georgia approximations for Arizona rather than assume the brand web font would load. Obtain approval for typography fallback where needed.
- Preserve appropriate HubSpot unsubscribe tokens (`{{unsubscribe_link}}`, `{{unsubscribe_link_all}}`) and required footer content. Never paste recipient-specific unsubscribe or `_hsenc` links from a preview.

## Links

Preserve a shared tracked CTA only when its destination and intended tracking are confirmed. Remove stale UTMs and recipient tokens; do not invent numeric campaign prefixes. Every link needs an actual destination check, not just a plausible slug.

If an optional block's links are missing (for example a calendar block), omit the entire block with an explicit handoff note; no dashed placeholder or invented URL may reach recipients. Do not remove HTML by inherited line numbers; templates change. Identify the enclosing block structurally and rerender.

## Inbox and editor QA

Set subject, preview, from name/address, reply-to and subscription explicitly for each email. Source API snippets printed subject/fromName/replyTo only and therefore could not prove preview text or actual sending address; read each field in the current response schema or UI.

The editor took 40–90 seconds in source builds. Wait for the actual panel before interacting; avoid fixed coordinate reuse because validation messages shift controls. A synthetic dropdown click may not commit a React selection: use supported real interaction and read back. If the from-address list only shows owner.email or a fetch error, reload/retry once ready; don't add an address to work around it.

Keep one active editor per email. A stale second tab overwrote saved sender/subject/preview content. Close or navigate stale tabs carefully, then reopen and verify the saved values after retries. On a crash, distinguish saved versus unsaved work before discarding anything.

Run Ted's clarity gate, subject/preview review, desktop/mobile layout (320, 375, 540, 580, 600px), link/image checks and actual approved inbox tests. Save drafts until the relevant publish/send authorization exists. Publishing a reusable automated asset and activating a workflow are different actions; editing an email already used by active automation can affect real recipients, so inspect dependencies first.
