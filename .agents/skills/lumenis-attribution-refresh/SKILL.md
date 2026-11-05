---
name: lumenis-attribution-refresh
description: Pull this week's Salesforce, ON24, HubSpot ads and Smartsheet data and refresh the marketing attribution (AOP 2027 basis) dashboard - dated inbox, read-only pulls, a re-run on a copy of the AOP basis, a deal-by-deal comparison with the published numbers, approval, then publish with the old version archived. Use for Vision or Aesthetics when the attribution dashboard needs current data or someone asks to "refresh attribution" or "update the dashboard numbers".
---

# Marketing attribution refresh

Owner: marketing operations.
Status: draft procedure, 2026-11-05; subject-owner review required (attribution rules: Nicholas).

The attribution dashboard credits closed-won Salesforce deals to marketing channels with the AOP 2027 basis rules. This skill refreshes it with new data without changing those rules. The scripts, data, dashboard and dated run logs live in the private **Campaign-Attribution-Engine** work folder on the Vision marketing SharePoint site, never in this repository. Its `HANDOFF_FOR_NEW_CLAUDE.md` describes the folder and current state; read it first.

## Safety

- **Every pull is read-only.** Never create, edit or delete anything in Salesforce, HubSpot, ON24 or Smartsheet.
- **Personal data stays in the work folder's `inbox/`.** That covers names, emails and phone numbers in the pulls. Never copy it into a dashboard, a note, an issue or this repository. Smartsheet event sheets also hold travel and ID details: read counts or the specific columns needed, never whole rows.
- **Run on a copy.** Never write to the published AOP basis or the dashboard until the publish step has been approved.
- **Archive, don't delete.** Before publishing, copy everything that will be overwritten into a dated `archive/` folder.
- **Attribution rules change only when the rules owner and the requester agree.** Record any change in the work folder's agent notes with the date.

## Inputs

- The pull date (normally Monday).
- Access: Salesforce (a connector, or report exports by the requester), ON24, HubSpot and Smartsheet.
- The webinar business-unit map in the work folder (`weekly-agent/webinar_bu_map.csv`).

## Procedure

1. **Open a dated inbox.** Copy `inbox/_TEMPLATE` to `inbox/<YYYY-MM-DD>/`. Folders: `salesforce/`, `on24/`, `hubspot/`, `smartsheet/`, `onetap/`.
2. **Pull each source** as set out in the [data pull reference](references/data-pull.md): Salesforce (seven queries, every row, JSON and CSV, plus `PULL_LOG.md`), ON24 (one year-to-date audience report per webinar), HubSpot ads, Smartsheet attended counts, and OneTap check-ins after in-person events. Add an empty `READY.txt` only when every source is in.
3. **Check the pull.**
   - Every source is present and from the same date.
   - Salesforce row counts match each query's `COUNT()`.
   - Won deals in the AOP window are within about 5% of the last run.
   - Every ON24 webinar is in the business-unit map. **Never guess a division**: ask the requester and add the answer to the map.
   - Missing or partial sources stop the run. Report which.
4. **Run the refresh on a copy.** From the work folder's `weekly-agent/`:
   ```
   python -X utf8 -I convert_exports.py <date> <run folder outside the work folder>
   ```
   Use `python3` on a Mac. This rebuilds the opportunities with the CAD rate table, re-runs the webinar attribution in full from ON24 and Salesforce campaign members, and re-checks the other channels on the AOP's existing account links. Confirm afterwards that the published AOP basis is unchanged, by comparing file hashes before and after.
5. **Compare with the published numbers.**
   ```
   python -X utf8 -I compare_to_aop.py <run folder> <date> <run folder>/comparison.md
   ```
   - Copy it to `weekly-agent/logs/<date>_comparison.md`, and write `weekly-agent/logs/<date>.md` with the headline, every differing deal, and why it differs.
   - Typical reasons: newly Won, close date moved, amount changed, link gained or lost through new data.
   - Same-window totals should land within about 1% of the published numbers. Explain anything larger deal by deal.
6. **Get approval.** Show the requester the log summary and wait for a yes.
   - Changes caused by new evidence rather than new deals need the rules owner's review: a deal gained or lost through matching, or a tier change.
   - Never publish on a "looks fine" that nobody actually said.
7. **Publish,** in the work folder, only after approval:
   1. **Archive:** copy the dashboard HTML, `attribution_data.json`, `build_data.py`, `deck/build/canonical.py`, `canonical.json`, `recheck/` and every channel output that will be replaced to `archive/<old build date>_before_<date>_refresh/`.
   2. **Copy outputs:** copy the run's channel outputs (attribution JSON files and `all_us_opps.json`, not people-level inputs) into `AOP-2027-Basis/`.
   3. **Move the window end:** set it to the pull date in `deck/build/canonical.py` (`WINDOW_END`) and `corrected-dashboard/build_data.py` (`WINDOW`). Run `canonical.py`, then `build_data.py` (it refuses to build if totals differ from `canonical.json`), then `build_dashboard.py`.
   4. **Verify:** check the page's `built` date and window, and that OneDrive shows the file synced (on Windows, `System.StorageProviderState` = 3). Open it from SharePoint, not the local copy.
   5. **Leave a note:** a dated note in the work folder's root (`EJ_AI_NOTES_<date>.md`) covering what changed, the before and after totals, the archive path and open items.

## Attribution rules (AOP basis; don't change here)

- **In-person events** (Accelerates, tradeshows): attendees only. **Webinars**: registrants count.
- **Credit goes to the account:** any contact on it who touched the channel credits its deals.
- **Sourced** = created on or after the touch, within 180 days. **Accelerated** = open up to 365 days before the touch and won on or after it.
- **Tiers:** A or B counted; C listed only.
- **Counting:** one credit per deal per channel, and once in the all-channel total.
- **Paid search** counts only ad-verified leads. **CAD** is converted to USD at the Bank of Canada monthly rate.

## Known limits

- Non-webinar channels can only be re-checked on account links the AOP already found until their people inputs are in the work folder. Those inputs are OneTap, HubSpot event lists, rep-sheet attendees and paid-digital leads. New people at new accounts won't be found until then; say so in every log.
- HubSpot ads covers only the ad accounts connected to HubSpot. Spend for other ad accounts has to come from the ad platform or the agency.
- Webinars without an ON24 report use Salesforce campaign members only.

## Report

The run log path, same-window and current totals per division, the number of differing deals with reasons, what was published (or why not), and the open items.
