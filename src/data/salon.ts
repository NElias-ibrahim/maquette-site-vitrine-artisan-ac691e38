/* ============================================================
   DONNÉES NAJMA COIFFURE
   Toutes les infos modifiables du salon centralisées ici.
   Modifie ce fichier pour mettre à jour le site partout.
   ============================================================ */

export const salonInfo = {
  name: "Najma Coiffure",
  tagline: "Le salon de quartier qui sublime tous les cheveux.",
  address: "110 Boulevard Michelet",
  postalCode: "93130",
  city: "Noisy-le-Sec",
  fullAddress: "110 Bd Michelet, 93130 Noisy-le-Sec",
  // Horaires officiels (source : PagesJaunes)
  hours: [
    { day: "Lundi", value: "Fermé", closed: true },
    { day: "Mardi", value: "10h00 – 19h00" },
    { day: "Mercredi", value: "10h00 – 19h00" },
    { day: "Jeudi", value: "10h00 – 19h00" },
    { day: "Vendredi", value: "10h00 – 19h00" },
    { day: "Samedi", value: "10h00 – 19h00" },
    { day: "Dimanche", value: "10h00 – 18h00" },
  ],
  // Lien Google Maps direct
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Najma+Coiffure+110+Bd+Michelet+93130+Noisy-le-Sec",
  // Téléphone — à mettre à jour avec le vrai numéro du salon
  phone: "01 00 00 00 00",
  // Réseaux sociaux — remplace par les vrais liens
  instagram: "https://instagram.com/najmacoiffure",
  // Note Google moyenne (à mettre à jour selon les avis réels)
  rating: 4.6,
  reviewCount: 87,
};
