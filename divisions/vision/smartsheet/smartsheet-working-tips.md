# Smartsheet working tips (draft)

- Division: US Vision Marketing. The tips are about Smartsheet itself, so they likely hold elsewhere, but they were only seen in the Vision workspaces.
- Scope: practical fixes for jobs the Smartsheet connector can't do or does badly, and house formats for Vision event sheets. Not a procedure on its own; the procedures in this folder link here.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft. Observed 2026-09-12 to 2026-10-20 while editing Vision Marketing Events sheets. Smartsheet changes its interface often, so recheck before relying on a tip.

## Use this when

A Smartsheet task stalls on something the connector can't do (change a sheet's view, move a folder, fit column widths), or when adding rows to a show's `Agenda` sheet.

## Agenda sheets

**Day header rows** (`DAY 1 – FRIDAY, OCTOBER 9`) are all caps, bold, underlined, with a light grey background across the row. Through the API the format descriptor is `,,1,,1,,,,,18,,,,,,,` (bold, underline, background palette index 18, light grey). Set it on the row **and** on the `Activity` cell: the cell carries its own format, which overrides the row's, so a row-only update shows no underline. A cell update must include `value`. Palette indexes are listed in the public server info (`https://api.smartsheet.com/2.0/serverinfo`, `formats.color`); open it in a browser tab, since a fetch from the Smartsheet app is blocked.

**Agenda sheets are flat**, with no collapsible parent rows. To flatten one without scrambling the order, don't batch `outdent`: one update moves the rows as a block and bunches children from different parents together. Instead record the current order, then send one update listing every row except row 1, in that order, each with `siblingId` = row 1's ID. Find child rows with the filter `=COUNT(ANCESTORS([Activity]@row)) > 0`.

**`Who's Involved` holds the presenter's or team's name, never `Notes`.** If the column is a contact list, the API rejects plain text and name-only contacts (it needs an email for each), so make the column a text column (`TEXT_NUMBER`) rather than falling back to Notes. New Agenda sheets should start with it as text. Accelerate agendas use a different layout without this column.

## Things the connector can't do

| Task | Do it in the browser |
|---|---|
| Switch a sheet from the new Table view to Grid | Open the sheet by its permalink (sheet IDs in `/sheets/<id>` URLs are refused; get the link from the sheet's path). Table view loads with `?view=grid&newview=true`, classic Grid with just `?view=grid`; check the URL before clicking, because on a Grid sheet the same spot is the Print button. Use the view dropdown at the top left of the toolbar > **Grid**. The first time, a feedback dialog appears: tick "Don't show this again". The choice sticks. |
| Move a folder to another workspace | Open the folder's permalink, which loads the classic Browse tree. Drag the folder onto the target workspace's name and confirm the sharing prompt. Subfolders and contents move with it. Check the result afterwards. |
| Fit column widths | Smartsheet has no auto-fit in either view. The connector can set a column's pixel `width`, so estimate widths from the content. Opening a `newview=true` link switches that sheet to Table view for the person, so switch it back after. |
| Copy a whole folder | See [trade show planner](trade-show-planner.md): **Save as New** in the browser, or copy each sheet from its template sheet. |

## Mistakes to avoid

- Writing a presenter into `Notes` because the contact column rejected the value.
- Outdenting many rows in one call.
- Clicking toolbar positions without checking which view the sheet is in.

## Sources and open items

Source: Vision Marketing Events agenda and Master Budget work, September and October 2026. Sheet names, IDs and links stay in the internal work system. Open: whether these hold for the Accelerate and Sprint Plans workspaces has not been checked.
