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

A subject owner reviews accuracy where needed. Nicholas (`@the-digital-nicholas-olsen`) is the default code owner, reviews contributions and handles merging. GitHub approval is a repository review, not clinical or regulatory approval.

Edit `.agents/skills/`, then run `node scripts/sync-skills.mjs` and `node scripts/validate.mjs`. Never edit generated `.claude/skills/` directly. Describe validation and unresolved gaps in the PR. Do not add a second editable copy of an existing procedure.


## Access and submission

1. Send Nicholas your GitHub username and request contributor access before uploading. Use an individual account; GitHub access does not grant HubSpot access. A public fork is an alternative for public contributions.
2. Read the root README naming rules and the destination folder's README/AGENTS.md. Ask your AI to inspect existing folders and propose a path before editing.
3. Reuse the closest existing folder. Reusable methods stay in their current skill or guide. Public reference collections may use `references/<topic>/`; create a collection only when adding actual content. Add a short README describing scope, file naming, entry fields and links. Add a link from the parent README so people and AI can find it. Folder rules can specialize general rules; preserve existing tool-required paths.
4. Create a branch such as `add/topic-name` or `update/topic-name`. In GitHub use **Add file → Create new file / Upload files**, then propose a new branch and pull request; do not commit directly to `main`.
5. Explain the contribution, sources, intended scope, checks and unresolved items in the pull request. Request Nicholas's review and leave the merge to him. Draft pull requests become reviewable when marked ready for review.
6. Run `node scripts/validate.mjs` when local tooling is available. If it is unavailable, say so in the pull request so the maintainer can run it. Run skill synchronization only when canonical skills change.

## Public knowledge entries

Public biographies, public-use claims and study citations can be contributed. Keep public source links, product/market qualifications, date checked and verification status with each entry. Do not copy confidential source documents or internal annotations into a public branch or pull request. Public image availability is not reuse permission: retain the source and permission status, and link cleared HubSpot images rather than duplicating image files here. Never turn a source's example claim into approval evidence.

## Enforced review on main

Two GitHub rulesets protect `main`: a no-bypass rule requires a pull request and blocks force pushes and branch deletion; a review rule requires one approval including the code owner, dismisses stale approvals after new commits and requires review conversations to be resolved. `.github/CODEOWNERS` assigns Nicholas to every path, including governance files.

The repository administrator has a **pull-request-only** bypass of the review rule. This lets Nicholas merge a pull request created under his own account, since GitHub forbids self-approval. It does not permit direct pushes, force pushes or branch deletion. Teammates should receive Write access, not Admin, so this exception remains with Nicholas. For teammate contributions, Nicholas reviews and approves before merging. Automated agents must not use an administrative bypass to merge a teammate's contribution without Nicholas's explicit instruction.

Repository administrators can change repository rules; this is a technical control for ordinary contributions, not a restriction on the owner's administration rights.
