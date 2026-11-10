---
name: lumenis-daily-brief
description: Vision only. Give a Vision Marketing teammate their "what's on my plate" brief from the live Smartsheet sprint plan (late, today, next 5 business days, blockers, and what Claude can run), or refresh the team's daily brief page where anyone can pick a person. Use when someone asks what's on their plate, what's due, for their morning brief, or to refresh or republish the team brief.
---

# Daily brief

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** The sprint plan workspace, templates, Backlog and brief page are Vision's. Aesthetics does not run its sprint plan in Smartsheet this way (as of November 2026 it is expected to use Asana), so if the request is for Aesthetics work, say this skill doesn't apply and stop. Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md).
Status: draft procedure. Chat brief written 2026-10-27; team page added 2026-11-09 from the Vision sprint planning meeting. Review required.

The sprint plan holds every step of every campaign. Nobody should have to scan it. This skill reads it and answers four questions for one person: what's late or due today, what's due in the next five business days, what's blocked and by whom, and what Claude can take off their plate right now.

It has two outputs:

- **Chat brief** for the person asking (below).
- **Team brief page**, a published Claude artifact with a person picker, so anyone (including a manager) can see any teammate's day. It is refreshed every weekday morning and reads Smartsheet live for viewers who have the Smartsheet connector. A teammate can also ask for their own copy of the page.

## Inputs

- **Who** the brief is for. Default to the person asking; match their first name to the Owner column. Rows owned by "Everyone" count for each person.
- **The live sprint plan sheet** (for Vision: *Sprint Plan (Live)*), found by Smartsheet search.
- **Today's date** in the team's time zone (US Pacific for Vision). "Next 5 business days" means the next five weekdays after today.

Requires the Smartsheet connector (read). Without it, say the brief can't be built and stop.

## The two reads

Both outputs use the same two reads, because one read of every open step is too large and comes back sampled:

1. **Window:** Status not Complete or Dropped, Row Type is Task or Subtask, Due Date on or before today + 14 days (this also returns rows with no due date). Columns: Task, Step, Status, Owner, Due Date, Row Type, Project, AI Mode, Agent (GitHub), Depends On.
2. **Waiting:** Status is Blocked or Waiting on Someone. Columns: Task, Step, Status, Owner, Due Date, Project, Notes / Blocker.

If either read reports `isSampled`, narrow it (shorter window, fewer columns) and read again. Never build a brief from a sampled read; it silently drops work.

## Chat brief

1. **Run the two reads** and keep the person's rows (Owner includes them or Everyone).
2. **Group the rows:**
   - **Others are waiting on you:** the person's late or due-today steps that a teammate's step depends on (Depends On, same Project). Lead with these; clearing them unblocks someone else.
   - **Today:** late (Due Date before today) first, then due today.
   - **Next 5 business days:** due in the next five weekdays.
   - **Stuck:** Status Blocked or Waiting on Someone (with the Notes / Blocker text), or due within the next 5 business days while a teammate's prerequisite step is already late. An open prerequisite that isn't late yet is not a blocker: event-day steps ("The show has run") depend on earlier steps but happen anyway. A stuck step appears **only** here, not also under Today or Next 5 business days (decided 2026-11-10 from team feedback). It still counts toward the "late" total, and Today says how many more late steps are under Stuck.
   - **No date:** a short list at the end.
   Within each group, group by campaign (Project) when one campaign has several steps: "Dec 10 webinar: 7 late" with the steps under it.
3. **Split Today and the next 5 days by AI Mode:**
   - **AI executes:** offer to run them now with the agent named in Agent (GitHub).
   - **AI drafts, human approves:** offer to draft them now; the person reviews and sends.
   - **Human only:** list them as reminders.
   Never offer to run a step whose prerequisite is still open. When a campaign has several Claude-ready steps, offer to work through them together in dependency order.
   **Write for people, not the sheet:** never show step IDs (C9, L1) or raw Depends On values. Name the earlier step in words with its owner and lateness: "needs Ted's flyer first (9 days late)". Step IDs are for Claude only.
4. **Write the brief** (format below). Lead with the counts, then the top three things to do today.
5. **Act only on a yes.** Run or draft only the rows the person picks. After a step is done and checked, set Status to Complete, tick Done, set Date Completed to today and paste the result link in Deliverable Link. An email the person says they've sent goes straight to Complete; other drafts go to Ready for Review, not Complete.

```
Good morning, Ted. 2 late, 1 due today, 5 in the next 5 business days, 1 blocked.

Today, I'd start with:
1. Send the flyer for KOL approval (late 1 day) — I can draft it now
2. ...

Others are waiting on you
- Dec 10 webinar · Choose the title and send it to EJ (late 3d) · EJ's ON24 and HubSpot setup can't start until it's done
Today
- Dec 10 webinar (3 late): send the flyer for KOL approval · I can draft it; ...
Next 5 business days
...
Stuck
- Dec 10 webinar · Schedule the KOL interview · needs Nicholas to lock the KOL first (24 days late)
```

