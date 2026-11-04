---
name: lumenis-tradeshow-leads
description: Collect a tradeshow's leads from every source (lead retrieval badge scans, dinner check-ins, Jotform treatment consents, session lists, tabletop attendee lists), add show notes to Latest Lead Info, and import them into HubSpot so the workflow sets the Salesforce member status. Use from the Monday after the show (P1-P5) to the late session list (P16).
---

# Tradeshow leads

Owner: EJ (download and import), Kaelyn (dinner list and session-list follow-up).
Status: draft procedure, written 2026-11-03 from the Vision tradeshow planning session; timing and ownership updated 2026-11-04 from the content and digital operations session. Not yet run. Review required.

**Monday after the show** means the first Monday after the last show day.

## Collect (Monday after the show)

| Step | Source | Who | Where |
|---|---|---|---|
| P1 | Booth badge scans | EJ | Lead retrieval export; logins are in the show notes in Smartsheet (B10) |
| P2 | Dinner check-ins | Kaelyn to EJ | OneTap (L7) |
| P5 | Booth treatments | EJ | Clinical's Jotform consent submissions; the form's marketing opt-in line (D10) covers marketing email |
| P1 | Tabletop shows | EJ | The show's pre- and post-show attendee lists (F8) |

## P3-P4 Upload (Monday after the show + 2)

One file, one row per person: first name, last name, email, practice, city, state, source, show notes. Remove duplicates by email, keeping every source in one cell. As each lead is processed, write its show notes (who they spoke to, what they asked about, follow-up wanted) into **Latest Lead Info** so the rep sees them. Import into HubSpot; the show workflow ([lumenis-hubspot-workflow](../lumenis-hubspot-workflow/SKILL.md)) sets the Salesforce member status: Badge Scanned, Registered for Dinner or Received Treatment. Received Treatment replaces Signed Up for Treatment for anyone who booked ahead.

## P16 Session leads (about T+10)

Sponsored sessions (e.g. a V Series breakfast or Vision Source lunch) send their attendee list late, usually about a week after the show. EJ asks Kaelyn, who requests it from show management and follows up until it arrives. Upload it the same way with the **Session Attended** status.

## Boundaries

- Lead files hold personal data: they stay in the project folder and the work systems, never in this repository.
- No inferred consent: a treatment without the opt-in is not a marketing contact.
