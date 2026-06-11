# missions.md Site Copy and Information Architecture

## Information Architecture Map

| # | Page | Path | Purpose | In Navigation |
|---|---|---|---|---|
| 1 | **Landing** | `/` | First screen comprehension + full scroll narrative | Logo/Home |
| 2 | **How It Works** | `/how-it-works` | The full pattern, architecture, and primitives table | Yes |
| 3 | **Install** | `/install` | End to end skill installation and fleet prep | Yes |
| 4 | **Flight Plans** | `/flight-plans` | The template anatomy, sections, and example | Yes |
| 5 | **Concepts** | `/concepts` | Mission sizing and structural limits | Yes |
| 6 | **Philosophy** | `/philosophy` | Lineage: mission command, contracts, principal-agent theory | Footer or secondary |

**Navigation:** Horizontal top bar, minimal. Links: How It Works, Install, Flight Plans, Concepts. Logo links to `/`. Philosophy lives in the footer or a secondary menu; it is depth for the curious, not required for understanding.

**Footer:** Links to GitHub repo, Philosophy, and a plain copyright line.

---

## Page 1: Landing (Home)

### Section 1.1 — First Screen (Hero)

**Headline:**
Write one page of intent. A fleet of agents executes it. A debrief shows you whether your intent survived.

**Subhead:**
Every time you hand work to someone, some of what you meant gets lost. As agents take on more of the execution, that loss compounds silently across every handoff. Most agent tooling optimizes for doing more. missions.md optimizes for something different: making sure what gets done is what you meant.

**Call to Action (primary):**
Read the pattern

**Call to Action (secondary):**
Install the skills

---

### Section 1.2 — The Pattern (below the fold)

**Section heading:** The Pattern

**Body:**
The idea is old. Militaries call it mission command: the commander states the intent and the constraints, and trusts the unit to choose the method. NASA runs the same pattern as Mission Control: a Flight Plan, Go/No-Go checks, telemetry, and a debrief. missions.md applies that pattern to agent fleets.

You command. The system coordinates. The agents execute.

**The two layers:**

| Layer | Owned by | What it is |
|---|---|---|
| Flight Plan | You | One page: Commander's Intent, Constraints, Success Criteria, Context |
| Hermes Kanban | The system | Cards with dependencies, budgets, verification, and human gates |

The orchestration theory lives in how the skills design the cards, not in extra artifacts you maintain.

---

### Section 1.3 — The Three Skills

**Section heading:** Three Skills

**Body:**

| Skill | What it does | You say |
|---|---|---|
| define-mission | Turns raw intent into a Flight Plan | "I want to…" |
| launch-mission | Runs pre-flight checks, then compiles the Flight Plan into Kanban cards | "Launch it" |
| debrief-mission | Reads the execution history and generates the After-Action Review | "Debrief" |

Skills live in the missions repo and install into `~/.hermes/skills/` for the Hermes agent.

---

### Section 1.4 — Your First Mission

**Section heading:** Your First Mission

**Body:**
1. Tell your Hermes agent what you want: "I want every API route to return structured error codes, because silent auth failures are security incidents waiting to happen."
2. `define-mission` drafts a Flight Plan in `missions/` and asks only what it cannot infer. You approve it.
3. Say "launch it." `launch-mission` runs the Go/No-Go checks, then creates Kanban cards assigned to your configured profiles. Dependencies gate the sequence; goal_mode judges each card against its acceptance criteria; human gates block where you said they should.
4. Watch the Hermes dashboard, or walk away. The board survives restarts.
5. Say "debrief." You get an After-Action Review: what ran, what it cost, what passed verification, and where intent drifted.

**Call to Action:**
See how to install the skills

---

### Section 1.5 — Mission or Task?

**Section heading:** Mission or Task?

