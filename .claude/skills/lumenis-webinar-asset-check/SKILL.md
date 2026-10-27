---
name: lumenis-webinar-asset-check
description: Check a webinar flyer or slide deck that the content owner built, before it goes to the KOL - links and QR codes, title and date, KOL bio and headshot, brand system, clarity and claims - and report pass, fail or blocked per item. Use after the flyer or deck is drafted and again after revisions. It checks; it doesn't design.
---

# Webinar asset check

Owner: Ted (content), with EJ for links.
Status: draft procedure, written 2026-10-27. Not yet run on a live webinar. Review required.

Ted builds the flyer and the deck his own way. This skill is the second pair of eyes before either goes to the KOL: everything a reader, a rep or a regulator would catch, checked the same way every time.

## Inputs

- The flyer (PDF or image) or the deck (PPTX or PDF), from the project folder.
- The campaign's Smartsheet rows: title and subtitle, date, confirmed live start and time zone, KOL, host (if any), division and product, tracking links.
- The KOL's entry in the [KOL library](../../../assets/kol-library/index.md) and their approved headshot in the HubSpot image library.

## Flyer check

| # | Check | Pass when |
|---|---|---|
| F1 | Registration link | Every clickable link and the QR code pass the link check in [lumenis-utm-links](../lumenis-utm-links/SKILL.md): this event's ON24 page, the flyer's own tracking values, QR scanned with a phone |
| F2 | Title and subtitle | Match the campaign record exactly, with no repeated words between them |
| F3 | Date and time | Date, live start and time zone match the record; the weekday is right for the date |
| F4 | KOL | Name, credentials and practice spelled as in the KOL library; the bio matches the library or the KOL-approved version; the headshot is the approved one |
| F5 | Host | Named only if a host is confirmed in the record |
| F6 | Brand | One brand system for the product (Lumenis Corporate, OptiLIFT or OptiLIGHT), applied as [lumenis-product-design](../lumenis-product-design/SKILL.md) describes; logo and colors correct |
| F7 | Clarity and spelling | [Ted's clarity gate](../copy-clarity-gate/SKILL.md) run on the headline and body; no spelling, grammar or punctuation errors, product names styled correctly |
| F8 | Claims | [lumenis-claims-check](../lumenis-claims-check/SKILL.md) reports nothing failing, unsupported, blocked or missing |
| F9 | File name | Follows the naming convention, saved in the project's Flyer folder |

## Deck check

| # | Check | Pass when |
|---|---|---|
| D1 | Claims | lumenis-claims-check on every slide, including chart labels, footnotes, images with text and speaker notes, reports nothing failing, unsupported, blocked or missing |
| D2 | References | Every supported claim's citation is on its slide or a references slide, matching the claims library |
| D3 | Safety text | The indication and warning text the product's [regulatory file](../../../assets/regulatory/README.md) requires is present, usually on a closing slide |
| D4 | KOL disclosure | Ask the regulatory owner whether a paid-speaker disclosure slide is required, and record the answer here once known. Don't write disclosure wording yourself |
| D5 | Title slide | Title, subtitle, KOL name and credentials, date match the record |
| D6 | Brand | One brand system, consistent fonts and colors; no slides left from a donor deck |
| D7 | Images | Every photo is from the image library or has recorded rights; no patient photo without documented consent |
| D8 | Clarity and spelling | Clarity gate on slide titles; no spelling, grammar or punctuation errors on any slide |
| D9 | ON24 ready | 16:9 slides; videos also saved as separate files for upload; no slide depends on animation to make sense |

## Procedure

1. Run every row for the asset type. Record **pass**, **fail** with the fix, or **blocked** with what's missing.
2. Fixes are the content owner's call. Suggest the fix, don't make design changes yourself unless asked.
3. **After revisions,** re-run every row the change could affect, not only claims and links: new or edited copy (claims, clarity, title and date rows), a new image (rights and brand), a changed bio or credentials (KOL row), new links or a new QR code (link row). When in doubt, re-run the whole table.
4. Save the report in the project folder and link it from the Smartsheet row (C9 for the flyer, C20 and C23 for the deck). The flyer goes to the KOL (C10), and the deck (C21), only when every row passes.

## Report

```
Flyer check: <title> · <date>
F1 Links + QR    pass (2 links, QR scanned)
F4 KOL           fail: credentials say "OD, FAAO"; library says "OD"; confirm with the KOL
F8 Claims        pass
...
Ready to send to the KOL: no
```
