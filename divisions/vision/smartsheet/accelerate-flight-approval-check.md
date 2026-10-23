# Vision Accelerate flight approval check

- Division: US Vision Marketing only. The flight sheet holds both divisions; ignore every Aesthetics row and the AES Rep Approval sheet. Do not apply this procedure to Hospital.
- Scope: Accelerate events with a shared flight registration sheet. Non-flight registrations are out of scope.
- System: Smartsheet event folder (see the [event backend shape](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#shape)) and the internal sales org chart sheet, a Smartsheet copy of the monthly sales org chart. Traveler names, practices, contact details, sheet links, IDs and cost center codes remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, set 2026-10-07 and narrowed to Vision only on 2026-10-23. Sheet names, column names and Division values were observed read-only in two Q4 2026 event folders on 2026-10-23.

## Use this when

Someone asks to check flight approvals for an Accelerate city. The goal is to confirm that every Vision traveler on the flight sheet was approved through the VIS Rep Approval sheet, then fill in rep, manager and cost center details for the approved travelers.

The check is **read-only until the review list is approved**. Post the list and ask whether it looks good. Write nothing before a clear yes.

## Required inputs

- Read access to the event folder's `<City> Flight Registration (AES+VIS)` and `VIS Rep Approval - <Event>` sheets.
- Read access to the sales org chart sheet. Its name carries the org chart edition date; say which edition was used. If a newer monthly org chart PDF has been issued, update the sheet from it first (see "Reading the org chart").
- Write access to the flight sheet, used only after approval.

If either sheet is missing, or the city has more than one event folder, stop and ask.

## 1. Read the sheets

**Flight sheet.** Filter `Division` = `Vision` before anything else. Drop `Aesthetics` rows entirely: do not match, count, flag or fill them. Read the first, middle and last name columns (labelled "as it appears on your government ID"), `Company Name` (the practice), `Sales Rep`, `City`, `State` and the four output columns: `Salesperson Email`, `Sales Manager EMail`, `Cost Center` and `Lumenis Notes`.

Observed 2026-10-23: the `Division` picklist offers only `Vision`, but Aesthetics rows hold a typed `Aesthetics` value because validation is off. A blank or other value is unclear. List it in the review rather than guessing.

**VIS Rep Approval sheet.** Read `Rep Name`, `RSM Name`, `RSM Approval`, `Practice / Account Name` and both attendee name pairs (`Attendee #1` and `Attendee #2`). Each approval row can approve two people. A traveler qualifies as flight-approved only when their matching VIS Rep Approval row has `RSM Approval` = `Yes`. A matching name and practice alone is not approval. Blank, `No`, pending or unexpected values are not approved; list the current value in the review and leave those travelers' flight-sheet cells unchanged. Approval of the review list does not replace this requirement.

Confirm that every row was read, not a sample.

## 2. Cross-reference

A match needs the **name and the practice** to line up: flight `Company Name` against approval `Practice / Account Name`.

| Group | Meaning |
|---|---|
| In both sheets — approved | Vision traveler found on the VIS Rep Approval sheet with matching name and practice, and `RSM Approval` = `Yes` |
| In both sheets — not approved | Name and practice match, but `RSM Approval` is blank, `No`, pending or another value. Report the value; do not fill the flight row |
| Possible match (flag) | Nickname, maiden/married name or small practice-name difference. Show both versions and why they look alike; don't decide |
| Flight sheet only | Vision traveler not found on the VIS Rep Approval sheet |

For each flight-only traveler, find their sales rep and say where it came from: the flight sheet's `Sales Rep` cell, or the practice appearing elsewhere with a rep. If it can't be found, say so.

## 3. Post the review list and ask

Include:

- Name, practice and the sheets each traveler is on.
- Flags, with both spellings side by side, and the matching approval row's `RSM Approval` value.
- Matched travelers whose `RSM Approval` is not `Yes`, with the current value; these are not flight-approved and remain unchanged.
- For flight-only travelers: the salesperson's name and email, and their RSM's email (looked up as in step 4). This is for the report only; nothing is written to these rows.
- Practices with more than one Vision traveler.
- **Always flag a practice with more than two Vision travelers**, with every name, the practice's sales rep and that rep's RSM. If the rep or RSM can't be found, say so.
- Any Canada flag from step 4.

Ask: "Does this look good?" Apply the reviewer's corrections before writing.

## 4. After approval, fill the flight sheet

For travelers in **In both sheets — approved**, plus identity-match flags the reviewer confirms **whose matching VIS row also has `RSM Approval` = `Yes`**. Re-read the approval field immediately before writing; if it is no longer `Yes`, leave the flight row unchanged and flag it. A reviewer confirming an identity match or approving the review list does not override a missing or negative RSM approval:

1. **Sales rep:** `Rep Name` from the VIS Rep Approval row.
2. **`Salesperson Email`:** the rep's company address.
3. **`Sales Manager EMail`:** the rep's **RSM** (the sheet's `Reports To` on the rep's Vision Sales row), not the DSM.
4. **`Cost Center`:** the RSM's cost center (the rep row's `Manager Cost Center`). **Canadian guests always get the designated Canada cost center** (recorded internally), whoever the rep or manager is. Decide by where the guest or practice is located, not the rep's territory. If the country is unclear but the rep covers a Canadian territory, flag it instead of guessing.
5. **`Lumenis Notes`:** when more than one Vision traveler comes from the same practice, list all of their names on each of their rows so it's clear who flies together.

Leave flight-only rows unchanged unless told otherwise. If a rep or manager isn't on the org chart sheet, or a name is truncated or unusually formatted, leave the cell blank and list it in the report.

## Reading the org chart

Look reps up in the **sales org chart sheet**, not the PDF. It is a Smartsheet transcription of the org chart's Vision Sales page, named `Vision Sales Org Chart (<edition date>)`, with one row per named person:

| Column | Holds |
|---|---|
| `Name` | Person |
| `Title`, `Territory / Region` | As printed on the chart (RSM, DSM, SM / Sr. SM, ASM / Sr. ASM) |
| `Department` | `Vision Sales` |
| `Reports To` | The rep's RSM; for an RSM, the VP |
| `Manager Cost Center` | The `Reports To` person's cost center, typed from the chart |
| `Status` | Formula |
| `Email` | Preserved company address: an existing manual correction takes precedence over any generated candidate. Generate candidates for blank cells; refresh a prior candidate only if Notes explicitly marks it generated and unverified. Mark candidates unverified in Notes |
| `Notes` | Caveats, identity aliases, and email provenance: `manually corrected` / `confirmed`, or `generated - unverified`. An address with unknown provenance is protected, not assumed generated |

Find the rep and use `Reports To` and `Manager Cost Center`.

**No vacancy rows.** Vacant (`OPEN`) positions were removed from the sheet on 2026-10-23, so it lists named people only. To find out whether an RSM spot is open, check the org chart PDF. A rep or RSM who isn't in the sheet is flagged, never guessed.

**Format for new org charts.** When a new org chart is provided, copy the current sheet's format exactly. Read the existing sheet first to confirm the layout:

- Use the same columns in the same order (above). Don't add columns. Keep `Status` as a column formula. Do **not** require `Email` to be a column formula: it must support corrected values that survive refreshes. Any existing Email column formula must be reviewed before the refresh so it cannot overwrite corrections.
- One row per person, grouped by region: each RSM's row first, then that RSM's reports.
- Leave out vacant (`OPEN`) positions.
- Name the sheet `<Team> Org Chart (YYYY.MM.DD)` with the chart's edition date.

- **Open RSM** (confirmed from the PDF): leave `Sales Manager EMail` and `Cost Center` blank for that region's reps and list them in the review for the reviewer to decide. Never borrow an Aesthetics RSM.
- **Interim or acting titles:** treat them as the manager, and mention them in the report.
- **Same name on the Aesthetics chart:** the sheet holds Vision only, so ignore the Aesthetics page. Similar surnames are not the same person.
- **Truncated or unusual names:** a generated email candidate cannot be trusted. Preserve any already-corrected address and flag only unresolved identity or address questions.
- **Keeping it current:** org charts come out monthly. When a newer PDF arrives, update the sheet from its Vision Sales page, including each row's `Manager Cost Center` (or make a new sheet named for the new edition, in the format above), before running the check, following the email-preservation rules below. Read the PDF only for that refresh or to confirm an open position.

### Preserve corrected emails on every refresh

A new org chart updates names, titles, territories, reporting relationships and cost centers. It does **not** reset company email addresses. A name-derived candidate must never replace an existing corrected address merely because the new PDF prints a different name.

1. Before editing, preserve an internal snapshot of the existing sheet, including every Email value, its formula (if present), and relevant identity/alias notes. Keep this snapshot outside public Git.
2. Match people between editions using a stable employee identifier if one is available internally. Otherwise use the prior name/aliases and supporting identity information; do not match by row position, territory or a similar surname alone. A renamed person or someone changing region keeps their corrected email. Ambiguous matches are flagged rather than guessed.
3. Carry manually corrected or confirmed emails forward unchanged, even when names or territories change. Protect nonblank addresses with unknown provenance too. An explicit, separately authorized email correction may replace a protected value; a PDF refresh alone is not that authorization. Record corrected/confirmed status in Notes and retain alias context internally when the displayed name changes.
4. Generate a `firstname.lastname@` candidate when no existing address is available. An existing candidate may be recalculated from an updated name only when Notes explicitly identifies that address as generated and unverified, and identity matching is unambiguous. Keep such replacements marked generated and unverified. New people and corrected org-chart names therefore still receive updated candidates; corrected or confirmed emails always win. Do not apply or reapply an Email column formula over corrected cells, or rebuild the column from names. If the current column formula prevents corrected values, stop the affected refresh and resolve that formula setup before proceeding; do not discard corrections to fit the template.
5. If making a new edition sheet instead of updating the old one, transfer the preserved email values by confirmed identity. Keep the old sheet/snapshot until the new sheet has been checked. Do not silently drop a corrected address because its owner is absent or unresolved in the new edition; retain it in the internal snapshot for review.
6. Read the refreshed sheet back and compare all carried-forward emails with the snapshot. Confirm every protected address is unchanged; separately list intentional updates to generated, unverified candidates. Report any unexpected change, missing or ambiguous address and resolve it before treating the new edition as ready. In the same read-back, confirm that a changed display name did not regenerate a corrected email.

Fictional check: the PDF lists "Jonathan Example", but his previously corrected address uses "Jon". A later PDF changes his title or displays his full name. Preserve the corrected address rather than deriving a new one from Jonathan.

### Fictional example

A practice has three Vision travelers on the flight sheet. Two match an approval row exactly. The third is listed as "Liz" on the flight sheet and "Elizabeth" on the approval row. The review list flags the Liz/Elizabeth pair, flags the practice for having more than two travelers, and names its rep and RSM. The matching VIS rows have `RSM Approval` = `Yes`. After the reviewer confirms Liz is Elizabeth and approves the review list, all three rows get the rep's email, the RSM's email, the RSM's cost center and a note listing all three names.

## Avoid

- Writing to any sheet before the review list is approved.
- Treating a name/practice match as flight approval, or filling a flight row when its matching VIS row does not have `RSM Approval` = `Yes`.
- Changing the AES or VIS Rep Approval sheets. They are read-only references.
- Adding rows or columns to the flight sheet.
- Using the DSM as the sales manager.
- Overwriting corrected email addresses during an org chart refresh, or losing them when creating the next edition sheet.
- Copying traveler details, sheet links or cost center codes into public issues or pull requests.

## Missing information and decisions

- The VIS Rep Approval sheet has its own `RSM Name` column. The procedure uses the org chart sheet. If they disagree, flag both values and ask the reviewer to resolve the conflict before filling the affected manager fields.
- The flight sheet's `Division` picklist lists only `Vision`. The [event backend reference](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#known-source-template-failures) already records this. Until the template offers both values, typed values can vary.

## Maintenance

Review date: 2026-10-23. Revalidate sheet and column names on each new event folder; copied templates can drift. Keep the review list and approval evidence in the internal work system.
