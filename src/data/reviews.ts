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
    author: "Lina B.",
    initials: "LB",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Super salon ! Nadia m'a fait une couleur magnifique, exactement ce que je voulais. Très à l'écoute et de bons conseils. Je recommande vivement.",
    service: "Coloration",
  },
  {
    id: 8,
    author: "Mehdi A.",
    initials: "MA",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Coupe homme nickel, rapide et soignée. Abdel prend le temps de bien faire et le résultat est top à chaque fois. Salon de quartier comme on les aime.",
    service: "Coupe homme",
  },
  {
    id: 9,
    author: "Aïcha M.",
    initials: "AM",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "J'ai des cheveux frisés épais et c'est rare de trouver un salon qui sait les travailler. Ici, ils savent. Coupe parfaite, je suis ravie.",
    service: "Cheveux frisés",
  },
  {
    id: 10,
    author: "Sonia K.",
    initials: "SK",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Très bon accueil, ambiance familiale. J'ai fait un lissage, le résultat tient bien et mes cheveux sont restés en bonne santé. Merci à toute l'équipe.",
    service: "Lissage",
  },
];
