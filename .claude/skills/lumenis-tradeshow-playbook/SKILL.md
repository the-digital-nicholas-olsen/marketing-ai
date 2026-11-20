---
name: lumenis-tradeshow-playbook
description: Run a Lumenis Vision tradeshow end to end from its Smartsheet campaign rows - show where the show stands, pick the Tier 1 / Tier 2 / Tier 3 template, run or draft the steps that are due through the agent each row names, enforce the gates, and run the T-1 pre-flight. Use for anything about planning or running a tradeshow (Vision Expo, AAO, Vision Source Exchange, AOA Optometry, iDoc, COA, tabletops).
---

# Tradeshow playbook

Owner: Kaelyn (event operations), with Ted for content, EJ for digital operations, Nicholas for approvals and Derek for finance.
Status: draft procedure, written 2026-11-03 from the Vision tradeshow planning session, extended 2026-11-04 with the content and digital operations session, and split into three tier templates on 2026-11-19; not yet run on a live show. Timings are estimates until the team's template review. Review required.

The steps, owners, timing and agent for each live in the show's tier template in Smartsheet (Vision Marketing Sprint Plans > Campaign Templates: *TEMPLATE - Tradeshow (Tier 1)*, *(Tier 2)* or *(Tier 3)*) and, once a show is booked, in its rows in the live sprint plan. This skill works from those rows. It decides what's due, runs it through the right agent and stops at the gates; it doesn't repeat what each agent does.

**T is always Day 1 of the show (the first exhibit hall day).**

## Tiers

Each tier has its own template, and the tier is recorded in R1 Key Info. Sprint plan setup copies the whole template for the show's tier; there are no tier-tagged rows to drop. Step IDs are the same across the three templates, so a step missing from a tier's template doesn't apply to that tier. In Tier 1, rows marked **(if filming)** apply only when the BU plans social filming (K5).

| | Tier 1: large | Tier 2: small | Tier 3: tabletop |
|---|---|---|---|
| Examples | Vision Expo, AAO, Vision Source Exchange | AOA Optometry, iDoc, COA | Tabletop shows |
| Booth | Bigger than 10x10, built by Dircy | 10x10, RS Displays | A table, no vendor |
| Sponsorships | Yes | Yes | No |
| Dinner | Usually (two KOLs) | No | No |
| KOLs | Booth (treating or talking, per E9) + dinner; social filming if the BU wants it | Booth KOLs who talk with customers; they don't treat. No filming | Table KOLs who talk with customers; they don't treat |
| Treatments | Clinical, plus KOLs where E9 says treat; never sales reps | Clinical trainers only; never sales reps or KOLs | Clinical trainer only, so none without one; never sales reps or KOLs |
| Rooms | Team hotel block + sales huddle room | Sales boot camp room only | None |
| Marketers on site | Two (operations + sales-facing) | Usually none: the booth captain and clinical run the booth | Usually none: the attending rep runs the table |
| Show Days rows | Pre-flight + on-site marketing rows | L1, L3, L4 (pre-flight only; no on-site marketing rows) | L3, L4 (pre-flight only) |
| KOL card notes (P8a) | Nicholas or Ted | Sales (booth captain or RSM) | Sales (attending rep or RSM) |
| Promotion | Flyer, landing page, one email, dinner KBYG, decks | Flyer, landing page, one email; no decks | No new content: Calendly sign-ups and leads only |
| Talks | Dinner presentation and one speaking session (about 45 minutes) | None | None |
| Booth monitors | Video plan approved by Laarni; captioned files to the vendor about 30 days out | None | None |
| PR + press | Yes (McDougall); align editor interviews with the PR agency | No | No |
| Logistics | Vendor ships print and orders lead retrieval; Amazon booth supplies (mints, sanitizer) to the hotel | RS Displays ships print and orders lead retrieval; Amazon clinical supplies to the trainer's hotel | Order lead retrieval and electrical directly; ask the rep to bring a demo unit; Mimeo to the hotel; attendee list before and after |

## Procedure

1. **Read the show's rows** with Step, Timing, Due Date, Status, Owner, AI Mode, Agent (GitHub), AI Instructions, Depends On and Key Info.
2. **Show where it stands,** one line per workstream: done / total, anything late, the next step and its owner. Then the steps due in the next 7 days. A status question stops here.
3. **For each eligible step that is due or late:** resume, don't redo; check Depends On first; then follow the row's AI Mode (AI executes / AI drafts, human approves / Human only), as in the [Accelerate playbook](../lumenis-accelerate-playbook/SKILL.md).
4. **Respect the gates** below even when a date says a step is due.
5. **Write back** Key Info values as they become known (booth number, vendor artwork date, venue, hotel link, PR numbers, Calendly link). Never change another person's completed row. Log every start, block, finish and due-date move in Date Log, and keep Original Due Date as it is ([date log](../lumenis-sprint-intake/references/date-log.md)). When the event date moves, recompute each open step's Due Date from Days from Event and log each move with the reason "event moved to <date>"; a catch-up plan gets its own line per step.

## Gates

