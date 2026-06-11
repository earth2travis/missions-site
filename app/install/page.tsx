/**
 * app/install/page.tsx — Install (/install)
 *
 * Copy source: site-copy.md, Page 3: Install
 * Sections: What You Are Installing, Steps 1-4, Report Back
 */

export const metadata = {
  title: "Install — missions.md",
  description:
    "End-to-end skill installation and fleet prep for missions.md.",
};

export default function InstallPage() {
  return (
    <article>
      <div className="container">
        <header style={{ marginBottom: "var(--space-12)", maxWidth: "52ch" }}>
          <p
            className="mono uppercase"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-muted)",
              letterSpacing: "0.1em",
              marginBottom: "var(--space-2)",
            }}
          >
            setup
          </p>
          <h1 className="page-heading">Install</h1>
        </header>

        {/* ── What You Are Installing ─────────────────────── */}
        <section
          aria-labelledby="what-installing"
          style={{ marginBottom: "var(--space-16)" }}
        >
          <div className="prose">
            <p>
              missions.md is a mission orchestration system that runs on your
              Kanban board. Three skills: <code>define-mission</code> (turns
              operator intent into a one-page Flight Plan),{" "}
              <code>launch-mission</code> (compiles a Flight Plan into Kanban
              cards with dependencies, budgets, goal_mode verification, and human
              gates), and <code>debrief-mission</code> (reads task_runs and
              generates an After-Action Review). They build on tools you already
              have and add no new runtime.
            </p>
            <p>
              Source repo:{" "}
              <a
                href="https://github.com/earth2travis/missions"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/earth2travis/missions
              </a>{" "}
              (it is a Hermes skills tap: skills live under <code>skills/</code>,
              one directory per skill).
            </p>
          </div>
        </section>

        {/* ── Step 1 ─────────────────────────────────────── */}
        <section
          aria-labelledby="step1"
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div className="step-block">
            <p className="step-title">Step 1: Check for Superseded Skills</p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              Probe: <code>ls ~/.hermes/skills/devops/</code>
            </p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              If you find any of these from earlier iterations, they are
              superseded by this package: <code>mission-contracts</code>,{" "}
              <code>plan-mission</code>, <code>validate-mission</code>, or a{" "}
              <code>define-mission</code> installed before this package. The
              boundary: <code>launch-mission</code> replaces both{" "}
              <code>plan-mission</code> and <code>validate-mission</code>{" "}
              (validation now runs automatically at launch);{" "}
              <code>mission-contracts</code> is retired entirely.
            </p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              Remove them so routing is unambiguous. Two things to know about
              removal:
            </p>
            <ul style={{ maxWidth: "52ch" }}>
              <li>
                Probe: <code>hermes skills uninstall &lt;name&gt;</code> &mdash;
                interactive terminal only. In a non-interactive terminal the
                confirm prompt cannot be answered and auto-cancels with a quiet
                &ldquo;Cancelled.&rdquo; (uninstall has no <code>--yes</code> flag,
                unlike install). Expected on success: an &ldquo;Uninstalled&rdquo;
                confirmation.
              </li>
              <li>
                If it reports &ldquo;not a hub-installed skill&rdquo;: the skill
                is local and was never Hub-tracked. Remedy: remove the directory
                directly (<code>rm -rf ~/.hermes/skills/devops/&lt;name&gt;</code>)
                and note the supersession in your report.
              </li>
            </ul>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--text-sm)",
                marginTop: "var(--space-4)",
              }}
            >
              List anything you removed in your report. Do not touch skills
              outside this list.
            </p>
          </div>
        </section>

        {/* ── Step 2 ─────────────────────────────────────── */}
        <section
          aria-labelledby="step2"
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div className="step-block">
            <p className="step-title">Step 2: Install via the Tap</p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              Use <code>--yes</code> on installs so the quarantine confirmation
              does not hang waiting for a TTY.
            </p>
            <pre style={{ maxWidth: "40ch" }}>
{`hermes skills tap add earth2travis/missions
hermes skills install earth2travis/missions/define-mission --category devops --yes
hermes skills install earth2travis/missions/launch-mission --category devops --yes
hermes skills install earth2travis/missions/debrief-mission --category devops --yes`}
            </pre>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-muted)",
                marginBottom: "var(--space-2)",
                marginTop: "var(--space-6)",
              }}
            >
              Fallback &mdash; only if the Hub cannot fetch the repo:
            </p>
            <pre style={{ maxWidth: "40ch" }}>
{`git clone https://github.com/earth2travis/missions.git /tmp/missions
mkdir -p ~/.hermes/skills/devops
cp -R /tmp/missions/skills/* ~/.hermes/skills/devops/
rm -rf /tmp/missions`}
            </pre>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--text-sm)",
                marginTop: "var(--space-4)",
                maxWidth: "52ch",
                lineHeight: 1.7,
              }}
            >
              Know what the fallback costs: a manual copy bypasses Hub metadata,
              so <code>hermes skills check</code> and <code>hermes skills update</code>{" "}
              will not track these skills. If you used the fallback, say so
              prominently in your report and recommend retrying the tap path later
              to restore update tracking.
            </p>
          </div>
        </section>

        {/* ── Mission Repo Location ──────────────────────── */}
        <section
          aria-labelledby="step2b"
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div className="step-block">
            <p className="step-title">
              Step 2b: Set the Missions Repo Location
            </p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              <code>define-mission</code> writes Flight Plans into a clone of the
              missions repo, resolved via the <code>MISSIONS_REPO</code> env var.
              Set it once so every future session resolves silently:
            </p>
            <pre style={{ maxWidth: "40ch" }}>
{`git clone https://github.com/earth2travis/missions.git ~/missions
echo "MISSIONS_REPO=$HOME/missions" >> ~/.hermes/.env`}
            </pre>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--text-sm)",
                marginTop: "var(--space-4)",
              }}
            >
              Adjust the path if the operator keeps repos elsewhere. Include the
              chosen path in your report.
            </p>
          </div>
        </section>

        {/* ── Step 3: Fleet Prep ─────────────────────────── */}
        <section
          aria-labelledby="step3"
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div className="step-block">
            <p className="step-title">Step 3: Fleet Prep</p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              <code>launch-mission</code> routes mission lanes by matching against
              the <code>description</code> in each{" "}
              <code>profile.yaml</code>. Generate them, but probe with a single
              profile first, because this is the step most sensitive to host config:
            </p>
            <p
              style={{
                marginBottom: "var(--space-3)",
                lineHeight: 1.8,
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
              }}
            >
              Probe: <code>hermes profile describe default --auto</code>
            </p>
            <ul style={{ maxWidth: "52ch" }}>
              <li>
                Expected: a 1–2 sentence description is written and echoed.
              </li>
              <li>
                If <code>AuthenticationError</code>: the describe command routes
                through Hermes&apos; auxiliary LLM client, and{" "}
                <code>auxiliary.profile_describer</code> defaults to{" "}
                <code>provider: auto</code>, which can resolve to nothing. Remedy:
                in <code>~/.hermes/config.yaml</code>, set{" "}
                <code>auxiliary.profile_describer.provider</code>,{" "}
                <code>model</code>, <code>base_url</code>, and <code>api_key</code>{" "}
                explicitly to match your main provider, then re-run the probe.
              </li>
            </ul>
            <p
              style={{
                marginBottom: "var(--space-4)",
                marginTop: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              Once the probe passes, run the full fleet:
            </p>
            <pre style={{ maxWidth: "40ch" }}>
{`hermes profile describe --all --auto`}
            </pre>
            <ul style={{ maxWidth: "52ch", marginTop: "var(--space-4)" }}>
              <li>
                If any profile returns &ldquo;LLM returned an empty
                response&rdquo;: known batch flakiness, not a config problem.
                Retry just those profiles individually (<code>
                  hermes profile describe &lt;name&gt; --auto
                </code>); they typically succeed on the second attempt.
              </li>
            </ul>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--text-sm)",
                marginTop: "var(--space-4)",
              }}
            >
              Tell the operator which descriptions were auto-generated so they can
              review and edit (they are marked <code>description_auto: true</code>).
            </p>
          </div>
        </section>

        {/* ── Step 4: Verify ─────────────────────────────── */}
        <section
          aria-labelledby="step4"
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div className="step-block">
            <p className="step-title">Step 4: Verify</p>
            <ol>
              <li>
                <code>hermes skills list</code> shows define-mission, launch-mission,
                and debrief-mission under devops &mdash; and none of the superseded
                skills from Step 1.
              </li>
              <li>
                Read the <code>version:</code> field from each installed SKILL.md
                frontmatter (<code>hermes skills list</code> does not display
                versions) and confirm <code>name:</code> matches its directory.
              </li>
              <li>
                <code>hermes profile list</code> shows the fleet; every profile has
                a description.
              </li>
              <li>
                Gateway and dispatcher:
                <ul>
                  <li>
                    Probe: <code>hermes gateway status</code> &mdash; expected:
                    running.
                  </li>
                  <li>
                    The Kanban dispatcher runs embedded in the gateway when{" "}
                    <code>kanban.dispatch_in_gateway</code> is true, which is the
                    default. Probe: <code>grep dispatch_in_gateway
                    ~/.hermes/config.yaml</code> &mdash; expected: <code>true</code>{" "}
                    or absent (absent means default true). If it is{" "}
                    <code>false</code>, cards will sit in <code>ready</code> with
                    nothing to claim them &mdash; report this; do not change config
                    or restart services without asking.
                  </li>
                  <li>
                    Optional board health check: <code>hermes kanban diagnostics</code>.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* ── Report Back ────────────────────────────────── */}
        <section aria-labelledby="report-back">
          <div className="step-block">
            <p className="step-title">Report Back</p>
            <p
              style={{
                marginBottom: "var(--space-4)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              When done, report:
            </p>
            <ul>
              <li>
                Which install path you used (tap or manual fallback &mdash; and if
                fallback, the update-tracking caveat)
              </li>
              <li>
                Superseded skills found and removed in Step 1, if any
              </li>
              <li>
                The three skills&apos; versions (from SKILL.md frontmatter)
              </li>
              <li>
                The profile roster with descriptions, noting any that needed the
                auxiliary-client remedy or individual retries
              </li>
              <li>
                Gateway status and the dispatch_in_gateway value
              </li>
              <li>
                Anything that failed and what you did about it
              </li>
            </ul>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--text-sm)",
                marginTop: "var(--space-4)",
              }}
            >
              Do not create any Kanban cards or start a mission. Installation only.
              The operator will initiate the first mission with &ldquo;define a
              mission&rdquo; when ready.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}