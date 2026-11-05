---
name: lumenis-attribution-refresh
description: Refresh the marketing attribution (AOP 2027 basis) dashboard from a completed weekly inbox (pulled with lumenis-attribution-data-pull) - a re-run on a copy of the AOP basis, a deal-by-deal comparison with the published numbers, approval, then publish with the old version archived. Use for Vision or Aesthetics when the attribution dashboard needs current data or someone asks to "refresh attribution" or "update the dashboard numbers".
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

1. **Start from a complete inbox.** Run the [attribution data pull skill](../lumenis-attribution-data-pull/SKILL.md) first, or confirm `inbox/<YYYY-MM-DD>/` has `READY.txt`.
2. **Check the pull.**
   - Every source is present and from the same date.
   - Salesforce row counts match each query's `COUNT()`.
   - Won deals in the AOP window are within about 5% of the last run.
   - The pull log gives every campaign with members this year a home: webinar map, event configuration, paid media, or not marketing-attributed with a reason. Events and webinars are found by campaign ID, never by Campaign Type.
   - Every webinar in the map has a Salesforce campaign ID and a live date. `convert_exports.py` adds mapped webinars that aren't in the AOP's list to the run copy, and it names in its log any webinar it had to leave out. A webinar left out stops the publish.
   - New in-person events need an entry in the event configuration. Until EJ's script adds new events automatically, add the entry to the run copy's `events/scripts/events_config.py` with the requester's confirmed date, division, cost, campaign IDs and HubSpot lists, and add it to `AOP-2027-Basis` at publish.
   - Every ON24 webinar is in the business-unit map. **Never guess a division**: ask the requester and add the answer to the map.
   - Missing or partial sources stop the run. Report which.
3. **Run the refresh on a copy.** From the work folder's `weekly-agent/` (use `python3` in place of `python` on a Mac). Use `-B` so Python writes no cache files into the shared folder:
   1. Rebuild the opportunities and webinars:
      ```
      python -B -X utf8 -I convert_exports.py <date> <run folder outside the work folder>
      ```
      This rebuilds the opportunities with the CAD rate table, re-runs the webinar attribution in full from ON24 and Salesforce campaign members, and re-checks the other channels on the AOP's existing account links.
   2. Re-run Accelerates from the rep-approval sheets and Salesforce "Attended" members. This writes its own log and leaves tradeshow rows unchanged:
      ```
      python -B -X utf8 -I rerun_accelerates.py <run folder> <date> <run folder>/accelerates
      ```
   3. Copy the re-run's `<run folder>/accelerates/events/raw/event_attribution.json` over `<run folder>/events/raw/event_attribution.json`. The comparison and the publish read that path, and the re-run's file already carries the tradeshow rows unchanged. Without this copy, Accelerate deals the re-run gains never reach the dashboard.
   4. Confirm the published AOP basis is unchanged by comparing file hashes before and after.
4. **Compare with the published numbers.**
   ```
   python -B -X utf8 -I compare_to_aop.py <run folder> <date> <run folder>/comparison.md
   ```
   - By default it compares with the **October AOP as presented** (the archived copy), not with the live `AOP-2027-Basis`, which changes on every publish. Pass a fourth argument to compare with another folder, for example the live one for a week-over-week view.
   - Copy it to `weekly-agent/logs/<date>_comparison.md`, and write `weekly-agent/logs/<date>.md` with the headline, every differing deal, and why it differs.
   - Typical reasons: newly Won, close date moved, amount changed, link gained or lost through new data.
   - Same-window totals should land within about 1% of the published numbers. Explain anything larger deal by deal.
5. **Get approval.** Show the requester the log summary and wait for a yes.
   - Changes caused by new evidence rather than new deals need the rules owner's review: a deal gained or lost through matching, or a tier change.
   - Never publish on a "looks fine" that nobody actually said.
