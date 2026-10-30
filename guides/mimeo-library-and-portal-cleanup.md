# Organize the Mimeo library and print portals

Owner: Kaelyn Gray (Vision event marketing).
Proposed reviewer: Nicholas Olsen.
Status: draft, written 2026-10-30 from the October 2026 cleanup. Mimeo behavior below was observed then and is not documented by Mimeo, so recheck it before relying on it.

This is how an AI assistant and a marketer reorganized the Vision Mimeo account: the back-end **My Library** and the **Employee** and **Customer** print portals. Use it for another cleanup, or for routine upkeep when files pile up in the wrong place.

**Applies to:** Vision Mimeo account. The same method should work for Aesthetics, but it has not been tried there.

**Not for:** finding or adding a single file. Use the [content hub](../.agents/skills/lumenis-content-hub/SKILL.md).

## What you need

- A Mimeo login with library and portal admin rights. The person signs in; the AI never handles the password.
- An AI client that can drive a browser in a signed-in tab. Claude in Chrome was used.
- A shared plan sheet in Smartsheet, or another work system, with a row per approved change. The plan stays there, not in this repository.
- Agreement from whoever owns the library. The content hub says to ask Nicholas before moving or renaming files other people use.

If the login or the owner's agreement is missing, stop. You can still build the inventory and proposal if you have read access.

## The method

1. **Inventory first, change nothing.** List every library file with its folder, name, product, size and dates, and every portal item with its category, published state and type. The October inventory covered 552 library entries in 23 folders, 92 Employee portal items and 46 Customer portal items.
2. **Design the target structure.** Group by product line, then by file type. See [the structure we landed on](#the-structure-we-landed-on).
3. **Propose every change with a reason.** Give each file its old path, new path and a short reason, such as "Sorted by type: Brochures & Sell Sheets". Group folder renames, new folders, file moves and portal category changes separately.
4. **Flag anything uncertain, and do not move it.** Stale, possibly duplicated or possibly superseded files go on a separate list for a person to decide.
5. **Get approval, row by row.** Put the proposal in the plan sheet with an approve column. Only approved rows are worked. Publishing and removing portal categories need the person's explicit OK, because they change what people see.
6. **Apply one change at a time, in one tab.** Do folder renames, then new folders, then moves. For portals, do category adds before renames.
7. **Verify each change by reading it back.** Check the destination, not the success message. Mark the row done only after that.
8. **Delete nothing in the library.** Old folders left empty stay until a person decides.
9. **Report** what moved, what was flagged and what failed, then let the person review the portals.

## The structure we landed on

**My Library** is organized by product line, then file type:

- Product folders such as `Dry Eye - OptiLight & OptiPLUS` and `OptiLIFT`
- File-type subfolders inside them: `Brochures & Sell Sheets`, `Posters & Banners`, `Playbooks, eBooks & Training`, `Forms & Consents`, `Kits`
- `Quotes`, split into `US` and `Canada`
- `Events & Tradeshows` for event and kit logistics, and `General & Corporate` for company-wide forms and templates

**Portals** use a flat category menu by product. Each device category that has posters or banners has a `Posters & Banners` sub-category. We first tried one top-level `Posters & Banners` category, then moved back to per-device sub-categories because people browse by device.

## Results

| Area | Outcome |
|---|---|
| Library | 6 folder renames, 13 new folders, 138 file moves |
| Flagged for review | 34 files left in place: 27 unchanged in 3+ years, 4 possible duplicates, 3 possibly superseded by a newer product version |
| Employee portal | Flat menu with 9 top-level categories and 68 items on 2026-10-30 |
| Customer portal | Flat menu with 5 top-level categories and 28 items on 2026-10-30 |

Portal counts are after the owner removed some items by hand, so they are lower than the inventory.

Not finished on 2026-10-30: the flagged files and the empty old library folders still need a person's decision. The library was last checked on 2026-10-26.

## Portal mechanics

Two different screens do two different jobs.

| Job | Where | Notes |
|---|---|---|
| Add, rename or remove a category | Portal admin, category settings | Cannot change a category's parent. Nothing goes live, including a removal, until **Save & Publish**. |
| Change an item's categories | The item editor on the portal storefront | Categories are checkboxes. Save with **Save Changes**. |
| Create a new portal item | Library **Publish** button | Do not use this to recategorize. It creates new items. |

Mimeo's **Alphabetize all categories** link sorts by capitalization, so a name starting with a lowercase letter, like `triLift`, lands last.

Removing a category asks you to type `yes` before Delete works. The Delete button can sit off-screen in a narrow window, so widen the window.

## Notes for the AI

These are internal Mimeo page functions, seen in October 2026. They may change without notice.

- Trigger tree selects and button clicks with a string `setTimeout("...", 0)`. Mimeo's postback code fails from strict or async JavaScript.
- Open an item on the storefront with `$find('nav').go(16, {CatalogItemId})`, then `$find('productSetting').showForm({CatalogId, Id})`.
- Wait for the category checkboxes to load. Untick and tick over 3 passes, then call `_saveCatalogItem()`.
- Read back with `Mimeo.Services.StoreFrontService.getService()` and `getAdminCatalogItem`.
- `GetCatalogItems` needs `Page: 1`, not `Page: 0`. Use `activeInactiveFilter: 1`.
- Run about 2 items per call to stay under the 45-second tool limit.

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
- Decide what happens to the 34 flagged files and the empty old folders.
- No Aesthetics or second-person run has tested this guide.
