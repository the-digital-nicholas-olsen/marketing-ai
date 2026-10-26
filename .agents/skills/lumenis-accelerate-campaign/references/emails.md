---
title: Accelerate marketing email production
summary: The four Accelerate email purposes, sender evidence and EM4 settings; build and QA follow the HubSpot email skill.
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

Write the body, place it, set every field and run QA with the [HubSpot email skill](../../lumenis-hubspot-email/SKILL.md) and its [HTML email rules](../../lumenis-hubspot-email/references/html-email-rules.md).

Build one approved set of venue derivatives early and reuse it. Keep headshot names/roles as text where possible. A source asset filename naming another city may contain generic artwork; inspect it visually. Conversely, a generic filename does not prove the image lacks an old city or badge.

## Accelerate links and optional blocks

Use this event's registration/interest URL, agenda URL, map, hotel, survey, upcoming-events CTA and optional calendar URL. If calendar links are missing, omit the entire calendar block with an explicit handoff note; no dashed placeholder or invented AddEvent URL may reach recipients.

## Accelerate QA

On top of the email skill's checks: every EM1–EM3 registration link goes to this event's page, EM3 goes only to the confirmed attended audience, and EM4 is checked against any active workflow that already uses it before you edit it.