6. **Publish,** in the work folder, only after approval:
   1. **Archive:** copy the dashboard HTML, `attribution_data.json`, `build_data.py`, `deck/build/canonical.py`, `canonical.json`, `recheck/` and every channel output that will be replaced to `archive/<old build date>_before_<date>_refresh/`.
   2. **Copy outputs:** copy the run's channel outputs into `AOP-2027-Basis/`: the attribution JSON files, `all_us_opps.json` and `webinars/raw/webinars.json` (which now lists any new webinars). Don't copy people-level inputs. Add any new event to `events/scripts/events_config.py` as well.
   3. **Move the window end:** set it to the pull date in `deck/build/canonical.py` (`WINDOW_END`) and `corrected-dashboard/build_data.py` (`WINDOW`). Run `canonical.py`, then `build_data.py` (it refuses to build if totals differ from `canonical.json`), then `build_dashboard.py`.
   4. **Verify:** check the page's `built` date and window, and that OneDrive shows the file synced (on Windows, `System.StorageProviderState` = 3). Open it from SharePoint, not the local copy.
   5. **Leave a note:** a dated note in the work folder's root (`EJ_AI_NOTES_<date>.md`) covering what changed, the before and after totals, the archive path and open items.

## Attribution rules (AOP basis; don't change here)

- **In-person events** (Accelerates, tradeshows): attendees only. **Webinars**: registrants count.
- **Tradeshow attendance** (agreed by Nicholas, 2026-11-05):
  - Booth statuses count as attended: Attended, Badge Scanned, Visited Booth, Received or Booth Treatment, Responded.
  - Requested Info and Downloaded Field Guide also count when the member was added on or after the show's first day, because that's a booth contact.
  - Sent, Registered, Dinner RSVP, and requests or bookings made before the show (Requested Info, Requested or Booked Treatment, Requested Rep Contact) count as registered only.
  - `events_config.py` (`SF_PRE`) still treats Requested Info and Downloaded Field Guide as pre-event whatever the date. Until that changes, list the booth-day ones in the log.
- **Credit goes to the account:** any contact on it who touched the channel credits its deals.
- **Sourced** = created on or after the touch, within 180 days. **Accelerated** = open up to 365 days before the touch and won on or after it.
- **Tiers:** A or B counted; C listed only.
- **Email-domain matches** (Nicholas, 2026-11-05):
  - Free and internet-provider addresses (Gmail, Yahoo, Outlook, iCloud, Comcast and the rest of `free_domains.txt`) never link a person to an account. Add any new one you find to that file.
  - A business domain that points to **exactly one** Salesforce account is a medium link, so an attendee or registrant matched this way is Tier B.
  - A business domain shared by two or more accounts (group practices, hospital and university systems, buying groups, distributors) is Tier C: listed for review, not counted.
- **Counting:** one credit per deal per channel, and once in the all-channel total.
- **Paid media is verified against the ad platforms,** not only Salesforce. Salesforce Lead Source and UTM fields can be overwritten by later forms, imports and syncs, so on their own they only support a paid credit. A paid social or paid search lead is ad-verified when at least one of these confirms it:
  - it's on a HubSpot ad campaign's contact list;
  - HubSpot's Original Source is Paid Social or Paid Search;
  - it has an original UTM, Google click ID or Facebook click ID in HubSpot;
  - it's in the ad platform's own lead export (for example Meta lead forms for accounts not connected to HubSpot).

  Paid search counts only ad-verified leads. For paid social, list in the log every credited deal that rests on Salesforce fields alone, or where Salesforce and HubSpot disagree on the source, for the rules owner to review. When the two disagree, HubSpot's original (first-touch) value is the better evidence.
- **CAD** is converted to USD at the Bank of Canada monthly rate.

## Known limits

- **Accelerates and webinars are re-run from people data.** Accelerates use the rep-sheet attendees and Salesforce "Attended" members; webinars use ON24 and campaign members. **Tradeshows, paid and organic channels are not yet re-run.** Their deals are re-checked only on the account links the October AOP already found. A new attendee or lead at an account the AOP never linked isn't credited until those channels are re-run from Salesforce campaign members, OneTap check-ins and the HubSpot contacts export. Say so in every log.
- **The scripts don't yet enforce the 2026-11-05 rules above.** They link a business domain shared by up to three accounts, and they don't run the paid cross-check. Until they do, list in each log every domain-only match whose domain points to more than one account, and every paid deal without an ad-platform record.
- **New events and webinars need configuration.** New webinars are added automatically once the map has their campaign ID. New in-person events are not: they need an entry in the event configuration (see step 2). Whether the Aesthetics "Unveiled" regional shows count as a channel is for the rules owner to decide.
- HubSpot ads covers only the ad accounts connected to HubSpot (not Folix, Noetic or the Vision Meta account). Spend and lead lists for the others have to come from the ad platform or the agency.
- Webinars without an ON24 report use Salesforce campaign members only.

## Report

The run log path, same-window and current totals per division, the number of differing deals with reasons, what was published (or why not), and the open items.