| Gate | Blocks | Passes when |
|---|---|---|
| Booth locked (R7; Tier 1-2) | Vendor brief (B1) and everything in Booth Build | Booth number and size in Key Info, matching R4 |
| Vendor artwork date known (B6; Tier 1) | BU artwork request (B7), artwork hand-off (B8) | Vendor date and internal date (vendor minus 10-14 days) in Key Info |
| Venue contract signed (N4; Tier 1) | Dinner KOL choice (N5), menu, decor | Signed contract in the project folder |
| Dinner KOL said yes (N6; Tier 1) | KOL purchase request (K3), Ted's next steps (N7) | Written yes that names the honorarium and preparation |
| Lane plan set (E9) | Booth KOL invites (K2), treatment schedule (E7) | Tier 1: lanes, clinical hours and KOL hours to fill in Key Info. Tier 2/3: lanes, clinical treatment hours and breaks, and KOL booth or table hours in Key Info; no KOL treatment hours |
| Show and treatment schedule built (E7) | Booth or table KOL invites (K2) | Every KOL block in the schedule has a day and time; KOL names go in as they confirm (K4) |
| Lane plan in the show notes (E9; Tier 1-2) | Calendly schedule (D9), and so the booth demo form (D4) | Lanes and show hours in Key Info |
| Treatment schedule shared (E7; Tier 3) | Calendly slots (D9) | EJ and Hannah have confirmed it |
| BU filming answer (K5; Tier 1) | Booth and dinner KOL invites (K2, N6) | Yes or no in Key Info; a yes adds the filming line to both invites |
| Talk brief set (C24; Tier 1) | Presenter interview (C17) or reuse of an existing deck | Presenter, length, audience, topic and new-or-reused in Key Info |

## Promotion rules (2026-11-04; Tier 1 and Tier 2)

- **One campaign per show.** Booth, dinner and sessions all roll up into one Salesforce and one HubSpot campaign; only the promotional pieces differ.
- **One flyer, one landing page.** The flyer can be double-sided to promote two things. No secondary flyers or pages, and no custom pages for individual rep events.
- **Lead offer.** Tier 1: flyer and email lead with the dinner invitation; "get a demo at the booth" and Meet the Experts are the secondary call to action. Tier 2 has no dinner, so lead with "get a demo at the booth" and Meet the Experts. The booth promotes itself.
- **Timing.** Flyer and landing page released to sales at T-35; the one promotional email goes out at T-14 (Tier 1: dinner invite plus a reminder to visit the booth); dinner registrants get a Know Before You Go. No thank-you email to attendees; KOLs still get thank-yous (P7, P8).
- **Distribution.** Each piece goes to the BU, to the Modus owner and to the Sales & Marketing Hub on SharePoint as soon as it's ready ([lumenis-content-hub](../lumenis-content-hub/SKILL.md)).
- **Rep requests** for one-off event assets go through the SharePoint request form for prioritization, not straight to the content lead.

Tier 3 tabletops have no new promotional content.

## Clinical consent opt-in

Approved by the marketing director 2026-11-04. This isn't a step of its own: check it when Clinical sends the consent Jotform QR (L3), and again at the L4 pre-flight. P5 relies on it. Clinical owns the Jotform consent form; ask them to put this in small print above the submit button and link the Privacy Policy:

> By submitting this form, I agree that Lumenis and its affiliates may send me marketing and promotional communications, including email, about their products, services and events. My consent is not a condition of receiving a demonstration treatment. I may withdraw my consent at any time by using the unsubscribe link in any email or by contacting Lumenis. My information will be handled in accordance with the Lumenis Privacy Policy.

At shows with Canadian attendees, make it an unticked checkbox instead: Canadian anti-spam law needs an active opt-in.

## Agents for the content and digital steps

| Steps | Agent |
|---|---|
| C23 Meet the Experts, C19 missing bios | [lumenis-kol-profile](../lumenis-kol-profile/SKILL.md) |
| C24, C17, C20-C22 talks (Tier 1) | [lumenis-speaker-presentation](../lumenis-speaker-presentation/SKILL.md) |
| K5-K8 social filming | [lumenis-social-filming](../lumenis-social-filming/SKILL.md) |
| M1-M2 PR | [lumenis-press-briefing](../lumenis-press-briefing/SKILL.md) |
| B11-B12 booth monitors | [lumenis-booth-video-loop](../lumenis-booth-video-loop/SKILL.md) |
| E9, D9 Calendly, E7 | [lumenis-treatment-lane-planner](../lumenis-treatment-lane-planner/SKILL.md) |
| E1-E6 roster, rooms, badges, KBYG | [lumenis-tradeshow-staffing](../lumenis-tradeshow-staffing/SKILL.md) |
| F2-F4, L3 print and QR signs | [lumenis-tradeshow-print-kit](../lumenis-tradeshow-print-kit/SKILL.md) |
| P1-P5, P16 (Tier 1) leads | [lumenis-tradeshow-leads](../lumenis-tradeshow-leads/SKILL.md) |
| P15 floor tracker | [lumenis-tradeshow-deal-attribution](../lumenis-tradeshow-deal-attribution/SKILL.md) |

## L4 Pre-flight (T-1)

Every row due by now is Complete or has an owner and a plan. Check: lead retrieval logins are in Smartsheet (B10); the schedule is shared and every KOL block has a confirmed name (E7); Mimeo tracking shows delivery to the vendor warehouse or hotel (F4); KOLs are confirmed (K4, plus N6 at Tier 1); the demo device is confirmed (F6, Tier 3); both QR codes scan (L3: from the printed page at Tier 1; at Tier 2/3, the file went to sales and clinical by T-3 to print); the final decks are in Dropbox and the on-site presenter support has them (C22, when there's a talk); the clinical consent form carries the marketing opt-in line (see Clinical consent opt-in above). At Tier 2/3, also check that every on-site job has a named owner from sales or clinical (see [lumenis-tradeshow-staffing](../lumenis-tradeshow-staffing/SKILL.md)) and that they have the KOL schedule. Share the report with Kaelyn and Nicholas.

At Tier 2/3 the L4 pre-flight is the last pre-show step; post-show rows that used to wait for L6 now depend on L4.

## Boundaries

- Drafting never authorizes sending, ordering, signing or paying.
- Keep actual show records, prices, logins and attendee lists in the work systems, not in this repository.
