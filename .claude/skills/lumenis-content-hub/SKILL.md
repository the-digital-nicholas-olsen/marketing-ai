---
name: lumenis-content-hub
description: Find a Lumenis marketing asset (brochure, poster, deck, video, manual, study, print piece or sales quote) in the Vision Content Repository Hub in Smartsheet and open it in OneDrive or Mimeo, or add a new asset to OneDrive or Mimeo and log it. Use when someone asks where a piece of content is, for the latest version of a document, for everything available for a product, for post-sale collateral for a customer, for recent Mimeo quotes, or how to add or retire content.
---
# Content hub: find and add content

Owner: Nicholas Olsen (marketing operations).
Status: draft procedure, written 2026-10-19 after the library reorganisation; subject-owner review required.

The **Vision Content Repository Hub** is a Smartsheet workspace that catalogs every marketing file Lumenis Vision holds, for Eye Care and Aesthetics, and says where each one lives: OneDrive (SharePoint), Mimeo (print), PartnerZone and Modus. Use it to find a file, check that it is the newest version, and open it. Add new files through OneDrive or Mimeo and log them in the intake sheet.

Read [how the hub is organised](references/hub-structure.md) before the first search in a session. For adding content, read [adding and retiring content](references/adding-content.md).

## Prerequisites

- Smartsheet access to the **Vision Content Repository Hub** workspace (ask Nicholas). With an AI client, the Smartsheet connector signed in as yourself.
- To open files: access to the Lumenis Vision US MKT SharePoint site (the **Sales & Success Assets** library), and a Mimeo login for print items.
- Never request, store or type passwords. If a system asks you to sign in, the person signs in.

## Find an asset

1. **Start with the Content Library Catalog sheet.** One row per asset. Search by product plus a few words of the title, or by control ID (for example `PB-00032060`). With the connector, use `get_sheet_summary` filtered on `Product` and a `CONTAINS`-style match on `Asset Name`, or `search` for the words; call `get_columns` first for exact column names.
2. **Check it is current** before you share it, by `Lifecycle`:

   | Lifecycle | What to do |
   |---|---|
   | `Current` | Use it. |
   | `Current - placement to check` | The file is current but its product or folder was assigned with low confidence. Open the file and confirm it is the piece asked for (product, audience, language, market). Share it if it matches, and say "filing not yet confirmed"; if it does not match, say so and keep searching. |
   | `Superseded (...)` | A newer revision exists. Find and use the row named in `Newest Revision On File`. |
   | `Archive` | Old brand or legacy material. Do not share it as current; say it is archived. |
   | `Not content` | An internal or working file (quote, inventory, template). Not for customers. |

   Never send a superseded or archived piece without saying so.
3. **Open it.** `OneDrive Folder` opens the folder that holds the file; `File Name` is the file inside it. For print items, the `Mimeo` column holds the Mimeo link. `PartnerZone` and `Modus` hold links on those portals.
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

## Add an asset

Short version (full rules in [adding and retiring content](references/adding-content.md)):

1. Search the catalog first. A match does not always mean a new revision: the file may be the same piece in another language, market or format, or an identical copy. See [revision or variant](references/adding-content.md#revision-or-variant).
2. Name the file by the [naming pattern](references/adding-content.md#file-names).
3. Upload to the right OneDrive folder (`<Division>/<Product>/<Folder>`) or the right Mimeo folder.
4. Add a row to the **Content Intake** sheet with the link, product, folder, control ID, revision and what it replaces. Nicholas folds intake rows into the catalog.
5. If it replaces an older revision, say so in `Replaces`. Do not delete the old file; it is archived or retired in the next catalog refresh.

There is no step for the Vision Home SSD. That drive is Nicholas's local master copy and he syncs it himself.

## Send out a new campaign asset

When a finished campaign asset is approved (for example a webinar flyer at T-30, or webinar clips after the show), it goes to the hub and to everyone who passes it on, in one pass. Drafts only; the asset's owner sends.

1. **Add it to the hub** with the steps in [Add an asset](#add-an-asset) and the Content Intake sheet.
2. **One email to the partner channels:** the Modus owner (so reps find it in Modus) and the social team. Give the social team the **clean** link with no UTMs and ask them to add their own, so they can measure their channels ([lumenis-utm-links](../lumenis-utm-links/SKILL.md) explains why).
3. **Sales email:** to the RSMs through the usual sales channel, with the sales tracking link and one line on who the asset is for.
4. **Website:** for events, a request to add it to the Lumenis upcoming events page, with the date, title and registration link.
5. **Update the campaign's Smartsheet rows** with the hub row and where each draft is.

Check before sending: the asset passed its check (for a webinar flyer, [lumenis-webinar-asset-check](../lumenis-webinar-asset-check/SKILL.md)), and each link is the right one for its channel.

## Do not

- Edit the `Content Library Catalog`, `Content Library Placements`, `Post-Sale Hub` or `Mimeo Library` sheets. They are regenerated from the master inventory and manual edits are overwritten. Use the Content Intake sheet.
- Delete, move or rename files in OneDrive or Mimeo that other people use. Ask Nicholas.
- Put files, file links, sheet links or sheet IDs in this repository. This repository is public; the hub and the files stay in Smartsheet, SharePoint and Mimeo.
- Treat a file's presence in the hub as approval to use it. Check the claims and regulatory references, brand review and the piece's own revision.
