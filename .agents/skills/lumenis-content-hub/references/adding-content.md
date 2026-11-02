# Process new content and retire older revisions

Use from the content-hub skill when asked to process a supplied asset or an existing Content Intake row. Finish the authorized platform and catalog work; logging intake alone is not completion. This procedure describes an agent-run task, not an installed automatic trigger.

## Establish the file and destinations

Read the supplied file or existing intake row. Reuse known choices and ask only for unresolved inputs:

- Source file/link, division, product, audience, language and market.
- Control ID and revision from the document itself, and what it replaces, if anything.
- Optional destinations: Modus, PartnerZone and Mimeo. Ask in one question when they are unspecified. A destination may require only finding and linking an existing copy; do not equate selection with permission to publish an unapproved file.

OneDrive and the content library are required for every processed piece. Work within the user's existing authorization; do not ask again for a platform choice or action already authorized. Confirm approval evidence needed for the selected audience before publication. Filing or cataloguing does not establish brand, legal or regulatory approval. Drafts belong in `6 Source Files` and must not enter customer-ready views.

Search the Content Library Catalog and Placements before adding anything. Classify by content using the [folder scheme](hub-structure.md#onedrive-folder-scheme), not by the platform where it was found. If the file is already correctly filed in OneDrive, open it and reuse its exact link. Do not upload a duplicate or rename/move the existing file just to follow the new-file naming pattern.

## Revision or variant

| Relationship | Evidence and action |
|---|---|
| New revision | Same controlled piece, later revision and matching market/language. Verify the printed control and revision and record `Replaces`. |
| Different format | A PDF export and an editable presentation may coexist. A format change alone does not supersede anything. If the content owner explicitly confirms that a later revision replaces the older edition across formats, record that evidence and preserve the older file. |
| Variant | Different language, market, size or use-specific format. Preserve a distinct variant/placement and leave `Replaces` empty unless replacement is independently established. |
| Identical copy | Reuse the existing file and placement; do not create a duplicate record. |
| Different piece | Different controlled piece or content: add a separate asset. |
| Unclear | Keep the uncertainty in `Notes`; do not retire or declare an exact match on a guess. |

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

## Verify selected platform copies

For **PartnerZone and Modus**, use the connected tool or supported browser session and the user's existing login. If authentication is needed, let the user sign in. If the client has no browser/platform capability, record that specific blocker; a login in an inaccessible browser is not a completed check.

Search by control ID, then title/product. Open candidates and inspect the actual document's revision, language, market and content. Listing names can be stale. Capture the exact file/detail link that resolves to the verified asset, not a search result or generic portal home. Confirm suitability for the intended audience; an employee account's visibility does not establish customer permissions.

- **Exact current copy exists:** reuse its link and record the platform placement.
- **Only an older revision exists:** record it as an older placement with its own revision. Do not put its link on the new-revision row as if it delivers the new file.
- **No match:** record `Not found` and the scope/date checked. If approved publication to that platform is authorized and supported, upload and verify the result. Otherwise retain the specific publishing action and owner/access needed as pending; prepare a handoff without sending messages unless requested.
- **Access unavailable or ambiguous match:** record `Not checked` or the ambiguity. Do not report absence or an exact match.

For **Mimeo**, distinguish internal artwork/library links from customer purchase links. Verify print artwork and product configuration for the requested use. Populate the customer-print field only with a verified customer ordering route. If the portal provides only a stable home link, label it with the category and exact item name; do not invent a direct product URL. A Mimeo listing does not prove public availability or authorize an order.

## Update the library and close intake

Use the existing Content Intake row where present. For a new request, create the intake record with `Intake Status = New`; use one row per platform when needed by the current schema. Preserve contributor and submission date. Required fields are `Asset Name`, `Division`, `Product`, `Folder`, `Platform`, `Link`, `File Name`, controlled `Control ID`/`Revision` when present, `Replaces`, `Notes`, `Added By`, and `Added On`.

Read the live column schema before writing. Store selected destinations, each platform's result, checked revision/date, verification evidence and remaining actions in `Notes` when no dedicated field exists; do not invent status values or columns.

The maintained sheets are generated from an authoritative inventory. Discover the current maintainer-approved inventory and refresh/import mechanism in the private work system; operational paths, IDs and scripts do not belong in this public procedure. Do not run historical scripts with guessed scratch paths or reimport entire sheets for one intake item. Use the supported maintenance path, preserving unrelated rows, stable links and the customer-print field.

1. **Inventory:** register the new file, revision/variant, classification, verified platform placements and replacement evidence in the authoritative source. Retain earlier files and their provenance.
2. **Content Library Catalog:** add or update the correct revision/variant, with its current filename, OneDrive folder, lifecycle and verified platform links. Do not attach a different revision's platform URL to it. Mark the older edition superseded only where replacement was verified; missing platform copies remain visible as pending.
3. **Content Library Placements:** record each actual copy separately, linked to the correct asset/revision. Keep older platform copies traceable rather than implying they have been updated.
4. **Post-Sale Hub:** for a current, approved asset suitable for customer/practice use, update its item and relevant product view to the new file. Exclude drafts and internal-only content. Refresh Mimeo Library only for affected Mimeo items through its maintained process.
5. **Read back:** verify the persisted inventory and affected live rows, links and revision/lifecycle fields. Check that the downstream product view resolves to the intended file. On a retry, reuse completed files/rows and resume missing steps.
6. **Close intake:** set `Catalogued` only after OneDrive, library updates and all selected platform requirements are verified complete. Keep `New` with a precise pending-action note if access, publication, matching or synchronization is incomplete. Use `Rejected` only for an actual rejection decision with a reason, not for a technical blocker.

If the authoritative inventory or maintenance capability is unavailable, finish independent checks and keep the intake pending with the exact remaining action. Do not make a view-only patch that will disappear at the next refresh, and do not tell the user the asset is fully processed.

Report the file/revision, OneDrive destination, catalog result, each selected platform's verified link/status, older copies needing attention, and any remaining blocker. Keep actual files, URLs, evidence and completion records in the private work system, not GitHub.

## Retire an old version

A verified new revision may supersede an older edition; a format or language difference alone does not. Update lifecycle and latest-revision relationships through the maintained inventory. Preserve old files. Move, rename or retire shared OneDrive/Mimeo/portal items only within explicit authorization, recording the action and verifying the destination. Do not delete files as part of intake processing.
