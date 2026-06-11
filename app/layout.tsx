/**
 * app/layout.tsx — Root layout
 *
 * CONTENT SLOTS:
 *   - <html lang="...">             → set language attr (i18n lane)
 *   - <head><meta name="description"> → set site description (copy lane)
 *   - <nav aria-label="primary">    → set nav links (copy lane IA)
 *   - .page-content                  → main content slot per page
 *   - <footer>                      → footer links + copyright (copy lane)
 */

import "../app/globals.css";

export const metadata = {
  title: "missions — placeholder",
  description: "Placeholder. Build lane fills this.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* META_SLOT: description injected by copy lane */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {/* HEADER_SLOT: nav structure injected by copy lane */}
        <header class="site-header">
          <nav aria-label="primary" class="nav-container">
            {/* NAV_LINKS_SLOT: fill with link items per IA */}
            <a href="/" class="nav-brand">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="6" y="6" width="8" height="8" fill="currentColor"/>
              </svg>
              <span>missions</span>
            </a>
          </nav>
        </header>

        {/* PAGE_CONTENT_SLOT: per-page content renders here */}
        <main class="page-content" id="main-content">
          {children}
        </main>

        <footer class="site-footer">
          {/* FOOTER_SLOT: footer content injected by copy lane */}
          <p>missions-site &copy; 2026</p>
        </footer>
      </body>
    </html>
  );
}
