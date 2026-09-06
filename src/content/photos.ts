export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Point focal pour object-position (les visages sont en haut des portraits). */
  focus?: "top" | "center" | "bottom";
  /** Légende affichée sous la photo quand le composant le permet. */
  caption?: string;
  /** Occupe deux rangées dans la grille de galerie. */
  tall?: boolean;
};

/** Poster de la boucle vidéo du hero (extrait du film 2026). */
export const heroPoster: Photo = {
  src: "/assets/hero-poster.jpg",
  alt: "Lenart Kadriu en préparation de coup droit sur un court couvert",
  width: 1280,
  height: 576,
  focus: "center",
};

/** Image d’attente du lecteur du film 2026. */
export const filmPoster: Photo = {
  src: "/assets/film-2026-poster.jpg",
  alt: "Lenart Kadriu à l’entraînement, son entraîneur en arrière-plan",
  width: 1280,
  height: 576,
  focus: "center",
};

/** Portrait provisoire (fond HEAD), recadré 3:4 sur le visage. */
export const portrait: Photo = {
  src: "/assets/portrait-head.jpg",
  alt: "Lenart Kadriu, portrait en tenue de match devant une bâche HEAD",
  width: 1200,
  height: 1600,
  focus: "top",
};

export const debuts: Photo = {
  src: "/assets/debuts-4-ans.jpg",
  alt: "Lenart à 4 ans, raquette et médaille autour du cou, sur un court de Vevey",
  width: 1500,
  height: 2000,
  focus: "top",
  caption: "Raquette en main à 4 ans, Vevey, 2016",
};

export const action: Photo = {
  src: "/assets/action-gradignan.jpg",
  alt: "Lenart Kadriu en match sur terre battue au tournoi de Gradignan",
  width: 1330,
  height: 1222,
  focus: "center",
};

/** Galerie de la home : six photos, aucune cellule vide à 390, 768 et 1440. */
export const galerie: Photo[] = [
  {
    src: "/assets/victoire-indoor.jpg",
    alt: "Lenart Kadriu index levé, coupe en main, après une victoire en salle",
    width: 1368,
    height: 1824,
    focus: "top",
    tall: true,
  },
  {
    src: "/assets/remise-prix-vaud.jpg",
    alt: "Lenart Kadriu avec sa coupe devant le mur des partenaires lors d’une remise de prix vaudoise",
    width: 1912,
    height: 2000,
    focus: "center",
  },
  {
    src: "/assets/tennis-europe-croatie.jpg",
    alt: "Lenart Kadriu et sa coupe devant les drapeaux de la Croatie et de l’Union européenne, tournoi Tennis Europe",
    width: 1109,
    height: 1600,
    focus: "center",
  },
  {
    src: "/assets/trophee-realsport.jpg",
    alt: "Lenart Kadriu avec son trophée sur un court RealSport",
    width: 1368,
    height: 1824,
    focus: "top",
    tall: true,
  },
  {
    src: "/assets/istarska-riviera.jpg",
    alt: "Lenart Kadriu, coupe en main, devant la bâche du tournoi Istarska Riviera",
    width: 1172,
    height: 1585,
    focus: "top",
  },
  {
    src: "/assets/stills/film-coup-droit-arche.jpg",
    alt: "Lenart Kadriu frappe un coup droit sous la charpente d’un court couvert",
    width: 1280,
    height: 576,
    focus: "center",
  },
];

/** Images fixes du film 2026 (photos d’action de secours). */
export const stills: Photo[] = [
  {
    src: "/assets/stills/film-coup-droit.jpg",
    alt: "Lenart Kadriu en plein coup droit à l’entraînement",
    width: 1280,
    height: 576,
    focus: "center",
  },
  {
    src: "/assets/stills/film-preparation.jpg",
    alt: "Lenart Kadriu en position d’attente, raquette levée",
    width: 1280,
    height: 576,
    focus: "center",
  },
];

export function focusToPosition(focus: Photo["focus"]): string {
  switch (focus) {
    case "top":
      return "50% 12%";
    case "bottom":
      return "50% 88%";
    default:
      return "50% 50%";
  }
}
