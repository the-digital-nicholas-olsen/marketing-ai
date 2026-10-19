# Adding and retiring content

For people and AI assistants adding a new file, or a new revision of an existing one, to OneDrive or Mimeo. The Vision Home SSD is Nicholas's local master copy; nothing here touches it.

## Before you add anything

1. Search the **Content Library Catalog** for the title and the control ID. If something matches, decide what the new file is before going on (next section).
2. Decide division, product and folder using [the folder scheme](hub-structure.md#onedrive-folder-scheme).
3. Make sure it is a finished, approved piece, or put it in `6 Source Files` if it is a working file. Approval (brand, legal, regulatory) happens outside the hub.

## Revision or variant

A match in the catalog can mean any of these. Only the first one supersedes anything.

| The new file is | How to tell | What to do |
|---|---|---|
| A **new revision** | Same control ID, later revision letter (for example Rev B to Rev C), same language, market and format | Add it; fill `Replaces` with the older revision |
| A **variant** | Same piece in another language (EN/ES), market (US/EU/Canada), size or format (print, web, A4/Letter, poster/rollup) | Add it as its own row; leave `Replaces` empty and describe the variant in `Notes` |
| An **identical copy** | Same file already in the catalog (same name, size and content) | Do not add it. Use the existing link |
| A **different piece** with a similar title | Different control ID, or different content | Add it as new; leave `Replaces` empty |
| **Unclear** | No control ID, or you cannot tell | Add it with `Replaces` empty and say what you are unsure about in `Notes`. Never mark something superseded on a guess |

## File names

New files only; do not rename existing files.

`<Product> <Piece> <Audience or market> <Control ID> Rev <X>.<ext>`

- `OptiLIGHT Patient Brochure US PB-00032060 Rev C.pdf`
- `OptiLIFT B2B Brochure PB-00086630 Rev A.pdf`
- `triLIFT Social Media Kit Aesthetics.zip` (no control ID yet)

Rules:

- Product first, so files sort by product when browsing. Use the official spelling (OptiLIGHT, OptiLIFT, OptiPLUS, triLIFT, UltraPulse).
- Keep the control ID and revision exactly as printed on the piece. Leave them out only when the piece has none.
- No dates, `final`, `v2` or `new` in the name: the revision letter is the version. Working files without a control ID may start with `YYYY-MM-DD_`.
- Avoid characters that break links or drives: `< > : " | ? * + ' #`.
- Version history lives in the catalog (`Control ID`, `Revision`, `Lifecycle`), not in the file name.

## Add to OneDrive

1. Open the **Sales & Success Assets** library on the Lumenis Vision US MKT SharePoint site and go to `<Division>/<Product>/<Folder>`.
2. Upload the file. Do not create new folders inside the product folders; if none fits, use the closest and say so in the intake row.
3. Copy the file link (Share, Copy link, people in Lumenis) and log it.

An AI assistant can do this in a browser session the person is already signed in to. It must not create, move or delete folders, overwrite an existing file, or upload anything the person did not give it.

## Add to Mimeo

1. In Mimeo, open **My Library** and the product folder (OptiPLUS, Vision, triLift and so on). Equipment quotes go in `Quotes` (Canadian quotes in `Quotes/Canada`); print files in the folder's `Print Files` subfolder.
2. Upload the print file and build the document as usual.
3. Name quotes `<Product and configuration> <M.D.YY> (<deal number>)`, for example `OptiLIFT with Aesthetics 2.12.26 (123456789)` (fictional deal number), so the hub can read the date and deal reference.
4. Copy the item's link and log it.

## Log it in Content Intake

Add one row per file to the **Content Intake** sheet in the hub workspace:

| Column | Fill in |
|---|---|
| `Asset Name` | Title of the piece |
| `Division`, `Product`, `Folder` | As filed |
| `Platform` | OneDrive or Mimeo (one row per platform if both) |
| `Link` | The file or Mimeo item link |
| `File Name` | Exact file name |
| `Control ID`, `Revision` | As printed on the piece, if any |
| `Replaces` | The older file or revision this supersedes, if any |
| `Notes` | Language, market, anything unusual |
| `Intake Status` | `New` |
| `Added By`, `Added On` | You, today |

With the Smartsheet connector: `get_columns` on Content Intake, then `add_rows`, then read the row back to confirm it saved. Nicholas folds intake rows into the catalog and sets `Intake Status` to `Catalogued`.

## Retire an old version

- Only a true new revision retires anything (see [revision or variant](#revision-or-variant)). A language, market or format variant does not.
- Do not delete it. Log the new version with `Replaces` filled in.
- In the next catalog refresh the old one is marked `Superseded` and moved to `7 Archive` in OneDrive.
- In Mimeo, old revisions are retired by hand (moved out of the active folders); the `Retirement Candidate` column in the Mimeo Library lists candidates. Do it only when asked, and record what was moved.
