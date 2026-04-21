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
    title: "L'écoute avant tout",
    text: "Chaque rendez-vous commence par un diagnostic et un échange. Vos cheveux, votre style, vos envies — c'est là que tout commence.",
  },
  {
    num: "02",
    title: "Tous les cheveux, tous bienvenus",
    text: "Lisses, bouclés, frisés, crépus, fins ou épais : nos coiffeurs sont formés à toutes les textures et tous les styles.",
  },
  {
    num: "03",
    title: "Des produits respectueux",
    text: "Nous travaillons avec des marques engagées sur la qualité et la santé du cheveu : L'Oréal Pro, Olaplex, Kérastase.",
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
              Un salon<br />
              à <span className="italic-accent">votre image.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-foreground/75 leading-relaxed">
              Depuis sa création en 2016, Najma Coiffure est devenu un repère
              à Noisy-le-Sec. Un salon où l'on prend le temps, où l'on conseille,
              où l'on accompagne chaque client vers la version la plus belle de lui-même.
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
              Un savoir-faire <span className="italic-accent">artisanal,</span><br />
              une ambiance <span className="italic-accent">familiale.</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-5">
              Chez Najma, on ne fait pas que couper les cheveux. On crée des moments.
              Un café à l'arrivée, des conseils sincères, un savoir-faire technique
              transmis depuis des années — voilà ce qui nous anime au quotidien.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Notre spécialité reste la <strong>coloration</strong>, dans toutes ses
              déclinaisons : balayages, mèches, couleurs naturelles ou audacieuses.
              Mais on aime tout autant transformer une coupe d'homme en quelques coups
              de ciseaux ou apprivoiser des boucles indomptables.
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
