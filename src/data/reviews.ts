/* ============================================================
   AVIS GOOGLE — NAJMA COIFFURE
   Avis représentatifs basés sur le profil du salon
   (accueil chaleureux, expertise coloration, mixte).
   ⚠️ À remplacer/compléter par les vrais avis Google Maps.
   Pour ajouter un avis, ajoute simplement un objet dans le tableau.
   ============================================================ */

export type Review = {
  id: number;
  author: string;
  initials: string;
  rating: number; // 1 à 5
  date: string;
  text: string;
  service?: string; // type de prestation (optionnel)
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    initials: "SM",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Salon vraiment top ! Najma a fait un balayage magnifique sur mes cheveux foncés, exactement ce que je voulais. Très à l'écoute et professionnelle. Je recommande à 100% !",
    service: "Balayage",
  },
  {
    id: 2,
    author: "Karim B.",
    initials: "KB",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Coupe homme nickel, le coiffeur prend le temps de bien comprendre ce qu'on veut. Ambiance familiale et chaleureuse. Mon salon de référence à Noisy.",
    service: "Coupe homme",
  },
  {
    id: 3,
    author: "Aïcha L.",
    initials: "AL",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "J'ai des cheveux frisés très épais et c'est rare de trouver un salon qui les comprend vraiment. Najma sait y faire, ma coupe est parfaite et tient super bien.",
    service: "Coupe cheveux frisés",
  },
  {
    id: 4,
    author: "Mélissa D.",
    initials: "MD",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Très bonne expérience pour ma coloration. Le résultat est exactement comme sur la photo que j'avais montrée. Petit moins pour l'attente mais le travail vaut le coup.",
    service: "Coloration",
  },
  {
    id: 5,
    author: "Fatou N.",
    initials: "FN",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "J'amène mes deux filles depuis des années. Patience avec les enfants, prix corrects et toujours un résultat impeccable. Merci à toute l'équipe !",
    service: "Coupe enfant",
  },
  {
    id: 6,
    author: "Yasmine R.",
    initials: "YR",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Mon mariage approchait, j'ai testé une coiffure d'essai puis le jour J. Tout était sublime, j'ai eu énormément de compliments. Un grand merci !",
    service: "Coiffure mariage",
  },
  {
    id: 7,
    author: "Inès K.",
    initials: "IK",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Lissage brésilien top, ça fait 4 mois et mes cheveux sont encore impeccables. Salon propre, accueil au top.",
    service: "Lissage",
  },
  {
    id: 8,
    author: "Thomas G.",
    initials: "TG",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Coupe + barbe parfaite, à un bon prix. Je reviendrai sans hésiter.",
    service: "Coupe + barbe",
  },
  {
    id: 9,
    author: "Léa P.",
    initials: "LP",
    rating: 5,
    date: "Il y a 5 jours",
    text: "Première fois et je suis conquise ! Conseils sur la coloration, soin Olaplex offert avec, mes cheveux n'ont jamais été aussi doux. Je reviens c'est sûr.",
    service: "Couleur + soin",
  },
  {
    id: 10,
    author: "Samira H.",
    initials: "SH",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Cela fait 3 ans que je viens chez Najma, jamais déçue. Un vrai savoir-faire et une équipe en or.",
    service: "Cliente fidèle",
  },
];
