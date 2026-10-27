---
title: Webinar KOL message templates
status: reviewed with the team 2026-10-27; draft until the first live webinar, when Nicholas and each sender review the drafts against what was sent at the retro (P15) before these become approved
owner: Nicholas (recruitment), Ted (content stage), EJ (logistics), Kaelyn (post-event)
---
# Webinar KOL messages

Eight messages, in send order. Step IDs match the Vision *TEMPLATE - Webinar* sheet. Brackets are filled from the campaign's Key Info cells. These are starting points: the sender personalizes each one ("Great seeing you in Nashville..."). Four brackets recur:

- **[honorarium]:** the amount in the campaign record (K1/K4 Key Info). The usual webinar honorarium is $2,000, but always use the record. No amount in the record blocks K4.
- **[live time]:** the confirmed live start, from the campaign record. The usual pattern is 5:00 PM PT.
- **[tech check time]:** one hour before [live time], unless the record says otherwise.
- **[KOL time zone]:** resolved at recruitment (K4), the first message with a time in it, and saved in K4 Key Info as a named zone (America/New_York, not "UTC-5"). C1, D1 and C21 reuse it. Every time we send the KOL is shown in their zone, converted for that time's own date so daylight saving is right. See the skill's time zone step for how to find it and what to do when it's unclear.

| Step | Message | Timing | Sender |
|---|---|---|---|
| K4 | Recruitment | T-60 | Nicholas, Ted cc'd |
| C1 | Interview scheduling | T-53 | Ted |
| D1 | Tech check calendar invite, with presenter link | T-41 | EJ |
| C10 | Flyer approval | T-38 | Ted |
| C21 | Deck review, walkthrough request, social promo ask | T-17 | Ted |
| L5 | Thank-you | T-0 night | Ted |
| P6 | Invoice request | T+3 | Kaelyn |
| P5 | Handwritten note | T+3 | Kaelyn, via note service |

## K4 Recruitment

**Subject:** Invitation to lead a Lumenis webinar on [topic], [proposed date]

Hi Dr. [Last name],

[Optional: [RSM first name] on our team recommended you, and ]I'd love to have you lead a Lumenis Vision webinar on [topic]. We're looking at [day, date] at [live time] [KOL time zone], and we have some flexibility around that date if it doesn't work for you.

Our webinars draw a strong audience: usually about 100 eye care professionals live and about double that on demand, with some reaching 500 viewers in total.

We offer a [honorarium] honorarium. Here's the time we'd ask of you:

- **A 1-hour interview** with Ted, who leads webinar content on our team (cc'd), so we can build the webinar around your experience.
- **One or two rounds of review** on the promotional flyer and the slide deck we create from that interview.
- **A 1-hour deck walkthrough** with Ted[ and the Lumenis regional sales manager who will host the session] before the event.
- **A tech check** starting 1 hour before go-live on the day.
- **The live webinar itself**, about 1 hour, at [live time] [KOL time zone] on [date].

If you're interested, just reply here and Ted will find a time for the interview. I'm happy to answer any questions first.

Thank you for considering it,
Nicholas

*Notes:* include the host clause only when a host is confirmed; don't name the host here. Use the RSM clause only when an RSM did recommend the KOL, and replace it with a personal opener when there's a better one. Don't ask for a social promo here: it's optional, and asking up front could put a KOL off. It comes later, with the deck (C21). Audience figures are the team's stated averages (2026-10-27); update them here when they change. Both times are in the KOL's zone (from K4 Key Info); if the zone isn't settled, the draft waits.

## C1 Interview scheduling

Sent as a reply on the recruitment thread. **Subject:** Re: Invitation to lead a Lumenis webinar on [topic], [date]

Hi Dr. [Last name],

Thank you for saying yes. We're excited to build the webinar with you.

The first step is a 1-hour conversation with me over Teams. I'll ask about your experience with [product or topic], and we'll use your answers to shape the title, the flyer and the slides. There's nothing to prepare; I'll record the call so you don't have to repeat yourself later.

Do any of these times work for you?

- [Option 1: day, date, time in KOL time zone]
- [Option 2]
- [Option 3]

If none of them fit, send me two or three times that do and I'll make one work.

Thanks,
Ted

*Notes:* the options come from Ted's Outlook calendar (see the skill's interview scheduling step): three free hours on or before T-45, shown in the KOL's time zone from K4 Key Info. If Ted is free at 11:00 AM PT and the KOL is on the East Coast, offer 2:00 PM ET. The Teams invite is titled "Lumenis webinar interview: Dr. [Last name]", with recording on.

## D1 Tech check calendar invite

**To:** KOL, host, Ted · **When:** [date], from [tech check time] to the confirmed end of the live session · **Title:** Lumenis webinar: tech check at [tech check time], live at [live time]

