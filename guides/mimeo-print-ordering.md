# Order prints through Mimeo

Owner: Kaelyn Gray (Vision event marketing).
Proposed reviewer: Nicholas Olsen.
Status: draft, written 2026-10-30 from Kaelyn's working reference; warehouse-first sourcing, the shared-folder fallback and the ship-to steps added 2026-11-20 after a live Accelerate order. Mimeo behavior below was observed, not documented by Mimeo, so recheck it before relying on it.

This is how to turn a print plan in Smartsheet into a checked Mimeo cart with its ship-to address, then hand it off for the delivery date and submission.

**Applies to:** Vision Mimeo account. Aesthetics requires its owner's confirmation before applying these settings.

**Not for:** finding a single file (use the [content hub](../.agents/skills/lumenis-content-hub/SKILL.md)) or planning an Accelerate's kit (use the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md)).

## What you need

- A Mimeo login. The person signs in; the AI never handles the password.
- Access to the print planning sheet, in Vision Marketing Events > Print Planner. Sheet links stay in the internal work system.
- The show or order name and the date the prints are needed.
- Access to the event's **Shipping** sheet in the event's own Smartsheet folder (for example, Accelerate Marketing Events > `<year>` Accelerates > `<NN City>` > Shipping). Its **Shipping Address** column holds the ship-to address and any ATTN or C/O line.

## Rules

1. **Stage the cart and the ship-to address, then stop at the delivery date.** An AI builds and checks the cart and, when asked, enters the ship-to address. It stops on the **Delivery** step, before a delivery date or shipping method is chosen. Choosing the delivery date, ordering and paying are a person's job.
2. **Only rows with a positive whole-number quantity get ordered; zero and blank mean omit, and negative or ambiguous values are flagged.** Everything else on the sheet is out of scope.
3. **Warehouse stock first.** When an item exists as an `Inventoried Item` (warehouse stock), order from stock instead of printing a new copy, even if a printable copy has the exact sheet name. For example, a clinical studies book with warehouse stock is ordered from the warehouse, not reprinted. Print a new copy only when there is no warehouse item or the stock shown on the cart line ("(N QTY available)") can't cover the quantity; flag a shortfall instead of silently splitting.
4. **Search again for every order.** Do not reuse last time's folder or copy.
5. **Never save from the editor.** Clicking an item name opens **Build A Document**. Leave with **Cancel**. **Save** and **Save As New** change the stored library copy.

## The procedure

### 1. Pull the order list

The planning sheet has these columns:

| Column | Purpose |
|---|---|
| **Mimeo Cheat Sheet** | Handling instructions, such as "Plastic wrap together" |
| **Notes** | Audience or segment tags, such as "MD shows" |
| **Print File Name** | The name to match against the Mimeo library |
| **`<Show>` Quantity** | One column per show |

Filter the show's quantity column to positive whole-number quantities; do not order zero, negative or ambiguous values. Section-header rows, such as "Quotes" or "Table Cloth", only group the list. They and blank spacer rows are not items. A new show needs its own quantity column first.

### 2. Open the cart

Check existing cart items and recent orders before adding anything. Preserve unrelated items; do not empty or submit someone else's cart. Carts don't reliably last between sessions, and a cart left overnight has been found empty. If you don't submit in the same sitting, expect to rebuild it from the sheet.

### 3. Find the right copy of each item

**This is the biggest risk in the process.** Most print files exist as several copies across Mimeo folders. Copies can share a filename and still have different binding, paper, color, lamination or shrink wrap, so the copy you pick changes what prints and what it costs. Mimeo has no canonical copy.

To search:

1. Select **My Library** in the tree first. Search only covers the selected folder, so "No items were found" usually means you are in a subfolder.
2. Search for the 9-digit product code when the item has one. It is far more reliable than the name.
3. Click **Search**. Pressing Enter does not submit.
4. Read full names from the page text. The grid cuts long names off, which is how LETTER and A4 get mixed up.
5. **If an item isn't found in My Library, check Folders Shared To Me.** Select **Folders Shared To Me** in the tree and search again there; some items, especially warehouse stock, are shared from another account rather than stored in My Library. Only report an item as missing after both places come back empty.

