# OptiLIFT — reference

**OptiLIFT by Lumenis** is a non-invasive, in-office optical energy device for facial and neck skin tightening/contouring, sold to aesthetic and dermatology practices as a premium capital device, with matching patient-facing marketing materials. Materials always tie back to Lumenis through the "by Lumenis" endorsement lockup.

This reference belongs to the standalone OptiLIFT brand system; the rules are in [guidance.md](guidance.md). It is one of three separate Lumenis brand systems and is used only for OptiLIFT work.

The source describes OptiLIFT in facial-contouring language. Do not infer indication, market grouping (Aesthetics or Vision), CRM routing or claims from design copy — take them from the brief and the [claims library](../../claims-reference/index.md), where "confirmed" means evidence checked, not regulatory clearance.

## Content fundamentals

- **Voice:** confident, clinical-premium, reassuring. Short declarative headlines ("Restore your natural lift") with softer explanatory copy underneath.
- **Person:** second person to the patient in headlines ("your", "you"); more descriptive third person for provider and product copy ("OptiLIFT delivers…").
- **Tone:** warm but restrained. Claims are grounded ("no downtime", "visible results") rather than superlative ("miracle", "revolutionary").
- **Casing:** H1 uppercase; sentence case for body, sub-headlines and buttons ("Find a Provider" is title case only as a proper CTA/nav label); H2/H3 running subheads stay sentence case so uppercase stays a signal. Eyebrows are letter-spaced uppercase at a small size.
- **Vibe:** aspirational-clinical — closer to a dermatology practice than a consumer beauty brand.

## In this folder

- `guidance.md` — the rules. `reference.md` — this file.
- `styles.css`, `tokens/` — the OptiLIFT tokens (from the OptiLIFT Claude Design system), fonts by local lookup.
- `assets/logo/` — lockups with and without "TM" and "by Lumenis", full colour, black and white (SVG).
- `guidelines/` — specimen cards: colour ramps, logo, "by Lumenis" lockup, sunburst. Each loads `../styles.css`.

Product renders, patient photography, components and the marketing-site UI kit live in the internal OptiLIFT working copy, not in Git. For photography, use cleared [image-library](../../image-library/README.md) assets whose `allowedBrands` includes `OptiLIFT`.

## Shipping to HubSpot

Use the [page implementation](../../../.agents/skills/lumenis-accelerate-campaign/references/pages.md) and [forms](../../../.agents/skills/lumenis-accelerate-campaign/references/forms.md) references. Keep form headings with a one-column form, visible select carets and on-brand buttons, and avoid internal sales or workbook language in customer-facing copy.

## Caveats

1. The OptiLIFT colours were first sampled from a rendered logo PNG. The 2026 Lumenis brandbook records the same value for OptiLIFT Purple (`#6F20D2`, Pantone Violet C, CMYK 75 80 0 0), which supports the accent; the purple ramp and warm neutrals remain UI derivations.
2. ABC Arizona Sans is available only in Light and Regular, and Mix in Regular and Italic; no bold cut.
3. No pre-existing OptiLIFT digital product or component library was available. Components and the UI kit are original constructions sized to the brand, not recreations of a real screen.
