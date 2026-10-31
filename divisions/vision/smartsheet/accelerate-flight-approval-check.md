# Accelerate flight approval check (Vision or Aesthetics)

- Division: US Vision Marketing or US Aesthetics, whichever the requester names: Vision only, Aesthetics only, or both. The flight sheet holds both divisions; work only the rows and sheets for the division being checked. Do not apply this procedure to Hospital.
- Scope: Accelerate events with a shared flight registration sheet. Non-flight registrations are out of scope.
- System: Smartsheet event folder (see the [event backend shape](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#shape)) and the internal sales org chart sheets, Smartsheet copies of the monthly sales org chart (one for Vision Sales, one for Aesthetics Sales). Traveler names, practices, contact details, sheet links, IDs and cost center codes remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, set 2026-10-07 and narrowed to Vision only on 2026-10-23; extended to Aesthetics, with a human email check after org chart changes, on 2026-10-28. Sheet names, column names and Division values were observed read-only in two Q4 2026 event folders on 2026-10-23 (Vision) and 2026-10-28 (Aesthetics).
- Division-specific gate: Vision retains its rep-entered `RSM Approval`; Aesthetics requires `RSM Approved (RSM to complete)`, as detailed below.

## Use this when

Someone asks to check flight approvals for an Accelerate city. The goal is to confirm that every traveler of the requested division on the flight sheet was approved through that division's rep approval sheet, with the RSM's approval, then fill in rep, manager and cost center details for the approved travelers.

**Pick the division first.** If the request doesn't say Vision, Aesthetics or both, ask. When checking both, run the steps once per division and keep the results in separate sections of the review list. Never match a Vision traveler against the AES sheet or the reverse, and never use one division's org chart for the other.

The check is **read-only until the review list is approved**. Post the list and ask whether it looks good. Write nothing before a clear yes.

## Division settings

The steps are the same for both divisions. Only these inputs change:

| Setting | Vision | Aesthetics |
|---|---|---|
| Flight sheet rows | `Division` = `Vision` | `Division` = `Aesthetics` |
| Rep approval sheet | `VIS Rep Approval - <Event>` | `AES Rep Approval - <Event>` |
| RSM approval column | `RSM Approval` | `RSM Approved (RSM to complete)`. The AES sheet also has a separate `RSM Approval` column; do not use it for this check |
| Org chart sheet | `Vision Sales Org Chart (<edition date>)` | `AES Sales Org Chart (<edition date>)` |

Observed 2026-10-28: the AES column's description says marketing only sends a flight to the travel agency when it says `Yes`.

## Required inputs

- Read access to the event folder's `<City> Flight Registration (AES+VIS)` sheet and the rep approval sheet for each division being checked.
- Read access to the division's sales org chart sheet. Its name carries the org chart edition date; say which edition was used. If a newer monthly org chart PDF has been issued, update the sheet from it first (see "Reading the org chart").
- **Confirmation that the org chart sheet's emails were verified by a person since the sheet last changed** (see "Verify emails after every org chart change"). If that hasn't happened, the check can still be posted for review, but no emails are written until it has.
- Write access to the flight sheet, used only after approval.

If a required sheet is missing, or the city has more than one event folder, stop and ask.

## 1. Read the sheets

**Flight sheet.** Filter `Division` to the division being checked before anything else. Drop the other division's rows entirely: do not match, count, flag or fill them. Read the first, middle and last name columns (labelled "as it appears on your government ID"), `Company Name` (the practice), `Sales Rep`, `City`, `State` and the four output columns: `Salesperson Email`, `Sales Manager EMail`, `Cost Center` and `Lumenis Notes`.

Observed 2026-10-23: the `Division` picklist offers only `Vision`, but Aesthetics rows hold a typed `Aesthetics` value because validation is off. A blank or other value is unclear. List it in the review rather than guessing.

**Rep approval sheet.** Read `Rep Name`, `RSM Name`, the division's RSM approval column (see "Division settings"), `Practice / Account Name` and both attendee name pairs (`Attendee #1` and `Attendee #2`). Each approval row can approve two people. A traveler qualifies as flight-approved only when their matching approval row's RSM approval column = `Yes`. A matching name and practice alone is not approval. Blank, `No`, pending or unexpected values are not approved; list the current value in the review and leave those travelers' flight-sheet cells unchanged. Approval of the review list does not replace this requirement.

Confirm that every row was read, not a sample.

## 2. Cross-reference

A match needs the **name and the practice** to line up: flight `Company Name` against approval `Practice / Account Name`.

| Group | Meaning |
|---|---|
| In both sheets — approved | Traveler found on the division's rep approval sheet with matching name and practice, and the RSM approval column = `Yes` |
| In both sheets — not RSM approved (flag) | Name and practice match, but the RSM approval column is blank, `No`, pending or another value. Report the value, the rep and the rep's RSM; do not fill the flight row |
| Possible match (flag) | Nickname, maiden/married name or small practice-name difference. Show both versions and why they look alike; don't decide |
| Flight sheet only | Traveler not found on the division's rep approval sheet |

For each flight-only traveler, find their sales rep and say where it came from: the flight sheet's `Sales Rep` cell, or the practice appearing elsewhere with a rep. If it can't be found, say so.

## 3. Post the review list and ask

Include, per division:

- Name, practice and the sheets each traveler is on.
- **Not RSM approved:** every traveler who is on both the flight sheet and the rep approval sheet but whose RSM approval is not `Yes`. Give the traveler, practice, current approval value, **the rep's name and the rep's RSM** (name and email, from the org chart sheet; use the approval row's `RSM Name` if the rep isn't on the chart, and say so). These are not flight-approved; the list lets the team email the RSM to ask for approval.
- Possible-match flags, with both spellings side by side and the matching approval row's RSM approval value.
- For flight-only travelers: the salesperson's name and email, and their RSM's email (looked up as in step 4). This is for the report only; nothing is written to these rows.
- Practices with more than one traveler.
- **Always flag a practice with more than two travelers**, with every name, the practice's sales rep and that rep's RSM. If the rep or RSM can't be found, say so.
- Any Canada flag from step 4.
- The org chart edition used, and whether its emails have been verified since it last changed.

Ask: "Does this look good?" Apply the reviewer's corrections before writing.

## 4. After approval, fill the flight sheet

For travelers in **In both sheets — approved**, plus identity-match flags the reviewer confirms **whose matching approval row also has the RSM approval column = `Yes`**. Re-read the approval field immediately before writing; if it is no longer `Yes`, leave the flight row unchanged and flag it. A reviewer confirming an identity match or approving the review list does not override a missing or negative RSM approval:

1. **Sales rep:** `Rep Name` from the rep approval row.
2. **`Salesperson Email`:** the rep's company address, from the org chart sheet's `Email`.
3. **`Sales Manager EMail`:** the rep's **RSM** (the sheet's `Reports To` on the rep's row), not the DSM.
4. **`Cost Center`:** the RSM's cost center (the rep row's `Manager Cost Center`). **Canadian guests always get the designated Canada cost center** (recorded internally), whoever the rep or manager is. Decide by where the guest or practice is located, not the rep's territory. If the country is unclear but the rep covers a Canadian territory, flag it instead of guessing.
5. **`Lumenis Notes`:** when more than one traveler comes from the same practice, list all of their names on each of their rows so it's clear who flies together.

Leave flight-only and not-RSM-approved rows unchanged; an instruction to fill details does not override the required RSM approval. If a rep or manager isn't on the org chart sheet, or a name is truncated or unusually formatted, leave the cell blank and list it in the report. Don't write emails from an org chart sheet whose emails haven't been verified since its last change.

## Reading the org chart

Look reps up in the division's **sales org chart sheet**, not the PDF. Each is a Smartsheet transcription of one sales page of the org chart (`Vision Sales Org Chart (<edition date>)` or `AES Sales Org Chart (<edition date>)`), with one row per named person:

| Column | Holds |
|---|---|
| `Name` | Person; preserve identity and confirmed aliases |
| `Title`, `Territory / Region` | As printed on the chart (RSM, DSM, SM / Sr. SM, ASM / Sr. ASM) |
| `Department` | `Vision Sales` or `AES Sales` |
| `Reports To` | The rep's RSM; for an RSM, the VP |
| `Manager Cost Center` | The `Reports To` person's cost center, typed from the chart |
| `Status` | Formula (Vision sheet only; observed 2026-10-28, the AES sheet has no `Status` column) |
| `Email` | Confirmed company address preserved across refreshes; generated candidates remain unverified until directory confirmation |
| `Notes` | Caveats, identity aliases and email provenance: confirmed, manually corrected, or generated/unverified |

Find the rep and use `Reports To` and `Manager Cost Center`.

**No vacancy rows.** Vacant (`OPEN`) positions are not rows; the sheets list named people only. To find out whether an RSM spot is open, check the org chart PDF or the rep row's `Notes`. A rep or RSM who isn't in the sheet is flagged, never guessed.

**Format for new org charts.** When a new org chart is provided, copy the current sheet's format for that division exactly. Read the existing sheet first to confirm the layout:

- Use the same columns in the same order. Don't add columns. Keep `Status` (where present) as a formula. Do not apply an Email column formula over confirmed or corrected addresses; resolve any formula that prevents preserving them before refreshing.
- One row per person, grouped by region: each RSM's row first, then that RSM's reports.
- Leave out vacant (`OPEN`) positions.
- Name the sheet `<Team> Org Chart (YYYY.MM.DD)` with the chart's edition date.
- Carry forward any name spelling corrections from the previous edition, then run the email check below.

- **Open RSM** (confirmed from the PDF): leave `Sales Manager EMail` and `Cost Center` blank for that region's reps and list them in the review for the reviewer to decide. Never borrow the other division's RSM.
- **Interim or acting titles:** treat them as the manager, and mention them in the report.
- **Same name on the other division's chart:** use only the sheet for the division being checked. Similar surnames are not the same person.
- **Truncated or unusual names:** a generated email cannot be trusted until identity and address are verified. Flag it.
- **Keeping it current:** org charts come out monthly. When a newer PDF arrives, update the division's sheet from its sales page, including each row's `Manager Cost Center` (or make a new sheet named for the new edition, in the format above), then verify its emails before running the check. Read the PDF only for that refresh or to confirm an open position.

### Verify emails after every org chart change

Preserve existing confirmed addresses first, using the refresh rules below. A name-derived address is only a candidate. After a refresh, verify new or changed candidates against the company directory, matching the named person and division. A mail client accepting an address is not proof that it belongs to the intended employee. An authorized person may use an unsent draft to resolve directory entries; never send it, and do not alter a person's display name merely to force an email formula to match. Record verification and the edition used in the internal work system. Unresolved addresses block the affected email writes.

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

A practice has three Aesthetics travelers on the flight sheet. Two match an AES approval row exactly; the third is listed as "Liz" on the flight sheet and "Elizabeth" on the approval row. The approval row for the first two has `RSM Approved (RSM to complete)` = `Yes`; the row for Elizabeth is blank. The review list flags the Liz/Elizabeth pair, lists Elizabeth as not RSM approved with her rep and the rep's RSM so the team can email the RSM, flags the practice for having more than two travelers, and names its rep and RSM. After the reviewer approves the list, the first two rows get the rep's email, the RSM's email, the RSM's cost center and a note listing all three names. Elizabeth's row stays unchanged until her approval row says `Yes`.

## Avoid

- Writing to any sheet before the review list is approved.
- Treating a name/practice match as flight approval, or filling a flight row when its matching approval row's RSM approval column is not `Yes`.
- Using the AES sheet's plain `RSM Approval` column instead of `RSM Approved (RSM to complete)`.
- Mixing divisions: matching against the other division's approval sheet or looking reps up on the other division's org chart.
- Changing the AES or VIS Rep Approval sheets. They are read-only references.
- Adding rows or columns to the flight sheet.
- Using the DSM as the sales manager.
- Replacing a confirmed email with a generated candidate, or changing an identity name just to force an email formula.
- Writing emails from an org chart sheet that changed and hasn't had its emails verified.
- Copying traveler details, sheet links or cost center codes into public issues or pull requests.

## Missing information and decisions

- The rep approval sheets have their own `RSM Name` column. The procedure uses the org chart sheet. If they disagree, flag both values and ask the reviewer to resolve the conflict before filling the affected manager fields.
- The flight sheet's `Division` picklist lists only `Vision`. The [event backend reference](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#known-source-template-failures) already records this. Until the template offers both values, typed values can vary.
- This file covers both divisions but lives in the Vision folder. Move it to a shared location if Aesthetics procedures get their own folder.

## Maintenance

Review date: 2026-10-28. Revalidate sheet and column names on each new event folder; copied templates can drift. Keep the review list and approval evidence in the internal work system.
