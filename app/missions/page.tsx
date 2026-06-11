/**
 * app/missions/page.tsx — Missions listing page
 *
 * CONTENT SLOTS:
 *   - <h1>                → page title (copy lane)
 *   - .missions-filter    → filter controls (UX lane)
 *   - DATA_SLOT:missions_list → rendered mission cards (data lane)
 *   - DATA_SLOT:pagination    → pagination controls (data lane)
 */

import type { Metadata } from "vinext";

export const metadata: Metadata = {
  title: "missions — operations",
  description: "Placeholder. Copy lane fills this.",
};

export default function MissionsPage() {
  return (
    <article>
      <div className="container">
        {/* PAGE_HEADER_SLOT: heading + optional intro text (copy lane) */}
        <header style={{marginBottom: "var(--space-12)"}}>
          <p className="mono uppercase" style={{fontSize: "var(--text-xs)", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "var(--space-2)"}}>
            operations
          </p>
          <h1 style={{fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", fontWeight: 700}}>
            {/* TITLE_SLOT */}
            missions
          </h1>
        </header>

        {/* MISSIONS_GRID_SLOT: rendered by data lane from missions.md content */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", gap: "var(--space-4)"}}>
          {/* MISSIONS_LIST_SLOT: each mission card (data lane generates from missions.md) */}
          <MissionCard
            status="active"
            title="Placeholder Mission Alpha"
            region="GLOBAL"
            started="2026-01-01"
          />
          <MissionCard
            status="planned"
            title="Placeholder Mission Beta"
            region="EMEA"
            started="2026-04-01"
          />
          <MissionCard
            status="completed"
            title="Placeholder Mission Gamma"
            region="APAC"
            started="2025-10-15"
          />
        </div>

        {/* PAGINATION_SLOT: injected by data lane */}
        <nav aria-label="missions pagination" style={{marginTop: "var(--space-12)", display: "flex", justifyContent: "center"}}>
          {/* PAGINATION_CONTROL_SLOT: page controls (data lane) */}
        </nav>
      </div>
    </article>
  );
}

function MissionCard({ status, title, region, started }: { status: string; title: string; region: string; started: string }) {
  const statusLabel: Record<string, string> = {
    active: "ACTIVE",
    planned: "PLANNED",
    completed: "COMPLETE",
  };
  return (
    <article style={{border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", overflow: "hidden"}}>
      <div style={{padding: "var(--space-6)"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)"}}>
          <span className="mono uppercase" style={{fontSize: "var(--text-xs)", color: "var(--color-muted)", letterSpacing: "0.1em"}}>{region}</span>
          <span className="mono uppercase" style={{fontSize: "var(--text-xs)", letterSpacing: "0.1em", padding: "var(--space-1) var(--space-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)"}}>{statusLabel[status] ?? status}</span>
        </div>
        <h2 style={{fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-2)"}}>{title}</h2>
        <p style={{fontSize: "var(--text-sm)", color: "var(--color-muted)"}}>Started {started}</p>
        {/* MISSION_DETAIL_SLOT: full mission content (copy lane) */}
      </div>
    </article>
  );
}
