# Lumenis Marketing AI

Shared ways of working for **Vision and Aesthetics**, designed for Codex and Claude. Reusable methods, detailed HubSpot lessons, scoped field mappings and blank templates live here. Campaign records stay in work systems.

## Start here

Read [setup](guides/setup.md) and [contributing](CONTRIBUTING.md). AI clients follow [AGENTS.md](AGENTS.md), then load only the selected skill and relevant references.

| Task | Entry point |
|---|---|
| Build an Accelerate campaign end to end | [Accelerate skill](.agents/skills/lumenis-accelerate-campaign/SKILL.md) |
| Configure forms and correct division fields | [Form procedure](.agents/skills/lumenis-accelerate-campaign/references/forms.md) |
| Produce all four marketing email types | [Email procedure](.agents/skills/lumenis-accelerate-campaign/references/emails.md) |
| Prepare sales emails and rep invitation Word files | [Seven communication examples](templates/accelerate-internal-comms/README.md) |
| Check copy before delivery | [Ted's copy clarity gate](.agents/skills/copy-clarity-gate/SKILL.md) |
| Prepare a page brief | [Page draft](.agents/skills/lumenis-hubspot-page-draft/SKILL.md) |
| Plan webinar content | [Webinar skill](.agents/skills/lumenis-webinar-production/SKILL.md) |
| Add, resize and upload library images | [Image library](assets/image-library/README.md) |
| Find hosted image candidates | [Image search](.agents/skills/lumenis-image-search/SKILL.md) |
| Use HubSpot and verify saves | [Access and verification](integrations/hubspot/access-and-verification.md) |
| Understand the rollout and token discipline | [Six foundations](guides/ai-foundations.md) |
| Check coverage and unresolved decisions | [Coverage](guides/knowledge-coverage.md) · [Readiness](STATUS.md) |

Design: [OptiLIFT and OptiLIGHT](assets/design-system/README.md). Reference libraries: [KOLs](assets/kol-library/index.md) and [claims](assets/claims-reference/index.md).

## Naming and placement

- Use descriptive lowercase, hyphen-separated names for new files/folders: `topic-name.md`. Keep standard filenames such as `README.md`, `AGENTS.md` and `SKILL.md`.
- Keep official product spelling in content. Use `YYYY-MM-DD` only when a date identifies the document; avoid `final-v2` names.
- Reuse the closest existing folder; add a focused subfolder when needed. Its README may specialize these rules and link its contents. Do not rename established paths without updating callers.
- Follow [contribution and review rules](CONTRIBUTING.md). AI should read root instructions and the destination folder's guidance before placing files.

## Structure

```text
.agents/skills/    Canonical skills and step-specific references
.claude/skills/    Generated Claude distribution
corporate/        Shared editorial guidance
divisions/       Scoped system mappings (dated observations and targets)
integrations/     Shared platform access and verification
guides/           Setup, architecture, coverage and review
templates/        Blank briefs and process blueprints
scripts/          Discovery, naming, synchronization and validation
```

Use `node scripts/discover.mjs --query emails --limit 5` for discovery.

The manual is source-derived, not proof of live-system readiness. [Known conflicts](guides/known-conflicts.md) identify decisions required for a sendable campaign. GitHub access does not grant HubSpot, Salesforce or Smartsheet access.
