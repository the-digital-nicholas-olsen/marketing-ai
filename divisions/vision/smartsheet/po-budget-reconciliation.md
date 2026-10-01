# Vision PO-to-budget reconciliation

- Division: Vision (US Vision Marketing). Do not apply this to Aesthetics or Hospital budgets.
- System and environment: Smartsheet. Uses the division's PR tracking sheet and the per-event `Master Budget` sheets in the Vision events workspace. Sheet names, IDs, links, PO numbers and amounts stay in the internal work system, not here.
- Workflow: checking that ready purchase orders (POs) are recorded on their event's Master Budget, and that the budget lines charged to each PO don't add up to more than the purchase requisition (PR) amount.
- Owner / proposed reviewer: Kaelyn Gray (Vision event marketing); maintainer review by @the-digital-nicholas-olsen.
- Status: draft
- Source and observed date: Kaelyn's working rules, set while running this check on 2026-10-01. Column names, status values and budget layouts were observed in Smartsheet that day.

## Use this when

You're asked to audit the PR tracking sheet against event budgets: to find ready POs missing from a Master Budget, flag POs whose budget lines exceed the PR, or flag events whose estimate exceeds their budget.

The audit is **read-only**. Only change a budget when asked, and then follow "Recording missing POs" below.

## Required inputs

- Read access to the PR tracking sheet and to every event folder's `Master Budget`.
- Write access to the budgets, but only if you're asked to record missing POs.

## Rules

1. **"Ready PO" means Status = `PO Created, Pending Invoice`.** A PO that appears on a budget but isn't in the ready set has usually moved on (invoiced or paid). That isn't a finding.
2. **Pull the ready set with a filter.** An unfiltered pull of a large tracking sheet can come back sampled, with rows silently missing. Filter on `Status` and confirm the result isn't sampled.
3. **Match on the PO number, not the description.** Budgets store POs as text (`PO: <number>`, or `PO: <number> & <number>` when a row is shared). Search for the number itself.
4. **Only call a PO "missing" if its event has a Master Budget.** Past events and non-event spend (print, agencies, operations) have no budget to compare against. Report those separately.
5. **Do the arithmetic before flagging.** If a question can be settled by calculating (for example, how a shared row splits between two POs), calculate it and report the answer. Flag only what's still unresolved.
6. **Don't add rows to a budget.** Fill existing rows only. Adding a column needs the budget owner's approval.

## Procedure

### 1. Pull the ready POs

From the PR tracking sheet, filter `Status` = `PO Created, Pending Invoice` and read `Quarter`, `Vendor`, `Header Text`, `Category`, `PR#`, `Valuation Price` and `PO#`. `Header Text` tells you which event a PO belongs to.

### 2. Collect every Master Budget

Browse the events workspace folder by folder each run, because new events add new folders. Budget layouts differ:

- **Trade show budgets:** `Line Item / Projected Cost / Actual Cost / Notes / PR/PO`. The last column is sometimes titled `PR / PO #`.
- **Accelerate budgets:** `Line Item / Rate / PR/PO Number / Notes`.

A sheet summary may return fewer rows than the sheet holds. Confirm with a search for the PO-number prefix on each larger budget.

### 3. Find missing POs

For each ready PO, work out its event from `Header Text`. If that event has a Master Budget, check whether the PO number appears on it. Sort each PO into one of these buckets:

- **Missing:** the event has a budget, but the PO isn't on it.
- **Possibly misfiled:** the PO is on a budget, but its description points to a different event or line.
- **No budget to compare:** past events, non-event spend, or an upcoming event that has no folder yet.
- **Data issue:** the PO number looks wrong, for example it matches the PR number or isn't 10 digits.

### 4. Check for over-budget POs

Check **every PO that appears on a Master Budget**, not only the ready ones.

1. Total the `Projected Cost` (trade shows) or `Rate` (Accelerates) of every row that cites the PO. Include rows on other budgets, because one PO can appear on more than one budget.
2. Look up the PO's `Valuation Price` on the tracking sheet. Any status counts.
3. Flag the PO if its budget lines total more than the PR amount.

Skip total rows (`Estimated Total`, `GRAND TOTAL`, `Subtotal`, `US Budget`, `BUDGET`) when adding up, even if a PO is written on them.

**Rows shared by two POs.** A row cited as `PO: A & B` is paid from whatever is left on each PO after its other rows. Work out the split:

1. For each PO, subtract its single-PO rows from the PR amount. That's what it has left.
2. Fill the shared row from A's remainder first, then cover the rest from B.
3. Flag it only if the two remainders together can't cover the row. Otherwise report the split and what's left on each PO.

**Accelerate hotel spend.** The marketing-spend PO, plus any hotel-contingency POs, pays the hotel bill. Compare them to the hotel lines (F&B subtotal, service charge, taxes, parking, rooms to master, miscellaneous hotel charges), not to the event's grand total, which also includes AV, production and speakers. An Accelerate can be shared with another division, so treat a gap as a question for the budget owner rather than a confirmed overage.

**Accelerate AV.** Compare the AV vendor's row to that vendor's AV PO.

### 5. Check each event's total

Flag any budget whose `Estimated Total` (or `GRAND TOTAL`) is more than its `US Budget` (or `BUDGET`). List budgets with a blank budget cell as "couldn't check."

## Recording missing POs (only when asked)

Enter the PO as text in the budget's PR/PO column, matching the format already there: `PO: <number>`, or `PO: <number> & <number>` when two POs share a row.

- **Trade show budgets:** put the PO on the line item it pays for (exhibitor fees, show services, booth build, the named speaker's row, and so on).
- **Accelerate budgets:** put the marketing-spend PO and any hotel-contingency POs on `GRAND TOTAL`, joined with ` & `. Put the AV PO on the AV vendor's row.

If a budget has no PR/PO column, ask before adding one, and match the name and position used on the other budgets of that type.

## Example: splitting a shared row (fictional)

Two badges are each budgeted on their own PO, and a third badge row is shared between the two POs.

| PO | PR amount | Its other rows | Remaining | Share of the $350 shared row | Left over |
|---|---|---|---|---|---|
| PO A | $500 | $300 | $200 | $200 | $0 |
| PO B | $1,000 | $700 | $300 | $150 | $150 |

Together, the remainders ($500) cover the shared row ($350). Neither PO is over, so you report the split instead of flagging it.

## Avoid

- Reporting a shared row as "possibly over" without working out the split first.
- Comparing a PO to a total row, or comparing an Accelerate's hotel PO to the whole event's grand total.
- Treating a PO as missing when its event has no Master Budget.
- Copying real PO numbers, amounts, payee names or sheet links into public issues or pull requests.

## Missing information / decisions

- Whether the marketing-spend POs for an Accelerate shared with another division should cover the full hotel bill or only Vision's share. This needs the budget owner.
- Placing the Accelerate spend PO on `GRAND TOTAL` mixes a PO reference with a total row. This was the owner's choice on 2026-10-01 because the template has no single hotel line, and it may be worth a dedicated row in the template.
- Approval evidence and review date: blank until approved.
