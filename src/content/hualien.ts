import type { Photo } from "./photos";

export type HualienResult = {
  epreuve: string;
  medaille: "Or" | "Argent" | "Bronze";
  detail: string;
};

export const hualien = {
  eyebrow: "Hualien 2026",
  title: "International Children’s Games, Hualien 2026",
  shortName: "ICG Hualien 2026",
  organizer: {
    name: "International Children’s Games",
    url: "https://icgames.org/",
  },
  location: { city: "Hualien", country: "Taïwan", countryCode: "TW" },
  startDate: "2026-08-01",
  endDate: "2026-08-06",
  datesLabel: "du 1er au 6 août 2026",
  description: [
    "Du 1er au 6 août 2026, Lenart a représenté la Ville de Vevey aux International Children’s Games de Hualien (Taïwan), 58e édition des Jeux internationaux des enfants.",
    "Plus de 1 500 athlètes de 12 à 15 ans, venus de villes du monde entier, y ont concouru dans huit sports, dont le tennis.",
    "Lenart a remporté la médaille d’argent en simple et la médaille de bronze en double.",
  ],
  resultatsLabel: "Résultats",
  resultats: [
    {
      epreuve: "Simple garçons",
      medaille: "Argent",
      detail: "2e place, médaille d’argent",
    },
    {
      epreuve: "Double garçons",
      medaille: "Bronze",
      detail: "Médaille de bronze",
    },
  ] satisfies HualienResult[],
  /** Aucune photo de Hualien disponible pour l’instant : le bloc reste masqué tant que la liste est vide. */
  photos: [] as Photo[],
};
