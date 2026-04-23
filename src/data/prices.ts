/* ============================================================
   GRILLE DE TARIFS — VERSION DÉMO
   Tarifs indicatifs, à adapter selon le métier de l'artisan
   (plomberie, électricité, garage, menuiserie, etc.).
   ⚠️ Pour ajouter/modifier une prestation : éditer le tableau
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
  /* ---------- INTERVENTIONS COURANTES ---------- */
  {
    id: "interventions",
    title: "Interventions courantes",
    subtitle: "Les prestations les plus demandées",
    items: [
      { name: "Déplacement + diagnostic", price: "à partir de 45 €", description: "Offert si travaux acceptés" },
      { name: "Petite réparation", price: "à partir de 80 €", description: "Main d'œuvre, hors fournitures" },
      { name: "Intervention standard", price: "à partir de 150 €" },
      { name: "Devis détaillé sur site", price: "gratuit" },
    ],
  },
  /* ---------- DÉPANNAGE ---------- */
  {
    id: "depannage",
    title: "Dépannage",
    subtitle: "Réactivité 7j/7 sur votre secteur",
    items: [
      { name: "Dépannage en journée", price: "à partir de 90 €" },
      { name: "Dépannage urgent (<2h)", price: "à partir de 120 €" },
      { name: "Intervention week-end", price: "sur devis" },
    ],
  },
  /* ---------- TRAVAUX & POSE ---------- */
  {
    id: "travaux",
    title: "Travaux & pose",
    subtitle: "Devis personnalisé sous 48h",
    items: [
      { name: "Pose simple", price: "à partir de 200 €" },
      { name: "Rénovation pièce complète", price: "sur devis" },
      { name: "Mise aux normes", price: "sur devis", description: "Selon état de l'installation" },
    ],
  },
  /* ---------- ENTRETIEN & MAINTENANCE ---------- */
  {
    id: "entretien",
    title: "Entretien & maintenance",
    subtitle: "Pour préserver vos installations dans le temps",
    items: [
      { name: "Visite d'entretien annuelle", price: "à partir de 110 €" },
      { name: "Contrat de maintenance", price: "sur devis", description: "Forfait annuel adapté à vos besoins" },
    ],
  },
];
