/* ============================================================
   DONNÉES TEMPLATE — VERSION DÉMO
   Site démo générique destiné à être présenté à des artisans
   (plomberie, électricité, garage, menuiserie, etc.).
   👉 Toutes les valeurs ci-dessous sont des PLACEHOLDERS.
   Remplace simplement le texte pour personnaliser le site
   pour un commerce réel.
   ============================================================ */

export const salonInfo = {
  name: "Votre Entreprise",
  // Description courte et directe
  tagline: "Artisan de proximité — interventions rapides et travail soigné.",
  address: "00 Rue de l'Exemple",
  postalCode: "00000",
  city: "Votre Ville",
  fullAddress: "00 Rue de l'Exemple, 00000 Votre Ville",
  // Horaires d'ouverture (modifiables)
  hours: [
    { day: "Lundi", value: "8h00 – 18h00" },
    { day: "Mardi", value: "8h00 – 18h00" },
    { day: "Mercredi", value: "8h00 – 18h00" },
    { day: "Jeudi", value: "8h00 – 18h00" },
    { day: "Vendredi", value: "8h00 – 18h00" },
    { day: "Samedi", value: "9h00 – 13h00" },
    { day: "Dimanche", value: "Fermé", closed: true },
  ],
  googleMapsUrl: "https://www.google.com/maps",
  // Numéro de démo
  phone: "01 23 45 67 89",
  instagram: "https://instagram.com/",
  // Note moyenne fictive
  rating: 4.9,
  reviewCount: 128,
  // Métier affiché à côté du logo dans la nav
  trade: "Artisan",
};
