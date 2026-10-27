---
name: lumenis-email-check
description: Test a finished Lumenis marketing email before it is scheduled - Litmus previews across email clients, dark mode, mobile responsiveness, links, images and send settings - and report pass, fail or blocked for each check. Use for HubSpot promo emails and ON24 notification emails, after the creative is in and before anyone clicks Schedule or Send.
---

# Email check

Owner: marketing operations, with the content writer for copy fixes.
Status: draft procedure, written 2026-10-27 at the Vision team's request. The client list and dark-mode rules are proposed defaults; confirm them against the team's Litmus plan. Review required.

Building an email and checking it are separate jobs. [lumenis-hubspot-email](../lumenis-hubspot-email/SKILL.md) builds it; this skill decides whether it's ready to schedule. It checks the email the way recipients will see it, in real clients, in dark mode and on phones, because the HubSpot preview hides most problems.

## Inputs

- The email: a HubSpot draft (ID or link) or an ON24 notification test send.
- Its intended send settings from the campaign record: subject, preview text, from name and address, send-to and don't-send lists, campaign, send date and time.
- Access to Litmus (the team's account, in the person's browser session) and a test inbox. No Litmus access → run checks 3-6 by hand and mark check 1 and 2 **blocked**, not passed.

Never enter credentials. This skill sends only test emails to approved test addresses.

## Checks

Run all seven, in order, and record each as **pass**, **fail** (with the fix) or **blocked** (with what's missing).

**1. Litmus client previews.** Send the email to the Litmus seed address or use HubSpot's Litmus integration, then open the previews. At minimum check: Outlook (current Windows desktop and Outlook.com), Gmail (web, iOS app, Android app), Apple Mail (macOS and iOS) and Yahoo. Fail on: broken or stacked-wrong columns, missing images, text running off the edge, buttons that render as plain text, fonts falling back to something unreadable.

**2. Dark mode.** In Litmus, look at the dark-mode previews for Apple Mail, Outlook and Gmail app. Fail on:
- a dark logo or black text that disappears on a dark background (fix: logo with a light outline or a version on a light pill, text colors that survive inversion);
- a white box around images that should be transparent;
- buttons whose text and background end up the same color;
- light-gray text that becomes unreadable.
Partial inversion (Gmail app) and full inversion (Outlook) behave differently, so check both.

**3. Mobile responsiveness.** At 320, 375 and 414 px wide, plus the 540-600 px desktop widths in the [HTML email rules](../lumenis-hubspot-email/references/html-email-rules.md) (Litmus mobile previews, or the HubSpot mobile preview plus a real phone): columns stack in reading order, body text is at least 14 px, headings don't wrap one word per line, buttons are at least 44 px tall and full width or centered, no horizontal scroll, images scale without distortion.

**4. Links.** Click every link in the test email, including the logo, footer and view-in-browser link. Each goes to its real destination with the intended tracking parameters; no placeholders, no stale UTMs, no recipient-specific unsubscribe links pasted from a preview.

**5. Images and accessibility.** Every image is hosted (absolute URL) and has alt text that makes sense if images are off. View the email with images off: the message and call to action still read.

**6. Copy.** Subject and preview text are set, read naturally together, and fit (subject about 50 characters, preview about 90). No leftover placeholder text. [Ted's clarity gate](../copy-clarity-gate/SKILL.md) has been run.

**7. Send settings (before scheduling).** Read back every setting that applies to this email type (table below) from the saved draft and compare each with the campaign record, including the **intended** send date, time and time zone. One field reading back correctly doesn't prove the others did.

## Which settings apply

| Setting | HubSpot regular email | HubSpot automated email | ON24 notification |
|---|---|---|---|
| Subject, preview text | Yes | Yes | Yes (check the preview text in the HTML header) |
| From name, from address, reply-to | Yes | Yes | Not applicable: set at the ON24 event level; note what it shows |
| Subscription type | Yes | Yes | Not applicable |
| Send-to and don't-send lists | Yes | Not applicable: the workflow decides who gets it | Not applicable: ON24 sends to registrants |
| Don't send to unengaged | When the campaign uses it | Not applicable | Not applicable |
| Campaign association | Yes | Yes | Not applicable |
| Send timing | Intended date, time and time zone | The workflow step and delay that send it | The ON24 trigger (for example 2 days or 2 hours before the live start) matches the event's confirmed time |

Record "not applicable" with the reason in the report; it counts as a pass for that row.

## Two stages

1. **Before scheduling:** run checks 1-7. The email is ready to schedule only when every applicable check passes.
2. **After a person schedules or publishes it:** reopen the email and read back the **saved** send date, time and time zone (or the workflow or ON24 trigger) and the lists once more. Record this read-back in the same report. A mismatch means unschedule and fix before the send time.

## Report

```
Email check: <email name> · <date>
1 Litmus previews   pass
2 Dark mode         fail: logo disappears in Outlook dark; use outlined logo
3 Mobile            pass
4 Links             pass (9 links)
5 Images + alt      pass
6 Copy              pass
7 Send settings     blocked: send-to audience list not chosen yet
Ready to schedule: no
After scheduling:   not run yet
```

Put the report link in the campaign's Smartsheet row. Scheduling and sending stay with the person who owns the email.

## Mistakes to avoid

- Passing an email on the HubSpot preview alone. It doesn't show Outlook or dark mode.
- Checking dark mode only in Apple Mail. Outlook and Gmail invert differently.
- Re-checking only the part that was fixed. Re-run every check after any change to the HTML.
