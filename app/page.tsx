/**
 * app/page.tsx — Landing page (/), the first screen
 *
 * Copy source: site-copy.md, Page 1: Landing
 * Sections: Hero, The Pattern, Three Skills, Your First Mission, Mission or Task?, Closing
 */

import type { Metadata } from "vinext";

export const metadata: Metadata = {
  title: "missions.md — Intent-driven agent orchestration",
  description:
    "Write one page of intent. A fleet of agents executes it. A debrief shows you whether your intent survived.",
};

export default function HomePage() {
  return (
    <article>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="hero-section"
        aria-labelledby="hero-heading"
        style={{ paddingTop: "var(--space-24)", paddingBottom: "var(--space-24)" }}
      >
        <div className="container">
          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "var(--space-8)",
              maxWidth: "22ch",
            }}
          >
            Write one page of intent. A fleet of agents executes it. A debrief
            shows you whether your intent survived.
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-muted)",
              maxWidth: "52ch",
              lineHeight: 1.8,
              marginBottom: "var(--space-8)",
            }}
          >
            Every time you hand work to someone, some of what you meant gets
            lost. As agents take on more of the execution, that loss compounds
            silently across every handoff. Most agent tooling optimizes for
            doing more. missions.md optimizes for something different: making
            sure what gets done is what you meant.
          </p>
          <div className="cta-pair">
            <a
              href="/how-it-works"
              style={{
                display: "inline-block",
                background: "var(--color-button-bg)",
                color: "var(--color-button-text)",
                padding: "var(--space-3) var(--space-6)",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                letterSpacing: "0.05em",
              }}
            >
              Read the pattern
            </a>
            <a
              href="/install"
              style={{
                display: "inline-block",
                background: "var(--color-surface)",
                color: "var(--color-body-text)",
                padding: "var(--space-3) var(--space-6)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                letterSpacing: "0.05em",
              }}
            >
              Install the skills
            </a>
          </div>
        </div>
      </section>

      {/* ── The Pattern ─────────────────────────────────────── */}
      <section
        aria-labelledby="pattern-heading"
        style={{ paddingBottom: "var(--space-24)" }}
      >
        <div className="container">
          <p className="section-heading">
            <span
              style={{
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "var(--space-1)",
              }}
            >
              The Pattern
            </span>
          </p>
          <div className="prose">
            <p>
              The idea is old. Militaries call it mission command: the commander
              states the intent and the constraints, and trusts the unit to
              choose the method. NASA runs the same pattern as Mission Control: a
              Flight Plan, Go/No-Go checks, telemetry, and a debrief. missions.md
              applies that pattern to agent fleets.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                marginTop: "var(--space-6)",
                marginBottom: "var(--space-6)",
              }}
            >
              You command. The system coordinates. The agents execute.
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
            The two layers
          </p>
          <table style={{ maxWidth: "52rem" }}>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Owned by</th>
                <th>What it is</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flight Plan</td>
                <td>You</td>
                <td>
                  One page: Commander&apos;s Intent, Constraints, Success Criteria,
                  Context
                </td>
              </tr>
              <tr>
                <td>Hermes Kanban</td>
                <td>The system</td>
                <td>
                  Cards with dependencies, budgets, verification, and human gates
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--text-sm)",
              marginTop: "var(--space-4)",
              maxWidth: "52ch",
              lineHeight: 1.7,
            }}
          >
            The orchestration theory lives in how the skills design the cards,
            not in extra artifacts you maintain.
          </p>
        </div>
      </section>

      {/* ── Three Skills ────────────────────────────────────── */}
      <section
        aria-labelledby="skills-heading"
        style={{
          background: "var(--color-surface)",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-24)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <p className="section-heading">Three Skills</p>
          <table style={{ maxWidth: "52rem" }}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>What it does</th>
                <th>You say</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>define-mission</code>
                </td>
                <td>Turns raw intent into a Flight Plan</td>
                <td>
                  <em>&ldquo;I want to&hellip;&rdquo;</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>launch-mission</code>
                </td>
                <td>
                  Runs pre-flight checks, then compiles the Flight Plan into Kanban
                  cards
                </td>
                <td>
                  <em>&ldquo;Launch it&rdquo;</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>debrief-mission</code>
                </td>
                <td>
                  Reads the execution history and generates the After-Action Review
                </td>
                <td>
                  <em>&ldquo;Debrief&rdquo;</em>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--text-sm)",
              marginTop: "var(--space-6)",
              lineHeight: 1.7,
            }}
          >
            Skills live in the missions repo and install into{" "}
            <code>~/.hermes/skills/</code> for the Hermes agent.
          </p>
        </div>
      </section>

      {/* ── Your First Mission ───────────────────────────────── */}
      <section
        aria-labelledby="first-mission-heading"
        style={{ paddingTop: "var(--space-24)", paddingBottom: "var(--space-24)" }}
      >
        <div className="container">
          <p className="section-heading">Your First Mission</p>
          <ol
            style={{
              listStyle: "none",
              paddingLeft: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
              maxWidth: "52ch",
              lineHeight: 1.8,
            }}
          >
            {[
              <>
                Tell your Hermes agent what you want:{' '}
                <em>&ldquo;I want every API route to return structured error codes,
                because silent auth failures are security incidents waiting to
                happen.&rdquo;</em>
              </>,
              <>
                <code>define-mission</code> drafts a Flight Plan in{' '}
                <code>missions/</code> and asks only what it cannot infer. You
                approve it.
              </>,
              <>
                Say <em>&ldquo;launch it.&rdquo;</em>{' '}
                <code>launch-mission</code> runs the Go/No-Go checks, then creates
                Kanban cards assigned to your configured profiles. Dependencies
                gate the sequence; goal_mode judges each card against its
                acceptance criteria; human gates block where you said they should.
              </>,
              <>
                Watch the Hermes dashboard, or walk away. The board survives
                restarts.
              </>,
              <>
                Say <em>&ldquo;debrief.&rdquo;</em> You get an After-Action Review:
                what ran, what it cost, what passed verification, and where intent
                drifted.
              </>,
            ].map((step, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: "var(--space-4)", alignItems: "baseline" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    minWidth: "1.5rem",
                    paddingTop: "0.05em",
                  }}
                >
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "var(--space-8)" }}>
            <a href="/install" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
              See how to install the skills
            </a>
          </div>
        </div>
      </section>

      {/* ── Mission or Task? ────────────────────────────────── */}
      <section
        aria-labelledby="mission-vs-task-heading"
        style={{
          background: "var(--color-surface)",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-24)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <p className="section-heading">Mission or Task?</p>
          <div className="prose">
            <p>
              A Mission is a bounded campaign: multiple agents, multiple sessions,
              real coordination, judgment calls about method. A Task is something
              one agent finishes in one session. If it is a task, a direct{" "}
              <code>/goal</code> or a single Kanban card is faster, and{" "}
              <code>define-mission</code> will tell you so. It will never block you.
              The operator decides; the system advises.
            </p>
          </div>
          <a href="/concepts" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
            Learn how to size work
          </a>
        </div>
      </section>

      {/* ── Closing ─────────────────────────────────────────── */}
      <section
        aria-labelledby="closing-heading"
        style={{ paddingTop: "var(--space-24)", paddingBottom: "var(--space-24)" }}
      >
        <div className="container">
          <p className="section-heading">No Lock-In</p>
          <div className="prose">
            <p>
              Any tool that speaks <code>/goal</code> can join a pipeline. There is
              no proprietary runtime to defend. The Flight Plan compiles down to
              primitives the ecosystem already understands.
            </p>
          </div>
          <div className="cta-pair">
            <a
              href="/install"
              style={{
                display: "inline-block",
                background: "var(--color-button-bg)",
                color: "var(--color-button-text)",
                padding: "var(--space-3) var(--space-6)",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                letterSpacing: "0.05em",
              }}
            >
              Install the skills
            </a>
            <a
              href="/philosophy"
              style={{
                display: "inline-block",
                background: "var(--color-surface)",
                color: "var(--color-body-text)",
                padding: "var(--space-3) var(--space-6)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                letterSpacing: "0.05em",
              }}
            >
              Read the deeper theory
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}