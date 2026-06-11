/**
 * app/contact/page.tsx — Contact page
 *
 * CONTENT SLOTS:
 *   - <h1>                   → page title (copy lane)
 *   - .contact-info         → address, email, etc. (copy lane)
 *   - .contact-form         → contact form (UX + back-end lane)
 *     * DATA_SLOT:form_fields → field definitions (copy lane)
 *     * FORM_ACTION_SLOT:api  → form submission handler (back-end lane)
 */

import type { Metadata } from "vinext";

export const metadata: Metadata = {
  title: "missions — contact",
  description: "Placeholder. Copy lane fills this.",
};

export default function ContactPage() {
  return (
    <article>
      <div className="container">
        <header style={{marginBottom: "var(--space-12)", maxWidth: "48ch"}}>
          <p className="mono uppercase" style={{fontSize: "var(--text-xs)", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "var(--space-2)"}}>
            reach
          </p>
          <h1 style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", fontWeight: 700}}>
            {/* TITLE_SLOT */}
            contact
          </h1>
        </header>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", gap: "var(--space-12)"}}>
          {/* CONTACT_INFO_SLOT: address, email, PGP, etc. (copy lane) */}
          <section aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "var(--space-4)"}}>
              contact information
            </h2>
            {/* CONTACT_DETAILS_SLOT: fill with email, Signal, PGP, etc. (copy lane) */}
            <dl style={{display: "flex", flexDirection: "column", gap: "var(--space-3)"}}>
              <div>
                <dt style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em"}}>email</dt>
                <dd style={{marginTop: "var(--space-1)"}}>
                  {/* EMAIL_SLOT */}
                  <span style={{color: "var(--color-muted)"}}>replaced by copy lane</span>
                </dd>
              </div>
              <div>
                <dt style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em"}}>signal</dt>
                <dd style={{marginTop: "var(--space-1)"}}>
                  {/* SIGNAL_SLOT */}
                  <span style={{color: "var(--color-muted)"}}>replaced by copy lane</span>
                </dd>
              </div>
            </dl>
          </section>

          {/* CONTACT_FORM_SLOT: form (UX/form lane wires to API back-end) */}
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "var(--space-4)"}}>
              send a message
            </h2>
            {/* FORM_SLOT: full contact form (form lane) */}
            <form style={{display: "flex", flexDirection: "column", gap: "var(--space-4)"}}>
              {/* FORM_FIELDS_SLOT: inputs (copy + form lane) */}
              <div>
                <label htmlFor="contact-name" style={{display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-1)"}}>name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  style={{width: "100%", padding: "var(--space-3)", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", color: "var(--color-body-text)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)"}}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={{display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-1)"}}>email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  style={{width: "100%", padding: "var(--space-3)", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", color: "var(--color-body-text)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)"}}
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={{display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-1)"}}>message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  style={{width: "100%", padding: "var(--space-3)", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", color: "var(--color-body-text)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", resize: "vertical"}}
                />
              </div>
              <button
                type="submit"
                style={{alignSelf: "flex-start", padding: "var(--space-3) var(--space-6)", background: "var(--color-button-bg)", color: "var(--color-button-text)", border: "none", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", letterSpacing: "0.05em", cursor: "pointer"}}
              >
                {/* CTA_TEXT_SLOT */}
                send
              </button>
            </form>
          </section>
        </div>
      </div>
    </article>
  );
}
