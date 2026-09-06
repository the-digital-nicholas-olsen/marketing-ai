# Lumenis Marketing AI

Shared ways of working for **Vision and Aesthetics**, designed for Codex and Claude. This is a public collaboration preview: reusable methods and blank templates, with no live business records or credentials.

## Start here

Read [setup](guides/setup.md) and [contributing](CONTRIBUTING.md). AI clients follow [AGENTS.md](AGENTS.md) and load only the selected skill and relevant references.

| Task | Entry point |
|---|---|
| Prepare a HubSpot page draft | [.agents/skills/lumenis-hubspot-page-draft](.agents/skills/lumenis-hubspot-page-draft/SKILL.md) |
| Plan webinar content | [.agents/skills/lumenis-webinar-production](.agents/skills/lumenis-webinar-production/SKILL.md) |
| Find hosted image candidates | [.agents/skills/lumenis-image-search](.agents/skills/lumenis-image-search/SKILL.md) |
| Contribute writing guidance | [Tone of voice](corporate/editorial/tone-of-voice.md) · [Storytelling](corporate/editorial/storytelling.md) |
| Understand system responsibilities | [Architecture](guides/architecture.md) |
| Review readiness | [STATUS.md](STATUS.md) |

## Structure

```text
.agents/skills/    Canonical skills; edit here
.claude/skills/    Generated Claude copies; do not edit
corporate/        Shared editorial standards
divisions/        Scope guidance and blank mapping template
guides/           Setup, architecture and contributor workflow
templates/        Blank documents, never completed records
scripts/          Naming, synchronization and validation helpers
```

Both divisions use the same procedures with explicit division, product, market and audience inputs. Missing mappings or approval evidence block the affected action; they never default to another division's values.

We reuse [Lumenis AI](https://github.com/laarnicayetano/lumenis-ai), the [design system](https://github.com/laarnicayetano/lumenis-design-system), and the [web catalog](https://github.com/laarnicayetano/lumenis-web-catalog). See [upstream integration](guides/upstream-integration.md) before adopting or updating them.

Actual events, KOL records, transcripts, images and completed deliverables stay in authorized work systems. Public availability does not grant regulatory approval or rights to external brand assets.
