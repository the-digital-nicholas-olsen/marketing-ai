# OptiLIFT and OptiLIGHT design library

Start here when designing a page, email, flyer, slide or other material for either product. Core brand instructions, CSS tokens, product logo variants and product specimen cards are stored in this repository. This is a design reference package, not a runnable copy of the upstream React/Storybook application.

## Read in order

1. Resolve product, market, audience and output format. Use official spelling: OptiLIFT and OptiLIGHT.
2. Read this page, [shared guidance](shared-guidance.md) and the selected product's [OptiLIFT guidance](optilift/guidance.md) or [OptiLIGHT guidance](optilight/guidance.md). Product overrides apply only to that product.
3. Use [full brand guidance](brand-guidelines.md), [OptiLIFT reference](optilift/reference.md) or [OptiLIGHT reference](optilight/reference.md) for detailed composition, logo, imagery and typography questions. Their descriptions and example clinical copy are design-source context, not evidence of a cleared indication or approved claim.
4. Use the local [image library](../image-library/README.md) for photography and hosted delivery links; [KOL profiles](../kol-library/index.md) for biographies/headshot candidates; and [claims references](../claims-reference/index.md) for citations and qualifications. Neither a candidate image nor a confirmed citation establishes marketing approval.

## Current local direction and source caveats

The local product skills record September 2026 leadership direction: use white/off-white backgrounds for both products, including heroes, slides and product imagery. Choose light assets when available. A near-black inverse section is an exception, at most once per piece, never the default hero. This local direction takes precedence over dark starter examples in the upstream snapshot. It is source-recorded guidance, not a new independent approval obtained during this integration.

H1/page heroes and slide titles are uppercase. H2/H3, body and buttons are sentence case; small eyebrows may be uppercase. Arizona has no bold weight: emphasize a few words with the product accent instead of synthetic bold. Corporate rules limit Arizona Mix to short emphasis; the OptiLIFT product rule explicitly uses it for headlines/pull-quotes. Apply that exception only to OptiLIFT. Do not mix casing within a headline.

OptiLIFT uses violet #6F20D2, near-black #161413, white and warm neutrals; sunburst details and clean warm portraits/product photography. Violet was sampled from artwork in the upstream source, and its print swatches still need confirmation. OptiLIGHT uses blue #578FFF with black/white and light photography backgrounds; its rays and prism treatment are described in the product guide. Blue is unsuitable for small text on white. The upstream OptiLIGHT guide allows violet body links despite its blue-only palette wording; use black body text and an underline for an unambiguous default, or obtain the applicable brand decision before introducing the violet exception.

The source describes OptiLIFT in facial-contouring language; do not infer indication, business-unit routing or claims from it. Use the actual market/product brief and the claims library, where “confirmed” means evidence checked, not regulatory clearance. Unresolved entries remain unresolved after merging.

## Assets and implementation

CSS tokens are in `tokens/`. Inspect colors, typography, spacing, surfaces and subbrands, then copy only the scoped rules needed into the output. Full component code and runnable UI kits remain in the attributed upstream repository; the linked product source references identify them. They are optional starting points, not required for using these instructions or writing scoped HTML/CSS.

OptiLIFT SVG logos are under `optilift/assets/logo/`; the upstream snapshot does not supply a standalone OptiLIGHT wordmark. Obtain the approved OptiLIGHT artwork from the brand owner or an authorized hosted source before final production; do not reconstruct it. For supplied logos, preserve the artwork, proportions, clear space and by-Lumenis endorsement. Product specimen cards are under `guidelines/`. Some source references use older `brand-optilift-...` names; the local files use `brand-...`. Inspect the actual filenames. Do not substitute a drawn wordmark for a supplied logo.

Arizona font binaries are licensed and are not included. Use authorized hosted fonts for the destination, or an explicitly accepted fallback; never redistribute the binaries in Git. Upload only authorized asset derivatives to HubSpot using the image-library CLI instructions and record real returned URLs. A local SVG path cannot be pasted as a public page URL.

For HubSpot pages, read [page implementation](../../.agents/skills/lumenis-accelerate-campaign/references/pages.md) and [forms](../../.agents/skills/lumenis-accelerate-campaign/references/forms.md). Use one scoped Custom HTML module where that pattern applies, actual hosted assets, the correct native form, and approved footer/privacy controls. Website mockup forms are not real registrations. Keep form headings with a one-column form, visible select carets and brand-appropriate buttons. Avoid internal sales/workbook language in customer-facing copy.

For email, follow [email implementation](../../.agents/skills/lumenis-accelerate-campaign/references/emails.md): inline CSS and compatible assets; do not transplant page scripts or rely on web fonts loading in inboxes. For slides/print, follow the product hierarchy and destination dimensions, with approved print-resolution sources.

Before delivery check product casing, light-background direction, typography, contrast, logo fidelity, image rights/identity, claim context and real link destinations. Inspect desktop/mobile output and the form; email also needs inbox checks. Publishing follows the existing task authorization.

## Provenance

Imported September 9, 2026 from [lumenis-design-system commit c2c8024](https://github.com/laarnicayetano/lumenis-design-system/tree/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4). Font CSS retains local family lookup but removes nonexistent font-file URLs. Specimen stylesheet paths are adjusted for this folder. Local copies retain the shared/product source text; Markdown links are adjusted to local copies or pinned upstream references. Local OptiLIFT and OptiLIGHT skills supplied the light-background and page-heading refinements above. Existing source caveats remain visible. No licensed fonts, deployment pipelines or unrelated product libraries were imported. No upstream files or production HubSpot pages were changed.
