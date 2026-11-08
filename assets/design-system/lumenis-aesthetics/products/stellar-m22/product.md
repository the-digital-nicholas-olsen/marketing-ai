# Stellar M22

Module for the Lumenis Aesthetics system. How products fit: [products README](../README.md). Source: *Stellar M22 Brand Guidelines* (page numbers below) and the Lumenis Brand Guidelines 2026, pp. 43 and 79–82.

## Name

- Write **STELLAR M22** in logos and headlines, **Stellar M22** in body text (pp. 4, 8, 39–40). Add **™** in superscript on first use. It is ™, not ®: the mark is not yet registered (p. 8).
- Handpieces are sub-brands with their own logos: **XPL**, **RFX** (ResurFX), **NdY** and **QSW** (pp. 53–56).
- Treatment sub-brands (SmoothGLO, PhotoFABULOUS) share the Stellar palette (pp. 57–60) but have no official logo files here yet.

## Colors (`data-product="stellar-m22"`)

| Color | HEX | Use |
|---|---|---|
| Soft Rose Beige (Rose Gold) | `#FABCAD` | Primary; the field on Stellar pages |
| Silken Rose | `#BA6D81` | Primary; small colored type and the closing-line arrow (`--field-ink`) |
| Metallic Rose | `#AF867C` | Device and handpiece branding only (p. 51) |
| Shine Grey | `#404040` | A dark neutral beside black (`stellar-shine-grey`) |
| Lumenis Black / White | `#000000` / `#FFFFFF` | The base system |

Stellar colors serve as highlight, stroke, graphic fill and background (p. 36). The guide also lists Peach Beige `#DEAA9B` and Rose Beige `#CF9684`; neither is used in Aesthetics work.

## Logo

| Ground | File |
|---|---|
| White, light field, light photo | `assets/Stellar-M22/stellar-m22-black.svg` |
| Silken Rose field, dark field, dark photo | `assets/Stellar-M22/stellar-m22-white.svg` |
| With Lumenis | `assets/Stellar-M22/stellar-m22-by-lumenis-black.svg`, `-white.svg` |
| Handpieces | `assets/Stellar-M22/xpl-`, `rfx-`, `ndy-`, `qsw-` in `black` (light grounds) and `white` (dark grounds) |

- **Clear space:** the height of the symbol on all sides (p. 5).
- **Minimum size:** hero-L height 12 px on screen, 0.2 cm in print; 0.1 cm for the Lumenis lockup (pp. 6–7).
- **Don't** alter the symbol, outline the wordmark, fill it in one color, stretch it, add effects or change the font or spacing (p. 9).
- **In components:** `ProductLogo` with `product: "stellar-m22"` and `variant` set to the file name after `stellar-m22-` (for example `white` or `by-lumenis-black`). Without a variant it uses `black`, the file for white grounds. The files are in the asset group `Stellar-M22`.
- **Handpieces:** each handpiece logo comes in `-black` (white and light grounds, including Rose Gold) and `-white` (Silken Rose and dark grounds); use them as variants such as `xpl-black` or `rfx-white`.
- On a Rose Gold field the guide shows color logo versions (p. 10), but the color files in the source package use `#D7A193`, which is not in the palette; they aren't included. Use the black logo on Rose Gold.

## Motif

A star-like X shape crossing the whole format, as an outline in one or both Stellar colors; stroke 4–7 px on screen, 1–4 pt in print (pp. 43–45). Don't fill it, hide its center, start it inside the format or change the stroke size (p. 46).

## Imagery

Confident, face-focused portraits with direct eye contact; men and women mainly 30–55 with diverse skin tones; several models preferred; always bright with light backgrounds (p. 39). Treatment shots show the correct handpiece grip; product shots on `#F2F2F2` (pp. 40–41).

Stellar M22 sales and pitch decks lean on product photography: the platform, the XPL™ handpiece and its filters, and XPL treatments in progress. Use them throughout, alongside portraits, rather than one device shot per deck.

## Caveats in the guide

- "Soft Rose Beige" names `#FABCAD` on p. 36 but `#DEAA9B` on pp. 58–60.
- The handpiece files marked "-r" suggest ® while the guide uses ™ only; the plain files are used here.
- Page 60 repeats page 59's text.
- Shine Grey's printed RGB (64/4/64) doesn't match its hex `#404040`; the hex is used.
