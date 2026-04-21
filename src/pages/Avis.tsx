import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { reviews, reviewsStats } from "@/data/reviews";
import { salonInfo } from "@/data/salon";

/* ============================================================
   PAGE AVIS GOOGLE
   Affiche tous les avis clients du salon.
   - Filtre par note
   - Bouton "Voir plus" qui charge les avis dynamiquement (par 6)
   Pour ajouter un avis : édite src/data/reviews.ts
   ============================================================ */

const PAGE_SIZE = 6; // nombre d'avis chargés par "Voir plus"

const Avis = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filter, setFilter] = useState<number | null>(null);

  // Filtre + tri
  const filtered = filter ? reviews.filter((r) => r.rating === filter) : reviews;
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Statistiques : note Google officielle (cf. reviewsStats dans src/data/reviews.ts)
  const avgRating = reviewsStats.averageRating.toFixed(1);
  const totalReviews = reviewsStats.totalReviews;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percent: (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }));

  return (
    <>
      {/* HERO + STATS */}
      <section className="pt-40 pb-16 bg-cream">
        <div className="container-najma">
          <p className="eyebrow mb-6">Avis Google vérifiés</p>
          <h1 className="display-xl text-ink mb-12">
            Vos <span className="italic-accent">retours.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            {/* Note moyenne */}
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-8xl font-light text-primary">{avgRating}</span>
                <span className="text-2xl text-muted-foreground">/5</span>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Basé sur <strong className="text-foreground">{totalReviews} avis Google</strong> · {reviews.length} affichés
              </p>
            </div>

            {/* Distribution barres */}
            <div className="space-y-2">
              {distribution.map((d) => (
                <button
                  key={d.star}
                  onClick={() => setFilter(filter === d.star ? null : d.star)}
                  className={`w-full flex items-center gap-3 group ${filter === d.star ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                  <span className="text-sm w-12 text-left flex items-center gap-1">
                    {d.star} <Star className="w-3 h-3 fill-primary text-primary" />
                  </span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-700"
                      style={{ width: `${d.percent}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8 text-right">{d.count}</span>
                </button>
              ))}
              {filter && (
                <button onClick={() => setFilter(null)} className="text-xs text-primary mt-3 link-underline">
                  Réinitialiser le filtre
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LISTE DES AVIS */}
      <section className="py-24">
        <div className="container-najma">
          {/* Grille masonry-like */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((r, i) => (
              <article
                key={r.id}
                className="bg-card border border-border rounded-2xl p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-500 animate-fade-up"
                // Décalage de l'animation pour effet stagger
                style={{ animationDelay: `${(i % PAGE_SIZE) * 0.05}s` }}
              >
                {/* Étoiles */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {Array.from({ length: 5 - r.rating }).map((_, j) => (
                    <Star key={`e${j}`} className="w-4 h-4 text-muted" />
                  ))}
                </div>

                {/* Texte */}
                <p className="font-serif text-lg leading-relaxed mb-6 italic">
                  « {r.text} »
                </p>

                {/* Auteur */}
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-warm text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.author}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </div>
                  {r.service && (
                    <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 rounded-full">
                      {r.service}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Bouton voir plus */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream rounded-full font-medium hover:bg-primary transition-all"
              >
                Voir plus d'avis
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          )}

          {/* CTA Google */}
          <div className="mt-20 text-center p-12 bg-cream rounded-3xl">
            <p className="font-serif text-3xl mb-4">
              Vous êtes venu ? <span className="italic-accent">Partagez votre avis.</span>
            </p>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Vos retours nous aident à progresser et permettent à d'autres de nous découvrir.
            </p>
            <a
              href={salonInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition"
            >
              Laisser un avis sur Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Avis;
