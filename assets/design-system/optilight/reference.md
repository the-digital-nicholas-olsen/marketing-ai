# OptiLIGHT — reference

**OptiLIGHT™** is an IPL (Intense Pulsed Light) device built on Lumenis' patented Optimal Pulse Technology (OPT™), positioned both as a precise medical device for eye-care professionals and as an elegant, desirable experience for patients. Brand idea: **"Establishing light as a healing energy."** Marketing lines in the source include "A bright solution for dry eyes" and "New age of dry eyes solution".

This reference belongs to the standalone OptiLIGHT brand system; the rules are in [guidance.md](guidance.md). It is one of three separate Lumenis brand systems and is used only for OptiLIGHT work. Regulatory and clinical statements in the design source are context, not approval: check the [claims library](../../claims-reference/index.md) and the brief.

## Content fundamentals

- **Voice:** warm, optimistic, quietly premium — clinical credibility with human softness, between a luxury-beauty brand and a medical device manufacturer. Words such as healing energy, relief, elevation, warmth, innovation; avoid fear-based or heavily clinical language in consumer copy.
- **Person:** speaks to the professional ("the procedure **you** want") and for the patient ("the therapy **your patients** need"). Know which audience you are writing for.
- **Casing and length:** headlines uppercase, short and stacked over 2–4 lines; body a single tight paragraph in sentence case; specs clipped.
- **Demand-generation pages:** speak to eye-care professionals, practice owners, optometrists and ophthalmologists. Never reference internal workbooks, playbooks, sales training, talk tracks or sales workflows. Frame next steps around the customer's decision ("Request pricing", "Talk with a representative"). Calculator labels show units where they affect interpretation, especially percentages.
- **No emoji.**

## In this folder

- `guidance.md` — the rules. `reference.md` — this file.
- `styles.css`, `tokens/colors_and_type.css` — the OptiLIGHT tokens (from the OptiLIGHT Claude Design system), fonts by local lookup.
- `guidelines/` — specimen cards: blue colour ramp, prism, rays. Each loads `../styles.css`.

Product renders, brand photography, the Rays component and the marketing-site UI kit live in the internal OptiLIGHT working copy, not in Git. For photography, use cleared [image-library](../../image-library/README.md) assets whose `allowedBrands` includes `OptiLIGHT`.

## Shipping to HubSpot

Use the [page implementation](../../../.agents/skills/lumenis-accelerate-campaign/references/pages.md) and [forms](../../../.agents/skills/lumenis-accelerate-campaign/references/forms.md) references and the [HubSpot asset index](../hubspot-assets.md). Native forms may need form-ready inline styling: generous white form padding, black labels, pale-blue field borders, and a submit button in the OptiLIGHT primary CTA style (blue background, white text, 6px radius, soft blue shadow) — never HubSpot orange. Before publishing, verify real hosted URLs, the selected native form, net-new-contact behaviour and the saved public result.

## Caveats

1. The 50-page OptiLIGHT brand guidelines are the primary source. They mention a companion document for some type and colour detail that was never supplied; this system does not depend on it.
2. Four ABC Arizona cuts are available: Sans Regular, Sans Light, Mix Regular and Mix Italic. Bold and Medium are not.
3. Deep Blue `#2F63D6` for body-size coloured text is an OptiLIGHT UI derivation (the token's pressed/strong step), adopted on September 14, 2026 so the system needs no colour from another brand system.
4. No pre-existing OptiLIGHT digital product or component library was available; the UI kit is an original construction sized to the brand.
