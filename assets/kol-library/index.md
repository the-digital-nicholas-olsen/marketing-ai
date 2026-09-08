---
title: KOL biography and headshot library
summary: Initial library of Lumenis KOL biographies, sourced from public practice/institution sites, with headshot candidates pending upload to the HubSpot image library.
status: source-derived; verify each entry before external use
owner: Ted Carmichael
reviewed: 2026-09-08
---

# KOL library

Initial library of key opinion leaders (KOLs) referenced in Lumenis marketing content. Each entry below was built from public sources (practice or institution websites, professional directories) and includes a longer and shorter biography, source links with the date checked, and a candidate headshot with its source and any known reuse restrictions.

**Read before using any entry:** a publicly available biography or photo is not, by itself, permission to reuse it in Lumenis marketing materials. Every entry that will be published or sent externally should be confirmed with the KOL or their practice first — several are flagged below as needing that confirmation specifically. Headshots have not yet been uploaded to the HubSpot image library or added to `assets/image-library/catalog.json`; that step follows the `lumenis-image-library` skill's process once uploads are authorized.

## Entries

| KOL | Affiliation | Bio file | Headshot status |
|---|---|---|---|
| Amanda Amberg, OD | Hollywood Eye Institute (Hollywood/Cooper City, FL) | [amanda-amberg.md](./amanda-amberg.md) | Found, but filename suggests possible mislabeling — verify visually |
| Celesta Ferreira, OD | Cypress Optique (Cypress, TX) | [celesta-ferreira.md](./celesta-ferreira.md) | Found, filename generic ("Staff") — verify it's her |
| Chandler R. Mann II, OD | Stone Oak Vision Source (San Antonio, TX) | [chandler-mann.md](./chandler-mann.md) | Not sourced automatically — needs manual save |
| James G. Chelnis, MD, FACS | Manhattan Face & Eye / Mount Sinai (New York, NY) | [chelnis.md](./chelnis.md) | Found (Mount Sinai institutional photo) |
| Jenn Chinn, OD | Dr. Chinn's Vision Care (San Diego, CA) | [jenn-chinn.md](./jenn-chinn.md) | Not sourced automatically — needs manual save |
| Cory J. Lappin, OD, MS, FAAO | The Dry Eye Center of Ohio (Cincinnati, OH) | [cory-lappin.md](./cory-lappin.md) | Found |
| Sahil A. Dosaj, OD | Miller Optometry (Yucaipa, CA) | [sahil-dosaj.md](./sahil-dosaj.md) | Found |
| Faten Edris (Edriskhalaf), OD | Blinking Owl Eye Care (Miami/Broward, FL) | [faten-edris.md](./faten-edris.md) | Found |
| Hardeep Kataria, OD, FAAO | Avant Eyes Optometry & Advanced Dry Eye Center (Porter Ranch, CA) | [hardeep-kataria.md](./hardeep-kataria.md) | Found |
| Elise Kramer, OD, FAAO, FSLS | Miami Contact Lens Institute (Miami, FL) | [elise-kramer.md](./elise-kramer.md) | Found |
| Laura M. Periman, MD | Periman Eye Institute (Seattle, WA) | [laura-periman.md](./laura-periman.md) | Found (third-party site, not her own practice) |
| Maria Sampalis, OD | Sampalis Eye Care (Cranston, RI) | [maria-sampalis.md](./maria-sampalis.md) | Found, appears to be a personal/retouched photo |
| Patricia Fulmer, OD, FAAO | Legacy Vision Center (Huntsville, AL) | [patricia-fulmer.md](./patricia-fulmer.md) | Found |
| Kiranjeet Sran, OD | Lumos Eyecare, inside Costco (Bridgewater, NJ) | [kiranjeet-sran.md](./kiranjeet-sran.md) | Found, but low-resolution thumbnail only |
| Sandra Zhang, OD | Gemini Optometry (Moreno Valley, CA) | [sandra-zhang.md](./sandra-zhang.md) | Not sourced — request directly |

## Known gaps

- **Chandler Mann and Jenn Chinn:** headshots exist on their practice sites but use image-loading patterns that automated tools couldn't resolve to a direct file URL. Needs a manual screenshot/save.
- **Kiranjeet Sran and Sandra Zhang:** formal education/credentials beyond "OD" were not published on their practice sites or in secondary sources found during this pass. Both are KOLs Ted already has a working relationship with — fastest fix is asking them directly.
- **Amanda Amberg and Celesta Ferreira:** headshot image filenames on their practice sites suggest the photos may be mislabeled or generic staff photos rather than confirmed individual headshots — verify visually before use.
- No headshot in this library has been confirmed for reuse rights. Public availability on a practice website is not reuse approval; each one needs a rights check with the KOL or practice before it goes into the shared HubSpot image library.

## Next steps

1. Confirm identity/details flagged above directly with each KOL or their practice, where noted.
2. Once a HubSpot access token is available, follow the `lumenis-image-library` skill to inspect, resize, and upload each confirmed headshot, and update `assets/image-library/catalog.json` accordingly.
3. Add headshot links back into each KOL's file once uploaded.
