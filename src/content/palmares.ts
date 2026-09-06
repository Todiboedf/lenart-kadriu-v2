export type Resultat =
  | "Vainqueur"
  | "Finaliste"
  | "Demi-finaliste"
  | "3e"
  | (string & Record<never, never>);

export type PalmaresEntry = {
  annee?: number;
  competition: string;
  lieu: string;
  pays: string;
  resultat: Resultat;
  /** Précision affichée après le résultat (médaille, nombre de titres). */
  note?: string;
  format: "Simple" | "Double";
  niveau: "Suisse" | "Tennis Europe" | "ICG";
};

export const palmares = {
  eyebrow: "Palmarès",
  title: "Palmarès",
  entries: [
    {
      annee: 2026,
      competition: "International Children’s Games",
      lieu: "Hualien",
      pays: "Taïwan",
      resultat: "Finaliste",
      note: "médaille d’argent",
      format: "Simple",
      niveau: "ICG",
    },
    {
      annee: 2026,
      competition: "International Children’s Games",
      lieu: "Hualien",
      pays: "Taïwan",
      resultat: "3e",
      note: "médaille de bronze",
      format: "Double",
      niveau: "ICG",
    },
    {
      competition: "Championnats vaudois",
      lieu: "Vaud",
      pays: "Suisse",
      resultat: "Vainqueur",
      note: "4 titres",
      format: "Simple",
      niveau: "Suisse",
    },
    {
      annee: 2025,
      competition: "TC Gland, Road to Montreux",
      lieu: "Gland",
      pays: "Suisse",
      resultat: "Vainqueur",
      format: "Simple",
      niveau: "Suisse",
    },
    {
      competition: "Tournois nationaux",
      lieu: "Suisse",
      pays: "Suisse",
      resultat: "Vainqueur",
      note: "plusieurs victoires",
      format: "Simple",
      niveau: "Suisse",
    },
    {
      competition: "Tennis Europe",
      lieu: "Split",
      pays: "Croatie",
      resultat: "Vainqueur",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Tirana",
      pays: "Albanie",
      resultat: "Finaliste",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Shkodra",
      pays: "Albanie",
      resultat: "Finaliste",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Poreč",
      pays: "Croatie",
      resultat: "Finaliste",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Poreč",
      pays: "Croatie",
      resultat: "3e",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      // 4 matchs gagnés en simple (pas 4 titres), précision de Guillaume du 6 septembre 2026.
      competition: "Tournoi Tennis Europe catégorie 1",
      lieu: "Gradignan",
      pays: "France",
      resultat: "4 victoires en simple",
      format: "Simple",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Podgorica",
      pays: "Monténégro",
      resultat: "Finaliste",
      format: "Double",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tennis Europe",
      lieu: "Tirana",
      pays: "Albanie",
      resultat: "3e",
      format: "Double",
      niveau: "Tennis Europe",
    },
    {
      competition: "Tournoi Europe",
      lieu: "France",
      pays: "France",
      resultat: "Vainqueur",
      note: "plusieurs victoires",
      format: "Double",
      niveau: "Tennis Europe",
    },
  ] satisfies PalmaresEntry[],
};
