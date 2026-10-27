---
name: lumenis-on24
description: Set up and wrap up a Lumenis ON24 webinar - clone a donor event, set title, date and time, fix the notification emails, build the registration page, form, speaker bio and call to action, upload slides; after the show, swap the CTA, render the recording and add chapters. Use for any Vision webinar in ON24.
---

# ON24 webinar

Owner: marketing operations (EJ for Vision); chapter titles by the content owner (Ted).
Status: draft procedure, written 2026-10-27 from a screen-share walkthrough of the Vision setup. Not yet run end to end by an agent. Review required.

ON24 holds the registration page, the live room, the reminder emails and the on-demand recording. Most mistakes come from what a cloned event carries over: old slides, old copy, and email headers with the wrong preview text.

## Inputs

- Title and subtitle (the subtitle is the ON24 event name; the title sits on the hero image), date, division, and the **confirmed live start with its time zone** from the campaign record. The usual Vision pattern is 5:00 PM PT; never assume it. No confirmed start blocks step 1.
- The **donor event ID** recorded in the campaign template's AI Instructions (step D3). It lives in Smartsheet so it can change without a repository edit.
- The ON24 notification email HTML templates. **Not in the repository yet**: until they're added under `references/`, rebuild each email from the donor and check the preview text by hand.
- For the page: the content owner's handoff (copy, 1200 x 800 hero image, bio, headshot link, KOL email and LinkedIn).
- The call-to-action destination: the next Accelerate's page with a HubSpot tracking link, or Book a Meeting when no Accelerate is coming up (link rules in [lumenis-utm-links](../lumenis-utm-links/SKILL.md)).

Works through the person's logged-in ON24 session in the browser. Never enter credentials.

## Setup (around T-42)

1. **Clone** the donor event with *Create a copy*. Set the event title, date, the confirmed live start and time zone, and *Live video*. Save and record the new event ID and URL in Smartsheet.
2. **Remove carried-over media:** delete the donor's slides and video clips.
3. **Notification emails:** registration confirmation, reminder 2 days before, reminder 2 hours before, thank you for attending, sorry we missed you. Replace each body with the template HTML, keep ON24 merge fields (event title, date, time), and check the preview text in the HTML header, which the donor got wrong before. Send each to yourself as a test and run [lumenis-email-check](../lumenis-email-check/SKILL.md) on at least the confirmation and the 2-hour reminder.
4. **Registration page:** placeholder background and text until the handoff arrives. Form fields, all required: first name, last name, email, phone, practice name, vision position, city, postal code, state, country. Check the submit button uses the brand color.
5. **Call to action** in the console: tracking link to the upcoming Accelerate, or Book a Meeting.

## Final page (around T-32)

6. Put in the handoff copy with real formatting (bullets, bold, color) so the body isn't one flat block. Hero image at 1200 x 800.
7. **Speaker bio:** click the speaker picture on the registration page → edit → Console Builder → Speaker Bio → gear → Configuration → Edit. Update name, bio, photo, email and LinkedIn.
8. Register once as a test with an identifiable address and confirm the confirmation email arrives.

## Slides (around T-7)

9. Upload the final deck and any videos. Page through every slide: ON24 sometimes duplicates slides on upload. Play each video.
10. **Presenter links:** Webcast Elite → All Events → link icon → Presenter link → copy. These go to the KOL and host through [lumenis-kol-comms](../lumenis-kol-comms/SKILL.md). Never send the attendee link instead.

## After the show

11. **T+1:** change the console call to action to Book a Meeting; the Accelerate it pointed to will have passed for on-demand viewers.
12. **T+2:** Console → Archive → video only, horizontal, MP4 → render. Wait for the render, download it and save it to the project's Video folder.
13. **T+5:** draft chapter titles from the recording's transcript and add them to the on-demand version. The content owner approves them.

## Stop and ask

- The donor event ID is missing from the template.
- A required form field can't be made required, or the button color can't be changed: note it and ask marketing operations.
- Duplicate slides persist after a re-upload.

Turning the event live, changing a live event's time, or sending the presenter link to anyone other than the presenters needs the owner's explicit go-ahead.
