# Trade show planner from a template

- Division: US Vision Marketing only. Do not apply this procedure to Aesthetics or Hospital.
- Scope: creating the planner folder for a trade show. Filling in show details is out of scope.
- System: Smartsheet, in the Vision Marketing Events workspace. Sheet links and IDs remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, submitted 2026-10-30. Revalidate folder and template names before operational use.

## Use this when

Someone asks to make a planner for a show. Look the show up on the event schedule, pick the template that matches the show's tier, and duplicate that template folder into the right year's Trade Shows folder.

## Required inputs

- The show name.

## Rules

1. **The duplicate must match the template layout exactly.** Notification, sharing and linked-data safety overrides blindly preserving live recipients or external links. Every sheet, column, row, spacing, bold, italic, underline, color, indent, hierarchy, formula, dropdown and column width must match the template. Nothing added, nothing removed, nothing reformatted.
2. **Don't edit the template.** The template folder is read-only. Only the new copy gets created.
3. **Fill nothing in.** Making a planner only creates the copy. Don't enter show details, add rows or add fields.
4. **If anything is unclear, stop and ask:** the show isn't on the schedule, it's listed twice, it has no tier, or a folder with that name already exists.

## 1. Find the show on the event schedule

1. In Smartsheet, open the **Vision Marketing Events** workspace.
2. Open the **event schedule** for the show's year.
3. Find the show. Note the **tier** it's listed under, the **month** it starts and the **year** it happens.

## 2. Match the tier to a template

| Tier on the schedule | Show type | Template folder |
|---|---|---|
| **Tier 1** | Large trade show | **Large Trade Show Template** |
| **Tier 2** | Small trade show | **Small Trade Show Template** |
| **Tier 3** | Table top trade show | **Tabletop Trade Show Template** |

The template folders are in **Vision Marketing Events > Event Templates**.

## 3. Name the new folder

Name it `<2-digit month> <Show name>`, using the month the show starts. Look at the existing folders in the year's Trade Shows folder first and copy their style (spacing, capitalization, how the show name is written).

Fictional example: **07 Example Eye Expo**, a July show, in **2027 Trade Shows**.

## 4. Duplicate the template

Put the copy in **Vision Marketing Events > <Year> Trade Shows**, where the year is the year the show happens.

**Preferred: browser, Save as New.** In the Smartsheet web app, right-click the template folder > **Save as New**, name it per step 3, choose the year's Trade Shows folder as the destination, and preserve template data and formatting while inspecting optional forms, cell links, attachments, discussions, sharing and automations. Do not propagate live rule recipients or activate copied alerts during setup. If notifications cannot be contained, stop the copy and ask the owner. Review copied links and restricted attachments before sharing the destination.

**Fallback: Smartsheet connector.** The connector can't copy a folder. Instead:

1. Create the folder (`create_folder`) in the year's Trade Shows folder.
2. Copy each sheet in the template folder with `create_sheet`, operation `from_template`, `fromId` = the template **sheet** ID, including the necessary template data, formatting, filters and forms only when supported by the available tool. Inspect linked data, attachments and discussions before copying; omit or disable live rules and recipients until explicitly reviewed. Do not assume the connector supports folder-copy options; use the UI if required capabilities are missing.
3. Keep each sheet's name exactly as it is in the template.

## 5. Check the copy against the template

Compare each copied sheet to its template sheet:

- Same sheets, same names, same order
- Same columns (names, types, widths, dropdown options, hidden/locked)
- Same rows (count, order, indent/hierarchy)
- Same cell text and formatting: bold, italic, underline, strikethrough, font, size, text and background colors, alignment, wrap
- Same formulas and conditional formatting; verify cell links point to intended template or destination data, with any deliberate containment differences recorded
- Same view (Grid vs Table)

If anything doesn't match, fix the copy (not the template) and say what was fixed.

## 6. Report back

Say which show, its tier, the template used, the new folder's name and location, and the sheets created. Mention anything that didn't copy perfectly.

## Notes

**If it's not in the template, don't add it.** The Tabletop template has no Agenda sheet, so a Tabletop planner gets no Agenda. Don't copy sheets in from other templates, and don't ask about it.
