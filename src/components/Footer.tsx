import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { salonInfo } from "@/data/salon";

/* ============================================================
   FOOTER — Grand pied de page éditorial
   Affiche infos contact, horaires et liens.
   ============================================================ */

export const Footer = () => {
  return (
    <footer className="relative bg-ink text-cream pt-24 pb-10 overflow-hidden">
      {/* Grand titre décoratif en arrière-plan */}
      <div className="absolute inset-x-0 -bottom-10 pointer-events-none opacity-[0.06] select-none">
        <div className="text-center font-serif font-light text-[20vw] leading-none">
          {salonInfo.name.split(" ")[0]}
        </div>
      </div>

      <div className="container-najma relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Bloc adresse */}
          <div>
            <p className="eyebrow text-cream/50 mb-4">Nous trouver</p>
            <p className="font-serif text-2xl leading-tight mb-2 flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1.5 text-primary shrink-0" />
              <span>{salonInfo.address}<br />{salonInfo.postalCode} {salonInfo.city}</span>
            </p>
            <a
              href={salonInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream/70 hover:text-primary link-underline mt-3 inline-block"
            >
              Voir sur Google Maps →
            </a>
          </div>

          {/* Bloc contact */}
          <div>
            <p className="eyebrow text-cream/50 mb-4">Contact</p>
            <a
              href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
              className="font-serif text-2xl flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              {salonInfo.phone}
            </a>
            <a
              href={salonInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cream/70 hover:text-primary transition"
            >
              <Instagram className="w-4 h-4" />
              @votrecompte
            </a>
          </div>

          {/* Bloc horaires (résumé) */}
          <div>
            <p className="eyebrow text-cream/50 mb-4">Horaires</p>
            <div className="space-y-1 text-sm">
              {salonInfo.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 max-w-[240px]">
                  <span className="text-cream/70">{h.day}</span>
                  <span className={h.closed ? "text-cream/40" : "text-cream"}>{h.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-cream/40 uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} {salonInfo.name} — Tous droits réservés
          </p>
          <div className="flex gap-6 text-xs text-cream/40 uppercase tracking-[0.25em]">
            <Link to="/contact" className="hover:text-cream transition">Contact</Link>
            <Link to="/prix" className="hover:text-cream transition">Tarifs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
