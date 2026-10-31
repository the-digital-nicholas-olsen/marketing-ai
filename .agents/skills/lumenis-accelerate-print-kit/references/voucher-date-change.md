---
title: Change the service voucher date
summary: Set a new redemption deadline on an Accelerate service voucher and leave the rest of the file unchanged.
status: draft
owner: Kaelyn (event logistics)
reviewed: 2026-10-30
---

# Change the service voucher date

Status: draft for review, not yet run end to end. Proposed reviewer: service lead. The file details below come from one 2026 voucher, so they are observed practice, not a standard.

Use this at step E8 of the [print kit](../SKILL.md) to change the redemption deadline on an Accelerate service voucher, also called the raffle certificate. It applies to both divisions. Change the date only. Everything else stays as it is.

## Inputs

- The latest voucher file. Use the editable source if one exists, otherwise `Accelerate-Raffle-Certificate-V4.pdf`, the print-ready master in the `Lumenis Vision US MKT - Graphic Templates` OneDrive folder.
- The event name. If neither the request nor the file name gives it, ask.
- The new date, or a number of days after the event.

## Choose the date

| The request says | Use |
|---|---|
| A date, such as "change it to January 15, 2027" | Use that exact date for a draft, and verify it is after the confirmed event end before handoff. |
| A number of days, such as "30 days after event" | Propose the event's last day plus that many calendar days; confirm that anchor with the service lead if the request does not establish it. |
| Neither | Propose 30 days after the event's last day as an unapproved draft. State the assumption and obtain the service lead's confirmation before treating it as the redemption term. |

To calculate the date:

1. Open the `Fast Facts` sheet in the event's Smartsheet folder and read the `Event Dates` row. The last date in that range is the event's last day.
2. Check it against the event's row in `<year> - Event Listing`. `Event Start Date` must match the first day. `Event End Date` must match the last day if it is filled in, but it is often blank.
3. Count calendar days from the last day, which is day 0. Do not treat 30 days as one month. The result can fall in a new month or year.
4. Write it as `Month D, YYYY`, with the month in full and no leading zero.
5. Keep the result even if it falls on a weekend or holiday, and give the weekday in the reply.

Stop and ask for the date if Smartsheet is unavailable, the event has no `Fast Facts` date, or the two sheets disagree. Stop if the date is not after the event's last day. Do not estimate the last day from the start date.

**Fictional example:** `Event Dates` reads "Mar 5-7, 2027" and the request says "30 days after event". The last day is March 7, so the new date is April 6, 2027, a Tuesday.

## Change the file

Work on a copy and save it as the next version, for example V4 becomes V5. Keep the earlier version.

1. Find the date in both places. It appears in the `Redemption deadline:` line on the black panel, and in the `Offer Terms` sentence that starts "Qualifying Service Agreement must be purchased on or before". Change both, with the same date.
2. Replace the whole date, including the day and year, even if only the month changes. Earlier edits may have split the date into separate pieces of text.
3. Edit the source if you have it, then export with the same PDF settings. If you only have the PDF, use a PDF editor or script that changes the text in place. Do not export the page to an image or cover the old date with a shape.
4. Set the new date in licensed ABC Arizona Sans Regular, at the size and color of the text around it. A PDF only holds the letters it already uses, so a new month can fall back to another font. Never accept a substitute font.
5. Keep each line's approved alignment; re-center only where the master is centered. A month with a different length changes the line width, so re-center the line rather than leaving a gap. The terms line must still fit inside the margins.
6. Save a full copy, not an incremental save. Each incremental save keeps the older version inside the file, including the old date.

Do not fix anything else while you are in the file. Report other problems, such as a name containing "Trial" in the embedded font list, and leave them for the owner to decide. A font correction is a separate approved master change; unresolved trial-font licensing blocks print release, even if the date edit itself is complete.

## Check before sending

- Both dates are identical and match the date chosen above.
- A text search of the file finds no old date, including in earlier saved versions.
- Page count, page size and bleed match the previous version.
- A before-and-after render shows changes only on those two lines.
- The date's weight matches the words around it at print size. Zoom in, because a font mismatch is easy to miss.
- Photos and logos are unchanged.

If the date cannot be changed without a font mismatch or a change elsewhere, stop and report it. Send nothing for print.

## Hand off

Give the owner the new file, the date, the weekday, how it was worked out and any problems found. Then follow step E8: the service lead confirms the date in writing before anything prints. Changing the file does not authorize printing, and a date the user gave still needs that confirmation.

## Open decision

"After the event" is counted from the last day here, but the [playbook](../../lumenis-accelerate-playbook/SKILL.md) counts event timing from Day 1. The service lead should confirm which applies, since it moves the deadline by about two days.

Keep voucher files and event dates outside Git.
