import { priceCategories } from "@/data/prices";
import { Link } from "react-router-dom";

/* ============================================================
   PAGE PRIX
   Affiche toutes les prestations groupées par catégorie.
   Pour modifier les prix : édite src/data/prices.ts
   ============================================================ */

const Prix = () => {
  return (
    <>
      {/* Hero de page */}
      <section className="pt-40 pb-20 bg-cream">
        <div className="container-najma">
          <p className="eyebrow mb-6 animate-fade-in">Tarifs 2025</p>
          <h1 className="display-xl text-ink animate-fade-up">
            Nos <span className="italic-accent">prix.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Les tarifs ci-dessous sont indicatifs. Le prix final dépend de
            l'ampleur du chantier et des fournitures. On vous remet toujours
            un devis détaillé avant de commencer, sans surprise.
          </p>
        </div>
      </section>

      {/* Liste des catégories */}
      <section className="py-24">
        <div className="container-najma space-y-24">
          {priceCategories.map((cat, idx) => (
            <div key={cat.id} className="grid md:grid-cols-12 gap-10 md:gap-16">
              {/* En-tête catégorie (sticky côté gauche en desktop) */}
              <div className="md:col-span-4">
                <div className="md:sticky md:top-32">
                  <p className="eyebrow text-primary mb-3">0{idx + 1}</p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-muted-foreground italic font-serif">{cat.subtitle}</p>
                </div>
              </div>

              {/* Liste des prestations */}
              <div className="md:col-span-8">
                <ul className="divide-y divide-border">
                  {cat.items.map((item) => (
                    <li key={item.name} className="py-6 flex justify-between items-baseline gap-6">
                      <div className="flex-1">
                        <p className="font-medium text-lg">{item.name}</p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        )}
                      </div>
                      {/* Pointillés décoratifs */}
                      <div className="hidden sm:block flex-1 border-b border-dotted border-foreground/20 mb-1.5" />
                      <p className="font-serif text-xl text-primary font-medium whitespace-nowrap">
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="py-24 bg-ink text-cream">
        <div className="container-najma text-center">
          <h2 className="font-serif font-light text-4xl md:text-5xl mb-6">
            Une <span className="italic-accent">question</span> sur un tarif ?
          </h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto">
            Appelez-nous, on vous répond et on vous fait une estimation adaptée à votre chantier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
};

export default Prix;
