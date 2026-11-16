# Date log: tracking how long work really takes

Status: draft, added 2026-11-16 at Nicholas's request. Vision sprint plan only.

When someone moves a due date, the old one is gone and any lateness disappears with it. Three columns on the live plan, copied to the Archive, keep that history so finished projects can be analyzed: how late steps really landed, which ones moved and why.

## Columns

| Column | Type | Rule |
|---|---|---|
| **Original Due Date** | Date | The first due date the step was committed to. Set it when a row first gets a due date. Never change it afterwards, even when Due Date moves. |
| **Date Log** | Text | One dated line per event, newest last. Always append; never edit or delete earlier lines. |
| **Times Rescheduled** | Automatic | A column formula that counts the `→` arrows in Date Log. Never type in it. |

The Archive has the same three columns plus **Days Late vs Original** (Date Completed minus Original Due Date). Its older **Days Late** column compares against the last Due Date, so it hides time lost to rescheduling.

## Line format

```
11/16 Nicholas: due 11/1 → 11/18 (catch-up plan after the KOL interview)
11/20 Ted: started
11/23 Ted: done
```

- **Date moves:** `M/D Name: due <old> → <new> (<reason>)`, using the person who asked for the change. Write one line per move, with exactly one `→` in it, because the arrow count is the reschedule count. Never use `→` anywhere else in the log. Write "moved to Dec 15", not "Dec 10 → Dec 15", inside a reason.
- **Status events:** `M/D Name: started` (the first time a step goes In Progress), `blocked (<what>)`, `unblocked (<what>)`, `done`. The log adds a start date, which no other column records, so you can see how long work took and not just whether it was late.
- **Due date set for the first time** (a row that had none): set Original Due Date and write `M/D Name: due set <date>`. This is not a move, so no arrow.
- The reason goes in the log line. Context that needs more than a line still goes in Notes / Blocker or the project's `_Context/` note.

## Who writes it

Every skill that changes Due Date or Status on the live plan: [sprint intake](../SKILL.md), [sprint plan setup](../../lumenis-sprint-plan-setup/SKILL.md), the [daily brief](../../lumenis-daily-brief/SKILL.md) and the campaign playbooks. It also covers a teammate asking Claude in chat to move a date. Read the cell before writing it, then send back the old text plus the new line.

The weekly [sprint cleanup](../../lumenis-sprint-cleanup/SKILL.md) fills any missing Original Due Date from Due Date and carries all of these columns to the Archive.

## Limits

- A person who edits Due Date directly in Smartsheet leaves no log line. Cleanup can't recover that move, but cell history can, if someone asks.
- Rows already on the plan when the columns were added (2026-11-16) were given that day's Due Date as their Original Due Date, so moves made before then don't show.
