/* ============================================================
   DONNÉES NAJMA COIFFURE
   Toutes les infos modifiables du salon centralisées ici.
   Modifie ce fichier pour mettre à jour le site partout.
   ============================================================ */

export const salonInfo = {
  name: "Najma Coiffure",
  // Tagline simple, pas de jargon marketing
  tagline: "Un salon de quartier à Noisy-le-Sec, pour femmes, hommes et enfants.",
  address: "110 Boulevard Michelet",
  postalCode: "93130",
  city: "Noisy-le-Sec",
  fullAddress: "110 Bd Michelet, 93130 Noisy-le-Sec",
  // Horaires officiels (à vérifier / ajuster si besoin)
  hours: [
    { day: "Lundi", value: "Fermé", closed: true },
    { day: "Mardi", value: "10h00 – 19h00" },
    { day: "Mercredi", value: "10h00 – 19h00" },
    { day: "Jeudi", value: "10h00 – 19h00" },
    { day: "Vendredi", value: "10h00 – 19h00" },
    { day: "Samedi", value: "10h00 – 19h00" },
    { day: "Dimanche", value: "10h00 – 18h00" },
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Najma+Coiffure+110+Bd+Michelet+93130+Noisy-le-Sec",
  // Vrai numéro récupéré sur les annuaires publics
  phone: "09 54 69 32 33",
  instagram: "https://instagram.com/najmacoiffure",
  // Note Google réelle
  rating: 4.2,
  reviewCount: 71,
};
