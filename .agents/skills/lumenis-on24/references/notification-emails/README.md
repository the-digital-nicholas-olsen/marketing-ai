---
title: ON24 notification email templates (Vision)
summary: Six ON24 notification emails rebuilt as clean single-file HTML with ON24 merge fields, the HubSpot-hosted webinar header, Vision social links and no carried-over preheader.
status: draft; rendered, link-checked and loaded into an ON24 test event 2026-10-28; test sends and Litmus not yet run
owner: marketing operations (EJ for Vision)
reviewed: 2026-10-28
---
# ON24 notification emails

One HTML file per ON24 notification. Each is complete on its own: inline CSS, no `<style>` block, a 600px maximum width that shrinks to the phone width, and ON24 merge fields (`#EVENTTITLE#`, `#EVENTDATE#` and so on) left for ON24 to fill. Nothing in a file is event-specific, so the same files work for every Vision webinar.

| ON24 email | When | File | Subject line |
|---|---|---|---|
| Registration confirmation, *Pre Event* tab | Immediately after registration | [registration-confirmation.html](registration-confirmation.html) | `Thank you for registering` |
| Registration confirmation, *Post Event* tab | Registration after the live date | [registration-confirmation-on-demand.html](registration-confirmation-on-demand.html) | `Thank you for registering` |
| Reminder email | 2 days before | [reminder-2-days.html](reminder-2-days.html) | `Reminder - #EVENTTITLE#` |
| Reminder 2 email | 2 hours before | [reminder-2-hours.html](reminder-2-hours.html) | `Reminder - #EVENTTITLE# begins in 2 hours - #EVENTDATE# at #EVENTTIME# #EVENTTIMEZONESHORT#` |
| "Thank You for Attending" | 1 day after | [thank-you-for-attending.html](thank-you-for-attending.html) | `Thank you for attending` |
| "Sorry We Missed You" | 1 day after | [sorry-we-missed-you.html](sorry-we-missed-you.html) | `Sorry you couldn't attend this Webcast` |

Reminders 3 and 4 stay off. The donor's From label (`Event`) and reply-to (`do_not_reply@on24event.com`) were observed on 2026-10-28; confirm them with marketing operations rather than treating them as approved.

## Put a template into ON24

1. Event → Overview → Email Notifications → *Preview/Edit* on the email.
2. Set *Email Template* to *Custom*, open *Code View*, select all and replace with the file's contents. Pasting without selecting first appends a second copy.
3. Set the subject from the table above. In the 2-hour reminder, keep the space between `#EVENTTIME#` and `#EVENTTIMEZONESHORT#`; the donor had none, so the subject read "5:00 PMPDT".
4. Save, then *Send Test* to yourself and check the preview text your inbox shows under the subject. It must restate the email, never another campaign.
5. Run [lumenis-email-check](../../../lumenis-email-check/SKILL.md) on at least the confirmation and the 2-hour reminder.

## What changed from the cloned donor emails

Observed in the current Vision donor event on 2026-10-28, in all five emails:

- **Hidden preheader removed:** every email carried "Save up to $50,000 on triLift + FoLix", copied from an Aesthetics promotion. Inboxes show this text next to the subject. Each file now has a preheader that repeats its own first sentence.
- **Head metadata removed:** the `<title>` and share tags read "Black Friday Sale! Save on FoLix and triLift". The title is now `#EVENTTITLE#`.
- **Social links:** the footer icons linked to the Lumenis Aesthetic Instagram, Facebook, LinkedIn and YouTube accounts. They now use the Vision accounts linked from the Vision HubSpot promo emails.
- **Button:** the "Join the Event" image is now a coded button, so it still shows when images are blocked. It links to `#AUDIENCEURL#` as before.
- **Header image:** now uses its permanent HubSpot file URL instead of HubSpot's resizing link.

Wording and merge fields are otherwise unchanged.

## Images

All hosted in HubSpot portal 278427 and checked publicly reachable (HTTP 200, correct image type) on 2026-10-28.

| Image | URL | Size |
|---|---|---|
| Webinar header ("Lumenis Webinar", both divisions) | `https://information.lumenis.com/hubfs/on24-webinar-banner-600x138.jpg` | 1200 × 276, shown at 600 wide |
| White Lumenis logo | `https://information.lumenis.com/hubfs/Lumenis_RGB_Logo_White-2.png` | shown at 130 wide |
| Social icons | HubSpot's default white *Follow Me* icons under `information.lumenis.com/hs/hsstatic/TemplateAssets/static-1.262/…` | 20 × 20 |

The social icon URLs include a HubSpot asset version (`static-1.262`). If one stops loading, upload the four icons to the Files tool and update the `src` in every file.

## Editing the templates

The six files share one layout: header image, black title band, white body, button, black footer with logo and Vision social icons. Make a layout change in all six at once and render each before committing. Aesthetics webinars need the Aesthetic social accounts and a division review; don't reuse these files for Aesthetics unchanged.