**Body:**
A Mission is a bounded campaign: multiple agents, multiple sessions, real coordination, judgment calls about method. A Task is something one agent finishes in one session. If it is a task, a direct `/goal` or a single Kanban card is faster, and `define-mission` will tell you so. It will never block you. The operator decides; the system advises.

**Call to Action:**
Learn how to size work

---

### Section 1.6 — Closing

**Section heading:** No Lock-In

**Body:**
Any tool that speaks `/goal` can join a pipeline. There is no proprietary runtime to defend. The Flight Plan compiles down to primitives the ecosystem already understands.

**Call to Action (primary):**
Install the skills

**Call to Action (secondary):**
Read the deeper theory

---

## Page 2: How It Works

### Section 2.1 — The Full Flow

**Heading:** How It Works

**Body:**
missions.md is a human-facing layer over primitives Hermes Kanban already ships. You write a one-page Flight Plan. The system decomposes it into cards, routes them to agents, verifies outcomes against your criteria, and gives you a debrief.

**The flow:**

```
IDEA → define-mission → Flight Plan (one page — the only thing you write)
              |
       launch-mission
       ├─ pre-flight Go/No-Go checks (automatic)
       └─ kanban_create ×N → Hermes fleet executes
              |
       debrief-mission
       └─ task_runs → After-Action Review (the proof)
```

---

### Section 2.2 — What the System Leans On

**Heading:** What the System Leans On

**Body:**
missions.md builds no orchestration tech. It is a pattern language over what already exists.

| Mission need | Hermes primitive |
|---|---|
| Sequencing and parallelism | `kanban_create(parents=[...])` with dispatcher auto-promotion |
| Verification against acceptance criteria | `goal_mode=True` (judge re-checks each turn) |
| Human gates | `kanban_block()` / `/unblock` |
| Budgets | `goal_max_turns`, token/time limits |
| The audit trail and AAR data | `task_runs` in SQLite |
| Recovery from stuck workers | `reclaim` / `reassign` |

---

### Section 2.3 — What It Makes Possible and Impossible

**Heading:** Structural Limits

**Body:**
The architecture makes five things structurally possible: intent-driven automation, persistent multi-session execution, observable agency costs, composability without lock-in, and human-in-the-loop governance.

It also makes four things structurally impossible: opaque black boxes, unbounded delegation, single-tool lock-in, and fire-and-forget automation. You cannot launch a mission without seeing its decomposition. A runaway agent exhausts its budget and blocks for human review. If a worker tool changes, you swap the profile. The Flight Plan does not change.

---

## Page 3: Install

### Section 3.1 — What You Are Installing

**Heading:** Install

**Body:**
missions.md is a mission orchestration system that runs on your Kanban board. Three skills: `define-mission` (turns operator intent into a one-page Flight Plan), `launch-mission` (compiles a Flight Plan into Kanban cards with dependencies, budgets, goal_mode verification, and human gates), and `debrief-mission` (reads task_runs and generates an After-Action Review). They build on tools you already have and add no new runtime.

Source repo: github.com/earth2travis/missions (it is a Hermes skills tap: skills live under `skills/`, one directory per skill).

---

### Section 3.2 — Step 1: Check for Superseded Skills

**Heading:** Step 1: Check for Superseded Skills

**Body:**
Probe: `ls ~/.hermes/skills/devops/`

If you find any of these from earlier iterations, they are superseded by this package: `mission-contracts`, `plan-mission`, `validate-mission`, or a `define-mission` installed before this package. The boundary: `launch-mission` replaces both `plan-mission` and `validate-mission` (validation now runs automatically at launch); `mission-contracts` is retired entirely.

Remove them so routing is unambiguous. Two things to know about removal:

- Probe: `hermes skills uninstall <name>` — interactive terminal only. In a non-interactive terminal the confirm prompt cannot be answered and auto-cancels with a quiet "Cancelled." (uninstall has no `--yes` flag, unlike install). Expected on success: an "Uninstalled" confirmation.
- If it reports "not a hub-installed skill": the skill is local and was never Hub-tracked. Remedy: remove the directory directly (`rm -rf ~/.hermes/skills/devops/<name>`) and note the supersession in your report.

