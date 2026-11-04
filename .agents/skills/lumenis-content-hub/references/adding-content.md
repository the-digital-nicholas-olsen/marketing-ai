# Process new content and retire older revisions

Use from the content-hub skill when asked to process a supplied asset or an existing Content Intake row. The agent accepting the content also writes its final searchable catalog entry in the same run. Do not stop after logging Intake or require a second request to process it. This procedure describes an agent-run task, not an installed automatic trigger.

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
| Different format/platform | Digital PDF, print-ready PDF and a platform copy of the same asset/revision share one canonical Catalog row. Keep distinct files/links in Placements; do not create three catalog assets or rename the canonical title for each format. A format change alone does not supersede anything. Record explicit owner evidence for replacement across formats. |
| Market/language variant | Keep different market or language editions separately identifiable in the Catalog. Size and use-specific formats of the same edition belong in Placements. Leave `Replaces` empty unless replacement is independently established. |
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
- **Access unavailable or ambiguous match:** record `Not checked` or the ambiguity. A contributor-supplied link may be cataloged with a visible verification-pending label and attribution; do not claim its revision or contents were checked. Keep this follow-up visible on the final Catalog row instead of withholding the entire known asset from search.

For **Mimeo**, distinguish internal artwork/library links from customer purchase links. Verify print artwork and product configuration for the requested use. Populate the customer-print field only with a verified customer ordering route. If the portal provides only a stable home link, label it with the category and exact item name; do not invent a direct product URL. A Mimeo listing does not prove public availability or authorize an order.

## Update the library and close intake

The final searchable sheet is **Content Library Catalog**. The similarly named **Content Asset Catalog** is historical; do not send new content there unless the user explicitly changes the active repository.

1. **Resolve one asset.** Search the live Catalog by control ID, market, language and revision, then title where needed. Combine related Intake submissions for digital, print and platform copies into one canonical asset. Preserve one plain asset title without format/platform suffixes. Do not merge unrelated pieces or different national editions on title alone.
2. **Write the final Catalog row in this run.** Reuse a matching row or add one when the asset's identity is established. Save classification, control/revision, lifecycle, source attribution and current OneDrive location. Use `Digital PDF` and `Print-ready PDF` for their exact file URLs and the existing platform columns for Modus, PartnerZone or Mimeo. A print PDF is not a customer print-order URL. Read the current schema first; use existing equivalent fields. Add missing format-link fields when authorized, otherwise preserve exact links in Placements and report the presentation gap.
3. **Save Placements.** One row per actual format/platform copy, associated with the canonical Catalog asset, retaining exact filenames and URLs. Check existing source IDs/links before inserting to make retries idempotent. Multiple Intake records may resolve to this one catalog asset and several placements.
4. **Expose verification gaps.** Attempt authorized checks and uploads. A blocked login or unavailable platform tool does not prevent cataloging a known piece based on clearly attributed submission evidence. Label unverified URLs and missing destinations in `Status`/`Needs Review`/`Notes` and placement details. Do not invent a link, mark a known older copy current, or imply publication or approval. If asset identity itself is unresolved, retain Intake as `New` with the specific question instead of creating a guessed asset.
5. **Update relevant views.** Update Post-Sale items only when the content is suitable for that audience and its approval is established. Exclude drafts/internal-only content. Update affected Mimeo records when applicable. Do not add every B2B sales piece to a post-sale customer list by default.
6. **Read back the final result.** Confirm exactly one intended asset, its associated placements and actual saved hyperlink targets. A successful write response or matching link label alone is not enough. Preserve contributor names and submission dates.
7. **Record completion in Intake.** Intake is an optional audit/work log, not a required preliminary step or a second person's queue. Reuse existing rows; do not create redundant submissions solely to catalog content. Once the final Catalog and associated Placements are saved and verified by readback, set those Intake rows to `Catalogued` and record the final asset reference. `Catalogued` means indexed and searchable; it does not certify all platform checks or authorize use. Retain pending checks visibly on the Catalog and in the Intake notes. Use `New` when cataloging itself remains incomplete and `Rejected` only for an actual rejection decision with a reason.
8. **Preserve maintenance continuity.** Synchronize a maintained inventory/mirror in the same run where available and record the live row mapping. An unavailable offline inventory must not strand the item in Intake or block a permitted final-sheet write. Record any mirror synchronization still needed. Before any later export/import, reconcile the current live Catalog and Placements, including direct format links, verification notes and customer print links. Never overwrite newer live records with a historical crawl or bulk-replace sheets for one item.

For new audit records, use the live Intake fields: `Asset Name`, `Division`, `Product`, `Folder`, `Platform`, `Link`, `File Name`, `Control ID`, `Revision`, `Replaces`, `Notes`, `Intake Status`, `Added By`, and `Added On`. Store missing-platform requirements and check outcomes in `Notes` if there is no dedicated field; do not invent picklist statuses. The same agent completes final-sheet writes as part of this task.

Report the canonical asset and final Catalog link, its format/platform destinations, catalog completion, and any remaining verification/publication or mirror-sync work separately. Say “catalogued; platform verification pending” when that is the actual result, not “fully verified.” Keep actual files, URLs, operational paths/IDs and completion evidence in the private work system, not GitHub.

## Retire an old version

A verified new revision may supersede an older edition; a format or language difference alone does not. Update lifecycle and latest-revision relationships in the final Catalog and synchronize maintained inventory copies where available. Preserve old files. Move, rename or retire shared OneDrive/Mimeo/portal items only within explicit authorization, recording the action and verifying the destination. Do not delete files as part of intake processing.