Selecting a folder in the tree closes the search panel. Click **Search** in the toolbar again before the next search.

For each result, check:

- **Found In Folder:** which set it belongs to.
- **Created and Last Modified:** a later modification is a reason to inspect its settings, not proof of what changed or which version is approved. A change dated today deserves a look.
- **Type:** `Bound Document`, `Single Sheet`, `Kit`, `Poster`, `Printfile` or `Inventoried Item`. A `Printfile` is a raw upload, not a configured product, so it is almost never the one you want. An `Inventoried Item` is warehouse stock and wins over a printable copy (rule 3). Warehouse items can have a slightly different name from the sheet, such as a `Lumenis` prefix, so search on the distinctive words too.

Pick the source folder from what the search returns that day. Folders drift: copies get moved or deleted, and an item may have one copy left. If an item has more than one good copy, say which you picked and why at handoff. Quote items with 9-digit codes have consistently lived in **Quotes**, each next to a raw Printfile.

When browsing a folder, change the 25-row default to **100 at a time**, or you will miss items without noticing.

### 4. Add to the cart

1. Tick each item's row. You can select several in one result view, including a search across folders.
2. Click **Add to Cart** in the toolbar.
3. Watch the cart badge. It counts distinct items, not units.
4. Open the cart icon and confirm the count and names. This flyout has no quantity field.

**Add to Cart always adds a quantity of 1.** The Quantity box in the Build A Document editor does not carry into the cart.

### 5. Set quantities and click Update

Open the cart icon, then **Checkout**. Despite the "Order Checkout" heading, this is still the editable cart.

Type each quantity, then click **Update** at the bottom. **This step is required.** A typed quantity looks right, but it isn't saved, and leaving or reloading the page puts it back to 1. After Update, every line's **Total** should recalculate. If it didn't, the quantity didn't save.

The page also has **Set Qty for All**, **Empty Cart**, **Add More Items** and **Remove**. **Continue** moves into the order flow (step 8). Nothing is placed until the final submit, but click it only when the cart is checked and you're asked to enter the ship-to.

### 6. Check each line by product type

| Type | What to check |
|---|---|
| **Kit** | Has a setup fee and adds about 24 hours of production. Expand **Show Items** and compare the contents to the sheet. The packaging setting there, such as *Shrinkwrap entire kit*, shows whether "plastic wrap together" is already built in. |
| **Inventoried item** | Warehouse stock such as table throws, banners, pens, lanyards and stocked books. Preferred over printing (rule 3). Has a setup fee and adds about 4 hours. Don't order more than the "(N QTY available)" on the line. |
| **Bound document, single sheet, booklet, poster** | Standard print products. |
| **Printfile** | Raw PDF with no build settings. Generally not what you want. |

Unit prices drift between orders. Check the unit price before assuming a different total means you picked the wrong copy.

### 7. Check the timing

Mimeo shows a banner on the cart when the order is at risk, with a submit-by time and the earliest delivery date. The slowest line sets the production time, so one kit can push the whole order out a day. The delivery date moves later each day the order waits. Compare it to the date you need.

### 8. Enter the ship-to address

Pull the address from the event's **Shipping** sheet (Smartsheet, in the event's folder), **Shipping Address** column. If it still holds a placeholder such as `GUEST NAME`, or no hotel name, stop and ask; don't guess who the boxes are held under.

1. On the cart, click **Continue**.
2. **Special Instructions:** leave every option unticked unless the person asks for one. They include do-not-ship, warehouse-return and discard instructions.
3. **Recipients:** search **Your Address Book** for the hotel or city first and reuse a matching, current entry. Otherwise click **Create New Recipient**.
4. Fill the label fields so the hotel can match the box to the guest. Only the fields above "The following fields do not appear on the shipping label" print:

