import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { salonInfo } from "@/data/salon";

/* ============================================================
   NAVIGATION — Style "Pro plombier"
   Header bleu plein, logo à gauche, CTA téléphone à droite.
   ============================================================ */

const links = [
  { to: "/", label: "Accueil" },
  { to: "/prix", label: "Prestations" },
  { to: "/avis", label: "Avis" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container-najma flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-primary-foreground text-primary flex items-center justify-center font-bold text-lg shadow-sm">
            {salonInfo.name.charAt(0)}
          </div>
          <div className="leading-tight">
            <div className="font-bold text-base sm:text-lg">{salonInfo.name}</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
              {salonInfo.trade}
            </div>
          </div>
        </Link>

        {/* Liens desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Téléphone desktop */}
        <a
          href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground text-primary rounded-full text-sm font-semibold hover:shadow-lg transition-all"
        >
          <Phone className="w-4 h-4" />
          {salonInfo.phone}
        </a>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden bg-accent border-t border-primary-foreground/10 animate-fade-in">
          <nav className="container-najma py-6 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium ${
                    isActive ? "bg-primary text-primary-foreground" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-foreground text-primary rounded-full font-semibold"
            >
              <Phone className="w-4 h-4" />
              {salonInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
