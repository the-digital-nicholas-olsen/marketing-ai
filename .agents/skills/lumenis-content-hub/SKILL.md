---
name: lumenis-content-hub
description: Find Lumenis content in the Vision Content Repository Hub, or process new content and intake rows through OneDrive filing, selected platform checks and verified catalog updates. Use for asset lookup, latest revisions, post-sale collateral, Mimeo quotes, or adding and retiring content.
---
# Content hub: find and process content

Owner: Nicholas Olsen (marketing operations).
Status: draft procedure; one-pass cataloging revision requested by the subject owner 2026-11-04.

The **Vision Content Repository Hub** catalogs Lumenis content for Eye Care and Aesthetics and records its copies in OneDrive (SharePoint), Mimeo, PartnerZone and Modus. Use this single entry point to find content or process a new piece from intake through verified library updates. OneDrive and the final Content Library Catalog are required; other platforms depend on the requested distribution. The same agent that accepts new content writes the final searchable catalog entry in that run. Intake is an audit/work record, not a separate handoff queue.

Read [how the hub is organised](references/hub-structure.md) before the first search in a session. For adding content, read [adding and retiring content](references/adding-content.md).

## Prerequisites

- Smartsheet access to the **Vision Content Repository Hub** workspace (ask Nicholas). With an AI client, the Smartsheet connector signed in as yourself.
- To open files: access to the Lumenis Vision US MKT SharePoint site (the **Sales & Success Assets** library), and a Mimeo login for print items.
- Never request, store or type passwords. If a system asks you to sign in, the person signs in.

## Find an asset

1. **Start with the Content Library Catalog sheet.** One canonical row per asset, market/language and revision; digital/print formats and platform copies belong to that row. Search by product plus a few words of the title, or by control ID (for example `PB-00032060`). With the connector, use `get_sheet_summary` filtered on `Product` and a `CONTAINS`-style match on `Asset Name`, or `search` for the words; call `get_columns` first for exact column names.
2. **Check it is current** before you share it, by `Lifecycle`:

   | Lifecycle | What to do |
   |---|---|
   | `Current` | Use it. |
   | `Current - placement to check` | The file is current but its product or folder was assigned with low confidence. Open the file and confirm it is the piece asked for (product, audience, language, market). Share it if it matches, and say "filing not yet confirmed"; if it does not match, say so and keep searching. |
   | `Superseded (...)` | A newer revision exists. Find and use the row named in `Newest Revision On File`. |
   | `Archive` | Old brand or legacy material. Do not share it as current; say it is archived. |
   | `Not content` | An internal or working file (quote, inventory, template). Not for customers. |

   Read `Status`, `Needs Review` and `Notes` as well: `Current` identifies the revision held, not approval or completed link verification. Never present a supplied-but-unverified link as checked. Never send a superseded or archived piece without saying so.
3. **Open it.** `Digital PDF` and `Print-ready PDF` open the respective files; `OneDrive Folder` opens their shared folder. `File Name` and Placements preserve the original filenames. For print items, the `Mimeo` column holds the Mimeo link. `PartnerZone` and `Modus` hold links on those portals.
4. **If the catalog has no match**, search the `Content Library Placements` sheet (one row per copy on each platform, with a direct link per file) and the `Mimeo Library` sheet (everything in Mimeo, refreshed 2026-10-09), then ask Nicholas. Do not guess a file from a similar title.
5. **Report** the asset name, product, revision, lifecycle, and the link. If several versions or languages exist, list them and say which is current.

| Question | Where to look |
|---|---|
| "Do we have X for product Y?" | Content Library Catalog, filter Product, search Asset Name |
| "What can I give a customer after the sale?" | Post-Sale Hub Dashboard, then the product hub report |
| "Is this the latest version?" | Catalog: Control ID, Revision, Lifecycle, Newest Revision On File |
| "What are the latest OptiLIFT sales quotes in Mimeo?" | Mimeo Library: Kind = Equipment sales quote, Product, sort by Quote Date |
| "Where are all the copies of this file?" | Content Library Placements, filter Catalog Asset |
| "What can we claim, and what must the copy say?" | Not the hub: [claims](../../../assets/claims-reference/index.md) and [regulatory](../../../assets/regulatory/README.md) |

## Process new content or an intake row