List anything you removed in your report. Do not touch skills outside this list.

---

### Section 3.3 — Step 2: Install via the Tap

**Heading:** Step 2: Install via the Tap

**Body:**
Use `--yes` on installs so the quarantine confirmation does not hang waiting for a TTY.

```bash
hermes skills tap add earth2travis/missions
hermes skills install earth2travis/missions/define-mission --category devops --yes
hermes skills install earth2travis/missions/launch-mission --category devops --yes
hermes skills install earth2travis/missions/debrief-mission --category devops --yes
```

**Fallback** — only if the Hub cannot fetch the repo (auth or rate limit):

```bash
git clone https://github.com/earth2travis/missions.git /tmp/missions
mkdir -p ~/.hermes/skills/devops
cp -R /tmp/missions/skills/* ~/.hermes/skills/devops/
rm -rf /tmp/missions
```

Know what the fallback costs: a manual copy bypasses Hub metadata, so `hermes skills check` and `hermes skills update` will not track these skills. If you used the fallback, say so prominently in your report and recommend retrying the tap path later to restore update tracking.

For later updates: `hermes skills update <skill-name>` updates one skill surgically; bare `hermes skills update` updates everything tap-installed.

---

### Section 3.4 — Step 2b: Set the Missions Repo Location

**Heading:** Step 2b: Set the Missions Repo Location

**Body:**
`define-mission` writes Flight Plans into a clone of the missions repo, resolved via the `MISSIONS_REPO` env var. Set it once so every future session resolves silently:

```bash
git clone https://github.com/earth2travis/missions.git ~/missions   # or git pull if it exists
echo "MISSIONS_REPO=$HOME/missions" >> ~/.hermes/.env               # absolute path — ~ does not expand in .env
```

Adjust the path if the operator keeps repos elsewhere. Include the chosen path in your report.

---

### Section 3.5 — Step 3: Fleet Prep (Profile Descriptions)

**Heading:** Step 3: Fleet Prep

**Body:**
`launch-mission` routes mission lanes by matching against the `description` in each profile.yaml. Generate them, but probe with a single profile first, because this is the step most sensitive to host config:

Probe: `hermes profile describe default --auto`

- Expected: a 1–2 sentence description is written and echoed.
- If `AuthenticationError`: the describe command routes through Hermes' auxiliary LLM client, and `auxiliary.profile_describer` defaults to `provider: auto`, which can resolve to nothing. Remedy: in `~/.hermes/config.yaml`, set `auxiliary.profile_describer.provider`, `model`, `base_url`, and `api_key` explicitly to match your main provider, then re-run the probe.

Once the probe passes, run the full fleet:

```bash
hermes profile describe --all --auto
```

- If any profile returns "LLM returned an empty response": known batch flakiness, not a config problem. Retry just those profiles individually (`hermes profile describe <name> --auto`); they typically succeed on the second attempt.

Tell the operator which descriptions were auto-generated so they can review and edit (they are marked `description_auto: true`).

---

### Section 3.6 — Step 4: Verify

**Heading:** Step 4: Verify

**Body:**
1. `hermes skills list` shows define-mission, launch-mission, and debrief-mission under devops — and none of the superseded skills from Step 1.
2. Read the `version:` field from each installed SKILL.md frontmatter (`hermes skills list` does not display versions) and confirm `name:` matches its directory.
3. `hermes profile list` shows the fleet; every profile has a description.
4. Gateway and dispatcher:
   - Probe: `hermes gateway status` — expected: running.
   - The Kanban dispatcher runs embedded in the gateway when `kanban.dispatch_in_gateway` is true, which is the default. Probe: `grep dispatch_in_gateway ~/.hermes/config.yaml` — expected: `true` or absent (absent means default true). If it is `false`, cards will sit in `ready` with nothing to claim them — report this; do not change config or restart services without asking.
   - Optional board health check: `hermes kanban diagnostics`.

