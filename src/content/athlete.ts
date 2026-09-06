import { site } from "./site";

export type Fact = { value: string; label: string };
export type Quality = { title: string; description: string };
export type Objective = { horizon: string; title: string; description: string };

export const athlete = {
  /** Bande de faits sous le hero. */
  facts: [
    { value: "2012", label: "Né à Vevey" },
    { value: "Team Vaud", label: "Swiss Tennis" },
    { value: "Talent régional", label: "Swiss Olympic" },
    { value: "Argent en simple", label: "ICG Hualien 2026" },
  ] satisfies Fact[],

  /** Bande de faits locale de la section Profil. */
  profileFacts: [
    { value: String(site.birthYear), label: site.birthPlace },
    { value: site.categorie, label: `Saison ${site.saison}` },
    { value: "Depuis 2016", label: "Raquette en main à 4 ans" },
  ] satisfies Fact[],

  bio: [
    "Lenart Kadriu est né en 2012 à Vevey. Raquette en main à 4 ans, il joue en U14 pour la saison 2026 et passe en U16 en 2027.",
    `Membre du Team Vaud, cadre vaudois et suprarégional de Swiss Tennis. Titulaire de la carte Talent régional de Swiss Olympic. Licencié au ${site.club}.`,
    "Sur le court, il impose son rythme, garde son calme dans les moments clés et lit vite le jeu adverse. Son objectif : représenter la Suisse aux plus grands rendez-vous internationaux.",
  ],

  tags: ["Swiss Tennis", "Team Vaud", site.club, "Français et anglais"],

  gameStyle: {
    eyebrow: "Style de jeu",
    title: "Un jeu offensif",
    paragraphs: [
      "Lenart pratique un jeu offensif. Il prend l’initiative, garde une intensité constante et pousse l’adversaire à la faute par son rythme.",
      "Il s’adapte à toutes les surfaces et à tout type d’adversaire. Son calme dans les moments décisifs fait la différence dans les fins de match serrées.",
    ],
    qualities: [
      {
        title: "Offensif",
        description: "Initiative, intensité, pression constante sur l’adversaire.",
      },
      {
        title: "Tactique",
        description: "Intelligence de jeu, lecture rapide des adversaires.",
      },
      {
        title: "Polyvalent",
        description: "Compétitif sur dur, terre battue et gazon.",
      },
    ] satisfies Quality[],
  },

  objectives: {
    eyebrow: "Horizon",
    title: "Saison 2026-2027 : objectifs",
    items: [
      {
        horizon: "2026-2027",
        title: "Court terme",
        description:
          "Passage en U16, premiers tournois ITF Juniors et présence régulière sur le circuit Tennis Europe.",
      },
      {
        horizon: "2028-2030",
        title: "Moyen terme",
        description:
          "Devenir un leader suisse de sa génération et représenter la Suisse dans les compétitions internationales majeures.",
      },
      {
        horizon: "Après 2030",
        title: "Long terme",
        description:
          "Intégrer le circuit professionnel avec un encadrement complet.",
      },
    ] satisfies Objective[],
  },
};
