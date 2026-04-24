import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { salonInfo } from "@/data/salon";

/* ============================================================
   HEADER — Barre supérieure principale
   - Desktop : logo à gauche, navigation au centre, CTA téléphone à droite
   - Mobile  : logo + bouton appel + bouton menu (drawer plein écran)
   ============================================================ */

const links = [
  { to: "/", label: "Accueil" },
  { to: "/prix", label: "Prestations" },
  { to: "/avis", label: "Avis" },
  { to: "/a-propos", label: "Le studio" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const phoneHref = `tel:${salonInfo.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-najma flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-9 bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-semibold rounded-sm">
            {salonInfo.name.charAt(0)}
          </div>
          <div className="leading-tight">
            <div className="font-medium text-base tracking-tight">{salonInfo.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {salonInfo.trade} · {salonInfo.city}
            </div>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[22px] after:h-[2px] after:bg-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA droite — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={phoneHref} className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span className="tabular-nums">{salonInfo.phone}</span>
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-4 text-xs">
            <Send className="w-3.5 h-3.5" />
            Devis
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2">
          <a href={phoneHref} className="p-2 rounded-full bg-primary text-primary-foreground" aria-label="Appeler">
            <Phone className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 -mr-2 text-foreground" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in p-6 border-t border-border">
          <nav className="flex flex-col gap-1 mb-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `py-3 border-b border-border text-lg ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <a href={phoneHref} className="btn-primary w-full justify-center">
            <Phone className="w-4 h-4" />
            Appeler · {salonInfo.phone}
          </a>
        </div>
      )}
    </header>
  );
};