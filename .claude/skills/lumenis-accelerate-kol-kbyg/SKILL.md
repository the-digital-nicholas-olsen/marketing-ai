---
name: lumenis-accelerate-kol-kbyg
description: Prepare an Accelerate event's KOL presenter package. Draft Know Before You Go emails from the authorized schedule, trim evergreen presentation decks to that event's presenters, place revised decks in the event's content folder and add view-only deck links. Use for KBYG emails, presenter schedules or KOL deck preparation for an Accelerate city event.
---

# Accelerate KOL Know Before You Go

Reusable draft procedure; event-manager review required. Drafting only: this skill never sends email, publishes pages or uses an email platform. KBYG emails stay plain-text drafts in the work folder for the owner to send. Actual rosters, contact details, event records and revised decks stay in the operational and document systems, never in this repository.

## Required inputs

Resolve before drafting; ask for anything missing.

1. City, year, event dates, venue and the public agenda page for the event.
2. KOL roster and session-by-session presenter assignments, including co-presenters, MC or introduction roles, and any session that replaces one listed on the public agenda. Confirm which listed title and time slot a replacement takes over.
3. Which sessions supply a deck link and which do not.
4. Event-specific notes for the emails: presenter review meetings, preparation expectations, and anything to tell a returning presenter.

## 1. Gather sources

1. **Operational system first.** Read the event project in the event-management system (Smartsheet) for the KOL roster, presenter assignments, schedule, venue and logistics. It is the source of truth. Reconcile it with what the owner states; where they disagree, ask rather than choosing. Say plainly when the sheet is unreachable or has no presenter rows, and work from the owner's list.
2. **Public agenda page.** Read every day's times, rooms, session titles and taglines, plus venue, address, dates and check-in. Later days often sit in hidden tab panels, so read the page's full main-content text rather than only what is visible. The published page can lag the operational record; flag differences instead of silently correcting them.
3. **KBYG template.** Use the most recent approved KBYG document from the event-communications folder as the structure.

## 2. Draft one email per KOL

One plain-text file per presenter in the work folder. Keep the approved structure, with these standing conventions:

1. Opening: "We're excited to have you with us at Accelerate <City> <Year>…". Do not write "genuinely excited"; the intensifier reads as doubt.
2. When we need you: state the presenter's own earliest commitment, counting any review meeting. After the check-in and reception sentence, say that we would love to see them there but they are not needed until their first session at that day and time. Do not tell presenters to come early.
3. New session: a short section naming the slot it takes over from the published agenda, the review meeting, and whether it remixes familiar material.
4. Session schedule: day headers, then per session the time, session title and tagline, co-presenters, room, and a deck link only where one was supplied. MC or welcome slots and brand-new sessions carry no deck line.
5. "The rest of <division>'s <City> agenda": meals, receptions, showcases and the sessions this presenter is not in.
6. Logistics: venue and check-in only. Never invent parking, badge or travel details.
7. Formatting: a blank line between every schedule entry and every bullet. Close on the thank-you and "See you in <City>." No sign-off block.
8. Use bracketed placeholders for links until they exist, then replace and read the drafts back.

## 3. Prepare the presentation decks

Work on copies in the work folder: keep untouched originals and edited versions separately, and leave the shared evergreen originals unmodified. Dump each deck's slide text first, and remove slides by position with a script that asserts the slide names the expected person, drops the slide's relationship so no orphan parts remain, and reads the result back. Preserve every other slide.

| Deck | Section to review | Keep |
|---|---|---|
| Patient-conversion deck | presenter bio slides near the front | only KOLs presenting that session |
| Device and next-generation-care deck | business case studies | only KOLs presenting that session |
| Device-implementation deck | presenter bio slides | only KOLs presenting it who are not in the patient-conversion deck; delete all other bios |

Report to the owner, and stop for confirmation before uploading:

- which slides were removed, and from which deck;
- any presenter with no slide of their own, so one can be added;
- for each doctor whose bio was removed because they do not present that session, their name and their first presentation of the event: session, day, time and room;
- typos in names or credentials;
- before-and-after or clinical slides outside the reviewed sections that feature non-presenting doctors. Leave them in place unless told otherwise.

Flag any session whose specialty presenter is absent from the roster, rather than assuming coverage.

## 4. Place the revised decks

1. List the event storage root and look for a folder that already matches the same city and year. If one exists, stop and ask whether to use it and which subfolder, or to create a new one.
2. Otherwise create the event folder at the root, named for the city and year in the established pattern, not inside the evergreen library.
3. Upload the revised decks and verify each one by reading back its size and content hash against the local copy. Report the verification.

## 5. Deck links

Create a view-only link for each deck to be linked: anyone with the link, no expiration. Read every link back and confirm its audience and access level before pasting it into a draft. Check supplied links the same way and flag any that grant editing. Link decks from the event's content folder; links survive moves within the storage system.

## 6. Deliver

Hand the drafts to the owner. When a schedule changes after an email has already gone out, write a short correction containing only the corrected schedule and deck links.

Before delivering copy, run [Ted's clarity gate](../copy-clarity-gate/SKILL.md). For the surrounding campaign, see the [Accelerate skill](../lumenis-accelerate-campaign/SKILL.md).
