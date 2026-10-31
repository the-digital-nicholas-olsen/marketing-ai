# Trade show invoice filing

- Division: US Vision Marketing only. Do not apply this procedure to Aesthetics or Hospital.
- Scope: what happens when a trade show invoice is received: file it, link it on the show's Master Budget, and update actuals through to the Vision budget tracker. Webinar KOL honoraria use [KOL invoice filing](kol-invoice-filing.md) instead.
- Systems: the Vision shared work folder, and Smartsheet in the Vision Marketing Events workspace. Sheet links, IDs and folder links remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, submitted 2026-10-30. Revalidate folder, sheet and column names before operational use.

## Use this when

Use when asked to file a trade show invoice and update its budget. Mere receipt of an invoice is not authority to alter budgets; an audit request returns a proposed change set. Within authorized filing scope, complete the connected steps without asking again.

## Required inputs

- The invoice.

## Rules

1. **If the show or folder is unclear, stop and ask.** Don't guess.
2. **Never overwrite an existing file.**
3. **The PR tracking sheets are view only.** Don't change them, even to fix a mistake. Report the problem instead.
4. **Don't copy invoice details into this repository.** Invoices, amounts, payee details, PR and PO numbers stay in Smartsheet and the shared work folder.

## 1. Work out the show

Read the invoice and find which show it belongs to.

## 2. Convert Word documents to PDF

If the invoice is a `.doc` or `.docx`, convert a copy to PDF, inspect the rendered PDF and retain the original Word file in the authorized work folder. Never delete the source. On Windows, Word's `ExportAsFixedFormat` with format 17 does this. Existing invoices outside the request remain unchanged.

## 3. Save it to the show's folder

Copy the PDF to the shared work folder, under **Campaigns > <Show> <Year> > Invoices**.

Luminary invoices are named `YYYY.MM.DD - <Name> Luminary Invoice <SHOW>.pdf`, using the invoice date.

Check existing files and budget records for the same vendor, invoice number, date and amount before filing; report duplicates or corrections without counting them twice. Confirm the invoice matches the approved PR/PO and remaining authorized amount, or hold the affected financial update for review.

## 4. Update the show's Master Budget

Open the show's **Master Budget** in **Vision Marketing Events > <Year> Trade Shows > <Month number> <Show>**, and find the existing matching line item. If multiple lines could match or none does, hold the budget writes and ask; do not add a line or choose the first match.

| Column | Enter |
|---|---|
| **Notes** | The file name as text, hyperlinked to the file in SharePoint. The link must point to the PDF. If Notes says "Invoice Requested", replace that placeholder with the link; preserve other notes and earlier invoice links. |
| **Actual Cost** | Reconciled cumulative invoiced cost for this line, including prior distinct invoices and credits once. Do not overwrite prior actuals with the latest invoice alone. Flag ambiguous allocations. |

## 5. Check the Estimated Total updated

The Actual Cost on the **Estimated Total** row is a formula over a fixed range of rows, such as `=SUM([Actual Cost]1:[Actual Cost]8)`. A line item below that range isn't counted. If the row falls outside the range, hold the affected tracker sync and ask the subject owner before widening it; do not copy an incomplete total to the dashboard.

## 6. Sync the Vision budget tracker

The budget dashboard reads from the tracker's **`_Master Budget Actual`** column, which is typed in rather than calculated. Update it in the same task:

- **Budget Line row:** the show's Estimated Total Actual Cost from the Master Budget. Find the row by Budget Line, not by name, because Budget Item is a formula.
- **PR rows:** the Actual Cost of the Master Budget line items with that PO number. Use a confirmed actual-cost allocation across POs; do not charge the full invoice to each PR. A shared PO across shows must retain other shows' allocations rather than being overwritten by this show. Flag an unconfirmed split and hold the affected tracker write.

Read back each changed cell. Then confirm the tracker's Actuals column and the dashboard reports recalculated. Use existing confirmed Budget Line and PR rows only. If a row is missing, propose it and obtain the budget owner's authorization; never invent a budget line or change formulas to force a match.

## 7. Report back

Say which show the invoice went to, the file name and folder, the line item updated, and the new Estimated Total and tracker actuals. Mention anything that didn't update.

## Preferred example (fictional)

An invoice from Dr. Example, dated 2027-02-14, arrives for the Example Eye Expo as a Word document. It's converted to PDF and saved as `2027.02.14 - Example Luminary Invoice EEE.pdf` in the show's Invoices folder. The Dr. Example line on the Master Budget says "Invoice Requested", so Notes is replaced with the linked file name and Actual Cost is set to the invoice total. The Estimated Total updates, and the same figures go on the tracker's Budget Line row and PR row.

## Avoid

- Filing an invoice under a guessed show.
- Linking the Master Budget to a Word file. The link text and URL both point to the PDF.
- Stopping at the Master Budget. The dashboard stays out of date until the tracker is synced.
- Widening the Estimated Total formula without asking.

## Missing information and decisions

- Trade show KOL honoraria require the checks in [KOL invoice filing](kol-invoice-filing.md) as well. Confirm the event owner's required naming and finance handoff before filing; preserve originals and do not send a finance email without authorization.
- A naming pattern for invoices that aren't from luminaries. Until one is agreed, copy the style of the files already in the folder, or ask.

Related: [trade show PO-to-budget reconciliation](po-budget-reconciliation.md) audits trade show budgets; this procedure files a single invoice.