Short version (full rules in [adding and retiring content](references/adding-content.md)):

1. Read the supplied file or existing intake row and search the catalog for its control ID and title. Confirm revision, language, market, audience and replacement relationship.
2. Reuse platform choices already supplied. Ask once for unresolved destinations: Modus, PartnerZone and/or Mimeo. Always include OneDrive and the content library. Distinguish checking an existing platform copy from publishing a new one.
3. Verify the file in its correct OneDrive folder, uploading only if needed and authorized. Do not duplicate a correctly filed copy.
4. Check each selected platform for the exact asset and revision. Inspect the actual file, not only the listing title. Record verified links; keep older revisions separate. Complete authorized uploads where supported, or record the specific remaining platform action.
5. Create or update the final Content Library Catalog row and associated Placements now, with one name and separate format/platform links; read them back. Record any unfinished platform check visibly on the final row. Update existing Intake records to `Catalogued` once the catalog and placements are saved, without implying that every platform check is complete. Synchronize maintained inventory copies in the same run where accessible; never defer final cataloging solely to a later inventory refresh.

Example request: “Process this new content using the content-hub procedure. It is already in OneDrive; check PartnerZone and update the library.” Continue through the authorized steps without repeated approval questions. Ask only for missing choices, unresolved identity/approval, or access that blocks the affected step. An intake row is an optional audit/work record, not the finished result or a required second user request. A missing platform login does not prevent cataloging a known asset with explicit verification caveats. Invoking this skill does not schedule an unattended background job.

## Send out a new campaign asset

When a finished campaign asset is approved (for example a webinar flyer at T-30, or webinar clips after the show), it goes to the hub and to everyone who passes it on, in one pass. Drafts only; the asset's owner sends.

1. **Process it into the hub** with [Process new content](#process-new-content-or-an-intake-row), including the Content Intake record.
2. **One email to the partner channels:** the Modus owner (so reps find it in Modus) and the social team. Give the social team the **clean** link with no UTMs and ask them to add their own, so they can measure their channels ([lumenis-utm-links](../lumenis-utm-links/SKILL.md) explains why).
3. **Sales email:** to the RSMs through the usual sales channel, with the sales tracking link and one line on who the asset is for.
4. **Website:** for events, a request to add it to the Lumenis upcoming events page, with the date, title and registration link.
5. **Accelerate flyers and agendas:** also add them to the Vision Sales Hub page for that show, with the hotel booking link, so reps have everything in one place. Release to sales only when the sales VPs say (usually six to eight weeks out).
6. **Tradeshow flyer, landing page and email:** send each to the BU and the Modus owner as soon as it's ready, and post the flyer to the Sales & Marketing Hub on SharePoint. Release to sales five weeks out (T-35).
7. **Update the campaign's Smartsheet rows** with the hub row and where each draft is.

Check before sending: the asset passed its check (for a webinar flyer, [lumenis-webinar-asset-check](../lumenis-webinar-asset-check/SKILL.md); for an Accelerate flyer, [lumenis-accelerate-asset-check](../lumenis-accelerate-asset-check/SKILL.md)), and each link is the right one for its channel.

## Do not

- Replace live catalog data with a historical export or defer a known asset solely because an offline inventory is unavailable. Apply targeted catalog/placement updates and preserve them in future refreshes as described in [adding content](references/adding-content.md#update-the-library-and-close-intake).
- Delete, move or rename files in OneDrive or Mimeo that other people use. Ask Nicholas.
- Put files, file links, sheet links or sheet IDs in this repository. This repository is public; the hub and the files stay in Smartsheet, SharePoint and Mimeo.
- Treat a file's presence in the hub as approval to use it. Check the claims and regulatory references, brand review and the piece's own revision.

For a proposed Vision Mimeo reorganization, use [library and portal cleanup](../../../guides/mimeo-library-and-portal-cleanup.md). Historical folder examples here are lookup hints; inspect current approved structure rather than recreating an old layout.

For Vision Mimeo print-order staging, use [print-order staging](../../../guides/mimeo-print-ordering.md); inspect current approved items and stop at the documented order handoff.

For Vision Mimeo Tradeshow in a Box ordering, use [Tradeshow in a Box ordering](../../../guides/mimeo-order-tsiab.md); inspect current approved items and stop at the documented order handoff.
