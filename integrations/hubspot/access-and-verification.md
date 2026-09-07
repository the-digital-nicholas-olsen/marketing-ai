---
title: HubSpot access, navigation and verification
summary: Per-user setup, dated UI lessons and precise read-back checks.
status: source-derived; live account capabilities must be checked
owner: marketing operations
reviewed: 2026-09-07
---
# Access and verification

Lumenis production portal: **278427**; region **na1**; marketing host **information.lumenis.com**. These are identifiers, not credentials. GitHub access does not authenticate someone to HubSpot or Salesforce.

## Per-user setup

Check `hs --version`, `hs account list`, `hs account info` and `hs doctor` before installing or changing configuration. If absent, install the official @hubspot/cli for the user's environment and supported Node version. Authenticate your own account with `hs account auth`; inspect `--help` for the installed version. Do not copy another user's config or run `hs init` over an established setup. A project-local config previously shadowed the working global ~/.hscli/config.yml.

If a command works only in one folder, inspect account source and local overrides without printing credentials. A migration/config command can alter .gitignore; verify ignore rules afterward. If installation succeeds but hs is not found, check `npm prefix -g` and the actual executable path rather than reinstall repeatedly with a different runtime. Protect credential-file permissions. Never dump config, tokens, full HTTP auth logs or debug network headers into Git/chat.

Check command-specific help before adding --json; it was not supported on every list/info command. Quote endpoints containing ? or & in a shell. Avoid interactive prompts in automation by supplying supported options; do not use force flags to bypass missing authorization.

Official references checked during consolidation: [CLI reference](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference), [account commands](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/commands/account-commands), [personal access keys](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/personal-access-key).

## Capabilities are per account and version

The September 6 source workstation reported working Files/CRM/HubDB/Design Manager access and missing forms, content, marketing campaign/email and automation scopes. That snapshot does not establish today's key permissions or anyone else's. A 403 can involve scope, account permission or endpoint/auth compatibility; inspect the error and current documentation. Use an authorized browser fallback if supported. Do not guess state or scrape/generate credentials.

Browser cloning preserved page/email templates; native supported APIs can be used where appropriate. Historical statements that all page/form creation is impossible, uploads are impossible, or workflow APIs never exist are not universal platform facts. Select the actually available interface and document the result. This release does not implement an unattended production API writer.

## Read-back checklist

Read the target by ID when known; paginate lists when discovering objects. Capture evidence in the external campaign handoff, not this public repo.

| Object | What to verify |
|---|---|
| Page | internal name/title, slug, draft/published state, exact module content, campaign association; render public URL separately |
| Form | exact property names/types/options, required/hidden settings, selected values, target UTM fields, contact behavior, consent/subscription handling; distinguish draft/published API view |
| Email | subject, preview text, fromName, actual from address, reply-to, subscription, audience/exclusions, schedule and campaign associations; all separately |
| Campaign | each expected asset category, not just FORM assets |
| Segment | contact object, Active processing, form GUID, membership rule and unique eligible contacts |
| Workflow | triggers, branches, chosen email, Salesforce campaign/status, re-enrollment/existing matches, actual OFF/ON state |
| File | actual returned URL/path/visibility and rendered content; uploads may suffix duplicate names |

Source recipes used `hs api` reads such as `/cms/v3/pages/landing-pages/<id>`, `/marketing/v3/forms/<guid>` and `/marketing/v3/emails/<id>`. Confirm endpoint version/schema and authentication compatibility using official docs or command help before executing; don't substitute an internal session API. The current [Campaigns API guide](https://developers.hubspot.com/docs/api-reference/latest/marketing/campaigns/guide) documents a date-versioned route, so old /marketing/v3/campaigns examples must not be treated as a universal current route.

A short snippet printing subject/fromName/replyTo does not verify preview or sender address. A list search limited to five recent files does not prove an upload is missing. A FORM-assets result cannot verify contact segments. A POST search can be read-only in effect; classify the endpoint's effect, not only the HTTP verb.

For writes, confirm target account and follow existing task authorization. File upload, form test, publication, workflow activation and message sending have real effects. Test-account availability/feature parity needs checking; do not promise every production workflow works in a free test account.

## Browser recovery

Use fresh accessible state before action. Menus can lag; values and screen coordinates shift after validation. Use exact search then inspect IDs; a fuzzy city match may select another year. Supported real dropdown interaction may be needed where synthetic events fail. Avoid concurrent stale editors, confirm persisted state after reload, and search before repeating a clone/create. If a session expires, preserve the handoff and have the user sign in normally.
