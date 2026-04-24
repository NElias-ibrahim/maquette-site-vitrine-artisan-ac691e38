import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { salonInfo } from "@/data/salon";

/* ============================================================
   SIDEBAR FIXE (desktop) — Style "manuel d'opérations"
   Fond bleu primary, index numéroté, encart concierge en bas.
   ============================================================ */

const links = [
  { to: "/", label: "Accueil", num: "01" },
  { to: "/prix", label: "Prestations", num: "02" },
  { to: "/avis", label: "Avis clients", num: "03" },
  { to: "/a-propos", label: "Le studio", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[280px] bg-primary text-primary-foreground flex-col justify-between p-8 z-40">
      <div className="space-y-10">
        {/* Marque */}
        <Link to="/" className="block">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70 mb-3 inline-flex items-center gap-2">
            <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Unité opérationnelle
          </div>
          <h1 className="text-3xl font-medium leading-none tracking-tight">
            {salonInfo.name.split(" ")[0]}<br />
            <span className="italic font-light text-primary-foreground/80">{salonInfo.name.split(" ").slice(1).join(" ") || "Atelier"}.</span>
          </h1>
          <p className="text-primary-foreground/70 text-xs leading-relaxed text-pretty border-l-2 border-primary-foreground/40 pl-3 mt-5">
            {salonInfo.tagline}
          </p>
        </Link>

        {/* Index manuel */}
        <nav>
          <div className="font-mono text-[10px] text-primary-foreground/50 uppercase tracking-[0.18em] mb-4 pb-2 border-b border-primary-foreground/20">
            Index du manuel
          </div>
          <ul className="space-y-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={`flex items-baseline gap-3 py-2 transition-colors group ${
                      active ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                  >
                    <span className={`font-mono text-xs ${active ? "text-primary-foreground" : "text-primary-foreground/50"}`}>
                      {l.num}
                    </span>
                    <span className="text-sm font-medium tracking-wide">{l.label}</span>
                    {active && <span className="ml-auto h-px w-6 bg-primary-foreground self-center" />}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Concierge — astreinte */}
      <div className="bg-card text-card-foreground p-5 relative shadow-xl">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] border-l-[14px] border-t-secondary border-l-transparent" />
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
          Ligne d'astreinte
        </div>
        <div className="text-xl font-medium tracking-tight tabular-nums text-primary mb-1">
          {salonInfo.phone}
        </div>
        <p className="text-xs text-muted-foreground leading-snug mb-4">
          Diagnostic initial immédiat par un technicien.
        </p>
        <a href={`tel:${salonInfo.phone.replace(/\s/g, "")}`} className="block w-full bg-primary hover:bg-[hsl(var(--primary-dark))] text-primary-foreground text-center py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors rounded-sm">
          Déclencher l'appel
        </a>
        <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-[11px] text-muted-foreground">
          <MapPin className="w-3 h-3" />
          {salonInfo.city}
        </div>
      </div>
    </aside>
  );
};
