export type Tier = {
  name: "Bronze" | "Silver" | "Gold";
  price: string;
  includes: string[];
};

export type Argument = { title: string; description: string };

export type Support = {
  label: string;
  tiers: Array<Tier["name"]>;
};

export const sponsoring = {
  hero: {
    eyebrow: "Sponsoring",
    title: "Devenez partenaire de Lenart Kadriu",
    paragraph:
      "Lenart Kadriu est un junior espoir du tennis suisse, membre du cadre Espoirs de Swiss Tennis et du Team Vaud, titulaire de la carte Talent régional de Swiss Olympic. Aux International Children’s Games de Hualien 2026, avec la délégation de la Ville de Vevey, il a remporté l’argent en simple et le bronze en double. La saison 2026-2027 marque son passage en U16.",
    primaryCta: { label: "Recevoir le dossier", subject: "Dossier sponsors Lenart Kadriu" },
    secondaryCta: { label: "Voir les offres", href: "#offres" },
  },

  why: {
    eyebrow: "Pourquoi Lenart",
    title: "Quatre raisons de s’engager",
    arguments: [
      {
        title: "Champion suisse d’été 2026 en double, argent en simple aux ICG Hualien 2026",
        description:
          "Titre national en double aux Championnats suisses d’été 2026. Sélectionné par la Ville de Vevey pour les International Children’s Games, 58e édition, du 1er au 6 août 2026 : argent en simple, bronze en double.",
      },
      {
        title: "Un espoir du tennis suisse",
        description:
          "Nombreux trophées au niveau cantonal, national, européen et international.",
      },
      {
        title: "Un encadrement officiel",
        description:
          "Membre du Team Vaud et du cadre Espoirs de Swiss Tennis, titulaire de la carte Talent régional de Swiss Olympic.",
      },
      {
        title: "Un équipementier de référence",
        description:
          "Lenart joue avec HEAD, son équipementier, et s’entraîne au sein d’une structure suivie par GHaas Management SA.",
      },
    ] satisfies Argument[],
  },

  offers: {
    eyebrow: "Offres",
    title: "Trois niveaux de partenariat",
    intro:
      "Chaque partenariat est construit avec Guillaume Haas autour de la saison 2026-2027. Les montants sont communiqués sur demande.",
    ctaLabel: "Demander ce niveau",
    subjectPrefix: "Partenariat Lenart Kadriu, niveau",
    tiers: [
      {
        name: "Bronze",
        price: "Sur demande",
        includes: [
          "Logo sur le site officiel lenartkadriu.com",
          "Remerciement nominatif sur les réseaux sociaux",
          "Mention dans le dossier de presse",
          "1 post social dédié par saison",
        ],
      },
      {
        name: "Silver",
        price: "Sur demande",
        includes: [
          "Inclut l’ensemble du niveau Bronze",
          "Logo sur la tenue d’entraînement et le sac de sport",
          "2 posts sociaux dédiés et 1 story par saison",
          "Mention visuelle dans les captations vidéo",
          "Accès privilégié aux résultats et aux actualités",
        ],
      },
      {
        name: "Gold",
        price: "Sur demande",
        includes: [
          "Inclut l’ensemble du niveau Silver",
          "Logo sur la tenue de match, haute visibilité",
          "1 événement partenaire par an (rencontre ou clinic)",
          "Reporting trimestriel (portée, presse, audience)",
          "Présence dans les communiqués et le dossier de presse",
        ],
      },
    ] satisfies Tier[],
  },

  supports: {
    eyebrow: "Visibilité",
    title: "Où apparaît votre marque",
    intro: "Supports de visibilité par niveau de partenariat.",
    items: [
      { label: "Site officiel lenartkadriu.com", tiers: ["Bronze", "Silver", "Gold"] },
      { label: "Réseaux sociaux (posts et stories)", tiers: ["Bronze", "Silver", "Gold"] },
      { label: "Dossier de presse", tiers: ["Bronze", "Silver", "Gold"] },
      { label: "Tenue d’entraînement", tiers: ["Silver", "Gold"] },
      { label: "Sac de sport", tiers: ["Silver", "Gold"] },
      { label: "Captations vidéo", tiers: ["Silver", "Gold"] },
      { label: "Tenue de match", tiers: ["Gold"] },
      { label: "Communiqués", tiers: ["Gold"] },
      { label: "Événement partenaire annuel", tiers: ["Gold"] },
      { label: "Reporting trimestriel", tiers: ["Gold"] },
    ] satisfies Support[],
  },

  partners: {
    eyebrow: "Partenaires actuels",
    title: "Ils accompagnent Lenart",
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre partenariat",
    responseTime: "Réponse sous 48 h",
    subject: "Partenariat Lenart Kadriu",
  },

  /** Section d’appel à l’action de la home. */
  cta: {
    eyebrow: "Sponsoring",
    title: "Devenir partenaire de Lenart",
    lines: [
      "Associez votre marque au parcours d’un junior espoir du tennis suisse, médaillé d’argent en simple aux International Children’s Games Hualien 2026.",
      "Trois niveaux de partenariat, des supports concrets, un interlocuteur unique.",
    ],
    primaryCta: { label: "Voir les offres", href: "/sponsoring" },
    secondaryCta: { label: "Écrire à Guillaume Haas", subject: "Partenariat Lenart Kadriu" },
  },

  meta: {
    title: "Sponsoring, Lenart Kadriu",
    description:
      "Devenez partenaire de Lenart Kadriu, junior espoir du tennis suisse, médaillé d’argent en simple aux International Children’s Games Hualien 2026. Niveaux Bronze, Silver et Gold.",
  },
};
