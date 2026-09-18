---
name: lumenis-accelerate-kbyg-emails
description: Draft individual Know Before You Go (KBYG) emails for the KOLs presenting at a Lumenis Accelerate event, built from that event's Smartsheet (agenda, rooms, times, presenters, venue). Use when someone asks for KBYG emails, presenter schedules or "know before you go" notes for an Accelerate city. Produces plain-text drafts ready to paste into an email, with deck-link slots the sender fills in.
---

# Accelerate KBYG emails

## What this produces

One plain-text email per KOL, ready to copy and paste. Each tells the doctor exactly when they're needed, what they're presenting, where and with whom, and what else is happening that weekend, in a warm, organized voice that makes them feel expected and looked after.

Every email follows one template ([references/kbyg-template.md](references/kbyg-template.md)). What changes from email to email is the KOLs, sessions, times, rooms, dates, city and venue, and all of it comes from Smartsheet. [references/exemplar.txt](references/exemplar.txt) (a fictional event) shows a finished email to match for tone, spacing and detail.

The drafts leave slots for deck links rather than links themselves. The person sending the emails adds those, and the skill tells them exactly where (step 6).

## Process

### 1. Pin down the event

Ask the requester for the **city** and **year**, and which **track** the emails are for: Vision (eye care) or Aesthetics. Vision is the usual case.

### 2. Find the event in Smartsheet

Accelerate events live in the **Vision Marketing Events** workspace, in a folder per year (e.g. **2026 Accelerates**), with one subfolder per event named by month and city (e.g. **09 Nashville**). If the folder isn't where expected, search Smartsheet for the city name. If more than one folder could match, show the options and let the requester choose.

Read three sheets in the event folder:

| Sheet | What it supplies |
|---|---|
| **Agenda** | Day header rows (e.g. "DAY 2 – SATURDAY, SEPTEMBER 26"), then per session: Session, Track, Room Assignment, Start, End, **Speaker / KOL Credentials**, **KOL Arrival / Mic Time**, Notes |
| **Show Details** | City, Hotel / Venue, Venue Address, Valet Info, and the public agenda page link (the "Hubspot Agenda-Page Content" row) |
| **Lumenis Personnel** | Lumenis staff names, used to tell staff apart from KOLs |

Order each day's sessions by start time. Rows may not come back in time order.

### 3. Build the KOL roster

For each session in the chosen track (plus "All" sessions), read the Speaker column. A name is a **KOL** when it isn't on the Lumenis Personnel sheet and isn't a team label (Clinical, Sales, Meded, and so on). Speakers are usually listed by last name. Roles come in parentheses: "Rivera (MC)" means that doctor hosts the session rather than presenting it.

Before drafting anything, show the requester one table: **KOL → each session (day, time, room, role, co-presenters)**. Ask them to confirm it and to supply what the sheet doesn't hold:

- the KOL's first name and title, if the sheet has only a last name;
- what the **KOL Arrival / Mic Time** is for (a presenter review, a mic check, a rehearsal) and where it happens;
- any session that's **new** or **replaces** one on the public agenda, and what to tell the KOL about it (for example, "remixes material you already know");
- anything personal: a returning KOL, someone who wants a review call.

Confirming first costs one message; a wrong roster costs every email.

### 4. Pull the public-facing details

Open the agenda page linked in Show Details and read every day. Later days usually sit in hidden tabs, so read the page's full text rather than only what's visible. Take **session taglines** from here, since Smartsheet has titles only. For **times, rooms and presenters, Smartsheet wins**. When the page and the sheet disagree, name the difference in your summary so the requester knows the public page may need updating.

### 5. Write each email

Fill [the template](references/kbyg-template.md) for each KOL. The patterns that make these emails work:

- **Their weekend, first.** "When we need you" is built from that KOL's own earliest commitment: their Arrival / Mic Time, or their first session if that's earlier. Invite them to the check-in and reception, then say plainly they're not needed until that first commitment. Doctors are busy, and a clear "you're free until 7 PM Friday" is a kindness.
- **Explain what's new.** When a KOL is in a new or replacement session, add the short "A new session" section: the slot it takes over from the public agenda, when you'll review it together, and how much prep it needs.
- **Show who's beside them.** Each session line names co-presenters ("with Dr. Patel and Dr. Lee") so they know who they're sharing the stage with.
- **Give a full picture.** "The rest of <track>'s <City> agenda" lists meals, receptions, showcases and the sessions they aren't in, so they can plan the time around their own.
- **Keep logistics to what's confirmed.** Use the Venue, Address and Valet Info from Show Details. Leave out anything the sheet doesn't hold.
- **Keep the tone warm and plain.** Open with "We're excited to have you…" and close with the thank-you and "See you in <City>."

### 6. Deck links: hand-off to the sender

Under every session where the KOL presents, add this line:

`Deck: [ADD DECK LINK — <Session name>]`

Leave it off hosting or MC slots (for example, when the KOL introduces a keynote speaker).

Then, after the drafts, **always** give the sender this notice, filled in for the event:

> **Before you send: deck links needed.** These drafts don't include deck links. Add a link in each place marked `[ADD DECK LINK — …]`:
> - Dr. <Name>: <Session>, <Session>
> - Dr. <Name>: <Session>
>
> Use view-only links from the event's content folder in Dropbox. If a session has no deck, delete its placeholder line. Search each email for "ADD DECK LINK" before sending, and make sure nothing is left.

### 7. Check and deliver

Before handing over, run the checks in [references/checks.md](references/checks.md). Deliver each email as its own plain-text block or file named `KBYG - Dr. <First> <Last>.txt`, followed by the deck-link notice and any Smartsheet vs. agenda-page differences you found.

If an email has already gone out and the schedule changes, write a short correction with just the updated schedule (and deck-link slots), not a full re-send.

Scope and handling rules are in [references/guardrails.md](references/guardrails.md).

Before delivering, run [Ted's clarity gate](../copy-clarity-gate/SKILL.md) on the drafts.
