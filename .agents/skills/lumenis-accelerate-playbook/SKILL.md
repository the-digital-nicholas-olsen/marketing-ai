---
name: lumenis-accelerate-playbook
description: Run a Lumenis Accelerate event end to end from its Smartsheet campaign rows - show where the show stands, run or draft the steps that are due through the agent each row names, enforce the gates between people, and handle the Accelerate-only steps (T-120 kickoff, standard show setup, launch day, T-1 pre-flight). Use for anything about planning or running an Accelerate. The campaign build itself (pages, forms, emails, workflow) stays in lumenis-accelerate-campaign.
---

# Accelerate playbook

Owner: Nicholas (marketing operations), with Kaelyn for event logistics, Ted for content and EJ for operations.
Status: draft procedure, written 2026-10-29 from the Vision Accelerate planning session; not yet run on a live show. Show-day and post-event steps are placeholders until the team's next session. Review required.

An Accelerate is about 74 steps from the annual plan to T+30, owned by five people. The steps, owners, timing and agent for each live in the campaign template in Smartsheet (*TEMPLATE - Accelerate*) and, once a show is booked, in its rows in the live sprint plan. This skill works from those rows. It decides what's due, runs it through the right agent and stops at the gates; it doesn't repeat what each agent does.

**T is always Day 1 of the show, the Friday** (staff arrive 1 PM, sales huddle 1:30-2 PM, KOLs at the hotel by 7 PM). Monday before the show = T-4; Monday after = T+3; Tuesday after = T+4.

The [daily brief](../lumenis-daily-brief/SKILL.md) is per person across all campaigns. This skill is per show across all people.

## Inputs

- Which show: city and quarter. Find its Project row in the live sprint plan.
- **Not in the sprint plan yet?** If the venue is locked (step A4), run [sprint plan setup](../lumenis-sprint-plan-setup/SKILL.md) first. Before A4, work only on the A-steps.
- The Smartsheet connector, plus whatever system access the due steps need.

## Procedure

1. **Read the show's rows** with Step, Timing, Due Date, Status, Owner, AI Mode, Agent (GitHub), AI Instructions, Depends On and Key Info.
2. **Show where it stands,** one line per workstream: done / total, anything late, the next step and its owner. Then the steps due in the next 7 days. **A status question stops here:** no agents run, no rows change.
3. **For each eligible step that is due or late** (Not Started, In Progress or Blocked; leave Ready for Review alone and remind its owner):
   - **Resume, don't redo.** Check Key Info, the project folder and the target system before running an In Progress step. Never create a second BoomPop page, campaign, form, segment or print order.
   - **Dependencies first.** A step whose Depends On isn't Complete is blocked: name the blocker and its owner, move on.
   - **AI executes:** run the agent, check the result, set Complete with the link.
   - **AI drafts, human approves:** run the agent to draft, set Ready for Review and tell the owner where the draft is. It's Complete only after the owner sends, publishes, imports or orders.
   - **Human only:** remind the owner with what they need, and offer to prepare anything around it.
4. **Respect the gates** below even when a date says a step is due.
5. **Write back** Key Info values as they become known (venue, hotel link, campaign IDs, page URLs, PR numbers, badge count) and blockers in Notes / Blocker. Never change another person's completed row. Log every start, block, finish and due-date move in Date Log, and keep Original Due Date as it is ([date log](../lumenis-sprint-intake/references/date-log.md)). When the event date moves, recompute each open step's Due Date from Days from Event and log each move with the reason "event moved to <date>"; a catch-up plan gets its own line per step.

Steps without an agent of their own use the reference here:

| Steps | What | Reference |
|---|---|---|
| E1, E2, E13, E14 | Room map, device list, arrival and huddles, registration desk | [Standard show setup](references/standard-show-setup.md) |
| L0, L2 | Launch day; T-1 pre-flight | [Launch day and pre-flight](references/launch-and-preflight.md) |

## Gates

| Gate | Blocks | Passes when |
|---|---|---|
| Venue locked (A4) | Sprint plan setup and every other workstream | Venue, address and hotel are in Key Info |
| KOL said yes (K3) | KOL purchase request (K5), Ted's follow-up (K4) | Written yes from the KOL |
| Hotel booking link (E3) | KOL follow-up, internal comms, Sales Hub page, BoomPop page | Link in Key Info and click-tested |
| Em4 final (C16) | Workflow check (D8) and launch day (L0) | Em4 approved and passes the email check; the workflow sends it |
| Pre-launch page check passes (D10) | Launch day (L0) | [Landing page check](../lumenis-landing-page-check/SKILL.md) report shows every pre-launch row passing |
| Launch day (L0) | Flyer to sales, Modus and social (C6) | Page live and workflow ON, both read back, and the live test passed |
| Email check passes (C8, C13) | Scheduling Em1 and sending Em2 | [Email check](../lumenis-email-check/SKILL.md) shows every applicable check passing |
| Agenda links fixed (C2) | Print order (E9) | Every QR code on the agenda graphics opens this show's agenda page |
| Session line-up set (C9) | Deck prep (C10), run of show (E15), print order (E9) | Sessions and rooms are in the event's Smartsheet schedule |

## Boundaries

- Smartsheet is the source of truth for who is attending (rep approval, flight and non-flight sheets). HubSpot is not used to build attendee lists.
- Drafting never authorizes sending, publishing, workflow activation, imports, print orders or vendor hand-offs.
- Keep actual campaign records, names, links and pipeline values in the work systems, not in this repository.