Keep it under 25 lines. Link each project row.

## Team brief page

The page template is [assets/team-brief.html](assets/team-brief.html); [scripts/build_brief.py](scripts/build_brief.py) bakes a snapshot of the two reads into it. The page shows, for the chosen person: counts, a copyable "Start with Claude" prompt, Others are waiting on you, Today (late first), the next 5 business days, Stuck (same rules as the chat brief), and steps with no date. A "Group by" menu switches between Campaign (default: each campaign folds open to its steps, with a copyable prompt that hands all its Claude-ready steps to Claude at once) and Due date. Dependencies sit in a fold-out line in plain words ("Needs 2 earlier steps first · waiting on Ted (1 late)"); step IDs never show. Each step links to its Smartsheet row, and each AI-doable step has a copyable prompt naming its agent. A stuck step shows only under Stuck. Each of the viewer's own steps has a **tick box**: ticking it sets Status to Complete, ticks Done and sets Date Completed to today in Smartsheet, through the viewer's own Smartsheet connector (so the sheet records who did it), then offers Undo for 12 seconds. Undo restores the previous Status and clears Done and Date Completed. The box shows only on the viewer's own steps (on anyone's if the page can't tell who is viewing) and only when the page can reach Smartsheet; the first tick asks the viewer to allow writes. Ticking is for steps that are already done; it doesn't do the work. "Whole team" shows every person's counts, every late step by campaign, and everything marked waiting or blocked. The person picker lists the teammates who own work (for Vision: Nicholas, EJ, Kaelyn, Ted); managers use Whole team.

**The team page:** https://claude.ai/artifact/HqA17dHgSD5A6v5XuiSovc (owner: Nicholas). It opens only for people Nicholas has shared it with; ask him for access if it won't load. Open it any time: with the Smartsheet connector on, it reads the sheet live, so it's current whether you start on East or West Coast time. You never need to rebuild it just to see today's work.

**Who refreshes it:** Nicholas's scheduled task rebuilds the snapshot every weekday morning. Anyone Nicholas has given **edit** access can also refresh it on request ("refresh the team Vision Daily Brief"); their Claude follows the steps below and republishes to the same link. People with view access only can't republish it: they open it, or ask for a chat brief.

**Refresh (every weekday morning, and on request):**

1. Run the two reads and save each raw result as JSON.
2. Build the page:
   `python3 scripts/build_brief.py --rows window.json --blockers waiting.json --sheet-id <live plan sheet id> --sheet-url <live plan link> --out vision-daily-brief.html`
   The script refuses a sampled read.
3. Publish the output to the **existing** brief artifact so the link stays the same: pass the team page URL above as `url` (read it first if the publish asks). If the publish is refused because you can't edit it, stop and say so; don't publish a new artifact in its place. On the first publish, declare `capabilities: {mcp: {servers: [{server: "Smartsheet", tools: ["get_sheet_summary", "get_columns", "update_rows"]}]}, user: {scopes: ["profile"]}}` (`get_columns` and `update_rows` power the tick box; added 2026-11-10); on later publishes omit `capabilities` so the stored declaration carries forward.
4. Report the counts the script printed. Don't change sharing; the owner shares the page from its Share menu.

**A teammate's own copy:** when someone asks for "the daily brief page" (not the team refresh), run steps 1-2 above, then publish the output as a **new** private artifact for them (title "Vision Daily Brief", the same `capabilities` as the first publish) and give them the link. Never publish over the team page unless the person owns it or has edit access to it. Their copy looks and works the same, picks their name on open and reads Smartsheet live once they allow it, so it doesn't need a daily rebuild. Point people to the team page first; a personal copy is for someone who wants a page that doesn't depend on the team page.

**How the page stays current:** it opens on the baked snapshot (labelled with its time). If the viewer has the Smartsheet connector and allows it, the page re-runs the same two reads live and refreshes every 10 minutes; otherwise it says how to connect. The page picks the viewer's own name when it matches a teammate and remembers the last person chosen.

## Mistakes to avoid

- Building from a sampled read. A missing row looks like a finished task.
- Marking a drafted step Complete. Complete means sent, published or confirmed done.
- Running an "AI executes" step whose dependency isn't done.
- Listing another person's rows in a chat brief. The chat brief is per person; the team page is for looking across people.
- Publishing the page as a new artifact. Always republish to the existing URL so bookmarks keep working.
- Republishing with a `capabilities` list that drops `get_columns` or `update_rows`. A non-empty list replaces the stored one, and the tick box stops working.
