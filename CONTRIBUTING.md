# Contributing without a terminal

Use your own GitHub account. Open a Markdown file in GitHub, choose Edit, and propose your changes on a new branch with a pull request. If you do not have write access, GitHub can propose the change through a fork. An AI can prepare the edits and submit them when asked. A public fork must never contain internal records.

Prefer plain language: when the rule applies, required inputs, the procedure, a good example, a mistake to avoid, source and proposed reviewer. Use [the contribution template](templates/guidance-contribution.md), or open a Guidance request issue. Keep source evidence with restricted access in its approved system.

| Contributor | Typical work |
|---|---|
| Content writer | Tone of voice, storytelling, webinar narrative and copy rules |
| Marketing operations | System procedures, exact reusable field mappings, validation and observed-versus-intended corrections; credentials and confidential evidence stay external |
| Event marketing | Reusable event requirements and blank documents; actual logistics stay in the operational system |
| Division owners | Vision/Aesthetics scope, business accuracy and acceptance |
| Technical maintainer | Packaging, checks, access and releases |

A subject owner reviews accuracy; a maintainer reviews structure and merges. Role assignments and review dates must be confirmed rather than invented.

Edit `.agents/skills/`, then run `node scripts/sync-skills.mjs` and `node scripts/validate.mjs`. Never edit generated `.claude/skills/` directly. Describe validation and unresolved gaps in the PR. Do not add a second editable copy of an existing procedure.
