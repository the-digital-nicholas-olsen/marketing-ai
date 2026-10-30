# Vision trade show PO-to-budget reconciliation

- Division: US Vision Marketing. Do not apply this procedure to Aesthetics or Hospital budgets.
- Scope: trade show Master Budgets only. Accelerate budgets are out of scope.
- System: Smartsheet PR tracking sheets (one for 2026, one for 2027), trade show Master Budgets and the Vision budget tracker in the Budget Dashboard folder. Actual PO/PR numbers, amounts, payees, identifiers, links and audit findings remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: reviewed Vision workflow guidance.
- Source and review: working rules and layouts observed 2026-10-01, with read-only follow-up on 2026-10-05. Allocation order and trade-show-only scope reviewed 2026-10-06. Both tracking sheets, every PO status, the per-PO-only check and the reverse tracker check added 2026-10-21 to 2026-10-23. Budget tracker, ready-PO and report rules added 2026-10-27 and 2026-10-30 from Kaelyn's working rules. Restricted confirmation evidence stays internal.

## Use this when

Someone asks to check PRs or audit POs against budgets. The audit finds POs missing from trade show budgets, budget POs that aren't on either tracking sheet, and budget allocations exceeding their funding pools. It also keeps the budgets and the Vision budget tracker current.

**Every run makes these updates without asking:**

- Adds each missing PO to its Master Budget line (section 6).
- Adds `PR In` to the budget line of each submitted PR with no PO yet (section 7).
- Adds PRs to the Vision budget tracker, and refreshes the PO# and PR Status on rows already there (section 8).

Make no other budget change unless asked. **The PR tracking sheets are read-only, always.** Report a problem on them instead of fixing it.

The primary comparison uses the associated amount recorded as `Valuation Price` in the PR tracking sheet. It does not establish the current approved PO value or remaining SAP balance. Keep an open-balance check separate.

## Required inputs

- Read access to both Vision PR tracking sheets and all relevant trade show Master Budgets.
- One verified comparison amount for each PO, and complete detailed expense rows across all in-scope budgets.
- Write access to the Master Budgets and the Vision budget tracker.
- For a separate open-balance check, a current verified SAP balance and the unpaid expense/commitment details.

## 1. Pull POs

Check both tracking sheets on every run, at every status that has a PO. A PO can be invoiced or paid before anyone puts it on a budget, so checking only new POs misses it.

- **2026 sheet:** filter `Status` to `PO Created, Pending Invoice`, `Invoice Received, Sent to AP`, `Payment Issued, Process Complete` and `Invoice Received, Correction Needed`, one pull per status. Read `Quarter`, `Vendor`, `Header Text`, `Category`, `PR#`, `Valuation Price` and `PO#`.
- **2027 sheet:** it holds every business area, so filter `BusArea` to `VIS`. The description column is `Header Data`, and quarter codes read `Q127VIS` instead of `Q127V`. Status names can carry a bracketed prefix, so match on the words after it. Include `Partial PO amount left over (see notes)`.

Skip cancelled PRs and PRs with no PO# in this pass. Count a PO logged on both sheets once. Confirm that results are complete, not sampled or truncated. Use the description to identify the likely event and confirm ambiguous matches.

## 2. Collect trade show Master Budgets

Browse the Vision events workspace each run so new trade show folders are included. The usual layout is `Line Item / Projected Cost / Actual Cost / Notes / PR/PO`; the last column may be titled `PR / PO #`.

Confirm all relevant rows were retrieved. Parse complete PO numbers from references such as `PO: <number>` or `PO: <number> & <number>` and match exactly. A prefix or substring is only a search aid.

## 3. Find missing POs

The show year must match: the year in the quarter code (`Q126V` = 2026, `Q127V` = 2027) or in the description has to be the budget's show year. If the two disagree, trust the description and say so.

Classify each PO:

- **Missing:** its trade show has a Master Budget, but the PO is absent.
- **Possibly misfiled:** its reference appears on a budget, but the event, vendor or expense appears inconsistent with its purpose.
- **No budget to compare / outside scope:** no trade show budget was found, or the purchase is outside this procedure's scope. State which applies; a past event may still have a budget.
- **Data issue:** a PO reference or amount is missing, malformed or inconsistent, such as an apparent PR number in the PO field.

