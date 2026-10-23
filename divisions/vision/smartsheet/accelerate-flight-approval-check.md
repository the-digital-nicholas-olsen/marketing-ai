# Vision Accelerate flight approval check

- Division: US Vision Marketing only. The flight sheet holds both divisions; ignore every Aesthetics row and the AES Rep Approval sheet. Do not apply this procedure to Hospital.
- Scope: Accelerate events with a shared flight registration sheet. Non-flight registrations are out of scope.
- System: Smartsheet event folder (see the [event backend shape](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#shape)) and the monthly sales org chart. Traveler names, practices, contact details, sheet links, IDs, cost center codes and named interim managers remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, set 2026-10-07 and narrowed to Vision only on 2026-10-23. Sheet names, column names and Division values were observed read-only in two Q4 2026 event folders on 2026-10-23.

## Use this when

Someone asks to check flight approvals for an Accelerate city. The goal is to confirm that every Vision traveler on the flight sheet was approved through the VIS Rep Approval sheet, then fill in rep, manager and cost center details for the approved travelers.

The check is **read-only until the review list is approved**. Post the list and ask whether it looks good. Write nothing before a clear yes.

## Required inputs

- Read access to the event folder's `<City> Flight Registration (AES+VIS)` and `VIS Rep Approval - <Event>` sheets.
- The newest monthly sales org chart. Say which edition was used.
- Write access to the flight sheet, used only after approval.

If either sheet is missing, or the city has more than one event folder, stop and ask.

## 1. Read the sheets

**Flight sheet.** Filter `Division` = `Vision` before anything else. Drop `Aesthetics` rows entirely: do not match, count, flag or fill them. Read the first, middle and last name columns (labelled "as it appears on your government ID"), `Company Name` (the practice), `Sales Rep`, `City`, `State` and the four output columns: `Salesperson Email`, `Sales Manager EMail`, `Cost Center` and `Lumenis Notes`.

Observed 2026-10-23: the `Division` picklist offers only `Vision`, but Aesthetics rows hold a typed `Aesthetics` value because validation is off. A blank or other value is unclear. List it in the review rather than guessing.

**VIS Rep Approval sheet.** Read `Rep Name`, `RSM Name`, `RSM Approval`, `Practice / Account Name` and both attendee name pairs (`Attendee #1` and `Attendee #2`). Each approval row can approve two people.

Confirm that every row was read, not a sample.

## 2. Cross-reference

A match needs the **name and the practice** to line up: flight `Company Name` against approval `Practice / Account Name`.

| Group | Meaning |
|---|---|
| In both sheets | Vision traveler found on the VIS Rep Approval sheet with a matching practice |
| Possible match (flag) | Nickname, maiden/married name or small practice-name difference. Show both versions and why they look alike; don't decide |
| Flight sheet only | Vision traveler not found on the VIS Rep Approval sheet |

For each flight-only traveler, find their sales rep and say where it came from: the flight sheet's `Sales Rep` cell, or the practice appearing elsewhere with a rep. If it can't be found, say so.

## 3. Post the review list and ask

Include:

- Name, practice and the sheets each traveler is on.
- Flags, with both spellings side by side.
- For flight-only travelers: the salesperson's name and email, and their RSM's email (looked up as in step 4). This is for the report only; nothing is written to these rows.
- Practices with more than one Vision traveler.
- **Always flag a practice with more than two Vision travelers**, with every name, the practice's sales rep and that rep's RSM. If the rep or RSM can't be found, say so.
- Any Canada flag from step 4.

Ask: "Does this look good?" Apply the reviewer's corrections before writing.

## 4. After approval, fill the flight sheet

For travelers in **In both sheets**, plus flags the reviewer confirms:

1. **Sales rep:** `Rep Name` from the VIS Rep Approval row.
2. **`Salesperson Email`:** the rep's company address.
3. **`Sales Manager EMail`:** the rep's **RSM** on the org chart's Vision Sales page, not the DSM.
4. **`Cost Center`:** the RSM's cost center from the org chart. **Canadian guests always get the designated Canada cost center** (recorded internally), whoever the rep or manager is. Decide by where the guest or practice is located, not the rep's territory. If the country is unclear but the rep covers a Canadian territory, flag it instead of guessing.
5. **`Lumenis Notes`:** when more than one Vision traveler comes from the same practice, list all of their names on each of their rows so it's clear who flies together.

Leave flight-only rows unchanged unless told otherwise. If a rep or manager isn't on the org chart, or a name is truncated or unusually formatted, leave the cell blank and list it in the report.

## Reading the org chart

Use only the **Vision Sales** page. RSM boxes show the region and an 8-digit cost center. Reps sit beneath their RSM: DSM, SM / Sr. SM and ASM / Sr. ASM boxes show territory, not a cost center. Purple OPEN boxes are vacancies.

- **Open RSM:** use the designated interim RSM and **their** cost center (both recorded internally), not the open region's cost center. Note in the report which reps were routed this way.
- **Interim or acting titles:** treat them as the manager, and mention them in the report.
- **Same person on both charts:** use the Vision page entry.
- **Truncated names:** don't guess the email. Flag it.

### Fictional example

A practice has three Vision travelers on the flight sheet. Two match an approval row exactly. The third is listed as "Liz" on the flight sheet and "Elizabeth" on the approval row. The review list flags the Liz/Elizabeth pair, flags the practice for having more than two travelers, and names its rep and RSM. After the reviewer confirms Liz is Elizabeth, all three rows get the rep's email, the RSM's email, the RSM's cost center and a note listing all three names.

## Avoid

- Writing to any sheet before the review list is approved.
- Changing the AES or VIS Rep Approval sheets. They are read-only references.
- Adding rows or columns to the flight sheet.
- Using the DSM as the sales manager.
- Copying traveler details, sheet links or cost center codes into public issues or pull requests.

## Missing information and decisions

- The VIS Rep Approval sheet has its own `RSM Name` column. The procedure uses the org chart. If they disagree, which one wins?
- The flight sheet's `Division` picklist lists only `Vision`. The [event backend reference](../../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md#known-source-template-failures) already records this. Until the template offers both values, typed values can vary.

## Maintenance

Review date: 2026-10-23. Revalidate sheet and column names on each new event folder; copied templates can drift. Keep the review list and approval evidence in the internal work system.
