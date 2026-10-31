---
name: lumenis-accelerate-attendee-lists
description: Build every Accelerate attendee list from Smartsheet - the badge file for the badge printer, the OneTap check-in upload (after archiving and clearing the previous show), the Know Before You Go segment for HubSpot, and the attended list after the show for HubSpot and Salesforce. Use whenever an Accelerate needs a list of who is coming or who came. Smartsheet is the source; HubSpot is not.
---

# Accelerate attendee lists

Owner: EJ (marketing operations), with Kaelyn for badges and OneTap.
Status: draft procedure, written 2026-10-29 from the Vision Accelerate planning session; not yet run. Review required. Name and duplicate rules added 2026-10-30 from a completed badge build; owner to confirm.

Four lists come from the same source at different times. Building them one way keeps the counts consistent and stops anyone pulling a list from HubSpot, where form fills are not registrations.

## Source

The event folder's sheets in Smartsheet: **VIS Rep Approval**, **AES Rep Approval**, the **Flight** registration sheet and the **Non-Flight / Local** registration sheet. Read all four, then:

1. **Merge** on the person. Someone on an approval sheet and a registration sheet is one attendee.
2. **Email is not a unique ID.** A practice often routes several people through one inbox, so two names on one address are two people, not a duplicate. Match on surname plus practice and treat email as a supporting signal only.
3. **Keep** only rows that are approved and registered for this show (use each sheet's approval and status columns as the event's setup defines them; ask when a column's meaning is unclear).
4. **Division** comes from the sheet (VIS or AES), or the Division column on shared sheets.
5. **Flag, don't fix** whatever the rules below do not settle: rows without an email, duplicates that still conflict, names in all caps. Report them to the owner.

Use the connector's full row read (paginate). A column-filtered summary can omit rows.

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

## Lists

| Step | When | List | Fields | Goes to |
|---|---|---|---|---|
| E12 | T-11 | Badge file | First name, last name, account (practice), city, state, division, email | Badge printing vendor (they ask about ten days out). Two badge styles, Vision and Aesthetics. Tell them email is an ID only and must not print |
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

- Never build an attendee list from HubSpot contacts or form submissions.
- Attendee files contain personal data: keep them in OneDrive and the target system only, never in this repository, chat history beyond the task, or public links.
