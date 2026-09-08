# Setup

Clone this repository onto your own native filesystem and open its root in Codex or Claude Code. Each person authenticates to business systems using their own account. No credentials ship with this repository.

Codex uses the canonical `.agents/skills/` files. Claude Code uses the generated `.claude/skills/` files and CLAUDE.md. These are repository skill folders, not a claim that this repo is already a packaged plugin for every Claude or Codex interface. Verify skill discovery in the client you use.

Install Node.js 22 or newer for the helpers. From the repository root:

```sh
node scripts/validate.mjs
node scripts/name.mjs VIS "Example Webinar" "Q1 2030" US
```

Image lookup defaults to `assets/image-library/catalog.json` in this repository. To override it with another reviewed catalog:

```sh
export LUMENIS_ASSET_CATALOG="/path/to/reviewed/catalog.json"
node .agents/skills/lumenis-image-search/find-images.mjs --brand OptiLIFT --json
```

See [image-library setup and maintenance](../assets/image-library/README.md) for intake, resizing and HubSpot uploads. Missing rights metadata stays unverified. Image bytes need not be local when the catalog provides hosted URLs. Do not put personal paths or the catalog's confidential approval evidence in Git.

Supply an output folder outside the repository. A fresh-clone pilot must verify both clients, each relevant division, asset access and missing-input behavior before production use.

## Daily use and updates

The technical helper sets up each teammate's own account and verifies skill discovery in their chosen client. A first task can be a webinar outline for the writer, a form-field audit for operations, or a KBYG draft for events. State division and desired output; the assistant uses the relevant skill rather than requiring a giant pasted prompt.

Before a new task, fetch reviewed updates with `git pull --ff-only` from the repository root. If local edits or divergent history prevent it, preserve them and ask the maintainer to reconcile; do not discard contributions. Updates do not arrive automatically just because a change was merged. Record `git rev-parse --short HEAD` in the external handoff when version traceability matters. Update between tasks, not silently mid-task.

Search metadata with `node scripts/discover.mjs --query forms --limit 5`. A teammate should be able to explain what files and live systems the assistant actually accessed. See [the foundations plan](ai-foundations.md) for the small first pilot.