---

### Section 3.7 — Report Back

**Heading:** Report Back

**Body:**
When done, report:

- Which install path you used (tap or manual fallback — and if fallback, the update-tracking caveat)
- Superseded skills found and removed in Step 1, if any
- The three skills' versions (from SKILL.md frontmatter)
- The profile roster with descriptions, noting any that needed the auxiliary-client remedy or individual retries
- Gateway status and the dispatch_in_gateway value
- Anything that failed and what you did about it

Do not create any Kanban cards or start a mission. Installation only. The operator will initiate the first mission with "define a mission" when ready.

---

## Page 4: Flight Plans

### Section 4.1 — The Anatomy of a Flight Plan

**Heading:** Flight Plans

**Body:**
The Flight Plan is the only artifact the operator ever writes or approves. Everything downstream — Kanban cards, dependencies, budgets, verification — is generated from this page.

**The template:**

```yaml
---
title: "Flight Plan"
status: draft # draft → ready → launched → complete
priority: normal
budget:
  tokens: 50000
  time: "30m"
---

# Flight Plan: [MISSION NAME]

## Sizing Check (Informational)
Is this a Mission or a Task?

## Commander's Intent
What must be true, and why does it matter?

## Constraints
- Budget: [tokens / time / turns]
- Pause conditions: [what stops the line]
- Human gates: [where the operator must approve]

## Success Criteria
1. [Outcome-oriented: what result proves this succeeded?]
2. [Outcome-oriented: what else must be true?]

## Context
[Any relevant links, notes, or references]
```

---

### Section 4.2 — Sections Explained

**Heading:** Sections Explained

**Body:**

**Sizing Check:** Every Flight Plan must answer why this is a Mission and not a Task. If the answer is "because it sounded important" or "it involves multiple steps," it is a task. A task with steps is still a task. A mission involves uncertainty at the method level that requires delegation of judgment, not just delegation of labor.

**Commander's Intent:** Two to four sentences. What must be true, and why it matters. No method, no step list. If you find yourself writing "first… then… finally…", you are writing tasks. Delete it and state the outcome instead.

**Constraints:** Budget (propose defaults scaled to the work), pause conditions (what stops the line), and human gates (where the operator must approve before work proceeds). When in doubt, gate it. The operator can remove gates faster than they can undo a bad merge.

**Success Criteria:** Three to six, each outcome-oriented and verifiable. A judge, a test, or a human reviewing the artifact can answer yes or no. Vague criteria here means a blind judge downstream. This is the highest-leverage section of the page.

**Context:** Links to Substrate references, operator notes, or anything the crew needs to understand the terrain.

---

## Page 5: Concepts

### Section 5.1 — Mission Sizing

**Heading:** Mission Sizing

**Body:**
A candidate must satisfy at least 3 of 5 criteria to qualify as a Mission:

| Criterion | What It Means | Litmus Test |
|---|---|---|
| Multi-agent | Requires 2+ distinct profiles/tools | Would a single agent choke on this? |
| Multi-session | Expected to span multiple chat sessions or Kanban lifecycles | Would it survive a human going to sleep and returning? |
| Multi-objective | Has 2+ distinct outcomes that must be achieved | Can you describe "done" in 3+ independent statements? |
| Coordination required | Outcomes have dependencies, sequencing, or parallel paths | Does order matter? Can some work run in parallel? |
| Method ambiguous | The "how" is not obvious; mission command is needed | Would a competent builder need significant judgment calls? |

Examples of real missions: hardening authentication end to end, migrating frameworks, security audits, building a public site, implementing an observability stack.

Examples of tasks: rewriting a README, fixing an auth bug, reviewing a PR, researching best practices, updating dependencies.

