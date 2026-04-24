import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { salonInfo } from "@/data/salon";
import { useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", num: "01" },
  { to: "/prix", label: "Prestations", num: "02" },
  { to: "/avis", label: "Avis", num: "03" },
  { to: "/a-propos", label: "Le studio", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
];

/* ============================================================
   MOBILE TOP BAR — visible < lg
   Bleu plein, drawer plein écran à l'ouverture.
   ============================================================ */
export const MobileTopBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground flex items-center justify-between px-5 py-3.5 shadow-md">
        <Link to="/" className="leading-tight">
          <div className="font-medium text-base">{salonInfo.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
            {salonInfo.trade} · {salonInfo.city}
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <a href={`tel:${salonInfo.phone.replace(/\s/g, "")}`} className="p-2 -mr-1 rounded-full bg-primary-foreground text-primary">
            <Phone className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 -mr-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 top-[60px] bg-primary text-primary-foreground z-40 animate-fade-in p-6">
          <nav className="flex flex-col gap-1 mb-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 py-3 border-b border-primary-foreground/15 ${
                    isActive ? "text-primary-foreground" : "text-primary-foreground/80"
                  }`
                }
              >
                <span className="font-mono text-xs text-primary-foreground/50">{l.num}</span>
                <span className="text-lg">{l.label}</span>
              </NavLink>
            ))}
          </nav>
          <a href={`tel:${salonInfo.phone.replace(/\s/g, "")}`} className="block w-full bg-primary-foreground text-primary text-center py-4 text-sm uppercase tracking-[0.15em] font-medium rounded-sm">
            Appeler · {salonInfo.phone}
          </a>
        </div>
      )}
    </div>
  );
};
