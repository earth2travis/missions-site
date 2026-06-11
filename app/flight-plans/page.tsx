/**
 * app/flight-plans/page.tsx — Flight Plans (/flight-plans)
 *
 * Copy source: site-copy.md, Page 4: Flight Plans
 * Sections: The Anatomy of a Flight Plan, Sections Explained
 *
 * Note: this page remaps the /missions slot from the scaffold.
 * The missions placeholder card grid has been replaced with the Flight Plan page.
 */

export const metadata = {
  title: "Flight Plans — missions.md",
  description:
    "The Flight Plan is the only artifact the operator ever writes or approves.",
};

export default function FlightPlansPage() {
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
            flight plans
          </p>
          <h1 className="page-heading">Flight Plans</h1>
        </header>

        {/* ── The Anatomy of a Flight Plan ────────────────── */}
        <section
          aria-labelledby="anatomy-heading"
          style={{ marginBottom: "var(--space-16)" }}
        >
          <div className="prose">
            <p>
              The Flight Plan is the only artifact the operator ever writes or
              approves. Everything downstream &mdash; Kanban cards, dependencies,
              budgets, verification &mdash; is generated from this page.
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
            The template
          </p>
          <pre style={{ maxWidth: "52ch" }}>
{`---
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
`}
          </pre>
        </section>

        {/* ── Sections Explained ───────────────────────────── */}
        <section aria-labelledby="explained-heading">
          <p className="section-heading">Sections Explained</p>

          {/* Sizing Check */}
          <div style={{ marginBottom: "var(--space-8)", maxWidth: "52ch" }}>
            <p
              className="tag-label"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "var(--space-3)" }}
            >
              Sizing Check
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Every Flight Plan must answer why this is a Mission and not a Task.
              If the answer is &ldquo;because it sounded important&rdquo; or &ldquo;it
              involves multiple steps,&rdquo; it is a task. A task with steps is
              still a task. A mission involves uncertainty at the method level that
              requires delegation of judgment, not just delegation of labor.
            </p>
          </div>

          {/* Commander's Intent */}
          <div style={{ marginBottom: "var(--space-8)", maxWidth: "52ch" }}>
            <p
              className="tag-label"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "var(--space-3)" }}
            >
              Commander&apos;s Intent
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Two to four sentences. What must be true, and why it matters. No
              method, no step list. If you find yourself writing
              &ldquo;first&hellip; then&hellip; finally&hellip;&rdquo;, you are
              writing tasks. Delete it and state the outcome instead.
            </p>
          </div>

          {/* Constraints */}
          <div style={{ marginBottom: "var(--space-8)", maxWidth: "52ch" }}>
            <p
              className="tag-label"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "var(--space-3)" }}
            >
              Constraints
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Budget (propose defaults scaled to the work), pause conditions (what
              stops the line), and human gates (where the operator must approve
              before work proceeds). When in doubt, gate it. The operator can remove
              gates faster than they can undo a bad merge.
            </p>
          </div>

          {/* Success Criteria */}
          <div style={{ marginBottom: "var(--space-8)", maxWidth: "52ch" }}>
            <p
              className="tag-label"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "var(--space-3)" }}
            >
              Success Criteria
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Three to six, each outcome-oriented and verifiable. A judge, a test,
              or a human reviewing the artifact can answer yes or no. Vague criteria
              here means a blind judge downstream. This is the highest-leverage
              section of the page.
            </p>
          </div>

          {/* Context */}
          <div style={{ maxWidth: "52ch" }}>
            <p
              className="tag-label"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "var(--space-3)" }}
            >
              Context
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Links to Substrate references, operator notes, or anything the crew
              needs to understand the terrain.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}