/* ============================================================
   GRILLE DE PRIX NAJMA COIFFURE
   Prix indicatifs basés sur les standards de salons en région
   parisienne avec spécialité coloration.
   ⚠️ À ajuster avec les VRAIS prix du salon.
   ============================================================ */

export type PriceItem = {
  name: string;
  price: string;
  description?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: "femmes",
    title: "Femmes",
    subtitle: "Coupes, brushings et mises en beauté",
    items: [
      { name: "Coupe + brushing", price: "35 €", description: "Shampoing, coupe et brushing" },
      { name: "Brushing seul", price: "22 €", description: "Selon longueur" },
      { name: "Coupe enfant fille (-12 ans)", price: "18 €" },
      { name: "Chignon / coiffure événement", price: "à partir de 55 €", description: "Mariage, soirée" },
      { name: "Lissage permanent", price: "à partir de 120 €", description: "Selon longueur et densité" },
    ],
  },
  {
    id: "hommes",
    title: "Hommes",
    subtitle: "Coupes classiques et tendance",
    items: [
      { name: "Coupe homme", price: "20 €", description: "Shampoing inclus" },
      { name: "Coupe + barbe", price: "28 €" },
      { name: "Taille de barbe", price: "12 €" },
      { name: "Coupe enfant garçon (-12 ans)", price: "15 €" },
      { name: "Coupe + couleur naturelle", price: "à partir de 45 €" },
    ],
  },
  {
    id: "couleur",
    title: "Couleur & Coloration",
    subtitle: "Notre spécialité — soin et expertise",
    items: [
      { name: "Couleur racines", price: "à partir de 40 €" },
      { name: "Couleur complète", price: "à partir de 55 €", description: "Sur cheveux longs : +10 €" },
      { name: "Balayage classique", price: "à partir de 75 €" },
      { name: "Balayage californien", price: "à partir de 95 €" },
      { name: "Mèches complètes", price: "à partir de 80 €" },
      { name: "Patine / gloss", price: "à partir de 30 €", description: "Raviveur de couleur" },
    ],
  },
  {
    id: "soins",
    title: "Soins capillaires",
    subtitle: "Pour des cheveux en pleine santé",
    items: [
      { name: "Soin profond Olaplex", price: "25 €", description: "Réparation des fibres" },
      { name: "Masque hydratant premium", price: "18 €" },
      { name: "Soin botox capillaire", price: "à partir de 60 €" },
      { name: "Diagnostic capillaire offert", price: "Gratuit", description: "Sur rendez-vous" },
    ],
  },
];