| Field | Enter | Example |
|---|---|---|
| **First Name** | The guest the hotel holds the boxes for, full name | `Jane Doe` |
| **Last Name** | `Lumenis` | `Lumenis` |
| **Company** | Leave blank unless the Shipping sheet gives one | |
| **Address 1** | Street address | `100 Example Plaza` |
| **Address 2** | The hotel name, plus any C/O or ATTN note from the Shipping sheet | `Example Hotel Downtown` |
| **City / State / Zip** | From the Shipping sheet | |
| **Daytime Phone Number** | Required. The person's own number, given by them; an AI never invents one | |
| **Display Name** | Leave blank | |

Put any C/O or ATTN note in the name fields or on **Address 2**, never only in **Care of**, **Reference** or **Display Name**, so it shows on the shipping label.

5. Keep Mimeo's save option as it is unless the person says otherwise and click **Save**.
6. Mimeo checks the address against USPS and offers **Keep Original Address** or **Use Recommended Address**. Use the recommended one when it only reformats the street, adds the ZIP+4 and keeps the guest and hotel lines; only the recommended address carries Mimeo's delivery guarantee. If it drops or changes the name or hotel line, keep the original and say so.
7. Under **View Recipients**, confirm the order has exactly the one intended recipient, then click **Continue**.

### 9. Stop at the delivery date

The **Delivery** page ("Choose Shipping") shows the turnaround, the earliest estimated delivery, the validated shipping address, a list of delivery dates and times with a shipping cost for each, and a signature preference per package. One date may already be marked; it can be the fastest and most expensive option, so don't take it as a recommendation.

An AI stops here, before a delivery date, shipping option or signature preference is selected. It reports the items, the copy choices it made (including any warehouse-versus-print decisions), the ship-to entered, the date options with their costs, the submit-by time and anything unresolved. The person picks the delivery date against the hotel's package-receiving dates, reviews the summary and submits.

### 10. Log the order number

When the person places the order, they give the AI the Mimeo order number. The AI logs it in the event's **Shipping** sheet as a new row:

| Column | Enter |
|---|---|
| **Item** | What was ordered, such as `Mimeo print + supplies order` |
| **Tracking #** | Leave blank until the order ships |
| **Order Date** | The day the order was placed |
| **Shipping Address** | The ship-to as validated in Mimeo |
| **Notes** | `Mimeo Order # <number>`; tracking to follow |

Add a row rather than overwriting the existing ship-to row, then read it back. When the order ships, add the tracking number to that row and to the sprint plan task that tracks the order.

## Naming traps

| Trap | What to watch |
|---|---|
| `- no folder` suffix | A kit variant without the physical folders. If the sheet says "+ FOLDERS", use the plain kit. |
| Model letter swaps | `Example 40F` and `Example 40R` can be different products. Check the 9-digit code. |
| Date stamps | Several dated versions of one brochure can sit side by side. |
| `Canada` prefix | Separate items from the US versions. |
| `_new`, `(1)`, `-v2` | Revision suffixes. Pick one deliberately. |
| `LETTER` and `A4` | Most brochures have both, often next to each other in results. |

## When the sheet and library don't match

The Print File Name should match the library name character for character. Treat a mismatch as worth investigating; an exact name alone does not establish an approved current version. Usually the sheet is stale because the file was revised to `_new` or `-v2`.

Propose the corrected name and intended item link; edit the planning sheet only within the authorized update scope and read it back. If the row's text carries a fulfillment instruction the library name lacks, such as "PLASTIC WRAPPED + FOLDERS", move it to **Mimeo Cheat Sheet** first so the rename doesn't lose it.

## Sheet hyperlinks

Each Print File Name cell links to a Mimeo item by `StoreItemId`. That is the fastest way to reach the intended copy, and editing the cell's text keeps the link. A link that opens isn't necessarily correct:

