---
name: lumenis-utm-links
description: Build and check the tracking links for a Lumenis campaign - one tagged link per channel (flyer, QR code, sales email, partner pages) plus a clean link for social - using one naming convention so every visit and registration can be traced to its source. Use before a flyer, sales email or CTA goes out, and to check links in finished assets.
---

# UTM links

Owner: marketing operations (EJ for Vision).
Status: draft procedure, written 2026-10-27. **The value convention below is proposed**, not yet agreed; marketing operations confirms it before first use and updates this file. Review required.

A tracking link is the destination URL plus UTM parameters that say where a visit came from. When every channel gets its own link, the team can see whether registrations came from the flyer, the sales email or social. When links are reused across channels, mistyped, or tagged twice, that answer is lost.

## Inputs

- The campaign name, turned into a slug with `node scripts/name.mjs` (for example `vis-us-<campaign>-q1-2027`). This slug is `utm_campaign` everywhere.
- The destination: for a webinar, the ON24 registration URL from the campaign record; for a CTA, the target page.
- The channels that need links, from the campaign template's steps (for a webinar: flyer, flyer QR code, sales email, social).
- Access to the HubSpot campaign (to save tracking URLs there), when available.

## Proposed convention

| Parameter | Rule | Example |
|---|---|---|
| `utm_campaign` | The campaign slug, unchanged | `vis-us-<campaign>-q1-2027` |
| `utm_source` | Where the link physically lives | `flyer`, `sales`, `on24`, `partner-site` |
| `utm_medium` | The type of channel | `print`, `qr`, `email`, `referral` |
| `utm_content` | Which link, when one asset has several | `register-button`, `qr`, `footer` |
| `utm_term` | Not used | — |

Lowercase, hyphens, no spaces, no personal names or contact details.

Webinar links:

| Channel | utm_source | utm_medium | utm_content |
|---|---|---|---|
| Flyer, clickable link (PDF) | `flyer` | `referral` | `register-button` |
| Flyer, QR code (print) | `flyer` | `qr` | `qr` |
| Sales email to RSMs (forwarded to customers) | `sales` | `email` | `register-button` |
| ON24 console CTA to an Accelerate page | `on24` | `referral` | `cta` |
| Social | **Clean link, no UTMs.** The social team adds its own so it can measure its own channels. Tell them so in the hand-off email. | | |

**HubSpot marketing emails:** check whether the account adds tracking to email links automatically before adding UTMs by hand. Don't tag the same link twice.

## Procedure

1. **Build each link** from the destination and the table with a URL parser (for example a short script), not by pasting strings: keep the destination's own query parameters, replace any UTMs it already carries rather than adding a second set, and keep a `#fragment` at the end.
2. **Save them** as tracking URLs on the HubSpot campaign (Campaign → Tracking URLs), so they report against it. If that isn't available, build them by hand with the same values.
3. **Open every link** in a private browser window: it must reach the right page for this campaign, not a past one.
4. **For a QR code,** encode the QR link and scan the finished artwork with a phone before it's approved.
5. **Record the links** in the campaign's Smartsheet row (Key Info), not in Git.

## Check links in a finished asset

Used by [lumenis-webinar-asset-check](../lumenis-webinar-asset-check/SKILL.md) and [lumenis-email-check](../lumenis-email-check/SKILL.md). First sort every link into one of two kinds:

| Kind | Examples | Check |
|---|---|---|
| **Promotional** | Register button, QR code, CTA, links to the campaign page | Destination is this campaign's; UTMs match the channel's row above; nothing tagged twice; no leftover UTMs from a donor asset; the QR code scans to the QR link |
| **Utility, legal and subscription** | Logo link to the home page, privacy policy, unsubscribe and manage-preferences links, view in browser, social profile icons | Goes to its own correct destination. **No campaign UTMs added.** Unsubscribe and preference links keep the platform's tokens (for HubSpot, `{{unsubscribe_link}}` and `{{unsubscribe_link_all}}`) and are never replaced with a copied URL |

Report pass or fail per link, with its kind.

## Open question

Whether ON24 passes UTM values from the registration URL into HubSpot isn't confirmed. Test it once with an identifiable registration through a tagged link and check the contact's UTM fields. ON24 also has its own source parameter (`partnerref`); marketing operations decides whether to use it alongside UTMs.
