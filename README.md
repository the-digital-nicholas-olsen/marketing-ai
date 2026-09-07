# Lumenis Marketing AI

Shared ways of working for **Vision and Aesthetics**, designed for Codex and Claude. Reusable methods, detailed HubSpot lessons, scoped field mappings and blank templates live here. Actual campaigns, contact records and transcripts stay in the work systems.

## Start here

Read [setup](guides/setup.md) and [contributing](CONTRIBUTING.md). AI clients follow [AGENTS.md](AGENTS.md), then load only the selected skill and relevant references.

| Task | Entry point |
|---|---|
| Build an Accelerate campaign end to end | [Accelerate skill](.agents/skills/lumenis-accelerate-campaign/SKILL.md) |
| Configure forms and correct division fields | [Form procedure](.agents/skills/lumenis-accelerate-campaign/references/forms.md) |
| Produce all four marketing email types | [Email procedure](.agents/skills/lumenis-accelerate-campaign/references/emails.md) |
| Check copy before delivery | [Ted's copy clarity gate](.agents/skills/copy-clarity-gate/SKILL.md) |
| Prepare a page brief | [Page draft](.agents/skills/lumenis-hubspot-page-draft/SKILL.md) |
| Plan webinar content | [Webinar skill](.agents/skills/lumenis-webinar-production/SKILL.md) |
| Find hosted image candidates | [Image search](.agents/skills/lumenis-image-search/SKILL.md) |
| Use HubSpot and verify saves | [Access and verification](integrations/hubspot/access-and-verification.md) |
| Understand the rollout and token discipline | [Six foundations](guides/ai-foundations.md) |
| Check coverage and unresolved decisions | [Coverage](guides/knowledge-coverage.md) · [Readiness](STATUS.md) |

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

Use `node scripts/discover.mjs --query emails --limit 5` to find relevant metadata without loading every document.

The detailed manual is source-derived. It does not mean the live systems have been fixed or a newcomer pilot has passed. [Known conflicts](guides/known-conflicts.md) identify decisions required for a sendable campaign. GitHub access does not grant HubSpot, Salesforce or Smartsheet access.

We incorporate reviewed dependencies from [Lumenis AI](https://github.com/laarnicayetano/lumenis-ai), the [design system](https://github.com/laarnicayetano/lumenis-design-system), and [web catalog](https://github.com/laarnicayetano/lumenis-web-catalog); see [integration](guides/upstream-integration.md).
