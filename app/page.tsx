/**
 * app/page.tsx — Home page
 *
 * CONTENT SLOTS:
 *   - <h1>                      → page heading (copy lane)
 *   - .hero-section             → hero bloc: headline + subtext + CTA (copy lane)
 *   - .features-list           → feature/benefit list items (copy lane)
 *   - DATA_SLOT:missions_summary → missions count + status summary (data lane)
 */

import type { Metadata } from "vinext";

export const metadata: Metadata = {
  title: "missions — home",
  description: "Placeholder. Copy lane fills description.",
};

export default function HomePage() {
  return (
    <article>
      {/* HERO_SLOT: heading + subtext + CTA injected by copy lane */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-tag mono uppercase" style={{fontSize: "var(--text-xs)", color: "var(--color-muted)", marginBottom: "var(--space-4)"}}>
            {/* TAG_SLOT: e.g. "EST. 2026" per copy lane */}
          </div>
          <h1 id="hero-heading" className="hero-heading" style={{fontSize: "var(--text-3xl)", fontFamily: "var(--font-mono)", fontWeight: 700, lineHeight: 1.1, marginBottom: "var(--space-6)"}}>
            {/* HEADING_SLOT: primary site heading (copy lane) */}
            missions
          </h1>
          <p style={{fontSize: "var(--text-lg)", color: "var(--color-muted)", maxWidth: "42ch", marginBottom: "var(--space-8)"}}>
            {/* SUBTEXT_SLOT: one-liner value prop (copy lane) */}
            A placeholder. The copy lane writes the real words.
          </p>
          {/* CTA_SLOT: call-to-action block (copy lane) */}
          <a href="/missions" style={{display: "inline-block", background: "var(--color-button-bg)", color: "var(--color-button-text)", padding: "var(--space-3) var(--space-6)", borderRadius: "var(--radius-sm)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", letterSpacing: "0.05em"}}>
            {/* CTA_TEXT_SLOT */}
            view missions
          </a>
        </div>
      </section>

      {/* FEATURES_SLOT: feature/benefit grid injected by copy lane */}
      <section className="features-section" style={{marginTop: "var(--space-24)"}} aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading" style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "var(--space-8)"}}>
            {/* SECTION_HEADING_SLOT */}
            overview
          </h2>
          {/* FEATURES_LIST_SLOT: fill with feature items */}
          <div className="features-list" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))", gap: "var(--space-6)"}}>
            <FeatureCard
              tag="mission management"
              heading="OPERATIONS"
              body="Placeholder feature description. Copy lane writes this."
            />
            <FeatureCard
              tag="transparency"
              heading="REPORTING"
              body="Placeholder feature description. Copy lane writes this."
            />
            <FeatureCard
              tag="meritocratic"
              heading="MERIT"
              body="Placeholder feature description. Copy lane writes this."
            />
          </div>
        </div>
      </section>
    </article>
  );
}

function FeatureCard({ tag, heading, body }: { tag: string; heading: string; body: string }) {
  return (
    <div style={{border: "1px solid var(--color-border)", padding: "var(--space-6)", borderRadius: "var(--radius-sm)"}}>
      <p style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-2)"}}>{tag}</p>
      <h3 style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-4)"}}>{heading}</h3>
      <p style={{color: "var(--color-muted)", lineHeight: 1.7}}>{body}</p>
    </div>
  );
}
