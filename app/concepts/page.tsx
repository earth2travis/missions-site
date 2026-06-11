/**
 * app/concepts/page.tsx — Concepts (/concepts)
 *
 * Copy source: site-copy.md, Page 5: Concepts
 * Sections: Mission Sizing, Structural Limits
 */

export const metadata = {
  title: "Concepts — missions.md",
  description:
    "Mission sizing and structural limits: what missions.md makes possible and impossible.",
};

export default function ConceptsPage() {
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
            concepts
          </p>
          <h1 className="page-heading">Mission Sizing</h1>
        </header>

        {/* ── Mission Sizing ──────────────────────────────── */}
        <section
          aria-labelledby="sizing-heading"
          style={{ marginBottom: "var(--space-16)" }}
        >
          <div className="prose">
            <p>
              A candidate must satisfy at least 3 of 5 criteria to qualify as a
              Mission:
            </p>
          </div>
          <table style={{ maxWidth: "52rem", marginBottom: "var(--space-8)" }}>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>What It Means</th>
                <th>Litmus Test</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Multi-agent",
                  "Requires 2+ distinct profiles/tools",
                  "Would a single agent choke on this?",
                ],
                [
                  "Multi-session",
                  "Expected to span multiple chat sessions or Kanban lifecycles",
                  "Would it survive a human going to sleep and returning?",
                ],
                [
                  "Multi-objective",
                  "Has 2+ distinct outcomes that must be achieved",
                  'Can you describe "done" in 3+ independent statements?',
                ],
                [
                  "Coordination required",
                  "Outcomes have dependencies, sequencing, or parallel paths",
                  "Does order matter? Can some work run in parallel?",
                ],
                [
                  "Method ambiguous",
                  'The "how" is not obvious; mission command is needed',
                  "Would a competent builder need significant judgment calls?",
                ],
              ].map(([criterion, meaning, test]) => (
                <tr key={criterion}>
                  <td>{criterion}</td>
                  <td>{meaning}</td>
                  <td>
                    <em>{test}</em>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prose">
            <p style={{ fontWeight: 600, marginBottom: "var(--space-3)" }}>
              Examples of real missions
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Hardening authentication end to end, migrating frameworks, security
              audits, building a public site, implementing an observability stack.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "var(--space-3)" }}>
              Examples of tasks
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Rewriting a README, fixing an auth bug, reviewing a PR, researching best
              practices, updating dependencies.
            </p>
            <p>
              <strong>The test:</strong> If you gave this to one agent with one{" "}
              <code>/goal</code>, would they succeed? If yes, it is a task. If no,
              because they lack expertise, add a reviewer. Still a task. If no,
              because it requires coordination across systems, sessions, or tools,
              it is a Mission.
            </p>
            <p style={{ marginTop: "var(--space-6)" }}>
              Sizing is advisory, never enforced. The operator decides; the system
              informs the decision and respects it.
            </p>
          </div>
        </section>

        {/* ── Structural Limits ───────────────────────────── */}
        <section aria-labelledby="limits-heading">
          <h2
            className="page-heading"
            style={{
              fontSize: "var(--text-2xl)",
              marginBottom: "var(--space-8)",
            }}
          >
            Structural Limits
          </h2>
          <div className="prose">
            <p>
              The architecture makes five things structurally possible and four
              things structurally impossible.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "var(--space-3)" }}>
              Possible
            </p>
            <ul>
              <li>
                <strong>Intent-driven automation:</strong> human writes intent, system
                decomposes.
              </li>
              <li>
                <strong>Persistent multi-session execution:</strong> the board
                survives restarts, crashes, and session boundaries.
              </li>
              <li>
                <strong>Observable agency costs:</strong> every card generates rows
                in task_runs; the After-Action Review is a view of the database.
              </li>
              <li>
                <strong>Composability without lock-in:</strong> any tool that speaks{" "}
                <code>/goal</code> can join.
              </li>
              <li>
                <strong>Human-in-the-loop governance:</strong> the &ldquo;blocked&rdquo;
                state is residual control made operational.
              </li>
            </ul>
            <p style={{ fontWeight: 600, marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              Impossible
            </p>
            <ul>
              <li>
                <strong>Opaque black boxes:</strong> decomposition is visible before
                execution.
              </li>
              <li>
                <strong>Unbounded delegation:</strong> budgets gate every card.
              </li>
              <li>
                <strong>Single-tool lock-in:</strong> the Flight Plan compiles to
                universal primitives.
              </li>
              <li>
                <strong>Fire-and-forget automation:</strong> the system expects
                supervision, and the Flight Plan makes that expectation explicit.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}