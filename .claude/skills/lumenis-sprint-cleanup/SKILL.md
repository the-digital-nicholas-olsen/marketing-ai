---
name: lumenis-sprint-cleanup
description: Vision only. Weekly Monday-morning upkeep of the Smartsheet sprint plan before the team's sprint meeting. Opens the new weekly sprint, fixes Done/Status/Date Completed mismatches, flags placeholder due dates that need a real date, and moves finished projects to the Archive sheet. Use when asked to run the sprint cleanup, prep the sprint plan for Monday or archive finished campaigns.
---

# Sprint cleanup

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** The sprint plan workspace, templates and brief page are Vision's. Aesthetics does not run its sprint plan in Smartsheet this way (as of November 2026 it is expected to use Asana), so if the request is for Aesthetics work, say this skill doesn't apply and stop. Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md).
Status: draft procedure, written 2026-11-09 from the Vision sprint planning meeting; not yet run. Review required.

Runs every Monday morning before the sprint meeting, so the team opens a plan that is current. Humans should rarely need to scan the plan themselves; this skill keeps it tidy and the [daily brief](../lumenis-daily-brief/SKILL.md) reads it for them.

## Sheets

In the team's sprint plan workspace (for Vision: *Vision Marketing Sprint Plans*), found by Smartsheet search:

- **Sprint Plan (Live):** every step of every active campaign. Has Done, Status, Due Date, **Date Completed**, Sprint and the [date log](../lumenis-sprint-intake/references/date-log.md) columns (**Original Due Date**, **Date Log**, automatic **Times Rescheduled**).
- **No Backlog sheet.** It was retired on 2026-11-20. Work with no date goes straight onto the live plan with a placeholder due date one week from the day it was added ([sprint intake](../lumenis-sprint-intake/SKILL.md)). Template campaigns are added with [sprint plan setup](../lumenis-sprint-plan-setup/SKILL.md) once their date is confirmed.
- **Archive:** same columns as the live plan plus **Archived On**, a **Days Late** formula (Date Completed minus the last Due Date) and **Days Late vs Original** (Date Completed minus Original Due Date, the true lateness).
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
   - Due Date set but Original Due Date blank: copy Due Date into Original Due Date and add `M/D Claude: due set <date> (filled by cleanup)` to Date Log. Report the count; a high count means someone is adding rows without the [date log](../lumenis-sprint-intake/references/date-log.md).
4. **Flag placeholder dates.** List open rows whose Date Log shows the due date is still a placeholder (`placeholder due date` with no later real date) and that fall due by this Sunday, with their owners, so a real date is set at the sprint meeting. Don't change the dates yourself.
5. **Archive finished projects.** A project is finished when every Task and Subtask row under it is Complete or Dropped and its event or due date has passed (open questions can stay open; list them). For each finished project:
   1. Copy the Project row and every row under it to Archive, in order, keeping the hierarchy and every column, including Original Due Date and Date Log (Times Rescheduled and both Days Late columns are formulas on the Archive; don't write them). Set Archived On to today.
   2. Read back the Archive rows and confirm the count matches.
   3. Only then delete those rows from the live plan, at most 10 per call, children before parents.
   Never archive part of a project, and never delete before the read-back matches.
6. **Report** (format below).

## Report

```
Sprint cleanup, Mon <date>

Opened sprint <this Monday> (added <next Monday> to the picklist). 38 steps tagged for this week.
Fixed: 4 rows ticked Done but not Complete; 6 Date Completed filled (2 from today, no history); 3 Original Due Dates filled.
Moved most: <step> (<campaign>) rescheduled 3 times, now 12 days past its original date.
Placeholder dates due this week: <task> (<owner>), <task> (<owner>). Set real dates.
Archived: <campaign> (96 rows). 2 open questions left on it.
Check: "The show has run" is ticked Done but the show is next month.
```

## Mistakes to avoid

- Deleting live rows before the Archive copy reads back. There is no undo for a deleted row.
- Archiving a project with any open step, or archiving rows one by one; dependencies need the whole project together.
- Treating a placeholder due date as a real deadline, or replacing it with a date nobody gave.
- Moving dates to avoid weekends; templates use calendar days and the owner decides.
- Overwriting a teammate's Sprint, owner or notes edits.
- Changing Original Due Date or editing earlier Date Log lines. They are the record.
