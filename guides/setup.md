# Setup

Clone this repository onto your own native filesystem and open its root in Codex or Claude Code. Each person authenticates to business systems using their own account. No credentials ship with this repository.

Codex uses the canonical `.agents/skills/` files. Claude Code uses the generated `.claude/skills/` files and CLAUDE.md. These are repository skill folders, not a claim that this repo is already a packaged plugin for every Claude or Codex interface. Verify skill discovery in the client you use.

Install Node.js 22 or newer for the helpers. From the repository root:

```sh
node scripts/validate.mjs
node scripts/name.mjs VIS "Example Webinar" "Q1 2030" US
```

For image lookup, point at a reviewed catalog on your machine:

```sh
export LUMENIS_ASSET_CATALOG="/path/to/reviewed/catalog.json"
node .agents/skills/lumenis-image-search/find-images.mjs --brand OptiLIFT --json
```

A sibling `lumenis-web-catalog/catalog.json` is the fallback location. Missing rights metadata stays unverified. Image bytes need not be local when the catalog provides hosted URLs. Do not put personal paths or the catalog's confidential approval evidence in Git.

Supply an output folder outside the repository. A fresh-clone pilot must verify both clients, each relevant division, asset access and missing-input behavior before production use.
