import { site } from "./site";

export type Fact = { value: string; label: string };
export type Quality = { title: string; description: string };
export type Objective = { horizon: string; title: string; description: string };

export const athlete = {
  /** Bande de faits sous le hero. */
  facts: [
    { value: "Cadre Espoirs", label: "Swiss Tennis" },
    { value: "Champion suisse 2026", label: "Double" },
    { value: "Argent en simple", label: "ICG Hualien 2026" },
    { value: "Team Vaud", label: "Cadre vaudois" },
  ] satisfies Fact[],

  /** Bande de faits locale de la section Profil. */
  profileFacts: [
    { value: String(site.birthYear), label: site.birthPlace },
    { value: "Talent régional", label: "Carte Swiss Olympic" },
    { value: site.classement, label: "Classement Swiss Tennis" },
  ] satisfies Fact[],

  bio: [
    "Lenart Kadriu est un junior espoir du tennis suisse, né à Vevey. Raquette en main dès 4 ans, il s’y consacre pleinement depuis.",
    "Membre du cadre Espoirs de Swiss Tennis et du Team Vaud. Classé R1 dès octobre 2026, proche de N4.",
    `Titulaire de la carte Talent régional de Swiss Olympic. Licencié au ${site.club}.`,
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
