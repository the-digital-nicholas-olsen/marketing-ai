# triLift 2.0

Module for the Lumenis Aesthetics system. How products fit: [products README](../README.md). Source: *triLift 2.0 Brand Guidelines* (page numbers below) and the Lumenis Brand Guidelines 2026, p. 43.

## Name

- The logo reads **triLIFT 2.0** (lowercase "tri", "LIFT" with the italic hero L, then "2.0" and an inverted triangle) (p. 4).
- In running text, write **TriLIFT 2.0** as the guide does (p. 10). Add **™** in superscript on first use: TriLIFT 2.0™. It is ™, not ®: the mark is not yet registered (p. 10).
- This module covers triLift 2.0 only. The guide never mentions the original triLift, so its files aren't included.

## Colors (`data-product="trilift"`)

| Color | HEX | Use |
|---|---|---|
| Rose Gold | `#FABCAD` | Highlight color; the field on triLift pages |
| Rose Gold Light | `#FFD1CA` | Gradient partner only (`--product-accent`) |
| Shine Grey | `#404040` | Gradient partner to black only |
| Lumenis Black / White | `#000000` / `#FFFFFF` | The base system |

The primary system is black and white, with Rose Gold alongside (p. 19). The guide's shine gradients (Rose Gold → Rose Gold Light, Shine Grey → Black, 90°) are an accent, never a background fill (pp. 20, 36). Small colored type takes ink, since Rose Gold is too light for text on white.

## Logo

| Ground | File |
|---|---|
| White, light grey, light photo | `assets/triLift-2.0/trilift-2.0-color.svg` (black wordmark, rose gold triangle) (p. 5) |
| Rose Gold field, warm mid-tone photo | `assets/triLift-2.0/trilift-2.0-on-rose-gold.svg` (black wordmark, white triangle) (p. 5) |
| Black, dark field, dark photo | `assets/triLift-2.0/trilift-2.0-white.svg` (p. 6) |
| One-color print | `assets/triLift-2.0/trilift-2.0-black.svg` (p. 6) |
| With "by Lumenis" | `assets/triLift-2.0/trilift-2.0-by-lumenis-color.svg`, `-on-rose-gold.svg`, `-white.svg` (p. 4); not at the smallest sizes (p. 8) |

- **Clear space:** 0.5X on all sides, X being the wordmark's cap height (p. 7).
- **Minimum size:** 100 px wide on screen, 1.6 cm in print (p. 8). The page's diagram gives a 12 px hero-L height instead; use the larger of the two.
- **Don't** alter or flip the triangle, fill it, outline the wordmark, stretch it, add effects or change the font (p. 11).
- **In components:** `ProductLogo` with `product: "trilift"` and `variant` set to the file name after `trilift-2.0-` (for example `white` or `by-lumenis-color`). Without a variant it uses `color`, the file for white grounds. The files are in the asset group `triLift-2.0`.

## Motif

The triangle (80° apex, 50° base angles), as an outline or fill in white, Rose Gold or black; line weight 1–2 pt (pp. 29–30). Don't connect, nest, stack, pattern or overlap triangles, mix stroke sizes or change their direction (p. 31). Festive black layouts are for awards, major announcements and launches only (p. 35).

## Imagery

Bright, warm and optimistic; people mainly 30 and over with diverse skin tones; minimal, neutral clothing; clean backgrounds (pp. 24–25). Product shots on `#F2F2F2` (p. 26). The guide's sample photos were not licensed; don't reuse them.

## Caveats in the guide

- Lumenis Black is CMYK 0/0/0/100 on p. 19 and 50/50/50/100 on p. 20.
- The clear-space text describes "the triangle at the top of the i", which doesn't match the diagram.
- No rule covers the white-wordmark, rose-triangle file; it appears only in festive examples and isn't included here.
