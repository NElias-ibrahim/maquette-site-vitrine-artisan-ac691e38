/* ============================================================
   AVIS CLIENTS — VERSION DÉMO
   Avis fictifs et crédibles, présentés à titre d'exemple
   sur le site démo.
   ⚠️ Pour personnaliser : remplacer chaque entrée du tableau
   ci-dessous par les vrais avis Google de l'artisan.
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
  averageRating: 4.9,
  totalReviews: 128,
};

/* ----- Liste d'avis exemples (à remplacer par les vrais) ----- */
export const reviews: Review[] = [
  {
    id: 1,
    author: "Camille D.",
    initials: "CD",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Intervention rapide et propre. Le devis a été respecté à l'euro près. Artisan sérieux, je recommande sans hésiter.",
    service: "Dépannage",
  },
  {
    id: 2,
    author: "Julien M.",
    initials: "JM",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Très bon contact dès l'appel. Le rendez-vous a été pris rapidement et le travail est nickel. Merci pour le sérieux.",
    service: "Travaux",
  },
  {
    id: 3,
    author: "Sophie R.",
    initials: "SR",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Pro, à l'écoute et de bons conseils. Il a pris le temps de bien expliquer ce qu'il faisait, ça change.",
    service: "Diagnostic",
  },
  {
    id: 4,
    author: "Karim B.",
    initials: "KB",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Excellent rapport qualité-prix. Travail soigné, ponctuel et chantier laissé propre en partant. Top.",
    service: "Pose",
  },
  {
    id: 5,
    author: "Élodie F.",
    initials: "EF",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Réactif, honnête sur les délais et le tarif. C'est devenu mon artisan attitré pour la maison.",
    service: "Cliente fidèle",
  },
  {
    id: 6,
    author: "Thomas P.",
    initials: "TP",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Appelé en urgence un samedi, il est venu dans l'heure. Vraiment dépanné, problème réglé proprement.",
    service: "Urgence",
  },
  {
    id: 7,
    author: "Léa V.",
    initials: "LV",
    rating: 5,
    date: "Il y a 3 mois",
    text: "Devis clair, pas de mauvaise surprise. Le résultat est à la hauteur, je suis ravie.",
    service: "Rénovation",
  },
  {
    id: 8,
    author: "Marc T.",
    initials: "MT",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Quelqu'un de confiance, ce qui n'est pas rien. Travail bien fait, conseils utiles. Merci.",
    service: "Maintenance",
  },
  {
    id: 9,
    author: "Aïcha L.",
    initials: "AL",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Super pro, ponctuel et très sympa. Je recommande à tout mon entourage.",
    service: "Intervention",
  },
];
