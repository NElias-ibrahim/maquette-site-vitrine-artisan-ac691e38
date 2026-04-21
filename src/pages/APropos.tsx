import aboutDetail from "@/assets/about-detail.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Link } from "react-router-dom";

/* ============================================================
   PAGE À PROPOS
   Histoire du salon, valeurs, équipe.
   Le contenu est éditable directement dans ce fichier.
   ============================================================ */

const valeurs = [
  {
    num: "01",
    title: "On écoute",
    text: "On commence toujours par discuter : ce que vous voulez, ce qui vous plaît, ce qui vous va. Pas de coupe imposée.",
  },
  {
    num: "02",
    title: "Tous les cheveux",
    text: "Lisses, bouclés, frisés, crépus, fins, épais : on sait faire. Femmes, hommes, enfants, tout le monde est bienvenu.",
  },
  {
    num: "03",
    title: "Des bons produits",
    text: "On utilise des marques sérieuses (L'Oréal Pro, Olaplex, Kérastase) pour préserver la santé de vos cheveux.",
  },
];

const APropos = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-cream">
        <div className="container-najma grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Notre histoire</p>
            <h1 className="display-xl text-ink">
              Le salon,<br />
              en <span className="italic-accent">deux mots.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-foreground/75 leading-relaxed">
              Najma Coiffure, c'est un salon de quartier à Noisy-le-Sec.
              Une équipe sympa, à l'écoute, qui prend le temps de bien faire
              les choses. Pas de chichi, juste du bon travail.
            </p>
          </div>
        </div>
      </section>

      {/* GRANDE IMAGE + TEXTE */}
      <section className="py-24">
        <div className="container-najma grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src={aboutDetail}
              alt="Détail intérieur Najma Coiffure"
              loading="lazy"
              width={1200}
              height={1500}
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
          <div className="md:col-span-7 md:pl-12">
            <p className="eyebrow mb-4">L'esprit du salon</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-8">
              Simple, <span className="italic-accent">sympa,</span><br />
              et <span className="italic-accent">pro.</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-5">
              Chez Najma, on aime ce qu'on fait. On vous accueille bien, on discute,
              on conseille. Et surtout, on fait la coupe ou la couleur que vous voulez,
              pas celle qu'on a envie de faire.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Notre truc, c'est la <strong>coloration</strong> : balayages, mèches,
              couleurs naturelles ou plus marquées. Mais on est aussi à l'aise sur
              une coupe homme rapide ou pour dompter des boucles compliquées.
            </p>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-ink text-cream">
        <div className="container-najma">
          <p className="eyebrow text-cream/50 mb-6 text-center">Nos valeurs</p>
          <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight text-center mb-20">
            Trois <span className="italic-accent">engagements,</span><br />
            une seule <span className="italic-accent">obsession.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {valeurs.map((v) => (
              <div key={v.num} className="border-t border-cream/20 pt-8">
                <p className="font-serif text-5xl text-primary font-light mb-6">{v.num}</p>
                <h3 className="font-serif text-2xl mb-4">{v.title}</h3>
                <p className="text-cream/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGES + CITATION */}
      <section className="py-24">
        <div className="container-najma">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <img src={gallery1} alt="Coloration" loading="lazy" width={900} height={1200}
              className="rounded-2xl w-full h-72 object-cover" />
            <img src={gallery3} alt="Cheveux frisés" loading="lazy" width={900} height={1200}
              className="rounded-2xl w-full h-72 object-cover md:translate-y-12" />
            <img src={aboutDetail} alt="Salon" loading="lazy" width={1200} height={1500}
              className="rounded-2xl w-full h-72 object-cover" />
          </div>

          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="font-serif font-light text-4xl md:text-5xl leading-tight italic">
              « Un beau cheveu, c'est avant tout un cheveu en bonne santé.
              C'est notre première mission. »
            </p>
            <footer className="mt-8 eyebrow">— L'équipe Najma</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="container-najma text-center">
          <h2 className="font-serif font-light text-4xl md:text-5xl mb-8">
            Envie de nous <span className="italic-accent">rencontrer</span> ?
          </h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition">
            Venir au salon
          </Link>
        </div>
      </section>
    </>
  );
};

export default APropos;
