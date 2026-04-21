import { Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import { salonInfo } from "@/data/salon";

/* ============================================================
   PAGE CONTACT
   Coordonnées, horaires, formulaire et carte Google Maps embed.
   Le formulaire est une démo (pas de backend) — pour le rendre
   fonctionnel, ajoute Lovable Cloud + Resend pour l'email.
   ============================================================ */

const Contact = () => {
  // Soumission factice du formulaire (à brancher sur Lovable Cloud + Resend)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Pour activer l'envoi réel des messages, branche Lovable Cloud + Resend.");
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 bg-cream">
        <div className="container-najma">
          <p className="eyebrow mb-6">Nous écrire, nous trouver</p>
          <h1 className="display-xl text-ink">
            Prenons<br />
            <span className="italic-accent">contact.</span>
          </h1>
        </div>
      </section>

      {/* INFOS + FORMULAIRE */}
      <section className="py-20">
        <div className="container-najma grid md:grid-cols-2 gap-16">
          {/* Infos pratiques */}
          <div className="space-y-12">
            <div>
              <p className="eyebrow mb-4">Adresse</p>
              <p className="font-serif text-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-2 text-primary shrink-0" />
                <span>{salonInfo.address}<br />{salonInfo.postalCode} {salonInfo.city}</span>
              </p>
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 link-underline text-sm text-primary"
              >
                Itinéraire sur Google Maps →
              </a>
            </div>

            <div>
              <p className="eyebrow mb-4">Téléphone</p>
              <a
                href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                className="font-serif text-2xl flex items-center gap-3 hover:text-primary transition"
              >
                <Phone className="w-5 h-5 text-primary" />
                {salonInfo.phone}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-4">Réseaux</p>
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl flex items-center gap-3 hover:text-primary transition"
              >
                <Instagram className="w-5 h-5 text-primary" />
                @najmacoiffure
              </a>
            </div>

            {/* Horaires */}
            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> Horaires d'ouverture
              </p>
              <div className="border-t border-border">
                {salonInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-3 border-b border-border"
                  >
                    <span className={`font-serif text-lg ${h.closed ? "text-muted-foreground" : ""}`}>
                      {h.day}
                    </span>
                    <span className={`text-sm ${h.closed ? "text-muted-foreground italic" : "font-medium"}`}>
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-cream rounded-3xl p-10 h-fit md:sticky md:top-32">
            <p className="eyebrow mb-3">Une question ?</p>
            <h2 className="font-serif font-light text-3xl mb-8">
              Écrivez-nous,<br />
              <span className="italic-accent">on vous répond vite.</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email ou téléphone
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/50"
                  placeholder="vous@email.fr"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-primary transition resize-none placeholder:text-muted-foreground/50"
                  placeholder="Votre demande, prestation souhaitée…"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 px-8 py-4 bg-ink text-cream rounded-full font-medium hover:bg-primary transition"
              >
                Envoyer mon message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Pour une réservation rapide, préférez l'appel téléphonique.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CARTE GOOGLE MAPS */}
      <section className="pb-24">
        <div className="container-najma">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            {/* iframe Google Maps — adresse encodée dans l'URL */}
            <iframe
              title="Carte Najma Coiffure"
              src="https://www.google.com/maps?q=110+Bd+Michelet+93130+Noisy-le-Sec&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
