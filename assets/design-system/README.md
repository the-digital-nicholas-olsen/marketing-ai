# Lumenis brand systems

Four separate brand systems live here. Each is a complete brand book on its own — rules, tokens, assets and specimen cards — for a different purpose. They are not layers: no system inherits from, overrides or corrects another, so a rule that differs between two systems is not a conflict.

| Call it | Use it for | Start with | Detail |
|---|---|---|---|
| **Lumenis Corporate** | The Lumenis company brand: corporate decks, website, events such as Accelerate by Lumenis, recruitment, social, print — anything that speaks as Lumenis | [SKILL](lumenis-corporate/SKILL.md) | [README](lumenis-corporate/README.md) |
| **Lumenis Aesthetics** | Work that speaks for the Aesthetics division as a whole: division plans and decks, owner and practice programs, cross-portfolio Aesthetics campaigns | [guidance](lumenis-aesthetics/guidance.md) | [reference](lumenis-aesthetics/reference.md) |
| **OptiLIGHT** | OptiLIGHT product marketing for eye-care professionals and patients | [guidance](optilight/guidance.md) | [reference](optilight/reference.md) |
| **OptiLIFT** | OptiLIFT product marketing for practices and patients | [guidance](optilift/guidance.md) | [reference](optilift/reference.md) |

## Choosing and using a system

1. Use the system the requester names. When none is named, infer it only when it is unambiguous — a piece about one of these products uses that product's system; a piece that speaks as Lumenis the company uses Lumenis Corporate; a piece that speaks for the Aesthetics division uses Lumenis Aesthetics. Otherwise ask. Never default to one system.
2. Use exactly one system per piece. Read its entry file, then only the references the step needs.
3. Keep the selected system whole. Take palette, type treatment, surfaces, motifs, components, tokens and logos from that folder only. Do not mix them across systems or "correct" one system with another's rule. A system's own explicit permissions still apply: OptiLIFT, for example, allows OptiLIGHT Blue at display sizes in combined OptiLIFT/OptiLIGHT material. For example, Lumenis Corporate uses square black CTAs, OptiLIGHT a blue CTA and OptiLIFT pill buttons — each is right inside its own system.
4. If a piece covers more than one product and no system is named, ask which one leads. (The Lumenis Corporate brandbook is the one that defines how several product colours sit together, for example on an exhibition stand.)
5. Other Lumenis products (triLift, Stellar M22, LegendPro and others) have no system of their own here. A division-wide Aesthetics piece may include a product page under Lumenis Aesthetics, keeping that product's colors and logo; for a piece about one of these products alone, ask for the applicable brand guidance instead of borrowing a system.

## Shared operational references

These are not brand rules. They apply whichever system is selected.

- [Image library](../image-library/README.md) for photography and hosted delivery links. Check each asset's `allowedBrands` (`Lumenis corporate`, `OptiLIGHT`, `OptiLIFT`) against the selected system.
- [KOL profiles](../kol-library/index.md) for biographies and headshot candidates, and [claims references](../claims-reference/index.md) for citations and qualifications. Neither a candidate image nor a confirmed citation establishes marketing approval, and design-source example copy is not evidence of a cleared indication or approved claim.
- [HubSpot asset index](hubspot-assets.md) for the ABC Arizona font downloads (all four systems use ABC Arizona, each in its own way) and the verified OptiLIGHT lockup. Font binaries are licensed and never committed to Git; each system's `tokens/fonts.css` looks up installed fonts.
- HubSpot delivery: [landing pages](../../.agents/skills/lumenis-hubspot-landing-page/SKILL.md), [forms](../../.agents/skills/lumenis-hubspot-form/SKILL.md) and [emails](../../.agents/skills/lumenis-hubspot-email/SKILL.md). Use one scoped Custom HTML module where that pattern applies, real hosted assets, the correct native form and approved footer/privacy controls. Email needs inline CSS and fallback fonts.

Before delivery, check the piece against the selected system only: product casing, ground colour, typography, contrast, logo fidelity, image rights, claim context and real link destinations. Inspect desktop and mobile output.

## Folder layout

Each system folder is self-contained: its own `styles.css` and `tokens/`, its own guidance and reference files, and specimen cards under `guidelines/` that load only that folder's stylesheet. Lumenis Corporate also carries logos, brand line icons, components and UI kits; Lumenis Aesthetics carries the Lumenis logos and line icons.

## Viewing specimen cards and UI kits

Open any `.html` file directly in Chrome, Edge or Safari, for example `lumenis-corporate/ui_kits/slides/index.html`. Stylesheets and scripts load by relative path; React and Babel load from unpkg and photos from HubSpot, so you need to be online. Fonts show in the fallback face unless ABC Arizona is installed locally ([download links](hubspot-assets.md)).

Some viewers block relative scripts on local files: embedded previews, including the Claude desktop app's browser pane, and some locked-down browsers. If a page loads blank, serve the folder from the repository root and open the page through it:

```bash
npx --yes http-server@14.1.1 assets/design-system -p 8642 -c-1
```

Then go to `http://localhost:8642/lumenis-corporate/ui_kits/slides/index.html` (or any other page under `assets/design-system`). For the Claude desktop app, put the same command in a local `.claude/launch.json` (`"runtimeExecutable": "npx"`, the rest as `runtimeArgs`, `"port": 8642`). That file is a personal setting and is not committed.

## Provenance

- **OptiLIFT and OptiLIGHT** were imported on September 9, 2026 from [lumenis-design-system commit c2c8024](https://github.com/laarnicayetano/lumenis-design-system/tree/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4) as product layers over a shared corporate baseline. On September 14, 2026 they were made standalone: each now has its own tokens, taken from the matching Claude Design system, and the baseline references were removed. One cross-system dependency was replaced with an in-system equivalent: OptiLIGHT coloured body text and links now use OptiLIGHT's own deep blue `#2F63D6` instead of OptiLIFT violet.
- **Lumenis Corporate** was added on September 14, 2026 as a Claude Design export of the 2026 Lumenis brandbook. It replaces the upstream corporate baseline (`shared-guidance.md`, `brand-guidelines.md`, and the top-level `tokens/` and `styles.css`), which was retired so there is one corporate brand book. The retired files remain in Git history.
- **Lumenis Aesthetics** was added on November 7, 2026 from the Aesthetics editorial design system approved for the 2027 North America Aesthetics plan. Rules, tokens and specimen cards only; brand guide PDFs, product logo files, licensed photography and research stay outside Git.
- Internal working copies with licensed fonts and full imagery are kept outside Git. No production HubSpot pages or upstream repositories were changed.
