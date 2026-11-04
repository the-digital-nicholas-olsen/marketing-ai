---
name: lumenis-tradeshow-playbook
description: Run a Lumenis Vision tradeshow end to end from its Smartsheet campaign rows - show where the show stands, apply the Tier 1 / Small rules, run or draft the steps that are due through the agent each row names, enforce the gates, and run the T-1 pre-flight. Use for anything about planning or running a tradeshow (Vision Expo, AAO, Vision Source Exchange, AOA Optometry, iDoc, COA, tabletops).
---

# Tradeshow playbook

Owner: Kaelyn (event operations), with Ted for content, EJ for digital operations, Nicholas for approvals and Derek for finance.
Status: draft procedure, written 2026-11-03 from the Vision tradeshow planning session and extended 2026-11-04 with the content and digital operations session; not yet run on a live show. Timings are estimates until the team's template review. Review required.

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
| Logistics | Vendor ships print and orders lead retrieval; Amazon booth supplies (mints, sanitizer) to the hotel | Order lead retrieval and electrical direct; clinical supplies to the trainer's hotel; ask the rep to bring a demo unit |
| Booth monitors | Video plan approved by Laarni; captioned files to the vendor about 30 days out | None |
| Talks | Dinner presentation and one speaking session (about 45 minutes) | Usually none |
| Social filming, PR | Ask the BU about filming before recruiting KOLs; align editor interviews with the PR agency | No |

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
| Lane plan in the show notes (K1) | Calendly schedule (D9), and so the booth demo form (D4) | Lanes and show hours in Key Info |
| BU filming answer (K5) | Booth and dinner KOL invites (K2, N6) | Yes or no in Key Info; a yes adds the filming line to both invites |
| Talk brief set (C24) | Presenter interview (C17) or reuse of an existing deck | Presenter, length, audience, topic and new-or-reused in Key Info |

## Promotion rules (2026-11-04)

- **One campaign per show.** Booth, dinner and sessions all roll up into one Salesforce and one HubSpot campaign; only the promotional pieces differ.
- **One flyer, one landing page.** The flyer can be double-sided to promote two things. No secondary flyers or pages, and no custom pages for individual rep events.
- **Dinner first.** Flyer and email lead with the dinner invitation; "get a demo at the booth" and Meet the Experts are the secondary call to action. The booth promotes itself.
- **Timing.** Flyer and landing page released to sales at T-35; the one promotional email goes out at T-14 (dinner invite plus a reminder to visit the booth); dinner registrants get a Know Before You Go. No thank-you email to attendees; KOLs still get thank-yous (P7, P8).
- **Distribution.** Each piece goes to the BU, to the Modus owner and to the Sales & Marketing Hub on SharePoint as soon as it's ready ([lumenis-content-hub](../lumenis-content-hub/SKILL.md)).
- **Rep requests** for one-off event assets go through the SharePoint request form for prioritization, not straight to the content lead.

## Clinical consent opt-in (D10)

Approved by the marketing director 2026-11-04. Clinical owns the Jotform consent form; ask them to put this in small print above the submit button and link the Privacy Policy:

> By submitting this form, I agree that Lumenis and its affiliates may send me marketing and promotional communications, including email, about their products, services and events. My consent is not a condition of receiving a demonstration treatment. I may withdraw my consent at any time by using the unsubscribe link in any email or by contacting Lumenis. My information will be handled in accordance with the Lumenis Privacy Policy.

At shows with Canadian attendees, make it an unticked checkbox instead: Canadian anti-spam law needs an active opt-in.

## Agents for the content and digital steps

| Steps | Agent |
|---|---|
| C23 Meet the Experts, C19 missing bios | [lumenis-kol-profile](../lumenis-kol-profile/SKILL.md) |
| C24, C17, C20-C22 talks | [lumenis-speaker-presentation](../lumenis-speaker-presentation/SKILL.md) |
| K5-K8 social filming | [lumenis-social-filming](../lumenis-social-filming/SKILL.md) |
| M1-M2 PR | [lumenis-press-briefing](../lumenis-press-briefing/SKILL.md) |
| B11-B12 booth monitors | [lumenis-booth-video-loop](../lumenis-booth-video-loop/SKILL.md) |
| D9 Calendly | [lumenis-treatment-lane-planner](../lumenis-treatment-lane-planner/SKILL.md) |
| P1-P5, P16 leads | [lumenis-tradeshow-leads](../lumenis-tradeshow-leads/SKILL.md) |
| P15 floor tracker | [lumenis-tradeshow-deal-attribution](../lumenis-tradeshow-deal-attribution/SKILL.md) |

## L4 Pre-flight (T-1)

Every row due by now is Complete or has an owner and a plan. Check: lead retrieval logins are in Smartsheet (B10); the schedule is shared (E7); Mimeo tracking shows delivery to the vendor warehouse or hotel (F4); KOLs are confirmed (K4, N6); both QR codes scan from the printed page (L3); the final decks are in Dropbox and the on-site marketer has them (C22); the clinical consent form carries the marketing opt-in line (D10). Share the report with Kaelyn and Nicholas.

## Boundaries

- Drafting never authorizes sending, ordering, signing or paying.
- Keep actual show records, prices, logins and attendee lists in the work systems, not in this repository.