- **It can open the wrong product.** Matching names alone won't catch this.
- **It can point to a deleted item.** Deleting and re-uploading a file creates a new `StoreItemId`, and the sheet keeps the old one. This is the most common failure.
- **The Smartsheet API can report links wrongly.** `get_cell_history` returns `hyperlink: null` for older versions, and an `update_rows` response can repeat a stale URL. Read links from the sheet in a browser. Writing links through the API is fine.

Section headers have nothing behind them. `Lumenis Pocket Folders` links to a Mimeo folder, so it has no single name to match.

### Notes for the AI

These are internal Mimeo page details and may change without notice. While signed in, fetch the link and read the name from the HTML, so you don't open the editor:

- Regular items: the hidden input `documentNameHidden`.
- Kits: the page title is `Build A Kit`, and the name is in `mimeoKittingKitJSONHidden` as `{"Id":"<name>"}`.
- Dead links: the page contains "The item you are trying to open no longer exists".

Compare the name to the cell text character for character. To find a replacement, search the library for the 9-digit code and read the link in the result row.

## Good and bad examples

Good: "`Example Product Brochure LETTER` is in the cart at 25, Total recalculated after Update. Two copies existed; I used the Quotes copy because the other was changed for one past show. Delivery date meets the show. Not submitted."

Good: "The clinical studies book has warehouse stock (54 available), so I used the inventoried item instead of printing one. One item wasn't in My Library; I found it in Folders Shared To Me. Ship-to entered from the Shipping sheet with the guest name on the name line and the hotel on Address 2. Stopped at the delivery date."

Avoid: "Added everything from Print Planner like last time and typed in the quantities." No search was rerun, the wrong copies may be in the cart, and without Update every line is still a quantity of 1.

Avoid: printing a new copy of a book that has warehouse stock, or putting the hotel name or ATTN note only in **Care of** or **Display Name**, where it doesn't reach the label.

## Checklist

- [ ] Use positive whole-number quantities and flag invalid values
- [ ] Open the cart and check what's already there
- [ ] Search each item with My Library selected; check folder, dates and type
- [ ] Search Folders Shared To Me for anything not found in My Library
- [ ] Use the warehouse (`Inventoried Item`) copy over printing whenever stock covers the quantity
- [ ] Confirm 9-digit codes where present
- [ ] Read full names from the page text for near-identical results
- [ ] Choose the source folder from today's results and note judgment calls
- [ ] Select rows, click Add to Cart and watch the badge
- [ ] Confirm the item count and names in the flyout
- [ ] Set quantities on the cart page and click **Update**
- [ ] Confirm every line's Total recalculated
- [ ] Expand **Show Items** on each kit; check contents and packaging
- [ ] Check stock on inventoried lines
- [ ] Compare the production banner to the needed date
- [ ] Leave Special Instructions unticked unless asked
- [ ] Pull the ship-to from the event's Shipping sheet; stop if it has a placeholder
- [ ] Guest name in First Name, `Lumenis` in Last Name, hotel name on Address 2; Display Name blank
- [ ] Phone number from the person (required, not printed)
- [ ] Use the USPS-recommended address if it keeps the guest and hotel lines
- [ ] Stop at the Delivery step; report the date options and costs; the person picks the delivery date and submits
- [ ] Log the order number the person gives you as a new row in the event's Shipping sheet; add tracking when it ships

Before staging, verify the approved revision, country, audience, print settings and asset clearance with the owner or approved record. Missing clearance blocks that item.

## Sources and open items

Source: Kaelyn Gray's working Mimeo print ordering reference. The print plans stay in Smartsheet, and Mimeo's order history is the record of what was ordered. Prices, product codes, sheet links and real orders stay out of this repository.

Open items:

- The folder names here may predate the October 2026 library reorganization. They should be checked against the current structure.
- No Aesthetics or second-person run has tested this guide.
- The **Summary & Payment** step after Delivery isn't documented; the person handles it.