**The test:** If you gave this to one agent with one `/goal`, would they succeed? If yes, it is a task. If no, because they lack expertise, add a reviewer. Still a task. If no, because it requires coordination across systems, sessions, or tools, it is a Mission.

Sizing is advisory, never enforced. The operator decides; the system informs the decision and respects it.

---

### Section 5.2 — Structural Limits

**Heading:** Structural Limits

**Body:**
The architecture makes five things structurally possible and four things structurally impossible.

**Possible:** Intent-driven automation (human writes intent, system decomposes). Persistent multi-session execution (the board survives restarts, crashes, and session boundaries). Observable agency costs (every card generates rows in task_runs; the After-Action Review is a view of the database). Composability without lock-in (any tool that speaks `/goal` can join). Human-in-the-loop governance (the "blocked" state is residual control made operational).

**Impossible:** Opaque black boxes (decomposition is visible before execution). Unbounded delegation (budgets gate every card). Single-tool lock-in (the Flight Plan compiles to universal primitives). Fire-and-forget automation (the system expects supervision, and the Flight Plan makes that expectation explicit).

---

## Page 6: Philosophy

### Section 6.1 — Lineage

**Heading:** Philosophy

**Body:**
The design is grounded in mission command doctrine, incomplete contract theory (Grossman-Hart), and principal-agent economics (Holmstrom). Delegation always costs something. The goal is not to eliminate that cost but to make it bounded, observable, and improvable.

This is a shift from "I ask an AI to do something" to "I define a mission, and the system orchestrates execution across specialized agents, preserving my intent and giving me control."

**Further reading:** The full treatment lives in the Substrate knowledge base and in the concepts directory of the missions repo.

---

## Claim-to-Source Trace Table

