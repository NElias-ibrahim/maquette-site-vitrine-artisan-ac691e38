import { Link } from "react-router-dom";
import { ArrowUpRight, Star, MapPin, Phone, Shield, Clock, Award } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { salonInfo } from "@/data/salon";
import { reviews } from "@/data/reviews";

/* ============================================================
   PAGE D'ACCUEIL — AGENCEMENT REVU
   1. Hero split (texte gauche / image droite)
   2. Bandeau de garanties (4 piliers)
   3. Galerie réalisations
   4. À propos avec stats
   5. Marquee spécialités
   6. Avis (fond clair, plus lisible)
   7. CTA final
   ============================================================ */

const Index = () => {
  const previewReviews = reviews.slice(0, 3);

  return (
    <>
      {/* ==================== 1. HERO SPLIT ==================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="container-najma grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="eyebrow">{salonInfo.trade} · {salonInfo.city}</span>
              <div className="hidden sm:flex items-center gap-1 text-xs text-foreground/70">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                <span className="font-medium">{salonInfo.rating}</span>
                <span className="text-muted-foreground">· {salonInfo.reviewCount} avis</span>
              </div>
            </div>

            <h1 className="display-xl text-foreground animate-fade-up">
              Votre artisan<br />
              <span className="italic-accent">de confiance</span><br />
              près de chez vous.
            </h1>

            <p className="max-w-xl text-lg text-foreground/70 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Dépannage, travaux, entretien. Une équipe à l'écoute,
              des devis clairs et un travail soigné, du premier appel
              jusqu'à la fin du chantier.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-500 hover:shadow-warm"
              >
                <Phone className="w-4 h-4" />
                Demander un devis
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <Link
                to="/prix"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-all"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <ImagePlaceholder label="Photo principale du commerce" ratio="portrait" className="!rounded-3xl shadow-warm" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-card max-w-[200px]">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-medium">{salonInfo.rating}/5 sur Google</p>
              <p className="text-xs text-muted-foreground">{salonInfo.reviewCount} avis vérifiés</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. PILIERS / GARANTIES ==================== */}
      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="container-najma grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Garantie décennale", desc: "Tous nos chantiers couverts" },
            { icon: Clock, title: "Intervention 7j/7", desc: "Dépannage rapide" },
            { icon: Award, title: "15+ ans d'expérience", desc: "Savoir-faire reconnu" },
            { icon: Star, title: "Devis gratuit", desc: "Sans engagement" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 3. GALERIE RÉALISATIONS ==================== */}
      <section className="py-32 bg-background">
        <div className="container-najma">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="eyebrow mb-4">Nos réalisations</p>
              <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight max-w-2xl text-foreground">
                Quelques <span className="italic-accent">chantiers</span><br />
                récents.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative group overflow-hidden rounded-2xl">
              <div className="w-full h-[500px] md:h-[600px]">
                <ImagePlaceholder label="Photo de chantier" className="!rounded-2xl h-full" />
              </div>
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur px-5 py-2 rounded-full text-xs uppercase tracking-widest text-foreground border border-border">
                Rénovation
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <div className="w-full h-[290px]">
                  <ImagePlaceholder label="Photo avant / après" className="!rounded-2xl h-full" />
                </div>
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-foreground border border-border">
                  Pose
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <div className="w-full h-[290px]">
                  <ImagePlaceholder label="Photo détail" className="!rounded-2xl h-full" />
                </div>
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-foreground border border-border">
                  Dépannage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. À PROPOS + STATS ==================== */}
      <section className="py-32 bg-secondary/40">
        <div className="container-najma grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">À propos</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight mb-8 text-foreground">
              Un artisan <span className="italic-accent">sérieux</span><br />
              et <span className="italic-accent">à l'écoute.</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-6">
              On commence toujours par comprendre ce dont vous avez besoin.
              Puis on vous fait un devis clair, sans surprise, et on intervient
              dans les délais annoncés.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed mb-10">
              Particuliers, professionnels, syndics : on s'adapte à votre
              demande, du petit dépannage au chantier complet.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-4xl text-primary">15+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">années</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">500+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">chantiers</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">{salonInfo.rating}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">sur Google</p>
              </div>
            </div>

            <Link to="/a-propos" className="link-underline text-accent font-medium uppercase tracking-[0.2em] text-sm">
              En savoir plus →
            </Link>
          </div>

          <div className="relative order-first md:order-last">
            <ImagePlaceholder label="Photo de l'équipe ou du chantier" ratio="portrait" className="!rounded-3xl shadow-warm" />
          </div>
        </div>
      </section>

      {/* ==================== 5. MARQUEE ==================== */}
      <section className="bg-primary text-primary-foreground py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {["Dépannage rapide", "★", "Devis gratuit", "★", "Travaux soignés", "★", "Garantie décennale", "★", "Intervention 7j/7", "★", "Entretien", "★", "Mise aux normes", "★"].map((item, j) => (
                <span key={j} className="font-serif text-2xl md:text-4xl font-light italic text-primary-foreground/95">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. AVIS — fond clair, lisible ==================== */}
      <section className="py-32 bg-background">
        <div className="container-najma">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Ce qu'ils en disent</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-foreground">
              <span className="italic-accent">{salonInfo.rating}/5</span> sur Google
            </h2>
            <p className="text-muted-foreground mt-4">Basé sur {salonInfo.reviewCount} avis vérifiés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewReviews.map((r) => (
              <div key={r.id} className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-warm transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed mb-6 font-serif italic text-lg">
                  « {r.text} »
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{r.author}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/avis" className="inline-flex items-center gap-2 link-underline text-primary uppercase tracking-[0.2em] text-sm">
              Lire tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 7. CTA FINAL ==================== */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container-najma relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-primary-foreground/60 mb-6">Un coup de fil suffit</p>
            <h2 className="font-serif font-light text-5xl md:text-7xl leading-[0.95] mb-10">
              On vous fait un <span className="italic-accent">devis</span><br />
              quand vous voulez.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-warm transition-all"
              >
                {salonInfo.phone}
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition"
              >
                Nous trouver
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              {salonInfo.fullAddress}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
