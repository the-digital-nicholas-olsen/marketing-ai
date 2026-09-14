---
name: lumenis-accelerate-pipeline-sync
description: Fill Opportunity Amount, Opportunity Stage and Expected Value on an Accelerate rep approval Smartsheet from live Salesforce opportunities, then summarize pipeline by product on request. Use when asked to sync, refresh or update pipeline data on an AES or VIS Rep Approval sheet. Needs the Smartsheet connector and Claude in Chrome with an active Salesforce session.
---
# Accelerate pipeline sync

Owner: marketing operations (event pipeline reporting).
Status: draft procedure, first run 2026-09-14 on a 38-row Aesthetics rep approval sheet; subject-owner review required.

Rep approval sheets list the practices reps invite to Accelerate. Each row should link a Salesforce opportunity. This skill turns those links into pipeline numbers. It reads Salesforce and writes only the link, Amount, Stage and Expected Value columns. It never edits Salesforce.

## Prerequisites

- Smartsheet connector with write access to the sheet.
- Claude in Chrome with the user already logged in to Salesforce Lightning. Never request or enter credentials.
- Exact column names: `Opportunity Link from Salesforce`, `Opportunity Amount`, `Opportunity Stage`, `Expected Value`. Report any missing column and stop; do not auto-map. `Practice / Account Name` and `Product of Interest` are used when present.

## Procedure

1. **Resolve the sheet.** Rep approval sheets live in the `Qn City Accelerate` event folder of the event workspace. Search by sheet name and confirm the workspace and folder path. Users abbreviate or mistype names ("ass rep approval" meant AES Rep Approval). Use the match in the named folder; ask only when more than one fits.
2. **Read rows and column IDs** with `get_sheet_summary` and `get_columns`. Connector row order is sorted, not the sheet's display order.
3. **Classify each link** using [link types](references/salesforce-reading.md#link-types):

   | Link cell | Action |
   |---|---|
   | Clean opportunity URL | Read it |
   | Wrapped opportunity URL (Checkpoint, Outlook Safelinks, `native/bridge.app`, extra query string) | Extract the `006` ID, read it, replace the link with a clean URL |
   | `OPP-` number | Search the number, read the match, replace the cell with its URL |
   | Quote URL (`0Q0`) | Read the quote's opportunity, replace the link |
   | Account URL, blank with a practice name, or unusable | Search the account or practice for open opportunities. Use one that matches the row's product and quarter and replace the link; otherwise mark not found |

   Skip rows with no link and no practice name.
4. **Find duplicates.** Rows are duplicates when they resolve to the same opportunity or the same Salesforce account. The first row keeps the data; later rows get `Duplicate`. If one account has two different open opportunities on the sheet, ask which to use.
5. **Read Salesforce** in one batched UI API call from the logged-in tab ([method](references/salesforce-reading.md#batched-read)). Capture Name, Amount, StageName, IsClosed, IsWon and AccountId. Fall back to opening pages only if the call fails.
6. **Map values:**

   | Salesforce state | Amount | Stage | Expected Value |
   |---|---|---|---|
   | Open, stage 1–6 | Number | Stage as returned | Formula |
   | Closed Won | Number | `Won` | Blank |
   | Closed not won (Abandon, Lost, Withdrawn) | Number | Stage as returned | Blank |
   | Duplicate | `Duplicate` | `Duplicate` | `Duplicate` |
   | Nothing found | `Unable to find opportunity in Salesforce` | same | same |

   For a closed-not-won deal, first list the account's other opportunities. If a recent Won deal replaced it, report that and ask which to record. Customers attend too, so Won rows are normal. Pause on open stages that do not start with 1–6.
7. **Present the change set:** practice, amount, stage and expected value per row; duplicates; link replacements; not-found rows; closed deals; open pipeline and expected value totals. Call out judgment calls: opportunity or account names that differ from the practice, name searches and closed deals. Write when the request already authorizes it; otherwise wait for approval. Always resolve open judgment calls first.
8. **Write one `update_rows` batch** following [Smartsheet writes](references/smartsheet-writes.md). Put the formula only on open stage 1–6 rows.
9. **Read back** the practice, link, Amount, Stage and Expected Value columns and confirm the formulas calculated. Report row counts by outcome, open pipeline, total expected value, link fixes and unresolved items.
10. **Product rollup, on request.** Use open, non-duplicate rows. Normalize `Product of Interest`: Stellar M22 (Stellar, XPL, ResurFX, Q-switched), triLift (incl. 2.0 and bundles), FoLix, UltraPulse (Alpha, Encore, CO2), AcuPulse, Splendor X, NuEra Tight. Credit a row's full amount to every product it names, including "or" options, and say that product totals overlap. List Won and closed rows separately. Give product, opportunity count and total pipeline.

## Expected Value formula

```
=IFERROR(VALUE([Opportunity Amount]@row) * IF(LEFT([Opportunity Stage]@row, 1) = "1", 0.068, IF(LEFT([Opportunity Stage]@row, 1) = "2", 0.091, IF(LEFT([Opportunity Stage]@row, 1) = "3", 0.15, IF(LEFT([Opportunity Stage]@row, 1) = "4", 0.2208, IF(LEFT([Opportunity Stage]@row, 1) = "5", 0.619, IF(LEFT([Opportunity Stage]@row, 1) = "6", 0.934, "")))))), "")
```

| Stage | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Conversion rate | 6.8% | 9.1% | 15% | 22.08% | 61.9% | 93.4% |

Rates are hard-coded. When sales operations changes them, update the formula and table together in one reviewed change. If a user supplies different rates for a run, confirm which set to use before writing.

## Mistakes to avoid

- Marking an Account link "skipped" instead of searching for the account's open opportunity.
- Treating the connector's sorted order as sheet order.
- Putting the formula on Won or closed rows (it would show 0 instead of blank).
- Writing currency strings; write `165000`, not `$165,000.00`.
- Storing sheet IDs, practice names or pipeline results in this repository. Keep run outputs in the work system.
