# Source conflicts and unresolved decisions

Consolidated 2026-09-07. Owners below are proposed accountable roles, not accepted assignments or deadlines. No live HubSpot/Smartsheet/Salesforce changes were made in this documentation release. The September 6 archive records prior AI observations; they were not independently reverified here.

| Issue | Published handling | Next confirmation |
|---|---|---|
| D25/D26: Vision vs Ophthalmic; Yes vs Sync | Use source-recorded internal values Ophthalmic and Sync, distinct from UI labels; revalidate before writes | Marketing operations, before form configuration |
| D27: Vision donor lacked five UTMs | Target requirement separated from observed donor state | Operations confirms target and implements/tests if authorized |
| D30: Aesthetic Position optional on donor, required in intended rule | Both states recorded; not mislabeled as fixed live | Aesthetics lead + operations before new form release |
| D07: consent defaulted yes; source country ignored | Never infer opt-in; prefer explicit reliable source country with documented normalization; conflict stays visible | Operations/consent owner before import or send |
| D06: import Notes/Comments rule differs | No universal import mapper released | Operations selects rule for each approved source/template |
| EM4 sender/subscription | Source email README: Lumenis/vip@lumenis.com/Aesthetics Updates; campaign playbook: Vision defaults. Both preserved, no arbitrary choice | Operations confirms shared or split sender/subscription before publishing/sending |
| D03: browser/API capabilities conflict | Runtime capability check, exact read-back; old client limits not permanent | Technical maintainer during pilot |
| D05: automatic workflow activation | Setup stays OFF; activation follows explicit task authorization and audience review | Operations before activation |
| D09/D10: editorial logic and claims scope | Ted's clarity gate is clarity only; no historic campaign copy promoted as clinical policy | Content + regulatory owners for product/market claims |
| D11/D21: catalog rights/original host | Hosted URL is not approval; query asset-specific metadata; shared originals remain outside Git | Asset owner before reuse/cutover |
| D14: Smartsheet recipients, stale city and division picklist | Preserve diagnostic lessons, inspect actual new template and notification behavior | Events + operations before backend rollout |
| Salesforce campaign type/date/budget defaults | AAO tradeshow values are source observations, not automatic Accelerate defaults; AES record type still needs a live lookup | Division/operations owner at kickoff |
| Segment count vs submission count | Compare unique eligible contacts; repeat submissions can exceed members | Operations during QA |
| Internal links counted as 12 | Corrected to six forms plus four sheets = 10 unique links; extra dashboards only if present | Event owner when collecting URLs |

Beyond Accelerate, reporting interval interpretation, import mappings, fulfillment eligibility and current approved regulatory guidance remain separate extraction/review work. Their existence in an archive is not evidence they are deployment-ready.
