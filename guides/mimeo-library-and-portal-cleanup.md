# Organize the Mimeo library and print portals

Owner: Kaelyn Gray (Vision event marketing).
Proposed reviewer: Nicholas Olsen.
Status: draft, written 2026-10-30 from the October 2026 cleanup. Mimeo behavior below was observed then and is not documented by Mimeo, so recheck it before relying on it.

This is how an AI assistant and a marketer reorganized the Vision Mimeo account: the back-end **My Library** and the **Employee** and **Customer** print portals. Use it for another cleanup, or for routine upkeep when files pile up in the wrong place.

**Applies to:** Vision Mimeo account. Aesthetics is outside this observed scope until its owner confirms the procedure.

**Not for:** finding or adding a single file. Use the [content hub](../.agents/skills/lumenis-content-hub/SKILL.md).

## What you need

- A Mimeo login with library and portal admin rights. The person signs in; the AI never handles the password.
- An AI client that can drive a browser in a signed-in tab. Claude in Chrome was used.
- A shared plan sheet in Smartsheet, or another work system, with a row per approved change. The plan stays there, not in this repository.
- Agreement from whoever owns the library. The content hub says to ask Nicholas before moving or renaming files other people use.

If the login or the owner's agreement is missing, stop. You can still build the inventory and proposal if you have read access.

## The method

1. **Inventory first, change nothing.** List every library file with its folder, name, product, size and dates, and every portal item with its category, published state and type.
2. **Design the target structure.** Group by product line, then by file type. See [the structure we landed on](#the-structure-we-landed-on).
3. **Propose every change with a reason.** Give each file its old path, new path and a short reason, such as "Sorted by type: Brochures & Sell Sheets". Group folder renames, new folders, file moves and portal category changes separately.
4. **Flag anything uncertain, and do not move it.** Stale, possibly duplicated or possibly superseded files go on a separate list for a person to decide.
5. **Get approval, row by row.** Put the proposal in the plan sheet with an approve column. Only approved rows are worked. Publishing and removing portal categories need the person's explicit OK, because they change what people see.
6. **Apply one change at a time, in one tab.** Do folder renames, then new folders, then moves. For portals, do category adds before renames.
7. **Verify each change by reading it back.** Check the destination, not the success message. Mark the row done only after that.
8. **Delete nothing in the library.** Old folders left empty stay until a person decides.
9. **Report** what moved, what was flagged and what failed, then let the person review the portals.

## The structure we landed on

**My Library** was organized by product line, then file type in the observed cleanup. Treat these as examples, inspect current state, and obtain owner approval for a new target structure:

- Product folders such as `Dry Eye - OptiLight & OptiPLUS` and `OptiLIFT`
- File-type subfolders inside them: `Brochures & Sell Sheets`, `Posters & Banners`, `Playbooks, eBooks & Training`, `Forms & Consents`, `Kits`
- `Quotes`, split into `US` and `Canada`
- `Events & Tradeshows` for event and kit logistics, and `General & Corporate` for company-wide forms and templates

**Portals** use a flat category menu by product. Each device category that has posters or banners has a `Posters & Banners` sub-category. We first tried one top-level `Posters & Banners` category, then moved back to per-device sub-categories because people browse by device.

## Review records

Inventories, move counts, flagged files and incomplete cleanup decisions belong in the internal plan. This guide does not publish the account's operational inventory or claim those decisions are complete.

## Portal mechanics

Two different screens do two different jobs.

| Job | Where | Notes |
|---|---|---|
| Add, rename or remove a category | Portal admin, category settings | Cannot change a category's parent. Nothing goes live, including a removal, until **Save & Publish**. |
| Change an item's categories | The item editor on the portal storefront | Categories are checkboxes. Save with **Save Changes**. |
| Create a new portal item | Library **Publish** button | Do not use this to recategorize. It creates new items. |

Mimeo's **Alphabetize all categories** link sorts by capitalization, so a name starting with a lowercase letter, like `triLift`, lands last.

Removing a category asks you to type `yes` before Delete works. The Delete button can sit off-screen in a narrow window, so widen the window.

## Tool access

Use only operations supported by the available tool and its documented API. Prefer the normal signed-in UI when internal Mimeo functions are unavailable or changed. Verify each saved destination before retrying; do not depend on undocumented page functions.

## What went wrong and how to avoid it

| Problem | What to do |
|---|---|
| Parallel agents moved files into the wrong folders | Mimeo keeps the selected library folder per login, not per tab. Use one tab and one agent, with no one else working in that login. |
| A click by screen position hit **Add to Cart** | Never click the library toolbar by position. The cart item was removed and the cart checked. Check the cart if this happens. |
| An item saved with no categories | The ticks ran before the form loaded. Wait for the checkboxes, then verify. |
| Save shows a generic "Error… refresh" dialog | It often saved anyway. Read the item back before retrying. |
| Save fails every time for one item | Usually Mimeo's "already have the name… same name?" prompt, which needs OK after saving. |
| Null-reference error when opening an item | Reload and do one item per page load. |
| The add-category form is attached to the wrong category | An inline rename ties the form to that category. Do all adds before any rename. |

## Good and bad examples

Good: "`Example Product Brochure` moves from `My Library` to `Example Product / Brochures & Sell Sheets`. Reason: sorted by type. Approved in the plan sheet. Destination read back."

Avoid: "Moved the old brochures to Archive and deleted the empty folders." Nobody approved it, there is no list of what moved, and it cannot be undone.

## Routine upkeep

When files build up at the My Library root or in generic folders:

1. The person signs in.
2. List those files and propose each destination in the existing structure, with a reason.
3. Flag anything stale, duplicated or superseded separately.
4. Get approval, then apply and verify one at a time.
5. Report. Delete nothing. Portal changes and Save & Publish need the person's explicit OK.

This routine comes from the cleanup. It has not yet been run on its own.

A repository merge does not authorize any change in Mimeo. Filing a piece in a folder or portal is not approval to use it.

## Sources and open items

Source: the Vision Mimeo cleanup from 2026-10-26 to 2026-10-30. The inventories, move list and plan stay in the team's work systems.

Open items:

- The content hub's Mimeo folder examples and the `Mimeo Library` sheet predate this cleanup. They should be checked against the new structure.
- Decide what happens to the internally flagged files and the empty old folders.
- No Aesthetics or second-person run has tested this guide.
