/* ============================================================
   GRILLE DE PRIX NAJMA COIFFURE
   Tarifs relevés sur la vitrine du salon (110 Bd Michelet,
   Noisy-le-Sec). Prix "à partir de" — TTC.
   ⚠️ Pour ajouter/modifier un service : éditer le tableau
   `items` de la catégorie correspondante ci-dessous.
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
  /* ---------- SIGNATURES (mises en avant en vitrine) ---------- */
  {
    id: "signatures",
    title: "Les incontournables",
    subtitle: "Les tarifs phares affichés en vitrine",
    items: [
      { name: "Coupe + shampoing + brushing", price: "à partir de 13 €" },
      { name: "Couleur", price: "à partir de 25 €" },
      { name: "Mèche", price: "à partir de 30 €" },
      { name: "Couleur + mèches", price: "à partir de 50 €" },
      { name: "Lissage brésilien", price: "à partir de 60 €", description: "Selon longueur et densité" },
    ],
  },
  /* ---------- FEMMES ---------- */
  {
    id: "femmes",
    title: "Femmes",
    subtitle: "Coupes, brushings et mises en beauté",
    items: [
      { name: "Coupe + shampoing + brushing", price: "à partir de 13 €" },
      { name: "Brushing seul", price: "à partir de 10 €", description: "Selon longueur" },
      { name: "Chignon / coiffure événement", price: "sur devis", description: "Mariage, soirée, henné" },
    ],
  },
  /* ---------- HOMMES ---------- */
  {
    id: "hommes",
    title: "Hommes",
    subtitle: "Coupes classiques et tendance",
    items: [
      { name: "Coupe homme", price: "à partir de 13 €", description: "Shampoing inclus" },
      { name: "Coupe + barbe", price: "sur devis" },
      { name: "Coupe enfant", price: "à partir de 10 €" },
    ],
  },
  /* ---------- COULEUR (spécialité du salon) ---------- */
  {
    id: "couleur",
    title: "Couleur & Coloration",
    subtitle: "La spécialité de Najma Coiffure",
    items: [
      { name: "Couleur", price: "à partir de 25 €" },
      { name: "Mèche", price: "à partir de 30 €" },
      { name: "Couleur + mèches", price: "à partir de 50 €" },
      { name: "Balayage", price: "sur devis", description: "Selon technique et longueur" },
    ],
  },
  /* ---------- LISSAGE & SOINS ---------- */
  {
    id: "soins",
    title: "Lissage & Soins",
    subtitle: "Pour des cheveux disciplinés et en bonne santé",
    items: [
      { name: "Lissage brésilien", price: "à partir de 60 €", description: "Selon longueur et densité" },
      { name: "Soin profond", price: "sur devis", description: "Masque réparateur en complément" },
    ],
  },
];
