# Reuse existing Lumenis projects

| Project | Reuse |
|---|---|
| [lumenis-ai](https://github.com/laarnicayetano/lumenis-ai) | Product/audience context, KBYG, correspondence editing, social packets and slide outlines |
| [lumenis-design-system](https://github.com/laarnicayetano/lumenis-design-system) | Corporate and product design references and tooling |
| [lumenis-web-catalog](https://github.com/laarnicayetano/lumenis-web-catalog) | Source of the adopted [in-repository image library](../assets/image-library/README.md) |

Use reviewed revisions; do not automatically fetch and execute latest instructions at task startup. Adopt only the selected references, keeping their dependencies intact. Public product context is not regulatory approval, and a catalog URL does not establish image rights.

The upstream design system and lumenis-ai remain separately maintained. This repository now includes scoped OptiLIFT/OptiLIGHT design instructions, tokens and available logo/specimen assets in assets/design-system; optional runnable UI kits remain upstream. The image library has been adopted into assets/image-library; its provenance records the source revision and local adjustments. Do not copy their entire libraries here or silently replace local approved rules. Compare scope, provenance, licensing and dependencies, then test both clients and the affected divisions. Submit focused public-safe upstream improvements through PRs. The image-library adoption is the scoped exception; no upstream repository was modified.

For assets, designate one catalog writer before cutover. Preserve allowed brands, usage restrictions and rights evidence when reconciling catalogs. Keep confidential evidence in the private document system. The search helper reads the in-repository catalog by default. The image-library skill supplies intake, resizing, authorized upload and sync instructions. No automatic upstream merge or asset approval occurs.

The existing Claude plugin distribution is useful, but it is not proof of Codex compatibility. Keep canonical repository skills and generated Claude files until a shared release mechanism is tested in both clients.