Also check the reverse. For each `PR In` cell on a budget, search the tracking sheets for the vendor or KOL name at every status. A name can have several PRs, so pick the one whose description names this event and line, not the first or the open one. If that PR now has a PO#, the PO is **Missing**.

## 4. Allocate expenses against PO pools

Check every PO referenced by an in-scope budget, not just ready POs. Use the detailed rows' `Projected Cost` amounts.

Maintain **one funding pool per PO across all trade show budgets**. A PO can pay several line items; its full amount is not available anew for each line. Several budget rows are expected. Duplicate or conflicting tracking records do not create extra funding: resolve them before choosing the PO comparison amount rather than summing them blindly.

Apply this allocation order:

1. Collect all detailed rows before allocating. Deduct all rows listing only a single PO from that PO's pool first, across every in-scope budget.
2. Then process shared rows. For `PO A & B`, use PO A's remaining pool first. When A runs out, charge the remainder to B. If more POs are listed, continue in their listed order.
3. Carry each reduced balance forward to the next shared row. The first-listed-PO-first convention is the allocation rule; the split does **not** need separate confirmation.
4. Record the per-PO allocations and any unfunded remainder. Count each shared expense once; do not charge its full cost to every referenced PO.
5. Flag single-PO allocations above their pool and any shared expense that exceeds the remaining capacity of its listed pools. Do not let a negative pool offset another PO's available funds; exhausted pools contribute zero to later shared rows.

Use a consistent, recorded budget/row processing order for shared rows. If different shared-row priorities would change which expenses are funded and no priority is established, ask the budget owner to resolve that priority. This does not require separately approving the A-first split on each row.

Exclude summary rows (`Estimated Total`, `GRAND TOTAL`, `Subtotal`, `US Budget`, `BUDGET`) when adding detailed expenses. Do not count both a subtotal and its underlying lines.

### Fictional example

PO A has $1,000 and PO B has $500. A $600 line lists only A. A $700 line lists `PO A & B`.

| Allocation | PO A | PO B |
|---|---|---|
| Starting pool | $1,000 | $500 |
| Single-PO line | $600 | $0 |
| Remaining before shared line | $400 | $500 |
| $700 shared line, A first | $400 | $300 |
| Remaining afterward | $0 | $200 |

The shared line is fully funded. A later $350 line listing the same pair can use only B's remaining $200 and has a $150 gap. Do not reset the pools for that later line. These calculated pools are not SAP open balances.

## 5. Find budget POs not on a tracking sheet

Collect every PO number cited on any Master Budget and look each one up on both tracking sheets at any status. Flag any that's on neither, with its budget, line item, amount and the PO number as written. It's usually a typo on the budget or a PO that was never logged.

## 6. Add ready POs to the Master Budgets (every run)

Add each **Missing** PO from section 3 without asking. Fill the existing PR/PO cell on the expense row it pays for, using the budget's current format: `PO: <number>` or `PO: <number> & <number>`. Preserve the intended order on shared references because it controls allocation.

- A `PR In` cell whose PR now has a PO gets replaced with the PO.
- Change only the PR/PO cell. Leave Projected Cost, Actual Cost and Notes alone.
- If no row clearly matches, don't guess. List the PO in the report and ask.
- Leave off any PO the budget owner has said to keep off that budget.

Do not add rows. Obtain the budget owner's approval before adding a missing PR/PO column or changing the layout.

## 7. Add `PR In` to the Master Budgets (every run)

