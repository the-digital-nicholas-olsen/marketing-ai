---
name: lumenis-sprint-cleanup
description: Weekly Monday-morning upkeep of the Smartsheet sprint plan before the team's sprint meeting. Opens the new weekly sprint, fixes Done/Status/Date Completed mismatches, moves Backlog campaigns onto the live plan when their first step comes due, and moves finished projects to the Archive sheet. Use when asked to run the sprint cleanup, prep the sprint plan for Monday, archive finished campaigns, or pull due Backlog items onto the plan.
---

# Sprint cleanup

Owner: Nicholas (marketing operations).
Status: draft procedure, written 2026-11-09 from the Vision sprint planning meeting; not yet run. Review required.

Runs every Monday morning before the sprint meeting, so the team opens a plan that is current. Humans should rarely need to scan the plan themselves; this skill keeps it tidy and the [daily brief](../lumenis-daily-brief/SKILL.md) reads it for them.

## Sheets

In the team's sprint plan workspace (for Vision: *Vision Marketing Sprint Plans*), found by Smartsheet search:

- **Sprint Plan (Live):** every step of every active campaign. Has Done, Status, Due Date, **Date Completed** and Sprint columns.
- **Backlog:** one row per upcoming campaign, grouped by campaign (a parent row with its pieces under it). **Moves to Live** is the date the campaign comes onto the live plan; **Template** names its campaign template; **Moved to Live Plan** is ticked once it is there.
- **Archive:** same columns as the live plan plus **Archived On** and a **Days Late** formula (Date Completed minus Due Date).
- **Sprints & Outages:** one row per weekly sprint (Monday to Sunday) with who is out.
- **Campaign Templates** folder: TEMPLATE - Webinar, Accelerate, Tradeshow.

Requires the Smartsheet connector with edit access. Without it, produce the report of what would change and say nothing was changed.

## Procedure

Work in this order; each step reads the sheet fresh.

1. **Open the sprint.** Today's sprint value is this Monday as M.D.YYYY (for example 11.16.2026). If the live plan's Sprint picklist lacks this Monday or next Monday, add them. If Sprints & Outages has no row for this week, add one (Start = Monday, End = Sunday) and leave Outages as "Not recorded yet" unless the user told you.
2. **Tag this week's work.** On Task and Subtask rows that are not Complete or Dropped and are due from today through Sunday, set Sprint to this week's value. Don't change a row a teammate has set to a later sprint.
3. **Fix completion mismatches.**
   - Done ticked but Status not Complete or Dropped: set Status Complete.
   - Status Complete but Done unticked: tick Done.
   - Complete with Date Completed blank: use the date Done or Status changed to complete from cell history; if history isn't available, use today and say so in the report.
   - A future event step ticked Done (for example "The show has run" before the show date): don't change it; list it in the report as probably ticked by mistake.
4. **Move due Backlog campaigns onto the live plan.** For each Backlog row with Moved to Live Plan unticked, Stage not Dropped or On Hold, and Moves to Live on or before this Sunday:
   - **Template campaign:** run [lumenis-sprint-plan-setup](../lumenis-sprint-plan-setup/SKILL.md) with the row's Template, event date and project name. The whole campaign comes over at once, every step, even those due months later; that is intended.
   - **No template:** add a Project row and one Task row per deliverable in the Backlog row's Summary and Next Step, with owners and due dates from the Backlog row.
   - **Catch-up guard:** if Moves to Live is more than 14 days ago, don't copy it. Copying would add many steps already shown as late. List these in the report and ask the user whether to copy them now (and whether steps already done by date should be marked Complete) or move the date.
   - After a copy succeeds and reads back, tick Moved to Live Plan, set Stage On Live Plan and note the date in Notes.
   - A parent (campaign group) row never moves; its children move on their own dates.
5. **Archive finished projects.** A project is finished when every Task and Subtask row under it is Complete or Dropped and its event or due date has passed (open questions can stay open; list them). For each finished project:
   1. Copy the Project row and every row under it to Archive, in order, keeping the hierarchy and every column. Set Archived On to today.
   2. Read back the Archive rows and confirm the count matches.
   3. Only then delete those rows from the live plan, at most 10 per call, children before parents.
   4. On the Backlog row for that project, add "Archived <date>" to Notes.
   Never archive part of a project, and never delete before the read-back matches.
6. **Report** (format below).

## Report

```
Sprint cleanup, Mon <date>

Opened sprint <this Monday> (added <next Monday> to the picklist). 38 steps tagged for this week.
Fixed: 4 rows ticked Done but not Complete; 6 Date Completed filled (2 from today, no history).
Moved to the live plan: <campaign> (no template, 2 tasks).
Waiting for your OK (move date passed more than 14 days ago): <campaign> (T-120 was <date>), ...
Archived: <campaign> (96 rows). 2 open questions left on it.
Check: "The show has run" is ticked Done but the show is next month.
```

## Mistakes to avoid

- Deleting live rows before the Archive copy reads back. There is no undo for a deleted row.
- Archiving a project with any open step, or archiving rows one by one; dependencies need the whole project together.
- Silently copying a long-overdue campaign onto the plan, flooding everyone's brief with late steps.
- Moving dates to avoid weekends; templates use calendar days and the owner decides.
- Overwriting a teammate's Sprint, owner or notes edits.
