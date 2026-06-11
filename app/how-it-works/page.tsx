/**
 * app/how-it-works/page.tsx — How It Works (/how-it-works)
 *
 * Copy source: site-copy.md, Page 2: How It Works
 * Sections: The Full Flow, What the System Leans On, Structural Limits
 */

export const metadata = {
  title: "How It Works — missions.md",
  description:
    "missions.md is a human-facing layer over primitives Hermes Kanban already ships.",
};

export default function HowItWorksPage() {
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
            how it works
          </p>
          <h1 className="page-heading">How It Works</h1>
        </header>

        {/* ── The Full Flow ──────────────────────────────── */}
        <section
          aria-labelledby="full-flow-heading"
          style={{ marginBottom: "var(--space-16)" }}
        >
          <p className="section-heading">The Full Flow</p>
          <div className="prose">
            <p>
              missions.md is a human-facing layer over primitives Hermes Kanban
              already ships. You write a one-page Flight Plan. The system
              decomposes it into cards, routes them to agents, verifies outcomes
              against your criteria, and gives you a debrief.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-muted)",
              marginBottom: "var(--space-4)",
            }}
          >
            The flow
          </p>
          <pre
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-6) var(--space-8)",
              whiteSpace: "pre",
              overflowX: "auto",
              lineHeight: 1.8,
            }}
          >
{`IDEA → define-mission → Flight Plan (one page — the only thing you write)
       |
launch-mission
├─ pre-flight Go/No-Go checks (automatic)
└─ kanban_create ×N → Hermes fleet executes
       |
debrief-mission
└─ task_runs → After-Action Review (the proof)`}
          </pre>
        </section>

        {/* ── What the System Leans On ───────────────────── */}
        <section
          aria-labelledby="leans-on-heading"
          style={{ marginBottom: "var(--space-16)" }}
        >
          <p className="section-heading">What the System Leans On</p>
          <div className="prose">
            <p>
              missions.md builds no orchestration tech. It is a pattern language
              over what already exists.
            </p>
          </div>
          <table style={{ maxWidth: "52rem" }}>
            <thead>
              <tr>
                <th>Mission need</th>
                <th>Hermes primitive</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sequencing and parallelism", "`kanban_create(parents=[...])` with dispatcher auto-promotion"],
                ["Verification against acceptance criteria", "`goal_mode=True` (judge re-checks each turn)"],
                ["Human gates", "`kanban_block()` / `/unblock`"],
                ["Budgets", "`goal_max_turns`, token/time limits"],
                ["The audit trail and AAR data", "`task_runs` in SQLite"],
                ["Recovery from stuck workers", "`reclaim` / `reassign`"],
              ].map(([need, primitive]) => (
                <tr key={need}>
                  <td>{need}</td>
                  <td>
                    <code>{primitive}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Structural Limits ──────────────────────────── */}
        <section aria-labelledby="limits-heading">
          <p className="section-heading">Structural Limits</p>
          <div className="prose">
            <p>
              The architecture makes five things structurally possible: intent-driven
              automation, persistent multi-session execution, observable agency costs,
              composability without lock-in, and human-in-the-loop governance.
            </p>
            <p>
              It also makes four things structurally impossible: opaque black boxes,
              unbounded delegation, single-tool lock-in, and fire-and-forget
              automation. You cannot launch a mission without seeing its decomposition.
              A runaway agent exhausts its budget and blocks for human review. If a
              worker tool changes, you swap the profile. The Flight Plan does not
              change.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}