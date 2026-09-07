---
title: Crawl-first AI foundations
summary: Six selected podcast ideas translated into the marketing rollout.
status: adopted planning direction; pilot acceptance pending
owner: marketing leads and technical maintainer
reviewed: 2026-09-07
---
# Six foundations for the team

Based on the user-supplied auto-transcribed podcast “How to Build an AI-Native Company Today.” We adopt the selected ideas, not its forecasts or product-name transcriptions. The full transcript stays in the document library; it is not startup context.

| Selected idea | What we do now | Evidence that it works |
|---|---|---|
| 1. Blueprint every process (02:21–04:41) | Begin with Accelerate: goal, inputs, outputs, owners, dependencies, exceptions and acceptance. Map what matters, without forcing AI to repeat inefficient human clicks. | A teammate can explain and complete a bounded stage using the blueprint. |
| 2. Daily drivers for everyone (04:41–05:28) | Support Codex and Claude with the same reviewed knowledge. Give each role a sample task, setup helper and its own system access. | Each teammate finds a skill, names missing inputs, produces a draft and proposes one correction. |
| 3. Intelligence layer (05:28–06:17) | One entry point across connected authorities: Git methods; HubSpot/Salesforce state; Smartsheet event operations after validation; document library transcripts/media; Finance settled payments. | An answer identifies the actual source and freshness; conflicts are surfaced rather than silently blended. |
| 5. Context as code (07:07–07:53) | Version reusable rules, exact field definitions and changes. Record scope, owner, source, observation date, intended requirement and review status. | A reviewed diff explains what changed and why; old behavior can be traced. |
| 7. Distribute skills, not prompts (08:41–09:28) | One canonical skill source, generated Claude copies and a clear update routine. Prompts describe the task; skills contain repeatable methods and checks. | A clean checkout gets consistent instructions; generated copies match. |
| 12. Progressive disclosure (11:50–12:39) | Short root contract, searchable metadata, one chosen skill, then only the reference needed for the current step. Query catalogs and live records narrowly. | The same bounded task succeeds without reading unrelated division files, transcripts or whole catalogs. |

The maintained [process blueprint template](../templates/process-blueprint.md) and [Accelerate skill](../.agents/skills/lumenis-accelerate-campaign/SKILL.md) implement the first process.

## Rollout order

1. Publish the reusable Accelerate manual and clarity gate with unresolved decisions labeled.
2. Pilot a synthetic Vision brief, then an Aesthetics brief, with a nontechnical teammate in each client. Test one missing-input case. Resolve permission and editorial gaps from that evidence.
3. Establish the shared operational schema and connector access for Smartsheet. Connect the existing document/asset library before buying an extra knowledge product.
4. Expand only when a reviewed process and real owner exist: webinar work, import/reporting and fulfillment have their own readiness requirements.

Keep the other podcast proposals out of this first rollout: no swarm program, autonomous publishing, model-training project or company-wide automation rewrite is required.

## Context and token discipline

- README maximum 400 words; root AI contract maximum 500 words. These are repository policy budgets, not tokenizer guarantees.
- Skill discovery shows name, description and file size only; `node scripts/discover.mjs --query forms --limit 5` returns a bounded result set. Details are loaded on demand.
- For a form task: root contract → Accelerate SKILL.md → forms reference → selected division YAML. Skip emails, flyers, transcripts and the other division unless the task needs them.
- For final copy: load the format procedure and Ted's clarity gate at the relevant step, not at every session startup.
- Do not duplicate business rules in AGENTS.md, CLAUDE.md and every skill. Generate distributions from the canonical source. A distribution can contain all references without loading them all into model context.
- Use actual client usage when available to compare tokens/cost for an accepted task. File bytes or word counts are only rough proxies. Track completion quality, missing-input handling and rework too; do not remove essential context just to reduce a count.
- Long work hands off a short current-state note and source IDs outside Git, rather than appending the entire conversation to global instructions.

Measure a pilot baseline and a selective-loading run for the same task/client/version. Record selected files, words/bytes, actual tokens if exposed, outcome and corrections. No token savings percentage is claimed before measurement.
