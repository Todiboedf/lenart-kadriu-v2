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

/** Portrait du profil : photo récente fournie par la famille (novembre 2026), format 3:4. */
export const portrait: Photo = {
  src: "/assets/portrait-terre-battue.jpg",
  alt: "Lenart Kadriu en tenue blanche, trophée en main, au bord d’un court en terre battue",
  width: 1500,
  height: 2000,
  focus: "top",
};

/** Ses débuts à 4 ans, photo gardée à la demande de la famille. */
export const debuts: Photo = {
  src: "/assets/debuts-4-ans.jpg",
  alt: "Lenart à 4 ans, raquette et médaille autour du cou, sur un court de Vevey",
  width: 1500,
  height: 2000,
  focus: "top",
  caption: "Raquette en main à 4 ans, Vevey, 2016",
};

/** Photo de la section Style de jeu : photo récente fournie par la famille (novembre 2026). */
export const action: Photo = {
  src: "/assets/remise-prix-zurich.jpg",
  alt: "Lenart Kadriu, trophée et diplôme en main, devant le panneau du Regionalverband Zürich Tennis",
  width: 1641,
  height: 2000,
  focus: "top",
};

/**
 * Galerie de la home. Les anciennes photos (Lenart vers 12 ans) sont retirées à la demande
 * de la famille (novembre 2026).
 * TODO(Guillaume) : photos récentes à fournir. La section reste masquée tant que la liste
 * est vide. Prévoir 4 photos, ou 6 dont 2 "tall", pour une grille sans cellule vide.
 */
export const galerie: Photo[] = [];

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
