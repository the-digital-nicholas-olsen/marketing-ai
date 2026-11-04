---
name: lumenis-tradeshow-deal-attribution
description: After a tradeshow, collect the sales floor tracker and attribute the show's deals in Salesforce - set the show campaign as Primary Campaign Source on every open deal on the tracker, and send closed-won deals to the Salesforce admin to update by hand. Use at P15 (about a week after the show).
---

# Tradeshow deal attribution

Owner: EJ.
Status: draft procedure, written 2026-11-04 from the Vision tradeshow content planning session; not yet run. Review required.

Booth conversations turn into deals that won't show up in campaign reporting unless the deal points at the show. The floor tracker is sales' own list of who they worked at the show.

## Procedure

1. **Request the floor tracker** from the RSM leading the show, or the sales director. Draft the email; chase once if it hasn't arrived in three working days.
2. **Match each tracker row** to a Salesforce opportunity (account, contact, rep). List rows with no opportunity separately; don't create opportunities.
3. **Open deals:** set Primary Campaign Source to the show's campaign (D1). Read each back after saving.
4. **Closed-won deals:** we can't override the field on these. Send the list (opportunity, account, rep) to the Salesforce admin to update manually, and confirm when done.
5. **Report** in the row: deals linked, closed-won sent to the admin, tracker rows with no opportunity.

## Boundaries

- Change only Primary Campaign Source, only on deals on the tracker. Never change a deal another campaign already owns without asking the sales director.
- The tracker and deal data stay in Salesforce and the project folder, never in this repository.
