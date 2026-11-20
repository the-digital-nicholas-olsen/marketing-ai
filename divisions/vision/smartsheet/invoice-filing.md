# Invoice filing

- Division: US Vision Marketing only. Do not apply this procedure to Aesthetics or Hospital.
- Scope: one process for every Vision invoice: trade show vendor invoices, KOL and luminary honoraria (trade show, Accelerate or webinar) and Accelerate invoices. File it, log it on the event's Master Budget, and update actuals through to the Vision budget tracker.
- Systems: the Vision shared work folder, and Smartsheet in the Vision Marketing Events workspace (trade shows) or the Accelerate Marketing Events workspace (Accelerates). Sheet links, IDs and folder links remain in the internal work system.
- Subject owner: Kaelyn Gray; finance steps reviewed by the finance contact; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, submitted 2026-10-30, merged with the KOL invoice draft of 2026-10-27 on 2026-11-20 so trade show, KOL and Accelerate invoices follow the same steps. Accelerate Master Budget columns observed 2026-11-20. Revalidate folder, sheet and column names before operational use.

## Use this when

Use when asked to file or "upload" an invoice or refund and update its budget. Mere receipt of an invoice is not authority to alter budgets; an audit request returns a proposed change set. Within authorized filing scope, complete the connected steps without asking again.

## Required inputs

- The invoice (or refund).
- For a KOL honorarium: the approved honorarium amount and the PR and PO numbers, from the event's Master Budget or the campaign's Smartsheet rows.

## Rules

1. **If the event or folder is unclear, stop and ask.** Don't guess.
2. **Never overwrite an existing file.**
3. **The PR tracking sheets are view only.** Don't change them, even to fix a mistake. Report the problem instead.
4. **Don't copy invoice details into this repository.** Invoices, amounts, payee details, PR and PO numbers stay in Smartsheet and the shared work folder.
5. **Never send the finance email or mark a payment submitted on someone else's behalf.** Draft it; Kaelyn sends it.

## 1. Work out the event and its type

Read the invoice and find which event it belongs to, and which type that event is. The type decides only where the budget lives (step 5); every other step is the same.

| Event type | Master Budget |
|---|---|
| Trade show | **Vision Marketing Events > <Year> Trade Shows > <Month number> <Show> > Master Budget** |
| Accelerate | **Accelerate Marketing Events > <Year> Accelerates > <Month number> <City> > Master Budget** |
| Webinar | The budget line item for the KOL payment on the campaign's Smartsheet rows |

## 2. Check KOL invoices against the records

For a KOL or luminary honorarium, at any event type, check before filing:

| Check | Pass when |
|---|---|
| Payee | Matches the vendor on the purchase requisition (the KOL, or their practice) |
| Amount | Equals the approved honorarium on the requisition and PO |
| PO number | On the invoice, matching the PO on the budget line |
| Description | Names the event and date |
| Payment details | Present (remittance address or the details finance needs) |

A mismatch stops filing: draft a short reply to the KOL asking for a corrected invoice, for Kaelyn to send.

For any invoice, check existing files and budget records for the same vendor, invoice number, date and amount; report duplicates or corrections without counting them twice. Confirm the invoice matches the approved PR/PO and remaining authorized amount, or hold the affected financial update for review.

## 3. Convert Word documents to PDF

If the invoice is a `.doc` or `.docx`, convert it to PDF and inspect the rendered PDF. Once the PDF checks out, delete the Word file from the Invoices folder, so only the PDF is filed and linked (subject owner's rule, 2026-11-20). If the PDF doesn't render correctly, keep the Word file and ask. On Windows, Word's `ExportAsFixedFormat` with format 17 does the conversion; it also converts an image invoice opened in Word. Existing invoices outside the request remain unchanged.

## 4. Save it to the event's Invoices folder

Copy the PDF to the event's **Invoices** folder in the shared work folder (for trade shows, **Campaigns > <Show> <Year> > Invoices**; for webinars, the project folder's `Invoices/`). If the event has no Invoices folder, ask where it goes.

KOL and luminary invoices, at every event type, are named `YYYY.MM.DD - <Name> Luminary Invoice <EVENT>.pdf`, using the invoice date. Add `-2` before `.pdf` for a corrected invoice. Other invoices copy the style of the files already in the folder, for example `<Line Item> - <invoice number>.pdf` for vendor installments, or `<Line Item> Receipt.pdf` for a card payment receipt.

**Year folders differ.** In the shared Vision library, 2026 campaigns sit under `<Year>/Campaigns/`, but 2027 campaigns sit under `2027/2027 Campaigns/<Show> 2027/`. A `2027/Campaigns` folder also exists but is empty; don't file there. Check the current folder name before saving, because show folders get renamed (which also breaks existing links; re-point them when that happens).

If the year's library isn't synced to the computer, stage the renamed PDF locally and ask the person to drag it into the SharePoint folder, then continue once it's there.

## 5. Log it on the Master Budget

Find the existing matching line item on the budget from step 1. If multiple lines could match or none does, hold the budget writes and ask; do not add a line or choose the first match.

