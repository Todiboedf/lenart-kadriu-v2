export type SocialLink = { label: string; url: string };

export const site = {
  name: "Lenart Kadriu",
  monogram: "LK",
  tagline: "Tennis, Suisse",
  title: "Lenart Kadriu, tennis, Suisse",
  description:
    "Lenart Kadriu, joueur de tennis suisse né en 2012 à Vevey, membre du Team Vaud. Médaille d’argent en simple aux International Children’s Games Hualien 2026. Parcours, palmarès et partenariats.",
  url: "https://www.lenartkadriu.com",
  email: "ghaasmanagement@gmail.com",
  phone: "+41 79 566 74 10",
  phoneHref: "tel:+41795667410",
  categorie: "U14",
  saison: "2026",
  categorieSaison: "U14, saison 2026",
  // Classement Swiss Tennis, source : coach de Lenart, message du 6 septembre 2026.
  classement: "R1 (dès octobre 2026)",
  // TODO(Guillaume) : intitulé exact du club à confirmer, affiché tel quel.
  club: "Tennis Club Nestlé, Mont-Pèlerin",
  birthYear: 2012,
  birthPlace: "Vevey",
  manager: {
    name: "Guillaume Haas",
    company: "GHaas Management SA",
    url: "https://www.ghaasmanagement.ch/",
  },
  social: [] as SocialLink[],
  locale: "fr_CH",
  nav: {
    links: [
      { label: "Profil", id: "profil" },
      { label: "Palmarès", id: "palmares" },
      { label: "Hualien 2026", id: "hualien" },
      { label: "Galerie", id: "galerie" },
      { label: "Partenaires", id: "partenaires" },
    ],
    cta: { label: "Devenir partenaire", href: "/sponsoring" },
    homeLabel: "Accueil, Lenart Kadriu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    skipLink: "Aller au contenu",
  },
  footer: {
    line: "Lenart Kadriu, tennis, Vevey",
    managedBy: "Géré par",
  },
  film: {
    src: "/assets/film-2026.mp4",
    eyebrow: "Film",
    title: "Le film 2026",
    description:
      "Une minute à l’entraînement avec son entraîneur, Yann Marti. Réalisation RNT Visuals.",
    playLabel: "Lire le film, 1 min",
    durationSeconds: 60,
  },
  hero: {
    loopMp4: "/assets/hero-loop.mp4",
    loopWebm: "/assets/hero-loop.webm",
    subtitle:
      "Champion suisse d’été 2026 en double, médaille d’argent en simple aux ICG Hualien 2026",
    primaryCta: { label: "Devenir partenaire", href: "/sponsoring" },
    secondaryCta: { label: "Voir le parcours", href: "#profil" },
  },
};
