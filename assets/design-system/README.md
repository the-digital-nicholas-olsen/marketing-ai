# Lumenis brand systems

Three separate brand systems live here. Each is a complete brand book on its own — rules, tokens, assets and specimen cards — for a different purpose. They are not layers: no system inherits from, overrides or corrects another, so a rule that differs between two systems is not a conflict.

| Call it | Use it for | Start with | Detail |
|---|---|---|---|
| **Lumenis Corporate** | The Lumenis company brand: corporate decks, website, events such as Accelerate by Lumenis, recruitment, social, print — anything that speaks as Lumenis | [SKILL](lumenis-corporate/SKILL.md) | [README](lumenis-corporate/README.md) |
| **OptiLIGHT** | OptiLIGHT product marketing for eye-care professionals and patients | [guidance](optilight/guidance.md) | [reference](optilight/reference.md) |
| **OptiLIFT** | OptiLIFT product marketing for practices and patients | [guidance](optilift/guidance.md) | [reference](optilift/reference.md) |

## Choosing and using a system

1. Use the system the requester names. When none is named, infer it only when it is unambiguous — a piece about one of these products uses that product's system; a piece that speaks as Lumenis the company uses Lumenis Corporate. Otherwise ask. Never default to one system.
2. Use exactly one system per piece. Read its entry file, then only the references the step needs.
3. Keep the selected system whole. Take palette, type treatment, surfaces, motifs, components, tokens and logos from that folder only. Do not mix them across systems or "correct" one system with another's rule. For example, Lumenis Corporate uses square black CTAs, OptiLIGHT a blue CTA and OptiLIFT pill buttons — each is right inside its own system.
4. If a piece covers more than one product and no system is named, ask which one leads. (The Lumenis Corporate brandbook is the one that defines how several product colours sit together, for example on an exhibition stand.)
5. Other Lumenis products (triLift, Stellar M22, LegendPro and others) have no system here. Do not borrow one of these three for them; ask for the applicable brand guidance.

## Shared operational references

These are not brand rules. They apply whichever system is selected.

- [Image library](../image-library/README.md) for photography and hosted delivery links. Check each asset's `allowedBrands` (`Lumenis corporate`, `OptiLIGHT`, `OptiLIFT`) against the selected system.
- [KOL profiles](../kol-library/index.md) for biographies and headshot candidates, and [claims references](../claims-reference/index.md) for citations and qualifications. Neither a candidate image nor a confirmed citation establishes marketing approval, and design-source example copy is not evidence of a cleared indication or approved claim.
- [HubSpot asset index](hubspot-assets.md) for the ABC Arizona font downloads (all three systems use ABC Arizona, each in its own way) and the verified OptiLIGHT lockup. Font binaries are licensed and never committed to Git; each system's `tokens/fonts.css` looks up installed fonts.
- HubSpot delivery: [page implementation](../../.agents/skills/lumenis-accelerate-campaign/references/pages.md), [forms](../../.agents/skills/lumenis-accelerate-campaign/references/forms.md) and [email implementation](../../.agents/skills/lumenis-accelerate-campaign/references/emails.md). Use one scoped Custom HTML module where that pattern applies, real hosted assets, the correct native form and approved footer/privacy controls. Email needs inline CSS and fallback fonts.

Before delivery, check the piece against the selected system only: product casing, ground colour, typography, contrast, logo fidelity, image rights, claim context and real link destinations. Inspect desktop and mobile output.

## Folder layout

Each system folder is self-contained: its own `styles.css` and `tokens/`, its own guidance and reference files, and specimen cards under `guidelines/` that load only that folder's stylesheet. Lumenis Corporate also carries logos, brand line icons, components and UI kits.

## Provenance

- **OptiLIFT and OptiLIGHT** were imported on September 9, 2026 from [lumenis-design-system commit c2c8024](https://github.com/laarnicayetano/lumenis-design-system/tree/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4) as product layers over a shared corporate baseline. On September 14, 2026 they were made standalone: each now has its own tokens, taken from the matching Claude Design system, and the baseline references were removed. One cross-system dependency was replaced with an in-system equivalent: OptiLIGHT coloured body text and links now use OptiLIGHT's own deep blue `#2F63D6` instead of OptiLIFT violet.
- **Lumenis Corporate** was added on September 14, 2026 as a Claude Design export of the 2026 Lumenis brandbook. It replaces the upstream corporate baseline (`shared-guidance.md`, `brand-guidelines.md`, and the top-level `tokens/` and `styles.css`), which was retired so there is one corporate brand book. The retired files remain in Git history.
- Internal working copies with licensed fonts and full imagery are kept outside Git. No production HubSpot pages or upstream repositories were changed.
