import { Link } from "react-router-dom";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { salonInfo } from "@/data/salon";
import { reviews } from "@/data/reviews";

/* ============================================================
   PAGE D'ACCUEIL — Najma Coiffure
   Composée de plusieurs sections empilées :
   1. Hero éditorial avec grand titre + image
   2. Marquee des spécialités (bandeau défilant)
   3. À propos court avec image
   4. Galerie aperçu
   5. Avis aperçu (3 derniers)
   6. CTA final
   ============================================================ */

const Index = () => {
  // 3 derniers avis affichés en aperçu
  const previewReviews = reviews.slice(0, 3);

  return (
    <>
      {/* ==================== SECTION 1 : HERO ==================== */}
      <section className="relative min-h-screen flex items-end pb-12 pt-32 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Intérieur du salon Najma Coiffure"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Voile crème pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        </div>

        <div className="container-najma relative w-full">
          {/* Sus-titre + note Google */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="eyebrow">Salon de coiffure · Noisy-le-Sec</span>
            <div className="hidden sm:flex items-center gap-1 text-xs text-foreground/70">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="font-medium">{salonInfo.rating}</span>
              <span className="text-muted-foreground">· {salonInfo.reviewCount} avis Google</span>
            </div>
          </div>

          {/* Titre simple et direct */}
          <h1 className="display-xl text-ink max-w-5xl animate-fade-up">
            Votre salon<br />
            <span className="italic-accent">de coiffure</span><br />
            à Noisy-le-Sec.
          </h1>

          {/* Sous-titre + CTAs */}
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="max-w-md text-lg text-foreground/70 leading-relaxed">
              Coupe, couleur, soin. Pour femmes, hommes et enfants.
              Une équipe à l'écoute, des conseils sincères, et un bon café à l'arrivée.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream rounded-full font-medium hover:bg-primary transition-all duration-500 hover:shadow-warm"
              >
                Prendre rendez-vous
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <Link
                to="/prix"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-all"
              >
                Voir les prix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2 : MARQUEE ==================== */}
      {/* Bandeau défilant des spécialités — donne du caractère éditorial */}
      <section className="bg-ink text-cream py-8 overflow-hidden border-y border-primary/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* On répète le contenu 2 fois pour boucle infinie */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {["Coupes femmes", "★", "Coloration experte", "★", "Balayages", "★", "Coupes hommes", "★", "Soins Olaplex", "★", "Coiffures mariage", "★", "Cheveux frisés", "★"].map((item, j) => (
                <span key={j} className="font-serif text-2xl md:text-4xl font-light italic text-cream/90">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3 : À PROPOS COURT ==================== */}
      <section className="py-32 bg-cream">
        <div className="container-najma grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={gallery1}
              alt="Coloration soin cheveux"
              loading="lazy"
              className="rounded-2xl shadow-warm w-full"
              width={900}
              height={1200}
            />
            {/* Badge décoratif */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-warm rotate-12">
              <span className="font-serif italic text-2xl">8+</span>
              <span className="text-[10px] uppercase tracking-widest">années<br />d'expertise</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">À propos du salon</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight mb-8">
              Une équipe <span className="italic-accent">gentille</span><br />
              et <span className="italic-accent">à l'écoute.</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-6">
              Najma Coiffure, c'est un salon de quartier à Noisy-le-Sec où on prend
              le temps de discuter avant de couper. On vous demande ce que vous voulez,
              on vous conseille, et on fait ce qui vous va vraiment.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed mb-10">
              Femmes, hommes, enfants, tous les types de cheveux : on est là pour ça,
              dans une ambiance simple et conviviale.
            </p>
            <Link to="/a-propos" className="link-underline text-primary font-medium uppercase tracking-[0.2em] text-sm">
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4 : GALERIE APERÇU ==================== */}
      <section className="py-32">
        <div className="container-najma">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="eyebrow mb-4">Nos réalisations</p>
              <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight max-w-2xl">
                Quelques <span className="italic-accent">coupes</span><br />
                faites au <span className="italic-accent">salon</span>.
              </h2>
            </div>
          </div>

          {/* Grille asymétrique éditoriale */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative group overflow-hidden rounded-2xl">
              <img src={gallery3} alt="Coupe cheveux frisés" loading="lazy" width={900} height={1200}
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-5 py-2 rounded-full text-xs uppercase tracking-widest">
                Cheveux frisés
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img src={gallery2} alt="Coupe homme moderne" loading="lazy" width={900} height={1200}
                  className="w-full h-[290px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                  Homme
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img src={gallery4} alt="Balayage blond" loading="lazy" width={900} height={1200}
                  className="w-full h-[290px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                  Balayage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5 : AVIS APERÇU ==================== */}
      <section className="py-32 bg-ink text-cream relative overflow-hidden">
        <div className="container-najma relative">
          <div className="text-center mb-16">
            <p className="eyebrow text-cream/50 mb-4">Ce qu'ils en disent</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight">
              <span className="italic-accent">{salonInfo.rating}/5</span> sur Google
            </h2>
            <p className="text-cream/60 mt-4">Basé sur {salonInfo.reviewCount} avis vérifiés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewReviews.map((r) => (
              <div key={r.id} className="bg-cream/5 backdrop-blur border border-cream/10 rounded-2xl p-8 hover:bg-cream/10 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-cream/85 leading-relaxed mb-6 font-serif italic text-lg">
                  « {r.text} »
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.author}</p>
                    <p className="text-xs text-cream/50">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/avis" className="inline-flex items-center gap-2 link-underline text-cream uppercase tracking-[0.2em] text-sm">
              Lire tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6 : CTA FINAL ==================== */}
      <section className="py-32 bg-cream">
        <div className="container-najma">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-6">Un coup de fil suffit</p>
            <h2 className="font-serif font-light text-5xl md:text-7xl leading-[0.95] mb-10">
              On vous prend <span className="italic-accent">rendez-vous</span><br />
              quand vous voulez.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition-all"
              >
                {salonInfo.phone}
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition"
              >
                Nous trouver
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
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
