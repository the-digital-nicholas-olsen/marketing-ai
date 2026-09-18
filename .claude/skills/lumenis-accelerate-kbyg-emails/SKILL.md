---
name: lumenis-accelerate-kbyg-emails
description: Draft individual Know Before You Go (KBYG) emails for KOLs presenting at a Lumenis Accelerate event. Discover the event in Smartsheet, use its KOL-to-session and KOL-to-deck mappings, and include Dropbox deck links already recorded there. Use for KBYG emails, presenter schedules or presenter briefing notes for an Accelerate city. Does not prepare or locate decks.
---

# Accelerate KBYG emails

## Outcome and boundary

Produce one plain-text email per KOL from the event's current Smartsheet records. Each draft states when the doctor is needed, their sessions, rooms, co-presenters, confirmed logistics and any Dropbox deck links assigned to them.

This skill consumes deck metadata. It does not create, edit, upload, locate or change permissions on decks, and it does not search Dropbox. A separate deck workflow prepares the file, creates the appropriate view-only link and records the KOL-to-deck relationship in Smartsheet before this workflow runs.

Use [references/kbyg-template.md](references/kbyg-template.md) for the output structure and [references/exemplar.txt](references/exemplar.txt) for tone and spacing.

## Process

### 1. Identify the event

Ask for the city, year and track when they are not already clear. Do not assume a division or a fixed Smartsheet workspace, folder hierarchy, sheet name or column name.

Search authorized Smartsheet content using the city and year. Inspect candidate results for the event identity and the fields needed below. Prefer a current event record that contains or relates:

- event dates, city, venue, address, check-in and confirmed logistics;
- sessions, tracks, dates, start/end times and rooms;
- KOL names, credentials, roles, arrival or preparation times and co-presenters;
- the KOL-to-session mapping; and
- the KOL-to-deck mapping, including whether a deck is required and its Dropbox view-only link.

Smartsheet structures may evolve. Match fields by their meaning and relationships, not by a hardcoded location or exact label. If multiple event records match, show the candidates and ask the requester to choose. If the necessary records cannot be found, identify what is missing rather than substituting another source.

### 2. Build and confirm the KOL roster

From the selected track and shared event sessions, build one table: **KOL -> sessions (day, time, room, role, co-presenters)**. Use the event's personnel or role data to distinguish KOLs from staff and team labels.

Ask the requester to confirm the roster and supply only information absent from Smartsheet, such as an incomplete name or genuinely personal note. Do not use a public agenda page to fill gaps or resolve conflicts. Ask the event owner when Smartsheet is ambiguous.

### 3. Resolve deck links from Smartsheet

For each KOL-session assignment, read the associated deck requirement and Dropbox link from the KOL-to-deck mapping:

- When a deck is required and one unambiguous Dropbox view-only link is recorded, include it in the relevant session entry.
- When the mapping explicitly says no deck is required, omit the deck line.
- When a deck is required but the mapping or link is missing, ambiguous or malformed, flag that session for the event owner and leave the affected draft incomplete.
- Never infer that a deck is required merely because the KOL presents, and never search Dropbox manually for a replacement link.

Report mapping problems together before drafting so the source record can be corrected through the separate operational workflow.

### 4. Write each email

Fill [the template](references/kbyg-template.md) from confirmed Smartsheet values:

- Build "When we need you" from that KOL's earliest recorded commitment, including an arrival, review, rehearsal or mic time when applicable.
- Include session descriptions or taglines only when they are stored in Smartsheet. A title is sufficient when no tagline is recorded.
- Explain a new or replacement session only when Smartsheet identifies it and contains the approved preparation note; otherwise ask the event owner.
- Name co-presenters and distinguish presenting from MC, hosting or introduction roles.
- Include the rest of the relevant track's agenda from Smartsheet so the KOL can plan around their assignments.
- Include only confirmed logistics held in Smartsheet or explicitly supplied by the requester.
- Use the Dropbox link only where the KOL-to-deck mapping requires it.

### 5. Check and deliver

Run [references/checks.md](references/checks.md). Deliver each email as its own plain-text block or file named `KBYG - Dr. <First> <Last>.txt`, followed by one consolidated list of unresolved Smartsheet fields or mappings. Do not represent a draft with unresolved required data as ready to send.

If a sent email's schedule changes, draft a short correction containing only the updated information and any affected deck link.

Apply [references/guardrails.md](references/guardrails.md) and run [Ted's clarity gate](../copy-clarity-gate/SKILL.md) before delivery.
