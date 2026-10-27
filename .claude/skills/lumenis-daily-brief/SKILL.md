---
name: lumenis-daily-brief
description: Give one teammate their "what's on my plate" brief from the live Smartsheet sprint plan, across every campaign, sorted by due date and split by what Claude can do, what Claude can draft for review, and what only they can do. Use when someone asks what's on their plate, what's due, or for their morning brief.
---

# Daily brief

Owner: Nicholas (marketing operations).
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session; not yet run. Review required.

The sprint plan holds every step of every campaign. Nobody should have to scan it. This skill reads it for one person and answers three questions: what's late, what's due this week, and what can Claude take off their plate right now.

## Inputs

- **Who** the brief is for. Default to the person asking; match their first name to the Owner column. Rows owned by "Everyone" count for each person.
- **The live sprint plan sheet** (for Vision: *Sprint Plan (Live)*), found by Smartsheet search.
- **Today's date** in the team's time zone (US Pacific for Vision).

Requires the Smartsheet connector (read). Without it, say the brief can't be built and stop.

## Procedure

1. **Read the sheet** with filters: Owner includes the person **or** Owner includes Everyone; then Status is not Complete or Dropped, and Row Type is Task or Subtask. If the connector can't combine OR and AND in one call, run two reads (the person's rows, then Everyone's rows) with the status and row-type filters on each, and merge them without duplicates.
2. **Group the rows:**
   - **Late:** Due Date before today.
   - **Due this week:** Due Date from today through the coming Sunday.
   - **Coming up:** the next 7 days after that, titles only.
   - **Waiting on someone:** Status is Waiting on Someone or Blocked, with the Notes / Blocker text.
   Rows with no due date go in a short "no date" list at the end.
3. **Split Late and Due this week by AI Mode:**
   - **AI executes:** offer to run them now with the agent named in Agent (GitHub).
   - **AI drafts, human approves:** offer to draft them now; the person reviews and sends.
   - **Human only:** list them as reminders.
4. **Check dependencies.** For each row, look up its Depends On step IDs within the same Project. If a prerequisite is not Complete, mark the row "blocked by <step> (<owner>)" instead of offering to run it.
5. **Write the brief** (format below). Lead with the count of late items, then the top three things to do today.
6. **Act only on a yes.** Run or draft only the rows the person picks. After a step is done and checked, set Status to Complete and Done, and paste the result link in Deliverable Link. Drafts go to Ready for Review, not Complete.

## Brief format

```
Good morning, Ted. 2 late, 5 due this week.

Today, I'd start with:
1. Approve the flyer for the Dr. Example webinar (late 1 day) — draft ready to send
2. ...

Late
- [Project] Step C10 · Flyer sent to the KOL for approval · due Oct 24 · I can draft it

Due this week
...
Waiting on someone
...
```

Keep it under 25 lines. Link each project row.

## Mistakes to avoid

- Marking a drafted step Complete. Complete means sent, published or confirmed done.
- Running an "AI executes" step whose dependency isn't done.
- Listing another person's rows. The brief is per person unless they ask for the team view.
