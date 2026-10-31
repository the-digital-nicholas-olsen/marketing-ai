# Trade show finals close-out

- Division: US Vision Marketing only. Do not apply this procedure to Aesthetics or Hospital.
- Scope: closing out a trade show once its final actuals are in: sync the Vision budget tracker from the show's Master Budget, mark the show done, and run one last audit.
- Systems: Smartsheet, in the Vision Marketing Events workspace and the Budget Dashboard folder. Sheet links and IDs remain in the internal work system.
- Subject owner: Kaelyn Gray; maintainer: @the-digital-nicholas-olsen.
- Status: draft for review.
- Source and review: Kaelyn Gray's working procedure, submitted 2026-10-30. Revalidate sheet and column names before operational use.

## Use this when

The subject owner says "finals are in for [SHOW]" or "final actuals are in". An explicit request to close out the show authorizes the routine sync below. A status statement alone prompts a proposed close-out; it does not authorize writes.

## Required inputs

- The show name.
- The show's Master Budget.
- The FY Vision budget tracker and its dashboard reports.

## Rules

1. **The Master Budget is the source of truth for actuals.** The tracker follows it, never the other way round. Use the **Actual Cost** on the **Estimated Total** row when the show has a Master Budget.
2. **The final audit doesn't change anything.** It confirms the numbers were already right. Report anything that doesn't match and ask, rather than fixing it.
3. **The PR tracking sheets are view only.** Don't change them, even to fix a mistake.
4. **If the show is unclear, stop and ask.** "AAO" could be either AAO Optometry or AAO Ophthalmology, for example.
5. **Don't copy actuals into this repository.** Amounts, names, PR and PO numbers stay in Smartsheet.

Before writing, run the line-total and PO-allocation checks in section 2 read-only. Hold the affected sync and Done marker if totals, allocations or finality are unresolved.

## 1. Sync the tracker

The budget dashboard reads from the tracker's **`_Master Budget Actual`** column, which is typed in rather than calculated. Find the show's rows by Budget Line, not by name, because Budget Item is a formula.

| Row | Enter |
|---|---|
| **Budget Line row** | The Estimated Total Actual Cost from the Master Budget. |
| **PR rows** | The Actual Cost of the Master Budget line items with that PO number. Use recorded Actual Cost, including invoiced but unpaid costs; do not infer zero from payment status. Blank or unknown actuals remain unresolved until confirmed. |

Use the confirmed actual-cost allocation across all shared POs and shows, without resetting a shared pool per show. Do not infer invoice allocation from PO order or overwrite other shows' contributions; flag unresolved splits before syncing.

## 2. Run the final audit

Rerun these for the show, and change nothing:

1. **Line items add up.** The Master Budget's Actual Cost lines add up to its Estimated Total. The total is a formula over a fixed range of rows, so a line below that range isn't counted.
2. **Budget Line matches.** `_Master Budget Actual` on the Budget Line row equals the Estimated Total, and the tracker's **Actuals** column shows the same figure.
3. **PR rows match.** Each PR row equals the Master Budget lines with its PO. The PR rows should add up to the Budget Line row.
4. **Shared POs are accounted for.** If the PR rows come up short, look for a PO that's shared with another line or show, or a PR row left blank, before calling it a mismatch.
5. **POs are all in place.** Run [trade show PO-to-budget reconciliation](po-budget-reconciliation.md) in audit-only mode for the show's POs: none missing from the Master Budget, none missing from the PR tracking sheets, none over budget.
6. **Roll-ups recalculated.** Category and total rows include the new figure.
7. **Dashboard reports match.** The show's row and its category row in the chart data reports match the tracker. Verify the Done label after section 3.

## 3. Add the Done note

Only after all final checks pass, add `✅ DONE · ` to the front of the show's **Budget Item** on its Budget Line row. It goes in Budget Item, not Notes, so it shows on the dashboard chart labels:

`✅ DONE · Example Eye Expo · Q3 · $20,000 budget`

Budget Item is a cell formula that builds the label from the plan. Put the prefix inside the opening text of the formula, rather than typing over it, so the label still follows the plan:

`="✅ DONE · Example Eye Expo" + ...`

If it already starts with `✅ DONE`, leave it and say so.

Read back the formula and dashboard label after adding the prefix. If the formula cannot be changed without breaking its calculation, hold the label change and report it.

## 4. Report back

If everything matches, say so in one line. If not, list each difference with the sheet, the row and both figures, and ask what to do.

## Preferred example (fictional)

"Finals are in for the Example Eye Expo." The Master Budget's Estimated Total goes on the tracker's Budget Line row, and each PR row gets its PO's line items. Budget Item becomes `✅ DONE · Example Eye Expo · Q3 · $20,000 budget`. In the audit the Budget Line matches, but the PR rows come up short by the cost of two badges. Those badges were paid from a PO shared with another show, and one PR row was left blank. The preflight reports the unresolved allocation and holds the Done marker until it is resolved; the final read-only audit reports any remaining differences.

## Avoid

- Fixing a difference during the final audit without asking.
- Typing over the Budget Item formula. The label stops following the plan.
- Adding the Done note before the tracker is synced.
- Checking only the Budget Line total. It can match while the PR rows under it don't.

## Missing information and decisions

- A late invoice or correction must be reported to the subject owner. Until the owner confirms reopening and the label treatment, hold the changed close-out; never silently retain a Done marker for unresolved actuals.
- Accelerate Master Budgets have no Actual Cost column, so this procedure covers trade shows only.

Related: [trade show PO-to-budget reconciliation](po-budget-reconciliation.md) audits POs against budgets across shows; this procedure closes out one show.
