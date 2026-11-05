---
name: lumenis-accelerate-attendee-lists
description: Build every Accelerate attendee list from Smartsheet - the badge file for the badge printer, the OneTap check-in upload (after archiving and clearing the previous show), the Know Before You Go segment for HubSpot, and the attended list after the show for HubSpot and Salesforce. Use whenever an Accelerate needs a list of who is coming or who came. Smartsheet is the source; HubSpot is not.
---

# Accelerate attendee lists

Owner: EJ (marketing operations), with Kaelyn for badges and OneTap.
Status: draft procedure, written 2026-10-29 from the Vision Accelerate planning session; not yet run. Review required. Name and duplicate rules added 2026-10-30 from a completed badge build; owner to confirm. [Badge file build](#badge-file-build) rules added 2026-11-05 from a completed two-division badge build; Kaelyn reviewed each rule during the build.

Four lists come from the same source at different times. Building them one way keeps the counts consistent and stops anyone pulling a list from HubSpot, where form fills are not registrations.

## Source

The event folder's sheets in Smartsheet: **VIS Rep Approval**, **AES Rep Approval**, the **Flight** registration sheet and the **Non-Flight / Local** registration sheet. Read all four, then:

1. **Merge** on the person. Someone on an approval sheet and a registration sheet is one attendee.
2. **Email is not a unique ID.** A practice often routes several people through one inbox, so two names on one address are two people, not a duplicate. Match on surname plus practice and treat email as a supporting signal only.
3. **Keep** only rows that are approved and registered for this show (use each sheet's approval and status columns as the event's setup defines them; ask when a column's meaning is unclear). The badge file uses its own inclusion rule: see [Badge file build](#badge-file-build).
4. **Division** comes from the sheet (VIS or AES), or the Division column on shared sheets. The badge file uses its own division rules.
5. **Flag, don't fix** whatever the rules below do not settle: rows without an email, duplicates that still conflict, names in all caps. Report them to the owner.

Use the connector's full row read (paginate). A column-filtered summary can omit rows. Confirm the read is not sampled and that the returned row count equals the sheet's total.

Also when reading the sheets:

- An approval row can hold two attendees. Attendee #2 is a person and counts.
- Exclude placeholder and test rows, and the approval sheets' summary rows, where the rep-name cell holds a metric label rather than a person.
- City and state exist only on the registration sheets, so approval-only attendees have none. Leave those badge fields blank rather than guessing.

### Name normalization

The badge carries the name the person goes by. The registration sheets' name fields are filled from a government ID, so they are not always that name. Apply in order:

1. **Nickname** wins over the legal first name.
2. **Middle name used as a first name:** take the first name from the rep approval sheet, not the registration sheet.
3. **Spelling variants** of one name: take the registration sheet's spelling.
4. **Two surnames on file:** if one contains the other it is a truncation, so use the fuller surname. If they share nothing, check whether either surname matches another attendee at the same practice - a match identifies the married or professional name, so use that one. With no match, use the registration sheet.
5. **Omit middle names** from the badge file.
6. **A missing surname does not block the list.** Leave it blank and report it.

### Duplicate resolution

1. A shared email is not a duplicate.
2. The same person entered twice on one sheet collapses to one row. Check whether one of the two rows has values shifted into the wrong columns before choosing which to keep.
3. The same surname at one practice is usually a couple or a relative, not a duplicate.
4. When duplicate rows disagree on city or practice name, confirm the practice's location from a public source instead of taking the first row. A city field sometimes holds the nearest airport rather than the practice's town.
5. A person already counted who later appears on a second sheet does not raise the headcount. When re-checking for additions, compare names, not row counts.

## Badge file build

These rules apply to the badge file (E12) only, on top of the Source, name and duplicate rules above. Where they differ, they win for badges. The other lists keep the rules above.

### Who gets a badge

1. **Include every possible registrant** and record each person's status in a notes column, rather than dropping rows. Statuses: approved and registered; approved but not registered; registered but not on an approval sheet; RSM Approval = No; (AES) RSM confirmation blank. The owner removes anyone who shouldn't print.
2. **Cancellations come off.** Remove anyone marked cancelled on the flight sheet (Flights Booked? = CANCELLED) or reported cancelled by the owner.
3. **Rows marked "purchasing own flight" or "disregard"** on the flight sheet stay on the list. Only the booking is disregarded.

### Division (V or A)

1. **The approval sheet decides.** On VIS Rep Approval the person is Vision (V); on AES Rep Approval they are Aesthetics (A).
2. **Registration-only people take their rep's division.** Read the Sales Rep field on the registration sheet and match it to a rep on this show's approval sheets.
3. **Rep not on either approval sheet:** check the current division sales org chart in Smartsheet. Reps move between divisions, so older events' approval sheets are not reliable.
4. **Ignore the Division column on the shared registration sheets.** It records which form was used and is often wrong (for example, Aesthetics guests who used the Vision form). Override it and flag each override.
5. A practice whose name suggests the other division ("... Vision" on the AES sheet) still follows its rep and sheet.

### Practice name

1. **Person is on only one sheet:** use that sheet's practice name as entered, even when the email domain suggests a different practice.
2. **Two sheets give different names:** use the practice the person's email domain points to. Open the domain's website to confirm the business name when the domain alone doesn't make it clear.
3. **Generic email** (gmail, yahoo, outlook, icloud and similar): use the flight registration sheet's practice, then the other registration sheet's.
4. **Junk or placeholder values** (a title such as "dr", the person's own name, one label covering two practices): use the other sheet's value and flag it.
5. Co-workers on the same approval row as someone whose practice was corrected can take the corrected name so their badges match. Say so in the flags.

### Badge names

1. **Nicknames:** use a nickname only when it is entered as the first name on the AES or VIS Rep Approval form. Do not switch to a nickname suggested only by an email address (for example, `drkate@` does not turn "Katherine" into "Kate").
2. **Strip titles** such as "Dr" from name fields.
3. **Missing or partial surname:** ask the owner for the name rather than leaving it blank, and flag it until it's supplied.
4. **Shifted values** (a first name in the last-name field, a surname in the email field) can hide a second attendee. Flag any stray name found in an email or notes field.

### Possible typos

1. **Compare every name with the person's email address.** A surname that differs from the email by a letter or two (the approval sheet says "Jonhson", the email is `kjohnson@`) is a possible typo.
2. **A flight registration settles it** when one exists, because flight names come from a government ID.
3. **No flight registration:** do a quick web search for the practice's website (staff or doctor pages) or the person's LinkedIn profile showing the name spelled out.
4. **Recommend a spelling** using the email and the search result, and say whether the search confirmed it. Front-desk and esthetician staff often aren't listed online.
5. **Do not change the name until the owner approves.** Keep it flagged until the spelling is confirmed or approved.

### City and state

1. Approval-only people have no city or state. Leave them blank, even when a co-worker at the same practice registered a city: practices can have several locations.
2. Different people at one practice who entered different cities each keep their own entry. Flag the difference but don't pick one.

### Also flag while the sheets are open

These don't change the badge file. Report them to marketing and the reps, and do not edit the sheets.

- **Flight needed but no flight form:** approval rows with Flight Needed = Yes whose attendee is not on the Flight registration sheet. Group them by rep so each rep can follow up with their guests.
- **Booked without approval:** flight registrations with a ticket, or with Send to Travel Agent ticked, but no rep approval row. For Aesthetics, also apply the [RSM approval gate](../lumenis-accelerate-campaign/references/smartsheet.md#rsm-approval-gate).
- **Possible double booking:** one person with two flight rows that are both ticked Send to Travel Agent.
- **Stalled fares:** sent for fare approval with no ticket or cost after several days.

### Badge workbook

- **Registrants tab:** one row per person, with first name, last name, practice name, city/state, division (V or A), the source sheets and notes/status.
- **Summary tab:** counts by division and by practice, how many have no city or state, the sources read and the rules applied.
- **Flags tab:** issue, who, detail, and what was done. When showing flags again, show only the ones still open.
- **Check the saved file:** reopen it, check the row count, and confirm no person appears twice.
- **Success looks like:** everyone on any of the four sheets is either on the list with a division, or excluded for a stated reason (test row, duplicate, cancelled). Every judgment call is visible in Flags.
- **When an input is missing** (a sheet isn't shared, the connector can't read it, or a rep's division can't be found), stop that part, list what wasn't read, and don't guess to fill the gap.

The badge vendor file (fields in the table below) is cut from this workbook.

## Lists

| Step | When | List | Fields | Goes to |
|---|---|---|---|---|
| E12 | T-11 | Badge file ([build rules](#badge-file-build)) | First name, last name, account (practice), city, state, division, email | Badge printing vendor (they ask about ten days out). Two badge styles, Vision and Aesthetics. Tell them email is an ID only and must not print |
| D11 | T-4, Monday morning | Know Before You Go | Email, first name, last name, division | HubSpot static segment attached to Em2; set **Registered** in the Salesforce campaign |
| L1 | T-1 | OneTap upload | As OneTap's import template requires | OneTap, after the archive step below |
| P1 | T+3, Monday after | Attended | From OneTap check-ins | HubSpot segment for Em3 (sends Tuesday); set **Attended** in the Salesforce campaign |

### OneTap archive before upload (L1)

OneTap holds one show at a time. Before uploading:

1. **Export** all of the previous show's OneTap data and save it in that show's OneDrive attendee records folder. Open the export and check the row count.
2. Only then **delete** the previous show's data from OneTap.
3. **Upload** this show's list and check the count matches the Smartsheet list.

Never delete before the export is saved and checked.

## Output

Counts per list and division, the flagged rows, and where each file went. Save files in the project folder, put counts in Key Info. Imports into HubSpot or Salesforce and vendor hand-offs are done by the owner after review.

## Boundaries

- **Read-only in Smartsheet.** Building any of these lists never adds, edits or deletes rows, columns, forms or workflows. Use only read tools (search, column read, row read, find in sheet), and say so in the report.
- Never build an attendee list from HubSpot contacts or form submissions.
- Web searches used to check a spelling or practice search by name and practice only; never send attendee lists or contact data anywhere.
- Attendee files contain personal data: keep them in OneDrive and the target system only, never in this repository, chat history beyond the task, or public links.
