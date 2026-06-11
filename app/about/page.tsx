/**
 * app/about/page.tsx — About page
 *
 * CONTENT SLOTS:
 *   - <h1>                → page title (copy lane)
 *   - .about-prose        → multi-paragraph about text (copy lane)
 *   - .about-principles   → founding principles list (copy lane)
 *   - .about-team         → team section (copy lane)
 */

import type { Metadata } from "vinext";

export const metadata: Metadata = {
  title: "missions — about",
  description: "Placeholder. Copy lane fills this.",
};

export default function AboutPage() {
  return (
    <article>
      <div className="container">
        <header style={{marginBottom: "var(--space-12)", maxWidth: "48ch"}}>
          <p className="mono uppercase" style={{fontSize: "var(--text-xs)", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "var(--space-2)"}}>
            manifesto
          </p>
          <h1 style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", fontWeight: 700}}>
            {/* TITLE_SLOT */}
            about
          </h1>
        </header>

        {/* ABOUT_PROSE_SLOT: narrative text (copy lane) */}
        <section style={{maxWidth: "48ch", marginBottom: "var(--space-16)"}} aria-label="about narrative">
          <p style={{marginBottom: "var(--space-4)", lineHeight: 1.8, fontSize: "var(--text-base)"}}>
            This is a placeholder. The copy lane writes the real narrative so the build lane has structure to work against.
          </p>
          <p style={{color: "var(--color-muted)", lineHeight: 1.8}}>
            Placeholder secondary paragraph. Replace with actual copy about the organization's purpose and values.
          </p>
        </section>

        {/* ABOUT_PRINCIPLES_SLOT: founding principles (copy lane) */}
        <section aria-labelledby="principles-heading" style={{marginBottom: "var(--space-16)"}}>
          <h2 id="principles-heading" style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "var(--space-6)"}}>
            principles
          </h2>
          {/* PRINCIPLES_LIST_SLOT: cultural/founding principles bullets (copy lane) */}
          <ol style={{paddingLeft: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)"}}>
            {["Principle one placeholder.", "Principle two placeholder.", "Principle three placeholder."].map((p, i) => (
              <li key={i} style={{lineHeight: 1.7}}>{p}</li>
            ))}
          </ol>
        </section>

        {/* ABOUT_TEAM_SLOT: team section (copy lane) */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "var(--space-6)"}}>
            team
          </h2>
          {/* TEAM_LIST_SLOT: team member list (copy lane) */}
          <p style={{color: "var(--color-muted)"}}>Placeholder. Copy lane populates this.</p>
        </section>
      </div>
    </article>
  );
}
