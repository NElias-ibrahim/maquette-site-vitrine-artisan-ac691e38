import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Link } from "react-router-dom";
import { salonInfo } from "@/data/salon";

/* ============================================================
   PAGE À PROPOS — VERSION DÉMO ARTISAN
   Histoire de l'entreprise, valeurs, équipe.
   Tout le texte est éditable directement ici.
   ============================================================ */

const valeurs = [
  {
    num: "01",
    title: "On écoute",
    text: "On commence par comprendre votre besoin avant de proposer une solution. Pas de prestation imposée, juste ce qu'il vous faut.",
  },
  {
    num: "02",
    title: "Devis clair",
    text: "Un devis détaillé, sans frais cachés. Vous savez exactement à quoi vous attendre avant le début des travaux.",
  },
  {
    num: "03",
    title: "Travail soigné",
    text: "Matériel de qualité, finitions propres et chantier nettoyé en partant. C'est la base, on y tient.",
  },
];

const APropos = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-secondary">
        <div className="container-najma grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Notre histoire</p>
            <h1 className="display-xl text-foreground">
              L'entreprise,<br />
              en <span className="italic-accent">deux mots.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-foreground/75 leading-relaxed">
              {salonInfo.name}, c'est un artisan de proximité installé à
              {" "}{salonInfo.city}. Une équipe sérieuse, à l'écoute, qui prend
              le temps de bien faire les choses. Pas de bla-bla, juste du
              travail soigné.
            </p>
          </div>
        </div>
      </section>

      {/* GRANDE IMAGE + TEXTE */}
      <section className="py-24">
        <div className="container-najma grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <ImagePlaceholder label="Photo de l'artisan ou de l'atelier" ratio="portrait" className="shadow-warm" />
          </div>
          <div className="md:col-span-7 md:pl-12">
            <p className="eyebrow mb-4">L'esprit de la maison</p>
            <h2 className="font-medium text-4xl md:text-5xl leading-tight mb-8">
              Sérieux, <span className="italic-accent">honnête,</span><br />
              et <span className="italic-accent">réactif.</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-5">
              On aime le travail bien fait. On vous accueille bien, on prend
              le temps d'expliquer, et on fait ce qui doit être fait — pas
              plus, pas moins.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Notre force, c'est la <strong>réactivité</strong> : un appel,
              un rendez-vous rapide, un devis sous 48h. Et un suivi personnel
              du début à la fin du chantier.
            </p>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-accent text-secondary-foreground">
        <div className="container-najma">
          <p className="eyebrow text-secondary-foreground/50 mb-6 text-center">Ce qui compte pour nous</p>
          <h2 className="font-medium text-5xl md:text-6xl leading-tight text-center mb-20">
            Trois <span className="italic-accent">choses</span><br />
            simples.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {valeurs.map((v) => (
              <div key={v.num} className="border-t border-border/20 pt-8">
                <p className="font-medium text-5xl text-primary font-light mb-6">{v.num}</p>
                <h3 className="font-medium text-2xl mb-4">{v.title}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGES + CITATION */}
      <section className="py-24">
        <div className="container-najma">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="h-72">
              <ImagePlaceholder label="Réalisation 1" className="h-full" />
            </div>
            <div className="h-72 md:translate-y-12">
              <ImagePlaceholder label="Réalisation 2" className="h-full" />
            </div>
            <div className="h-72">
              <ImagePlaceholder label="Réalisation 3" className="h-full" />
            </div>
          </div>

          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="font-medium text-4xl md:text-5xl leading-tight italic">
              « Un travail bien fait, c'est un client tranquille.
              Et un client tranquille, c'est ce qui fait tourner la maison. »
            </p>
            <footer className="mt-8 eyebrow">— L'équipe</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container-najma text-center">
          <h2 className="font-medium text-4xl md:text-5xl mb-8">
            Envie de nous <span className="italic-accent">rencontrer</span> ?
          </h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-warm transition">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
};

export default APropos;
