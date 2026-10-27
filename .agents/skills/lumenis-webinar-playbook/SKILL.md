---
name: lumenis-webinar-playbook
description: Run a Lumenis Vision webinar end to end from its Smartsheet campaign rows - show where it stands, run or draft the steps that are due through the agent each row names, enforce the gates between people, and handle the webinar-only steps (content brief, KOL interview kit, landing page hand-off, T-1 pre-flight, retro). Use for anything about planning or running a webinar; the content brief also covers Aesthetics webinars. Replaces lumenis-webinar-production.
---

# Webinar playbook

Owner: Nicholas (marketing operations), with Ted for content and EJ for operations.
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session; not yet run on a live webinar. Review required.

A Vision webinar is about 72 steps from T-60 (KOL recruited) to T+30 (attribution and retro), owned by four people and run through a dozen agents. The steps, owners, timing and agent for each live in the campaign template in Smartsheet (*TEMPLATE - Webinar*) and, once a webinar is booked, in its rows in the live sprint plan. This skill works from those rows. It doesn't repeat what each agent does; it decides what's due, runs it through the right agent, and stops at the gates.

The [daily brief](../lumenis-daily-brief/SKILL.md) is per person across all campaigns. This skill is per webinar across all people.

## Inputs

- Which webinar: KOL, title or date. Find its Project row in the live sprint plan.
- **Not in the sprint plan yet?** If the KOL has agreed and the date is locked (step K5), run [sprint plan setup](../lumenis-sprint-plan-setup/SKILL.md) first. Before K5, work only on the K-steps.
- The Smartsheet connector, plus whatever system access the due steps need.

## Procedure

1. **Read the webinar's rows** (Task rows under its Project row), with Step, Timing, Due Date, Status, Owner, AI Mode, Agent (GitHub), AI Instructions, Depends On and Key Info.
2. **Show where it stands,** in five lines, one per workstream: done / total, anything late, the next step and its owner. Then list the steps due in the next 7 days.
   **A status question stops here.** "Where does this webinar stand?" gets the report and nothing else: no agents run, no sprint plan setup, no rows changed. Go on to step 3 only when the person asks you to run, draft or catch up the webinar, and only for the steps or workstreams they named.
3. **For each eligible step that is due or late.** Eligible means Status is Not Started, In Progress or Blocked. Skip Complete and Dropped. Leave Ready for Review alone: the draft is waiting on its owner, so remind them and don't redraft it.
   - **Resume, don't redo.** Before running an In Progress step, check what already exists: Deliverable Link, Key Info (an event ID, campaign IDs), files in the project folder, records in the target system. Finish from there; never create a second ON24 event, campaign, list or draft.
   - **Dependencies first.** If any step in Depends On isn't Complete, the step is blocked: name the blocker and its owner, and move on.
   - **AI executes:** run the agent named in Agent (GitHub) with the row's AI Instructions and Key Info. Check the result, then set Status = Complete, tick Done and put the link in Deliverable Link. If part of the step needs a person, set In Progress and name what's left in Notes / Blocker; it isn't Complete until that's done.
   - **AI drafts, human approves:** run the agent to draft, set Status = Ready for Review, and tell the owner where the draft is. It becomes Complete only after the owner sends, schedules, imports or publishes.
   - **Human only:** remind the owner with what they need (links, Key Info), and offer to prepare anything around it.
4. **Respect the gates** below even when a date says a step is due.
5. **Write back.** Fill Key Info blanks as values become known (event ID, campaign IDs, links), and put blockers in Notes / Blocker. Never change another person's completed row.

Steps without an agent of their own use the references here:

