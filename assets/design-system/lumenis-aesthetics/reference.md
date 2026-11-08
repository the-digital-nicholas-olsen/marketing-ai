# Lumenis Aesthetics — reference

**Lumenis Aesthetics** is the Lumenis division that sells energy-based aesthetic devices (Stellar M22, triLift, Splendor X, FoLix, UltraPulse Alpha and others) to aesthetic, dermatology and plastic-surgery practices. This system is for work that speaks for the division as a whole: plans and decks, owner and practice programs, and cross-portfolio campaigns. Events that speak as Lumenis the company, such as Accelerate by Lumenis, use Lumenis Corporate. The rules are in [guidance.md](guidance.md).

Do not infer indications, claims or routing from the design examples. Take them from the brief, the regulatory do's and don'ts and the [claims library](../../claims-reference/index.md).

## When to use which system

| Piece | System |
|---|---|
| Speaks for the Aesthetics division, or covers several Aesthetics products | **Lumenis Aesthetics** (this folder) |
| Speaks as Lumenis the company, or covers both divisions | [Lumenis Corporate](../lumenis-corporate/SKILL.md) |
| One Aesthetics product with a module in `products/` | **Lumenis Aesthetics**, with that product's module for its name, colors and logo |

## Products

Each Aesthetics product with official logo files has a module in [products/](products/README.md): name and trademark rules, colors, logo files by ground, clear space and minimum size, motif and imagery notes, all from that product's brand guide. Modules: [triLift 2.0](products/trilift-2.0/product.md), [Stellar M22](products/stellar-m22/product.md) (with the XPL, RFX, NdY and QSW handpieces), [Splendor X](products/splendor-x/product.md), [FoLix](products/folix/product.md) and [UltraPulse Alpha](products/ultrapulse-alpha/product.md). Other products have no module yet.

## Photography

The editorial look: studio beauty portraits, bare shoulders, soft light, seamless backdrops in pink, peach, beige, pale blue or light grey.

- **Hosted brand stock:** the Lumenis brand stock models on HubSpot, for example `https://information.lumenis.com/hs-fs/hubfs/Aesthetic%20-%20EMEA%20(DAM)/Marketing%20Assets/Visuals/Brand%20Visuals/Stock%20Images/Models/Lumenis_Brand%20Stock%20Photography_Models_JPEG%20(61).jpg?width=1920`. Change the number in brackets for another image and `width` for the size.
- **Licensed editorial originals** (the office-wall photos and matching studio portraits) are held by the Aesthetics marketing team, not in Git. Upload a cleared copy to HubSpot before using it on a page.
- **Image library:** check each asset's `allowedBrands` in the [image library](../../image-library/README.md) before use.

## Tokens

Link `styles.css`. It imports:

- `tokens/colors.css`: `--ink`, `--grey-text`; the five pairings (`--mint` / `--mint-ink` and so on) and the bookend (`--bookend`); `--band-1…19` and `--band` (the color band as a gradient); verdict colors. Set `data-pairing="mint|sky|lavender|rose-gold|silken-rose|bookend"` on an element to switch `--field`, `--field-ink` and `--on-field`.
- `tokens/typography.css`: the type scale at slide sizes (`--text-label` 18 to `--text-chapter` 220), the fixed-frame sizes and leading.
- `tokens/spacing.css`: Fibonacci steps (`--space-8` to `--space-144`), proximity gaps (`--gap-tight` to `--gap-section`) and the golden split (`--golden-major`, `--golden-minor`). Slide positions (canvas, column, bleed, frame) live in the slides kit.
- `tokens/base.css`: helpers `.la-label`, `.la-body`, `.la-lead`, `.la-number`, `.la-display`, `.la-hero`, `.la-chapter`, `.la-title`, `.la-tracker`, `.la-foot`, `.la-pill`, `.la-band`.
- `tokens/products.css`: each product's colors, and `data-product="trilift|stellar-m22|splendor-x|folix|ultrapulse-alpha"` to switch `--field`, `--field-ink`, `--on-field` and `--product-accent` on that product's page.
- `tokens/fonts.css`: ABC Arizona by local lookup. The font is licensed and not in Git; install it from the [HubSpot asset index](../hubspot-assets.md).

## In this folder

- `guidance.md`: the rules. `reference.md`: this file.
- `styles.css`, `tokens/`: the tokens above.
- `assets/logo/`: Lumenis wordmark and symbol (Hero L), black and white SVG.
- `assets/icons/`: the 10 approved Lumenis line icons (SVG, `currentColor` stroke).
- `products/`: one module per product (`product.md` and official SVG logos in `logo/`), and a README on how products sit in the system.
- `guidelines/`: specimen cards for color, type, components, icons and logos, photography and products. Each loads `../styles.css`.
- `ui_kits/slides/`: the 16:9 slide format: grid and fixed frame, slide type sizes, color pairings and seven slide types (opening, chapter break, content, hero number, profile, product, closing).

## Sources

Taken from the Aesthetics editorial design system approved by Aesthetics marketing in November 2026 for the 2027 North America Aesthetics plan, with the grid, type scale, proximity, footer and full-bleed photography refined while building the slides UI kit, and from the Lumenis Brand Guidelines 2026. The Lumenis logos and icons are the same files as in Lumenis Corporate, copied so this folder stands alone. The color band values come from the Accelerate color band artwork.

The product modules come from each product's brand guide (triLift 2.0, Stellar M22, Splendor X, FoLix, UltraPulse Alpha), checked against the Aesthetics secondary palette in the Lumenis Brand Guidelines 2026 (p. 43); their logos are official files from the product logo packages.

Kept outside Git: brand guide PDFs, the full product logo packages, licensed photography, the office-wall panels, templates and research reports.
