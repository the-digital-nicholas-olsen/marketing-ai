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
   - New in-person events need configuration:
     - **Accelerates:** a row in `weekly-agent/accelerate_events.csv` with the confirmed date, campaign IDs per division and cost. `rerun_accelerates.py` picks it up. An Accelerate without a date is listed as "not run". Any 2026 Accelerate campaign with members that isn't on either list is named in the re-run's log.
     - **Tradeshows:** add an entry to the run copy's `events/scripts/events_config.py` with the requester's confirmed date, division, cost, campaign IDs and HubSpot lists. Add it to `AOP-2027-Basis` at publish.
     - **Local events:** a row in `local_events.csv`.
   - Every ON24 webinar is in the business-unit map. **Never guess a division**: ask the requester and add the answer to the map.
   - Missing or partial sources stop the run. Report which.
3. **Run the refresh on a copy.** From the work folder's `weekly-agent/` (use `python3` in place of `python` on a Mac). Use `-B` so Python writes no cache files into the shared folder:
   1. Rebuild the opportunities and webinars:
      ```
      python -B -X utf8 -I convert_exports.py <date> <run folder outside the work folder>
      ```
      This rebuilds the opportunities with the CAD rate table, re-runs the webinar attribution in full from ON24 and Salesforce campaign members, and re-checks the other channels on the AOP's existing account links.
   2. Re-run Accelerates and tradeshows from people data. Accelerates use the rep-approval sheets and Salesforce "Attended" members. Tradeshows use Salesforce campaign members under the agreed status rule.
      ```
      python -B -X utf8 -I rerun_accelerates.py <run folder> <date> <run folder>/accelerates
      ```
      - The log goes to `<run folder>/accelerates/accelerate_rerun.md`.
      - It writes its result into the run copy's `events/raw/event_attribution.json` itself, so no copy step is needed. The input is kept as `event_attribution.before_rerun.json`.
      - `compare_to_aop.py` stops if the re-run and the run's events file disagree.
      - A re-run adds links to the AOP's and never drops one by itself. To remove a link the rules owner rejects (for example, a rep says the attendee belongs to another practice), add a row to `weekly-agent/link_overrides.csv` with the reason, who approved it and the date.
   3. Credit Local Events (Unveiled stops, demo days and other small in-person events listed in `local_events.csv`). Run this after the re-run, because it adds its rows to the run's `events/raw/event_attribution.json`:
      ```
      python -B -X utf8 -I rerun_local_events.py <run folder> <date>
      ```
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
   3. **Local Events on the dashboard.** The first publish after the channel was added (2026-11-05) must add `Local Events` (event channel `Local Event`) wherever the channels are listed: the channel loop and `COST` in `deck/build/canonical.py`, the channel list and `COST` in `corrected-dashboard/build_data.py`, and `CHANNELS` in `corrected-dashboard/dashboard_template.html`. Costs come from `local_events.csv`. Get the requester's approval for this change with the rest of the publish.
   4. **Move the window end:** set it to the pull date in `deck/build/canonical.py` (`WINDOW_END`) and `corrected-dashboard/build_data.py` (`WINDOW`). Run `canonical.py`, then `build_data.py` (it refuses to build if totals differ from `canonical.json`), then `build_dashboard.py`.
   5. **Verify:** check the page's `built` date and window, and that OneDrive shows the file synced (on Windows, `System.StorageProviderState` = 3). Open it from SharePoint, not the local copy.
   6. **Leave a note:** a dated note in the work folder's root (`EJ_AI_NOTES_<date>.md`) covering what changed, the before and after totals, the archive path and open items.

## Attribution rules (AOP basis; don't change here)

- **In-person events** (Accelerates, tradeshows, local events): attendees only. **Webinars**: registrants count.
- **Local Events** is its own channel (Nicholas, 2026-11-05). It covers small in-person events outside Accelerates and tradeshows: Unveiled by Lumenis stops, demo days, lunch-and-learns and partner events. Each is listed in the work folder's `weekly-agent/local_events.csv` with its date, division, cost, Salesforce campaign IDs and HubSpot attendee lists. It uses the same rules as the other in-person channels, and its deals are counted once in the all-channel total like every other channel.
- **Tradeshow attendance** (agreed by Nicholas, 2026-11-05):
  - Booth statuses count as attended: Attended, Badge Scanned, Visited Booth, Received or Booth Treatment, Responded.
  - Requested Info and Downloaded Field Guide also count when the member was added on or after the show's first day, because that's a booth contact.
  - Sent, Registered, Dinner RSVP, and requests or bookings made before the show (Requested Info, Requested or Booked Treatment, Requested Rep Contact) count as registered only.
  - This is `sf_attended()` in `events_config.py` (2026-11-06). The re-run and the Local Events script both use it.
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

- **What is re-run from people data:**
  - **Accelerates:** rep-sheet attendees and Salesforce "Attended" members.
  - **Tradeshows:** Salesforce campaign members (since 2026-11-06). HubSpot event lists and OneTap check-ins aren't read yet.
  - **Webinars:** ON24 and campaign members.
  - **Local events:** campaign members and HubSpot lists.
- **Paid and organic channels are not yet re-run.** Their deals are re-checked only on the account links the October AOP already found. A new lead at an account the AOP never linked isn't credited until they are re-run from the HubSpot contacts export and the ad-platform records. Say so in every log.
- **The domain and tradeshow-status rules are in the scripts** (2026-11-06):
  - `attribute_v2.py`, `attribute_events.py`, `rerun_accelerates.py` and `rerun_local_events.py` link a business domain only when it points to exactly one account.
  - The re-run log lists the people whose domain points to two or more accounts.
- **The paid cross-check isn't scripted yet.** List every paid deal without an ad-platform record in each log.
- **New events and webinars need configuration:**
  - **Webinars:** added automatically once the map has their campaign ID.
  - **Accelerates:** a row in `accelerate_events.csv`. Accelerate Scottsdale (Q4) is there without a date.
  - **Tradeshows:** an entry in the event configuration (see step 2).
  - **Local events:** a row in `local_events.csv`.
- **Local event dates and attendees.** The 2026 Unveiled dates are estimated as three days before each Salesforce upload until confirmed. Salesforce holds only 12 Unveiled attendees, 8 of them with no account; the full attendee lists (HubSpot or the event platform) are needed. The Q2 Unveiled spend has no Salesforce campaign at all.
- HubSpot ads covers only the ad accounts connected to HubSpot (not Folix, Noetic or the Vision Meta account). Spend and lead lists for the others have to come from the ad platform or the agency.
- Webinars without an ON24 report use Salesforce campaign members only.

## Report

The run log path, same-window and current totals per division, the number of differing deals with reasons, what was published (or why not), and the open items.