| Steps | What | Reference |
|---|---|---|
| C3-C7 | Audience note, interview questions, filing the recording, title and subtitle | [Interview kit](references/interview-kit.md) |
| C12, L1 | Landing page hand-off to operations; T-1 pre-flight check | [Hand-off and pre-flight](references/handoff-and-preflight.md) |
| P15 | Retro and playbook updates | [Retro](#retro-t30) below |

## Gates

A gate holds every step behind it until it's cleared, whatever the due date says.

| Gate | Holds | Cleared when |
|---|---|---|
| KOL agreed, date locked (K5) | Purchase request, interview scheduling, sprint plan setup | Written yes and a confirmed date |
| Title and subtitle sent to operations (C7) | Salesforce, ON24 and HubSpot setup | Operations has title, subtitle, date and live start in writing |
| Flyer passes its check (C9) | Flyer to the KOL (C10) | [Asset check](../lumenis-webinar-asset-check/SKILL.md) report shows every row passing |
| KOL approves the flyer (C11) | Hand-off, distribution, sales email | Written approval saved in `_Context/` |
| Deck passes the claims check (C20) | Deck to the KOL (C21) | Claims and asset checks pass |
| Email check passes (C18, C24) | Scheduling Em1 and Em2 | [Email check](../lumenis-email-check/SKILL.md) shows every applicable check passing |
| A person turns the workflow on (D9) | Registrant updates, the live event's lead routing | Workflow on, state noted |
| Pre-flight passes (L1) | Going live | Every item passes, or blockers accepted by Nicholas |
| Country fix imported (L4) | The overnight workflow run | The owner confirms the import before the workflow time |

The last gate guards a workflow that's already on and runs on its own clock; a Smartsheet blocker can't stop it. If the import isn't confirmed by an hour before the run, tell the workflow's owner (named in the L1 night-of plan). They decide whether to pause it until the import is in or let it run and re-sync afterwards. A person makes that change in HubSpot, never the agent.

## Content brief (when asked to plan or write webinar content)

This section works for Vision and Aesthetics webinars. Aesthetics has no campaign template or playbook yet, so for an Aesthetics webinar use only this section and the agents it links; the rest of this skill is Vision-only until it does.

Resolve division, product, audience, learning objective and the action viewers should take next. Write the brief and narrative with [storytelling](../../../corporate/editorial/storytelling.md): the audience's problem, why it's hard, evidence, a practical next step. Build from the KOL interview, not from memory. Draft invitations, moderator questions and follow-up copy only when asked, run [Ted's clarity gate](../copy-clarity-gate/SKILL.md), and send every clinical statement through the [claims check](../lumenis-claims-check/SKILL.md). Registration pages are built in ON24, not HubSpot.

## Retro (T+30)

1. Ask each owner, in one message, what broke, what was slow and what they did by hand that an agent should have done.
2. Read the webinar's rows: steps finished late, steps skipped, blockers in Notes.
3. Propose fixes in two places: edits to *TEMPLATE - Webinar* (timing, owners, instructions) and pull requests to the agents in this repository, through [contribution review](../lumenis-contribution-review/SKILL.md).
4. **Archive only when nothing is open.** Once the retro is done and the attribution check (P14) is saved, check every row. Each must be Complete, Dropped (with the reason in Notes), or handed to another active tracker with an owner and a link in Notes; an unpaid invoice (P11, P12) is the usual one left. While any row is still open, keep the webinar in the live sprint plan and list the open rows with their owners. Only then move the rows to the team's archive.

## Example: running it twice (fictional)

Monday, T-30, Nicholas asks to catch up the Dr. Example webinar. D2 (Salesforce campaign) is Not Started with C7 cleared, so it runs; the campaign is made and D2 goes Complete with its link. C18 (Em1) is drafted, so it goes Ready for Review for EJ. D4 (ON24 event) is In Progress with an event ID already in Key Info, so the agent finishes the existing event's emails instead of making a new one.

Tuesday he asks again. D2 is Complete and D4 is now Complete: both skipped. C18 is still Ready for Review: EJ gets a reminder, no new draft. Nothing new is created.

Wednesday he asks "where does Dr. Example stand?" He gets the five-line report and nothing runs.

## Boundaries

- Drafting never authorizes sending, scheduling, publishing, importing or turning on a workflow. A person does each of those.
- Campaign facts come from the webinar's rows and its project folder, never from a past webinar.
- Campaign records (IDs, links, contact lists, results) stay in Smartsheet and the project folder, not in this repository.