Hi Dr. [Last name],

This holds your time on webinar day. We'll start with a tech check at [tech check time] [KOL time zone] to make sure your audio, video and slides all work, then go live at [live time] [KOL time zone]. The webinar runs about an hour.

Your personal presenter link: [presenter link]. It's just for you, so please don't share it.

Please join from a computer with good audio, in a quiet room.

EJ

*Notes:* the invite is sent after the ON24 event exists (D3), so the presenter link goes in from the start; it comes from ON24 (see [lumenis-on24](../../lumenis-on24/SKILL.md)). Never paste the attendee link by mistake. Times are in the KOL's time zone. This replaces the separate presenter-link email the team dropped on 2026-10-27.

## C10 Flyer approval

**Attachment:** flyer PDF · **Subject:** Please review your webinar flyer: [webinar title]

Hi Dr. [Last name],

Thanks again for the great interview. Attached is the promotional flyer for your webinar on [date]. It's what we'll share with our sales team, on social media and in our email invitations.

Please check three things:

1. **The title and description** match what you're comfortable presenting.
2. **Your bio** is accurate and up to date.
3. **Your headshot** is the one you'd like us to use. If you have a preferred photo, just send it over.

If everything looks right, a quick "approved" is all I need. If you'd like changes, reply with them and I'll send a revised version. We'd like to start promoting by [date, T-30], so a reply by [date, T-34] keeps us on schedule.

Thanks,
Ted

*Notes:* send only after the flyer has passed its check. Save the written approval in the project `_Context/` folder.

## C21 Deck review and walkthrough request

**Cc:** host, if any · **Link:** deck (view and comment) · **Subject:** Your webinar slides are ready for review: [webinar title]

Hi Dr. [Last name],

Your slides for [date] are ready: [deck link]. We built them from your interview, so most of it should sound familiar.

When you look through them, I'd love to know two things:

1. Are you comfortable presenting each slide in your own words?
2. Is anything wrong, out of date, or something you wouldn't say?

I'd also like to book up to an hour with you[ and [host name], who will host the session,] to walk through the deck together. Our presenters are at their best when they've gone through it with us first and can picture how it will feel live. We want to make you a star, and this is the best way we know to do that.

Could you do one of these?

- [Option 1, on or before T-12, in KOL time zone]
- [Option 2]
- [Option 3]

One more thing: we'd love to record a short promo video with you that we'd post on our channels for you to share on yours. If you're interested, let us know, and we can talk through how it works at the end of the walkthrough.

Thanks,
Ted

*Notes:* send only after the deck has passed the claims check. Keep the promo ask this light; Ted explains it at the end of the walkthrough (C22), and recording it is step C26.

## L5 Thank-you

**Cc:** Nicholas, host · **Subject:** Thank you for tonight, Dr. [Last name]

Hi Dr. [Last name],

That was great, thank you! [One personal line: something from before the show, or what the audience's questions said, e.g. "You could tell from how in-depth the questions got that people were energized."]

[Optional: one specific moment that worked, in a sentence.]

You'll hear from Kaelyn on our team in the next few days about your honorarium. Thanks again for sharing your experience with our community.

Ted

*Notes:* a starting point; Ted rewrites it in his own voice each time. Keep it short and informal: praise only. No attendance numbers (they may be lower than the recruitment email suggested), no promises about the recording, and nothing about what happens next apart from the honorarium line.

## P6 Invoice request

**Subject:** Your [honorarium] honorarium for the [month] Lumenis webinar

Hi Dr. [Last name],

**Attachment:** the prefilled invoice form

Thank you for leading our webinar on [topic] on [date]. To process your [honorarium] honorarium, please fill in and return the attached invoice. A PDF reply to this email is perfect.

Thank you again,
Kaelyn

*Notes:* attach the prefilled invoice form from finance (Derek), with our side filled in: [honorarium], PO number from K8 Key Info, and "Lumenis webinar, [date]" as the description. It already asks the KOL for everything else, so the email doesn't list it. [honorarium] is always a bracket, never a typed amount, and must match the approved requisition; a missing PO blocks this message. This is the same form used for trade show speakers.

## P5 Handwritten note

About 60 words, to fit the card.

> Dr. [Last name],
>
> Thank you for leading our webinar on [topic]. Your experience with [one specific thing from the session] gave our audience something they can use in their own practice. We're grateful you shared your time with us.
>
> With thanks,
> The Lumenis Vision team

*Notes:* a template only; personalize the middle line for each KOL. Sign as the company, never with names. **Address:** the KOL's practice address from a web search first; check Salesforce only if they have several offices (it often holds duplicate contacts), and ask Ted or Nicholas if it's still unclear. **Expense:** code the note-service charge to marketing operations.
