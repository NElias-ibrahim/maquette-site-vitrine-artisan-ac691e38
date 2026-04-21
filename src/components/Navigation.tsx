import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { salonInfo } from "@/data/salon";

/* ============================================================
   NAVIGATION PRINCIPALE
   Barre fixe en haut, transparente sur la home, opaque ailleurs.
   Pour ajouter une page : ajoute une entrée dans le tableau `links`.
   ============================================================ */

const links = [
  { to: "/", label: "Accueil" },
  { to: "/prix", label: "Prix" },
  { to: "/avis", label: "Avis" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Détecte le scroll pour changer le style de la nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au changement de page
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Style dynamique : transparent sur home en haut, opaque sinon
  const navBg = scrolled || !isHome
    ? "bg-background/85 backdrop-blur-xl border-b border-border/50"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container-najma flex items-center justify-between py-5">
        {/* Logo / Nom du salon */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl font-light tracking-tight">
            {salonInfo.name.split(" ")[0]}
            <span className="italic-accent">.</span>
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Coiffure
          </span>
        </Link>

        {/* Liens desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] link-underline transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-warm"
        >
          Réserver
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
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-najma py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-lg font-serif ${isActive ? "text-primary italic" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground rounded-full font-medium"
            >
              Réserver — {salonInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
