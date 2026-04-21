/* ============================================================
   AVIS GOOGLE — NAJMA COIFFURE
   Vrais avis récupérés depuis les profils publics du salon
   (source : agrégateur localitybiz / Google Maps).
   Note globale Google : 4,2 / 5 (71 avis)
   ⚠️ Pour ajouter / modifier un avis, édite simplement le tableau
   ci-dessous. Chaque avis suit le type `Review` défini juste après.
   ============================================================ */

export type Review = {
  id: number;
  author: string;
  initials: string;
  rating: number; // 1 à 5
  date: string;
  text: string;
  service?: string; // type de prestation (optionnel, pour le tag)
};

/* ----- Note moyenne et nombre total d'avis (affichés sur la page Avis) ----- */
export const reviewsStats = {
  averageRating: 4.2,
  totalReviews: 71,
};

/* ----- Liste des avis (vrais avis publics) ----- */
export const reviews: Review[] = [
  {
    id: 1,
    author: "Sajia Kaddouri",
    initials: "SK",
    rating: 5,
    date: "Il y a 7 mois",
    text: "Je suis passée chez Najma Coiffure, j'ai voulu faire un soin à mes cheveux, je lui ai demandé conseil. Elle m'a proposé le soin Botox capillaire qui était le plus adapté à mes cheveux. Une fois le soin posé, j'ai vu un grand changement : plus brillants, réparés et très souples. J'ai lavé mes cheveux au bout de 3 jours et le résultat est juste magnifique, toujours aussi brillants et très faciles à coiffer. Je suis vraiment très satisfaite du travail. Je remercie beaucoup Nadia pour tous les conseils, je reviendrai sans hésiter.",
    service: "Soin Botox capillaire",
  },
  {
    id: 2,
    author: "Faty Maa",
    initials: "FM",
    rating: 5,
    date: "Il y a presque 2 ans",
    text: "Mille mercis à Nadia qui a fait un travail d'enfer en à peine 1h30. Très professionnel, merci.",
    service: "Coiffure",
  },
  {
    id: 3,
    author: "Yasmine Benidir",
    initials: "YB",
    rating: 5,
    date: "Il y a presque 2 ans",
    text: "Ce salon peut me compter comme nouvelle cliente !! Brushing réalisé à la perfection !!!!",
    service: "Brushing",
  },
  {
    id: 4,
    author: "Mounira Paris",
    initials: "MP",
    rating: 5,
    date: "Il y a presque 3 ans",
    text: "Rapide, efficace, et Nadia est super sympa, malgré l'affluence. Elle a toujours le sourire et un mot gentil. Ma mère y va tout le temps et c'est maintenant le salon que je fréquenterai à l'avenir !",
    service: "Cliente fidèle",
  },
  {
    id: 5,
    author: "Caramel Bruxelles",
    initials: "CB",
    rating: 5,
    date: "Il y a presque 3 ans",
    text: "Le service est juste impeccable, Mr Abdel est un vrai coiffeur avec une grande expérience. Sympa, sérieux, gentil, professionnel. Un grand merci.",
    service: "Coupe homme",
  },
  {
    id: 6,
    author: "Françoise Fournials",
    initials: "FF",
    rating: 5,
    date: "Il y a presque 2 ans",
    text: "Ils sont tellement sympathiques, professionnels et les prix sont très corrects.",
    service: "Avis général",
  },
  {
    id: 7,
    author: "Kamilia D.",
    initials: "KD",
    rating: 1,
    date: "Il y a presque 7 mois",
    text: "Franchement l'accueil zéro ! Très déçue. Elle ne prend même pas la peine de te regarder dans les yeux pour répondre à une question et elle parle avec d'autres personnes en même temps. Assez hautaine.",
    service: "Accueil",
  },
  {
    id: 8,
    author: "Za Medj",
    initials: "ZM",
    rating: 1,
    date: "Il y a presque 9 mois",
    text: "Une 1ère fois elle annonce deux prix différents à peine deux mois d'écart sans explication. Et cette fois elle ne regarde même pas la longueur des cheveux de ma fille ni son âge (elle a 10 ans) et annonce le même tarif adulte pour couper simplement des pointes (sans brushing) : 20 €. Je ne recommande pas.",
    service: "Coupe enfant",
  },
  {
    id: 9,
    author: "Shirel Bendayan",
    initials: "SB",
    rating: 1,
    date: "Il y a presque 10 mois",
    text: "Je suis allée chez eux et leur ai demandé un brun cendré avec patine. Pendant 15 minutes personne ne comprenait ce que je voulais. Lorsque je leur ai montré des photos, ils m'ont dit que c'était du blond. N'étant pas convaincue, j'ai préféré rentrer chez moi. Je déconseille.",
    service: "Coloration",
  },
  {
    id: 10,
    author: "Kawthar Abdelhamid",
    initials: "KA",
    rating: 1,
    date: "Il y a presque 11 mois",
    text: "J'étais chez eux pour faire teinture et mèches et je n'étais pas satisfaite de la couleur. 2 semaines après, refait du lissage qui était mal fait. Dès le premier lavage j'étais déçue. C'est du n'importe quoi.",
    service: "Couleur + lissage",
  },
];
