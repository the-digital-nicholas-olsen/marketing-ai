---
title: Accelerate marketing email production
summary: Four email purposes, exact settings to verify, HTML constraints and editor recovery.
status: source-derived
owner: content writer and marketing operations
reviewed: 2026-09-07
---
# Four marketing emails

Read [copy templates](email-copy-templates.md) only when drafting. EM1 is the invitation/promo; EM2 is know-before-you-go; EM3 thanks attendees and requests feedback; EM4 acknowledges an interest-form submission. EM4 does not confirm attendance, approved travel or a hotel booking.

EM1–EM3 normally need audience and schedule decisions, not an assumption that all are autoresponders. Document recipients, exclusions, date/timezone, subscription, sender, reply-to, subject and preview for each. An interest-form segment is not automatically the attended audience for EM3. A source three-day agenda does not establish that the new event lasts three days or includes breakfast.

## Sender and subscription evidence

US Vision EM1–EM3 source pattern: From name `Lumenis Vision`, from address `lumenis.vision@lumenis.com`, subscription `Vision Updates`. Inspect the current approved reference and actual reply-to separately. Do not choose the near-match `lumenis.vision@lumenis.onmicrosoft.com`, inherit an individual editor's address, or create a new sender to bypass a loading error.

**Shared EM4 conflict remains open:** the email-source README records `Lumenis` / `vip@lumenis.com` / `Aesthetics Updates`, while the broader playbook lists Vision settings for the wave. Do not silently apply Vision subscription to both divisions or publish the shared autoresponder until marketing operations confirms its current intended sender, subscription and eligible recipients. A split by division may be appropriate, but is a business decision, not an automatic rewrite.

Historical EM4 name: `Aes / Vis - USA - Accelerate <City> <YY> - TY - Promo Form Submission-<Qn YYYY>`. Preserve an existing object's name; agree the new name at kickoff. Clear inherited campaign and associate the intended VIS and AES campaigns for a shared version.

Historical EM4 Send to settings: frequency cap OFF and Don't send to unengaged contacts ON. These can suppress or permit acknowledgments; have operations validate the intended behavior for the current event. EM1–EM3 retained the approved/default frequency cap. Do not switch eligibility protections to force a test to send.

## Build and place

For a new automated email the recorded route was Marketing Email → Create email → Automated → Saved templates → New template → Use template. For EM4, cloning a verified approved EM4 preserved its template/footer. Use an appropriate regular/automated type for the actual sending plan.

Use one Custom HTML body module. Remove default logo/body modules when the new design replaces them, and delete empty leftover sections. Retain the approved footer/subscription controls. Set the containing section to zero padding and no background if the module owns the design. Target the actual source textbox, select all and replace; filling without selection appended duplicate content.

For this recorded Custom HTML email path:
- Inline body CSS; style tags were rejected. Page CSS rules do not belong in email HTML.
- Use percentage columns because the editor/preview content width varied around 540–580px, not an assumed 600px.
- In the source hybrid layout, min-width around 85% of a column, capped at 300px, enabled stacking. Treat that as a pattern to test, not a universal formula. Three columns may wrap two-plus-one; check deliberately at 320px.
- Give paragraphs explicit margins; avoid adding duplicate side gutters inside HubSpot's section.
- Vertically center text beside tall images where intended. Keep content reading order sensible when stacked.
- Use absolute hosted links/images. Preserve aspect ratio; forcing a portrait into square width/height distorts it. Crop a derivative explicitly if a square is needed.
- Use broadly compatible image formats for email and test actual inboxes; verify any CDN conversion returns the intended format. Browser-only previews do not establish Outlook rendering.
- Web fonts may fall back in email. The source used Lato/Georgia approximations for Arizona rather than assume the brand web font would load. Obtain approval for typography fallback where needed.
- Preserve appropriate HubSpot unsubscribe tokens (`{{unsubscribe_link}}`, `{{unsubscribe_link_all}}`) and required footer content. Never paste recipient-specific unsubscribe or `_hsenc` links from a preview.

Build one approved set of venue derivatives early and reuse it. Keep headshot names/roles as text where possible. A source asset filename naming another city may contain generic artwork; inspect it visually. Conversely, a generic filename does not prove the image lacks an old city or badge.

## Links and optional blocks

Use this event's registration/interest URL, agenda URL, map, hotel, survey, upcoming-events CTA and optional calendar URL. Preserve a shared tracked CTA only when its destination and intended tracking are confirmed. Remove stale UTMs and recipient tokens; do not invent numeric campaign prefixes. Every link needs an actual destination check, not just a plausible slug.

If calendar links are missing, omit the entire calendar block with an explicit handoff note; no dashed placeholder or invented AddEvent URL may reach recipients. Do not remove HTML by inherited line numbers; templates change. Identify the enclosing block structurally and rerender.

## Inbox and editor QA

Set subject, preview, from name/address, reply-to and subscription explicitly for each email. Source API snippets printed subject/fromName/replyTo only and therefore could not prove preview text or actual sending address; read each field in the current response schema or UI.

The editor took 40–90 seconds in source builds. Wait for the actual panel before interacting; avoid fixed coordinate reuse because validation messages shift controls. A synthetic dropdown click may not commit a React selection: use supported real interaction and read back. If the from-address list only shows owner.email or a fetch error, reload/retry once ready; don't add an address to work around it.

Keep one active editor per email. A stale second tab overwrote saved sender/subject/preview content. Close or navigate stale tabs carefully, then reopen and verify the saved values after retries. On a crash, distinguish saved versus unsaved work before discarding anything.

Run Ted's clarity gate, subject/preview review, desktop/mobile layout (320, 375, 540, 580, 600px), link/image checks and actual approved inbox tests. Save drafts until the relevant publish/send authorization exists. Publishing a reusable automated asset and activating a workflow are different actions; editing an email already used by active automation can affect real recipients, so inspect dependencies first.
