---
name: lumenis-treatment-signup-enrichment
description: Pull a tradeshow's in-booth treatment sign-ups from Calendly and enrich each one with Salesforce data (practice location, assigned rep, Lumenis devices owned, open opportunities) for the booth captain's sales huddle. Use at L1 (T-2) of a tradeshow. Read-only in Salesforce.
---

# Treatment sign-up enrichment

Owner: EJ.
Status: draft procedure, written 2026-11-03 from the Vision tradeshow planning session; not yet run. Review required.

## Procedure

1. Export every booked slot for the show's Calendly link (D9 Key Info): name, email, practice, slot time.
2. Match each person in Salesforce by email, then by name and practice.
3. Add these columns:

| Column | Source |
|---|---|
| City, state | Account address |
| Assigned rep | Account owner |
| Current Lumenis owner? | Installed products on the account |
| Devices owned | Installed products |
| Open opportunities | Open opportunities on the account: name, stage, amount |
| Match | Matched / Not found |

4. Sort by slot time. Save as Excel in the project folder and draft an email to the booth captain (E1 Key Info), so they can go over it in the huddle.

## Boundaries

- Read-only in Salesforce and Calendly. Don't change records or cancel slots.
- The list contains personal data: share it only with the booth captain and the show team, and never add it to this repository.