**Trade shows and webinars:**

| Column | Enter |
|---|---|
| **Notes** | The file name as text, hyperlinked to the file in SharePoint. The link must point to the PDF. If Notes says "Invoice Requested", replace that placeholder with the link; preserve other notes and earlier invoice links. Before linking, confirm the file exists at that URL. URL-encode spaces and `#` (`%23`). When two or more files back one line, link the Invoices folder instead. |
| **Actual Cost** | Reconciled cumulative invoiced cost for this line, including prior distinct invoices and credits once. Do not overwrite prior actuals with the latest invoice alone. Flag ambiguous allocations. Vendors such as exhibition organizers bill in installments (downpayment, deposit, remainder), so a repeat amount is usually the next scheduled installment, not a duplicate: check the budget's installment lines first. A card payment's convenience fee is part of the actual cost. |

**Accelerates:** the Master Budget has Line Item, Rate, PR/PO Number and Notes, and no Actual Cost column. In **Notes**, add the file name hyperlinked to the PDF in SharePoint, keeping the division tag already there (for example "Vision") and any earlier links. Leave Rate (the budgeted amount) and PR/PO Number as they are, and don't add columns. If the invoiced amount differs from Rate, say so in the report back.

## 6. Check the total updated (trade shows)

The Actual Cost on the **Estimated Total** row is a formula over a fixed range of rows, such as `=SUM([Actual Cost]1:[Actual Cost]8)`. A line item below that range isn't counted. If the row falls outside the range, hold the affected tracker sync and ask the subject owner before widening it; do not copy an incomplete total to the dashboard.

## 7. Sync the Vision budget tracker

The budget dashboard reads from the tracker's **`_Master Budget Actual`** column, which is typed in rather than calculated. Update it in the same task:

- **Budget Line row** (trade shows): the show's Estimated Total Actual Cost from the Master Budget. Find the row by Budget Line, not by name, because Budget Item is a formula.
- **PR rows** (every event type): the invoiced actual for the line items with that PO number. Use a confirmed actual-cost allocation across POs; do not charge the full invoice to each PR. A shared PO across events must retain other events' allocations rather than being overwritten by this event. Flag an unconfirmed split and hold the affected tracker write.

Read back each changed cell. Then confirm the tracker's Actuals column and the dashboard reports recalculated. Use existing confirmed Budget Line and PR rows only. If a row is missing, propose it and obtain the budget owner's authorization; never invent a budget line or change formulas to force a match.

## 8. Finance handoff (KOL honoraria)

Draft an email to Derek and the finance contact with the invoice attached, the PR and PO numbers, the amount and the event. Kaelyn sends it. Submitting for payment stays with Derek.

For a webinar, also update the campaign's rows: put the file link in Deliverable Link. Set P11 to Complete only once the invoice is saved, logged on the budget, the finance email has been sent (by Kaelyn) and actuals are updated. Until then set P11 to Ready for Review, or In Progress if a send is still with Kaelyn, and list what's left in Notes / Blocker.

## 9. Report back

Say which event the invoice went to, the file name and folder, the line item updated, the new totals and tracker actuals, and any finance email drafted. Mention anything that didn't update.

## Preferred example (fictional)

An invoice from Dr. Example, dated 2027-02-14, arrives for the Example Eye Expo as a Word document. Payee, amount and PO match the requisition. It's converted to PDF and saved as `2027.02.14 - Example Luminary Invoice EEE.pdf` in the show's Invoices folder. The Dr. Example line on the Master Budget says "Invoice Requested", so Notes is replaced with the linked file name and Actual Cost is set to the invoice total. The Estimated Total updates, the same figures go on the tracker's Budget Line row and PR row, and the finance email is drafted for Kaelyn.

Had Dr. Example spoken at the Example City Accelerate instead, the same file would go to that Accelerate's Invoices folder and be linked in the Notes of the Dr. Example Honorarium line on its Master Budget in Accelerate Marketing Events, next to the "Vision" tag.

## Avoid

- Filing an invoice under a guessed event.
- Filing a KOL invoice whose amount or payee doesn't match the requisition and PO. Ask for a corrected invoice instead.
- Linking the Master Budget to a Word file. The link text and URL both point to the PDF.
- Stopping at the Master Budget. The dashboard stays out of date until the tracker is synced.
- Widening the Estimated Total formula without asking.
- Adding an Actual Cost column, or changing Rate, on an Accelerate Master Budget.

## Missing information and decisions

- Where Accelerate invoices are saved in the shared work folder; until confirmed, ask.
- Whether Accelerate actuals should be recorded anywhere on the Master Budget beyond the linked Notes.
- After Derek, where the invoice goes in finance, and how long payment usually takes.
- A naming pattern for invoices that aren't from KOLs or luminaries. Until one is agreed, copy the style of the files already in the folder, or ask.

Related: [trade show PO-to-budget reconciliation](po-budget-reconciliation.md) audits trade show budgets; this procedure files a single invoice.