| # | Claim in Site Copy | Source File | Source Lines / Section | Verified |
|---|---|---|---|---|
| 1 | "Write one page of intent. A fleet of agents executes it." | README.md | Line 3 | Yes |
| 2 | Intent loss compounds silently across every handoff | README.md | Lines 7-8 | Yes |
| 3 | Most agent tooling optimizes for doing more | README.md | Line 8 | Yes |
| 4 | Militaries call it mission command (Auftragstaktik) | README.md | Lines 9-10 | Yes |
| 5 | NASA runs the same pattern as Mission Control | README.md | Line 10 | Yes |
| 6 | Two layers: Flight Plan and Hermes Kanban | README.md | Lines 27-33 | Yes |
| 7 | define-mission turns raw intent into a Flight Plan | README.md | Lines 39, SKILL.md define-mission | Yes |
| 8 | launch-mission compiles Flight Plan into Kanban cards | README.md | Lines 40, SKILL.md launch-mission | Yes |
| 9 | debrief-mission generates the After-Action Review | README.md | Lines 41, SKILL.md debrief-mission | Yes |
| 10 | Install via `hermes skills tap add earth2travis/missions` | README.md | Lines 49-59 | Yes |
| 11 | Manual fallback via git clone and cp | README.md | Lines 63-66 | Yes |
| 12 | `hermes profile describe --all --auto` for fleet prep | README.md | Line 68 | Yes |
| 13 | Install prompt covers install, fleet prep, verification | README.md | Line 70 | Yes |
| 14 | First mission example: API route error codes | README.md | Lines 74-79 | Yes |
| 15 | Any tool that speaks `/goal` can join | README.md | Lines 93, 111 | Yes |
| 16 | Repo layout: missions/, skills/, concepts/, archive/, _packet.md | README.md | Lines 97-103 | Yes |
| 17 | Mission vs Task distinction and sizing | README.md | Lines 105-107, concepts/mission-sizing.md | Yes |
| 18 | Grounded in mission command, Grossman-Hart, Holmstrom | README.md | Lines 109-111 | Yes |
| 19 | Flight Plan template structure | _packet.md | Entire file | Yes |
| 20 | Sizing: 5 criteria, pass at least 3 | concepts/mission-sizing.md | Lines 9, 19 | Yes |
| 21 | Sizing is advisory, never enforced | concepts/mission-sizing.md | Lines 108-109 | Yes |
| 22 | Structural possible/impossible list | concepts/structural-limits.md | Entire file | Yes |
| 23 | Intent-driven automation, persistent execution, observable costs | concepts/structural-limits.md | Lines 5-13 | Yes |
| 24 | Opaque black boxes, unbounded delegation, lock-in impossible | concepts/structural-limits.md | Lines 20-33 | Yes |
| 25 | Install Step 1: check for superseded skills | docs/install-prompt.md | Lines 28-53 | Yes |
| 26 | Superseded list: mission-contracts, plan-mission, validate-mission | docs/install-prompt.md | Lines 33-34 | Yes |
| 27 | `hermes skills uninstall` is interactive only | docs/install-prompt.md | Lines 42-45 | Yes |
| 28 | Install Step 2: tap path with `--yes` | docs/install-prompt.md | Lines 54-64 | Yes |
| 29 | Fallback: manual git clone and cp | docs/install-prompt.md | Lines 66-73 | Yes |
| 30 | Fallback cost: bypasses Hub metadata | docs/install-prompt.md | Lines 75-78 | Yes |
| 31 | Step 2b: MISSIONS_REPO env var | docs/install-prompt.md | Lines 83-95 | Yes |
| 32 | Step 3: profile descriptions, probe with default first | docs/install-prompt.md | Lines 97-126 | Yes |
| 33 | AuthenticationError remedy for profile_describer | docs/install-prompt.md | Lines 106-111 | Yes |
| 34 | Empty response flakiness: retry individually | docs/install-prompt.md | Lines 119-122 | Yes |
| 35 | Step 4: verification checks (skills list, versions, profiles, gateway) | docs/install-prompt.md | Lines 128-144 | Yes |
| 36 | Gateway embedded dispatcher default true | docs/install-prompt.md | Lines 138-143 | Yes |
| 37 | Report back requirements | docs/install-prompt.md | Lines 146-160 | Yes |
| 38 | `define-mission` restates intent, applies Paragraph 2 Test | SKILL.md define-mission | Lines 28-43 | Yes |
| 39 | `define-mission` sizes silently, advises once, never blocks | SKILL.md define-mission | Lines 44-59 | Yes |
| 40 | Frontmatter budget is canonical | SKILL.md define-mission | Line 79 | Yes |
| 41 | `launch-mission` runs Go/No-Go checks, presents card graph | SKILL.md launch-mission | Lines 62-98 | Yes |
| 42 | NO-GO vs ADVISORY severity | SKILL.md launch-mission | Lines 66-83 | Yes |
| 43 | Unknown assignees silently dropped | SKILL.md launch-mission | Lines 57-60 | Yes |
| 44 | `debrief-mission` is blameless: grades system not crew | SKILL.md debrief-mission | Lines 20-23 | Yes |
| 45 | `debrief-mission` honesty rule for cost data | SKILL.md debrief-mission | Lines 68-79 | Yes |
| 46 | Status: MVP in active development | README.md | Lines 113-115 | Yes |

**Total claims traced: 46**

---

## Voice Notes for the Build Lane

1. **No dashes.** Never use em or en dashes. Use commas, colons, or periods instead.
2. **Poetic but not flowery.** Every sentence earns its place. If it can be cut without loss of meaning, cut it.
3. **NASA Mission Control told in Le Guin x Gibson:** Contemplative, anthropological depth meets high-tech, low-life precision. The tone is that of a witness. Direct, human, vivid.
4. **The README's voice is the floor, not the ceiling.** The site copy should exceed the README in precision and density, never fall below it.
5. **Active voice preferred.** "The system decomposes" not "The decomposition is performed by the system."
6. **Technical accuracy is non-negotiable.** Every command, every variable name, every tool invocation must reproduce the source exactly.
