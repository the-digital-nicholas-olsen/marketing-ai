# Vision budget tracker and dashboard

- Division: US Vision Marketing only. Do not apply this to Aesthetics or Hospital budgets.
- Scope: how the yearly Vision budget tracker sheet and its dashboard are built, and the rules for changing their structure. The procedures that fill the tracker are linked below; this file doesn't repeat them.
- Systems: Smartsheet, Vision Marketing Events workspace. FY26 lives in the Budget Dashboard folder and FY27 in the Budget Dashboard 2027 folder. Each folder holds the tracker sheet, its dashboard and the chart reports. Sheet links and IDs stay in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: built with the subject owner 2026-10-26 to 2026-11-02 (FY26 tracker and dashboard, then the FY27 copy). Layout observed 2026-11-02; revalidate column and report names before changing anything.

## Use this when

- Someone asks to change the tracker's columns, rows, formulas, reports or dashboard charts.
- A dashboard chart is broken or needs rebuilding.
- A new fiscal year's tracker is set up from the current one.

To add PRs, refresh PO numbers or sync actuals, use the procedures instead:
[PO-to-budget reconciliation](po-budget-reconciliation.md) (PR rows and statuses), [purchase requisition form](purchase-requisition-form.md) (a row at submission), [trade show invoice filing](trade-show-invoice-filing.md) and [finals close-out](trade-show-finals-close-out.md) (actuals).

## Rules

1. **Write only inside the Budget Dashboard folders.** Reading other sheets is fine. Changing anything outside these folders needs a procedure that authorizes it, such as the Master Budget writes in the procedures above. The PR tracking sheets are view only, always.
2. **The tracker is the source of truth for the dashboard.** Charts read reports, and reports read the tracker's `Chart:` columns, so chart numbers follow the tracker by formula. Only the snapshot inputs (`_PR Amount`, PR Status, PO#, `_Master Budget Actual`) are typed in.
3. **Before deleting or renaming a column, check every formula that references it.** Reports match columns by title, so a rename carries through to reports, but a deletion breaks formulas.
4. **Hide helper columns; don't delete them.** None of them is a true duplicate (see "Columns").
5. **Don't recreate columns the subject owner removed** (see "Removed on purpose").

## Rows

The tracker is a hierarchy: a **Category** row, its **Budget Line** rows, and **PR** rows under each Budget Line.

- **Budget Line codes** start with `VIS-` and a category tag, for example `VIS-TS-` for trade shows and `VIS-WB-` for webinars, numbered in event date order. FY27 uses the same codes as FY26.
- Each category has a zero-budget **Unassigned** line (`VIS-<tag>-UN`) for PRs that belong to the category but no specific line. A separate "no budget line" line holds PRs whose category is unclear.
- **Budget Item** on Category and Budget Line rows is a cell formula that builds the chart label, such as `Example Expo · Q4 · $X budget` (quarter left out when the event spans the year). Find rows by Budget Line, not by name. A new Budget Line row gets the same formula.
- **Notes** on a trade show's Budget Line row hold only a "Master Budget" hyperlink to that show's Master Budget. Lines without a Master Budget keep a short note. Long explanations don't go in the cell.
- **Duplicate PRs:** delete the duplicate row, unless the subject owner has accepted it and asked to keep it for visibility. Those stay, keep counting in Committed and aren't flagged again.

## Columns

Visible money columns, all in $ format:

| Column | What it holds |
|---|---|
| Q1 Plan to Q4 Plan | The quarterly plan, typed in on Budget Line, Category and total rows. Category and total quarters don't roll up from their lines. |
| FY Plan | A cell formula adding Q1 to Q4 on the same row. A SUMIFS over FY Plan inside FY Plan would be circular. |
| Committed | One column for all committed spend, from SUMIFS over `_PR Amount` and PR Status. No separate PO Issued or PR Amount columns. |
| Actuals | From `_Master Budget Actual` where a Master Budget exists, otherwise invoiced and paid amounts. |

Other columns:

- **Category** is the primary category taken from the Budget Line code. A PR's Category is its budget line's category (a KOL PR on a trade show line counts as Tradeshows). Charts group by Category.
- **SAP Category** is the PR form's material or category. Charts don't use it.
- **Hidden helpers:** `_PR Amount` (raw PR amount), `_Master Budget Actual` (typed snapshot of Master Budget actuals), `_Line Best` (needed because a Category or total row can't SUMIFS its own Actuals column) and the five `Chart:` columns. `Chart: Spent` is the lesser of Actuals and Plan, so it differs from Actuals only on over-plan lines.

### Removed on purpose

The subject owner removed these. Don't add them back or reference them in formulas: Remaining vs Plan, Open PRs, % Committed, Health, Needs Review, Match Basis, Exclude (Duplicate), a combined "Chart: Over Plan" column, the `_PR Committed`, `_PR Actual` and `_PR Open` helpers, and the "Spend by PR Category" reports and their dashboard widget.

## Dashboard

Each fiscal year's dashboard is one column of full-width stacked bar charts built by the dashboard's native chart widget: By Category first, then one chart per category. FY27's order is By Category, Tradeshows (taller), Webinars, Workshops, Outsourced Services, Industry Initiatives. FY26 puts Workshops second.

Each chart reads a "Chart Data" report in the same folder. The per-category reports carry an extra Budget Line column, so set each chart's included columns to Budget Item plus the five `Chart:` columns.

Series colors, the same on every chart:

| Series | Color |
|---|---|
| Spent | Navy `#012F92` |
| Committed, not yet spent | Light blue `#6392F8` |
| Budget left | Grey `#BDBDBD` |
| Over plan, actuals | Dark red `#991310` |
| Over plan, planned | Light red `#F87E7D` |

Red is only for over-plan spend, never for Committed. The audience reads the charts at a glance, so keep one stacked bar per line with any overage on top.

### Known limits (tested 2026-10-27 and 2026-11-02)

- **A chart can't read the tracker directly.** A sheet-sourced chart needs one contiguous, fully expanded range, and the tracker interleaves Category, Budget Line and PR rows. Keep the reports unless the tracker gains a separate contiguous summary block.
- **The connector's AI chart builder plots only one value column**, so it can't build these stacked bars. Its widgets also didn't render. The connector can't delete or resize dashboard widgets either.
- **Read series colors from the rendered legend in the browser**, not from the connector's dashboard read, which has returned stale colors.

### Rebuild or add a chart

In the browser, with the subject owner signed in: copy a finished chart widget and paste it, then repoint the copy through its data source settings to the right report. Colors carry over, but the chart type resets, so set it back to stacked bar. Check the legend colors and the order of charts afterwards.

## Example (fictional)

A Budget Line row for the Example Eye Expo needs its label to show the quarter. Its Budget Item formula is read from the cell history and the quarter part added inside the formula, so the label still follows the Plan. Nothing else on the row is typed over.

## Avoid

- Deleting a hidden helper because it looks unused.
- Charting the dashboard straight off the tracker, or with the AI chart builder.
- Using red for Committed.
- Writing outside the Budget Dashboard folders without a procedure that allows it.
- Recording real amounts, PR or PO numbers in this repository.

## Missing information and decisions

- Whether the tracker's snapshot inputs should become cross-sheet references to the PR tracking sheets. That has to be set up in the Smartsheet interface by the sheet owner.
- How a new fiscal year's tracker is created (copied from the prior year and cleared, or built fresh).
