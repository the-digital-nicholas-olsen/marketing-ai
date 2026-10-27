# Vision trade show PO-to-budget reconciliation

- Division: US Vision Marketing. Do not apply this procedure to Aesthetics or Hospital budgets.
- Scope: trade show Master Budgets only. Accelerate budgets are out of scope.
- System: Smartsheet PR tracking sheet and trade show Master Budgets. Actual PO/PR numbers, amounts, payees, identifiers, links and audit findings remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: reviewed Vision workflow guidance.
- Source and review: working rules and layouts observed 2026-10-01, with read-only follow-up on 2026-10-05. Allocation order and trade-show-only scope reviewed 2026-10-06. Restricted confirmation evidence stays internal.

## Use this when

Audit ready POs missing from trade show budgets, budget allocations exceeding their funding pools, and event estimates exceeding their budgets. The audit is **read-only**. Only record missing POs when explicitly asked.

The primary comparison uses the associated amount recorded as `Valuation Price` in the PR tracking sheet. It does not establish the current approved PO value or remaining SAP balance. Keep an open-balance check separate.

## Required inputs

- Read access to the Vision PR tracking sheet and all relevant trade show Master Budgets.
- One verified comparison amount for each PO, and complete detailed expense rows across all in-scope budgets.
- Write access only when budget updates are requested.
- For a separate open-balance check, a current verified SAP balance and the unpaid expense/commitment details.

## 1. Pull ready POs

For the missing-PO pass, filter `Status` = `PO Created, Pending Invoice`. Read `Quarter`, `Vendor`, `Header Text`, `Category`, `PR#`, `Valuation Price` and `PO#`.

Confirm that results are complete, not sampled or truncated. Read other statuses rather than assuming a PO was paid. Use Header Text to identify the likely event and confirm ambiguous matches.

## 2. Collect trade show Master Budgets

Browse the Vision events workspace each run so new trade show folders are included. The usual layout is `Line Item / Projected Cost / Actual Cost / Notes / PR/PO`; the last column may be titled `PR / PO #`.

Confirm all relevant rows were retrieved. Parse complete PO numbers from references such as `PO: <number>` or `PO: <number> & <number>` and match exactly. A prefix or substring is only a search aid.

## 3. Find missing POs

Classify each ready PO:

- **Missing:** its trade show has a Master Budget, but the PO is absent.
- **Possibly misfiled:** its reference appears on a budget, but the event, vendor or expense appears inconsistent with its purpose.
- **No budget to compare / outside scope:** no trade show budget was found, or the purchase is outside this procedure's scope. State which applies; a past event may still have a budget.
- **Data issue:** a PO reference or amount is missing, malformed or inconsistent, such as an apparent PR number in the PO field.

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

## 5. Check each trade show's total

Flag `Estimated Total` (or the equivalent event total) above `US Budget` (or `BUDGET`). Report blank or unavailable budget values as **couldn't check**.

## Optional: check remaining SAP funds

When asked whether an unpaid expense fits an open PO:

- Obtain a current verified `PO SAP Balance` and its source/date. Blanks, formula errors such as `#NO MATCH`, or unverified balances mean **open balance unavailable or unverified**; do not substitute Valuation Price or zero.
- Confirm the current approved PO value, vendor and purpose with procurement/SAP where needed.
- Compare only the unpaid amount allocated to that PO with its remaining balance. Account for other commitments and whether SAP already reflects them, avoiding double counting.
- Do not compare an entire trade show budget, including already-paid expenses, with the remaining SAP balance.

## Recording missing POs — only when asked

Fill the existing PR/PO cell on the expense row it pays for, using the budget's current format: `PO: <number>` or `PO: <number> & <number>`. Preserve the intended order on shared references because it controls allocation.

Do not add rows. Obtain the budget owner's approval before adding a missing PR/PO column or changing the layout.

## Avoid

- Resetting a PO pool for each row or budget.
- Processing shared rows before deducting all single-PO rows.
- Charging the full shared expense to each listed PO.
- Treating calculated funding headroom as a SAP open balance.
- Copying actual records or restricted review evidence into public issues or pull requests.

Related: [KOL invoice filing](kol-invoice-filing.md) files a single KOL honorarium invoice and updates its line item's actuals; this audit then reconciles those actuals.

## Maintenance

Review date: 2026-10-06. Keep confirmation evidence in the internal work system. Revalidate live column names, statuses and comparison amounts before each audit. Missing or conflicting source records block the affected calculation, not the independent parts of the audit.
