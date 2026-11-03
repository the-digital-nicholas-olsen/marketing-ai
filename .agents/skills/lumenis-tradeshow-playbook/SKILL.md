---
name: lumenis-tradeshow-playbook
description: Run a Lumenis Vision tradeshow end to end from its Smartsheet campaign rows - show where the show stands, apply the Tier 1 / Small rules, run or draft the steps that are due through the agent each row names, enforce the gates, and run the T-1 pre-flight. Use for anything about planning or running a tradeshow (Vision Expo, AAO, Vision Source Exchange, AOA Optometry, iDoc, COA, tabletops).
---

# Tradeshow playbook

Owner: Kaelyn (event operations), with Ted for content, EJ for digital operations, Nicholas for approvals and Derek for finance.
Status: draft procedure, written 2026-11-03 from the Vision tradeshow planning session; not yet run on a live show. Timings are estimates until the team's template review. Review required.

The steps, owners, timing and agent for each live in the campaign template in Smartsheet (*TEMPLATE - Tradeshow*) and, once a show is booked, in its rows in the live sprint plan. This skill works from those rows. It decides what's due, runs it through the right agent and stops at the gates; it doesn't repeat what each agent does.

**T is always Day 1 of the show (the first exhibit hall day).**

## Tiers

Set in R1 Key Info. Rows starting **(Tier 1)** or **(Small)** apply to that tier only; sprint plan setup drops the others.

| | Tier 1 | Small |
|---|---|---|
| Examples | Vision Expo, AAO, Vision Source Exchange | AOA Optometry, iDoc, COA, tabletops |
| Booth | Bigger than 10x10, built by Dircy | 10x10, RS Displays, or no vendor |
| Dinner | Usually (two KOLs) | No |
| Sales huddle room | Yes | Only if the booth captain wants one; usually no |
| Marketers on site | Two (operations + sales-facing) | One |
| Logistics | Vendor ships print and orders lead retrieval | Order lead retrieval and electrical direct; clinical supplies to the trainer's hotel; ask the rep to bring a demo unit |

## Procedure

1. **Read the show's rows** with Step, Timing, Due Date, Status, Owner, AI Mode, Agent (GitHub), AI Instructions, Depends On and Key Info.
2. **Show where it stands,** one line per workstream: done / total, anything late, the next step and its owner. Then the steps due in the next 7 days. A status question stops here.
3. **For each eligible step that is due or late:** resume, don't redo; check Depends On first; then follow the row's AI Mode (AI executes / AI drafts, human approves / Human only), as in the [Accelerate playbook](../lumenis-accelerate-playbook/SKILL.md).
4. **Respect the gates** below even when a date says a step is due.
5. **Write back** Key Info values as they become known (booth number, vendor artwork date, venue, hotel link, PR numbers, Calendly link). Never change another person's completed row.

## Gates

| Gate | Blocks | Passes when |
|---|---|---|
| Booth locked (R7) | Vendor brief (B1) and everything in Booth Build | Booth number and size in Key Info, matching R4 |
| Vendor artwork date known (B6) | BU artwork request (B7), artwork hand-off (B8) | Vendor date and internal date (vendor minus 10-14 days) in Key Info |
| Venue contract signed (N4) | Dinner KOL choice (N5), menu, decor | Signed contract in the project folder |
| Dinner KOL said yes (N6) | KOL purchase request (K3), Ted's next steps (N7) | Written yes that names the honorarium and preparation |
| Lane plan set (K1) | Booth KOL invites (K2), treatment schedule (E7) | Lanes, clinical hours and KOL hours to fill in Key Info |
| Treatment schedule shared (E7) | Calendly slots (D9) | EJ and Hannah have confirmed it |

## L4 Pre-flight (T-1)

Every row due by now is Complete or has an owner and a plan. Check: lead retrieval logins are in Smartsheet (B10); the schedule is shared (E7); Mimeo tracking shows delivery to the vendor warehouse or hotel (F4); KOLs are confirmed (K4, N6); both QR codes scan from the printed page (L3). Share the report with Kaelyn and Nicholas.

## Boundaries

- Drafting never authorizes sending, ordering, signing or paying.
- Keep actual show records, prices, logins and attendee lists in the work systems, not in this repository.
