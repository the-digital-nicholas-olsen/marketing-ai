# How the content hub is organised

Applies to the **Vision Content Repository Hub** Smartsheet workspace and the **Sales & Success Assets** library on the Lumenis Vision US MKT SharePoint site. State as of 2026-10-19.

## Where the files are

| Place | What it holds | Who uses it |
|---|---|---|
| OneDrive / SharePoint, Sales & Success Assets library | Every finished file and its source files, organised as below | Everyone with site access |
| Mimeo (print portal) | Print-ready documents, print files, warehouse stock and equipment sales quotes | Print ordering, sales quotes |
| PartnerZone | Lumenis global portal for distributors and partners | Downloading global material |
| Modus | Rep-facing app content | Sales reps |
| Vision Home SSD | Nicholas's local master copy of everything in OneDrive | Nicholas only; not part of any procedure here |

### OneDrive folder scheme

`<Division>/<Product>/<Folder>`

- **Division:** `Eye Care` or `Aesthetics`. A device sold by both divisions (triLIFT, UltraPulse and CO2, M22) has a product folder under each. A file is filed by whether its content is eye-focused or aesthetics-focused, not by the portal it came from.
- **Product (Eye Care):** OptiLIGHT, OptiLIFT, OptiPLUS, Digital Duet, triLIFT, CO2, Antares, Retina and Glaucoma Lasers, Optima IPL and M22, Shared. Combined OptiLIGHT and OptiPLUS pieces sit under OptiLIGHT.
- **Product (Aesthetics):** triLIFT, UltraPulse, AcuPulse, Stellar M22, Shared.
- **Folder:**

| Folder | Put here |
|---|---|
| `1 Patients` | Patient-facing brochures, posters, waiting-room videos, consent and education pieces |
| `2 Practice Marketing` | Material a practice uses to promote itself: social kits, ads, logos, press and web assets |
| `3 Training and Operation` | User manuals, quick reference guides, protocols, treatment logs, operator training |
| `4 Clinical Evidence` | Studies, white papers, clinical books, case studies, expert opinions |
| `5 Sales` | Lumenis-to-practice sales pieces: B2B brochures, decks, one-pagers, spec sheets, ROI tools |
| `6 Source Files` | Editable and working files: InDesign packages, PSD, AI, raw images and video |
| `7 Archive` | Superseded, old-brand or legacy material kept for reference |

Three review folders sit at the top level: `_duplicates-to-review` (identical extra copies), `_other-languages-to-review` and `_unfiled-to-review`. Do not use files from them.

Folders whose names start with `(delete)` are left over from the old layout and are empty or due for removal. Ignore them.

## The Smartsheet sheets

All in the **Vision Content Repository Hub** workspace.

| Sheet or view | One row per | Use it for |
|---|---|---|
| **Content Library Catalog** | Asset (a piece of content, all copies together) | Finding things and checking currency |
| **Content Library Placements** | Copy of an asset on one platform | Every place a file lives, with a direct file link |
| **Post-Sale Hub** | Item suitable to give a customer after a sale (sections: for your patients, to promote your practice, to run the device) | Customer success |
| **Post-Sale Hub Dashboard** | View | Opening a product's post-sale list |
| **Post-Sale Hubs by Product** (folder of reports) | Product | One report per product, grouped by section, each row with an `Open in OneDrive` link |
| **Mimeo Library** | Item in Mimeo | Print items and sales quotes, with kind, product, quote date and deal reference |
| **Content Intake** | New file someone added | Logging new content (the only sheet you edit) |
| Content Asset Catalog, Source Inventory and Reconciliation, and the "Content Hub" and "Customer Success" reports | Older views | History. Their OneDrive links were updated 2026-10-10, but use the sheets above |

### Key catalog columns

| Column | Meaning |
|---|---|
| `Asset Name` | Title of the asset |
| `Division`, `Product`, `Folder`, `Library Path` | Where it is filed |
| `Asset Type`, `Audience`, `Content Role` | What it is and who it is for |
| `Control ID`, `Revision` | Lumenis document control number (for example `PB-00032060`) and revision letter, when the file name carries them |
| `Lifecycle` | `Current`, `Current - placement to check` (current, but filing still to be confirmed), `Superseded (...)`, `Archive` or `Not content` (internal or working file) |
| `Newest Revision On File` | The latest revision held for that control ID |
| `Standard Name` | The name the file would have under the naming pattern |
| `Needs Review`, `Placement Confidence`, `Placement Reason` | Whether the filing was confirmed; low-confidence rows are still being checked |
| `File Name`, `OneDrive Folder`, `In OneDrive` | The file and a link to its OneDrive folder |
| `Platforms`, `PartnerZone`, `Modus`, `Mimeo` | Every platform that holds it, with links |
| `Mimeo Kind`, `Mimeo Quote Date`, `Mimeo Reference` | For Mimeo items: print artwork, kit, inventory item or quote |

### Mimeo Library columns

`Kind` (Print document, Print file (artwork), Warehouse inventory item, Equipment sales quote, Equipment sales quote (archived)), `Product`, `Quote Date`, `Deal Reference`, `Mimeo Folder`, `Owner` (own library or shared by a colleague), `Created`, `Modified`, `Since Last Crawl`, `In Content Catalog`, `Retirement Candidate`, `Mimeo Link`.

Product and Kind in the Mimeo Library are assigned from item names and folders by rule, so check the item before relying on them.

## Versions

A Lumenis controlled document keeps its control ID across revisions; the revision letter changes (Rev A, Rev B, Rev C). The newest revision is current; older ones are superseded. The catalog only knows a control ID when the file name carries it, so a piece without one can still have a newer version: check `Asset Name` and the modified dates.
