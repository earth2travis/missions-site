/**
 * app/philosophy/page.tsx — Philosophy (/philosophy)
 *
 * Copy source: site-copy.md, Page 6: Philosophy
 * Section: Lineage
 *
 * Note: this page remaps the /about slot from the scaffold.
 * The old restructure-of/about prose has been replaced with the lineage section.
 */

export const metadata = {
  title: "Philosophy — missions.md",
  description:
    "The design is grounded in mission command doctrine, incomplete contract theory, and principal-agent economics.",
};

export default function PhilosophyPage() {
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
            theory
          </p>
          <h1 className="page-heading">Philosophy</h1>
        </header>

        {/* ── Lineage ─────────────────────────────────────── */}
        <section aria-labelledby="lineage-heading">
          <div className="prose">
            <p>
              The design is grounded in mission command doctrine, incomplete
              contract theory (Grossman-Hart), and principal-agent economics
              (Holmstrom). Delegation always costs something. The goal is not to
              eliminate that cost but to make it bounded, observable, and
              improvable.
            </p>
            <p>
              This is a shift from &ldquo;I ask an AI to do something&rdquo; to
              &ldquo;I define a mission, and the system orchestrates execution
              across specialized agents, preserving my intent and giving me
              control.&rdquo;
            </p>
          </div>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--text-sm)",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginTop: "var(--space-6)",
            }}
          >
            Further reading: The full treatment lives in the Substrate knowledge
            base and in the{" "}
            <code>concepts/</code> directory of the missions repo.
          </p>
        </section>
      </div>
    </article>
  );
}