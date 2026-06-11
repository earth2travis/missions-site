/**
 * app/layout.tsx — Root layout
 *
 * CONTENT SLOTS (filled by copy integration):
 *   - <html lang="en">             → Language attr
 *   - <meta name="description">    → Site description (from copy lane)
 *   - <nav aria-label="primary">   → Nav links per IA: How It Works, Install, Flight Plans, Concepts
 *   - <footer>                    → Footer links + copyright (GitHub, Philosophy, copyright)
 */

import "./globals.css";

export const metadata = {
  title: "missions.md — Intent-driven agent orchestration",
  description:
    "Write one page of intent. A fleet of agents executes it. A debrief shows you whether your intent survived.",
};

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/install", label: "Install" },
  { href: "/flight-plans", label: "Flight Plans" },
  { href: "/concepts", label: "Concepts" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <header className="site-header">
          <nav aria-label="primary" className="nav-container">
            <a href="/" className="nav-brand">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect x="6" y="6" width="8" height="8" fill="currentColor" />
              </svg>
              <span>missions</span>
            </a>
            <ul className="nav-links" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="page-content" id="main-content">
          {children}
        </main>

        <footer className="site-footer">
          <nav aria-label="footer" className="footer-nav">
            <a
              href="https://github.com/earth2travis/missions"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="/philosophy">Philosophy</a>
          </nav>
          <p className="footer-copy">
            missions.md &mdash; intent-driven orchestration &copy; 2026
          </p>
        </footer>
      </body>
    </html>
  );
}