A submitted PR gets `PR In` in the PR/PO column of its budget line, usually right after submission ([Right after you submit](purchase-requisition-form.md#right-after-you-submit)). Catch any that were missed, for each Vision PR with no PO# yet whose show has a Master Budget:

- Blank cell: write `PR In`.
- Already `PR In`: leave it.
- Already has a PO: don't overwrite it. List it in the report.
- No row clearly matches: list it in the report and ask.

Section 6 swaps `PR In` for the PO once the PR has one.

## 8. Update the Vision budget tracker (every run)

The tracker in the Budget Dashboard folder feeds the dashboard, so this step is what carries a PR and its PO onto the dashboard. It covers each Vision PR, with or without a PO, whose event has a folder in the Vision events workspace. Skip Accelerates.

1. Pull those PRs from both tracking sheets at every status except cancelled, plus cancelled PRs whose PR# is already on the tracker.
2. **PR# already on the tracker:** don't add another row. Update its PO# and PR Status from the tracking sheet when they differ, so a cancelled PR stops counting in Committed. Change nothing else on the row.
   - Never blank a filled PO#.
   - If a filled PO# differs from the tracking sheet, or the two tracking sheets show different PO#s for one PR, leave it and ask.
3. **`PR` row with a blank PR#:** that row was added at submission, before the PR had a number. If its Budget Line and amount match and its Budget Item matches the description, fill in PR#, PO#, PR Status and `_PR Amount` from the tracking sheet instead of adding a row. If the match isn't clear, list both and ask. A new PR can take a while to reach the tracking sheet, so list a blank-PR# row with no match only if it's still unmatched on the next run.
4. **Otherwise add a row** as a child of the event's budget line, matching the existing `PR` rows:

| Column | Value |
|---|---|
| Budget Item | The tracking sheet's description, as written |
| Row Type | `PR` |
| Budget Line | The event's budget line (shows in the next fiscal year: `FY27 - Not in FY26 Budget`) |
| Event Quarter | From the quarter code, such as `Q426` |
| PR# / PO# | From the tracking sheet (PO# blank if none yet) |
| PR Status | The tracking sheet's status |
| _PR Amount | `Valuation Price` |

5. **Event has a folder but no budget line on the tracker:** don't create one. List the PR in the report and ask.

Leave the formula columns, the Plan columns and `_Master Budget Actual` alone. Committed and the chart columns recalculate from these rows. Actuals only moves on its own when the line's `_Master Budget Actual` is blank, and Plan is fixed. In the report, mention any line whose Committed now goes over its FY26 Plan.

### Fictional example

Dr. Example's speaker line for Example Eye Congress says `PR In`, and the tracker has a `PR` row with a blank PR#. The PR now shows a PR# and a PO# on the tracking sheet. The next run replaces `PR In` with `PO: <number>` on the Master Budget and fills in that tracker row's PR#, PO#, PR Status and `_PR Amount`. No row is added on either sheet.

## 9. Report

Give the findings in this order: POs missing from a budget (section 3), budget POs not on a tracking sheet (section 5), then POs over their pool (section 4). Then list what changed in **Added to Master Budgets** (budget, line item, PO# or PR#) and **Added to Budget Tracker** (rows added, PR#s filled in, PO# or PR Status refreshed).

Report only what needs attention. If nothing does, say so in one line. Leave out:

- Any section with nothing to act on.
- POs close to or exactly at their limit.
- Allocation tables for pools that aren't over.
- The no-budget-to-compare list.
- Possibly misfiled POs, unless asked.
- Data issues on POs that aren't for a Master Budget item.

## Optional: check remaining SAP funds

When asked whether an unpaid expense fits an open PO:

- Obtain a current verified `PO SAP Balance` and its source/date. Blanks, formula errors such as `#NO MATCH`, or unverified balances mean **open balance unavailable or unverified**; do not substitute Valuation Price or zero.
- Confirm the current approved PO value, vendor and purpose with procurement/SAP where needed.
- Compare only the unpaid amount allocated to that PO with its remaining balance. Account for other commitments and whether SAP already reflects them, avoiding double counting.
- Do not compare an entire trade show budget, including already-paid expenses, with the remaining SAP balance.

## Avoid

- Resetting a PO pool for each row or budget.
- Processing shared rows before deducting all single-PO rows.
- Charging the full shared expense to each listed PO.
- Treating calculated funding headroom as a SAP open balance.
- Writing to either PR tracking sheet, even to fix a data issue.
- Counting a PO against a budget from a different show year.
- Comparing an event's total to its budget. The check is per PO only.
- Copying actual records or restricted review evidence into public issues or pull requests.

Related: [KOL invoice filing](kol-invoice-filing.md) files a single KOL honorarium invoice and updates its line item's actuals; this audit then reconciles those actuals.

## Maintenance

Review date: 2026-10-06. Keep confirmation evidence in the internal work system. Revalidate live column names, statuses and comparison amounts before each audit. Missing or conflicting source records block the affected calculation, not the independent parts of the audit.
