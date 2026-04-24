import { Link } from "react-router-dom";
import { Star, MapPin, Phone, Shield, Clock, Send, ArrowRight, CheckCircle2, FileText } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { salonInfo } from "@/data/salon";
import { reviews } from "@/data/reviews";

/* ============================================================
   PAGE D'ACCUEIL — Style "MANUEL STRUCTURÉ"
   Sections numérotées 01/02/03... avec un gros formulaire
   "Réquisition / Devis" en évidence (carte border + ombre offset).
   ============================================================ */

const Index = () => {
  const previewReviews = reviews.slice(0, 3);
  const phoneHref = `tel:${salonInfo.phone.replace(/\s/g, "")}`;

  return (
    <div className="bg-surface">
      <div className="container-najma py-14 md:py-20 space-y-28 md:space-y-36">

        {/* ============ EN-TÊTE / HERO ============ */}
        <header className="animate-fade-up">
          <h2 className="display-xl text-foreground mb-8 max-w-4xl">
            Exécution méthodique.<br />
            <span className="italic-accent">Transparence totale.</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-end border-t border-border pt-8">
            <p className="text-lg text-muted-foreground max-w-[50ch] leading-relaxed text-pretty">
              Chaque intervention est documentée, chiffrée selon un barème clair, et exécutée
              dans les règles de l'art. Pas de dépannage approximatif : nous restaurons
              l'intégrité de vos installations.
            </p>
            <div className="bg-card border border-border w-full lg:w-72 shrink-0 aspect-[4/3] overflow-hidden">
              <ImagePlaceholder label="Atelier / chantier" className="!rounded-none h-full w-full" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#devis" className="btn-primary">
              <Send className="w-4 h-4" />
              Demander un devis
            </a>
            <a href={phoneHref} className="btn-dark">
              <Phone className="w-4 h-4" />
              {salonInfo.phone}
            </a>
          </div>
        </header>

        {/* ============ 01. PROTOCOLE ============ */}
        <section>
          <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
            <span className="section-num">01.</span>
            <h3 className="text-2xl font-medium tracking-tight">Protocole d'intervention</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { step: "A", title: "Diagnostic", desc: "Visite sur site, écoute du besoin, relevés et constat documenté." },
              { step: "B", title: "Devis ferme", desc: "Estimation détaillée par poste, validée avant tout démarrage." },
              { step: "C", title: "Exécution", desc: "Travaux dans les délais annoncés, finitions soignées, garantie décennale." },
            ].map((s) => (
              <div key={s.step} className="bg-card p-8">
                <div className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">Étape {s.step}</div>
                <h4 className="text-xl font-medium mb-3">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 02. CATALOGUE ============ */}
        <section>
          <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
            <span className="section-num">02.</span>
            <h3 className="text-2xl font-medium tracking-tight">Catalogue des prestations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {[
              { ref: "REF-101", title: "Travaux neufs", price: "Sur devis", desc: "Création complète d'installations conformes aux normes en vigueur." },
              { ref: "REF-202", title: "Rénovation", price: "Sur devis", desc: "Modernisation de l'existant, finitions soignées, optimisation énergétique." },
              { ref: "REF-303", title: "Dépannage", price: "Dès 89€", desc: "Diagnostic clair, intervention rapide, devis avant réparation." },
              { ref: "REF-404", title: "Entretien annuel", price: "Dès 145€", desc: "Contrat de maintenance préventive, contrôle et réglages." },
            ].map((s) => (
              <article key={s.ref} className="bg-card p-8 hover:bg-secondary/40 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="font-mono text-[11px] text-primary bg-[hsl(var(--primary-soft))] px-2 py-1 tracking-widest">
                    {s.ref}
                  </div>
                  <div className="font-mono text-sm tabular-nums text-muted-foreground font-medium">
                    {s.price}
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3">{s.title}</h4>
                <p className="text-sm text-muted-foreground mb-6 text-pretty leading-relaxed">{s.desc}</p>
                <Link to="/prix" className="text-sm text-primary font-medium link-underline">
                  Consulter le barème →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ============ 03. DEVIS — Réquisition (BLOC PHARE) ============ */}
        <section id="devis" className="scroll-mt-12">
          <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
            <span className="section-num">03.</span>
            <h3 className="text-2xl font-medium tracking-tight">Formulaire de réquisition</h3>
          </div>

          <div className="card-stamp">
            {/* En-tête fiche */}
            <div className="border-b border-foreground bg-secondary p-6 flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium tracking-wide uppercase">Demande d'intervention chiffrée</span>
              </div>
              <div className="font-mono text-[11px] text-primary tracking-widest bg-card border border-border px-3 py-1">
                FORM-R-{new Date().getFullYear()}
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Demande envoyée — démo (à connecter à un service email)."); }}
              className="p-8 lg:p-12 space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="font-mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Identité / Mandataire *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Nom de famille ou société"
                    className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Téléphone direct *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="06 00 00 00 00"
                    className="w-full bg-transparent border-b border-border py-3 text-lg tabular-nums focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="font-mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Adresse d'intervention *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Code postal et ville minimum"
                    className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Type de prestation
                  </label>
                  <select className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Travaux neufs</option>
                    <option>Rénovation</option>
                    <option>Dépannage urgent</option>
                    <option>Entretien</option>
                    <option>Autre — à préciser</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Nature de l'anomalie / description du projet *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez précisément le besoin. Ex : Chute de pression constatée depuis 48h, fuite visible sous l'évier..."
                  className="w-full bg-secondary border border-border p-4 text-base focus:outline-none focus:border-primary focus:bg-card transition-colors placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <div className="pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="text-xs text-muted-foreground max-w-[42ch] leading-relaxed">
                  La soumission de ce formulaire génère un ticket de réquisition. Un technicien vous contacte sous{" "}
                  <span className="font-medium text-foreground">4 heures ouvrées</span> pour validation.
                </p>
                <button type="submit" className="btn-dark hover:!bg-primary group">
                  Soumettre la réquisition
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ============ 04. AVIS ============ */}
        <section>
          <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
            <span className="section-num">04.</span>
            <h3 className="text-2xl font-medium tracking-tight">Retours d'opération</h3>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-foreground font-medium">{salonInfo.rating}/5</span> · {salonInfo.reviewCount} avis vérifiés
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {previewReviews.map((r) => (
              <div key={r.id} className="bg-card p-7">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{r.date}</span>
                </div>
                <p className="text-foreground/85 leading-relaxed mb-6 text-sm">« {r.text} »</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    {r.initials}
                  </div>
                  <p className="text-sm font-medium">{r.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/avis" className="font-mono text-xs uppercase tracking-[0.18em] text-primary link-underline">
              Lire tous les retours →
            </Link>
          </div>
        </section>

        {/* ============ 05. GARANTIES ============ */}
        <section>
          <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
            <span className="section-num">05.</span>
            <h3 className="text-2xl font-medium tracking-tight">Engagements & garanties</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { icon: Shield, title: "Garantie décennale" },
              { icon: Clock, title: "Intervention 7j/7" },
              { icon: CheckCircle2, title: "Devis ferme avant travaux" },
              { icon: MapPin, title: "Local & de proximité" },
            ].map((p) => (
              <div key={p.title} className="bg-card p-7 flex flex-col gap-3">
                <p.icon className="w-5 h-5 text-primary" />
                <p className="font-medium text-sm">{p.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
