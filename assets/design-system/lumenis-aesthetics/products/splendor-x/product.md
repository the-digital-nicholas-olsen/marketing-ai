# SPLENDOR X

Module for the Lumenis Aesthetics system. How products fit: [products README](../README.md). Source: *Splendor X Brand Guidelines* (page numbers below) and the Lumenis Brand Guidelines 2026, p. 43.

## Name

- Write **SPLENDOR X**, as the guide does throughout (pp. 2–16). The guide gives no trademark rule; follow the brief or legal review before adding ™ or ®.

## Colors (`data-product="splendor-x"`)

| Color | HEX | Use |
|---|---|---|
| Light skin | `#E5C9A8` | The field on SPLENDOR X pages |
| Medium skin | `#C69275` | Second color (`--product-accent`) |
| Dark skin | `#834436` | Small colored type and the closing-line arrow (`--field-ink`) |
| Vascular blue | `#3A999B` | Titles or subtitles only, to set vascular content apart from hair removal |
| Lumenis Black / White | `#000000` / `#FFFFFF` | The base system |

The skin colors serve as highlight, stroke, graphic fill and, if needed, background (p. 8).

## Logo

| Ground | File |
|---|---|
| White, light photo | `assets/SPLENDOR-X/splendor-x-color.svg` |
| Light skin field | `assets/SPLENDOR-X/splendor-x-on-light-skin.svg` (one arm of the X turns white) |
| Medium skin field | `assets/SPLENDOR-X/splendor-x-on-medium-skin.svg` |
| Dark field, dark photo | `assets/SPLENDOR-X/splendor-x-white.svg` |
| One-color print | `assets/SPLENDOR-X/splendor-x-greyscale.svg` |
| With "by Lumenis" | `assets/SPLENDOR-X/splendor-x-by-lumenis-color.svg`, `-white.svg` |

- **Clear space:** 0.5X on all sides, X being the X symbol (p. 3).
- **Minimum size:** hero-L height 12 px on screen, 0.2 cm in print; 0.1 cm for the lockup (pp. 4–5).
- **Don't** fill the symbol, stretch, alter, re-font or outline the logo, or add effects (p. 6).
- **In components:** `ProductLogo` with `product: "splendor-x"` and `variant` set to the file name after `splendor-x-` (for example `white` or `by-lumenis-color`). Without a variant it uses `color`, the file for white grounds. The files are in the asset group `SPLENDOR-X`.
- The file pairings for the skin fields come from what each file shows; the guide's figures (p. 7) name only "light skin" and "medium skin" versions.

## Motif

The X, as outlined strokes in one or both skin colors, as the symbol uses them; stroke 4–7 px on screen, 1–4 pt in print (pp. 13–15).

## Imagery

Self-confidence and freedom: clear, strong poses, mostly half to full body, direct eye contact; men and women mainly 20–35 with diverse skin tones; several models when possible; always bright on light backgrounds (p. 11). Product shots on `#F2F2F2` (p. 12).

## Caveats in the guide

- The logo files use slightly different colors from the guide (`#E9D0B7`, `#D4A187`, `#833F34`). The tokens follow the guide; the logos are unchanged.
- In the source package, three of the logo-alone "TM" files carry the wrong colorway for their names, so no TM files are included.
