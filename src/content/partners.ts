export type Partner = {
  name: string;
  role: string;
  url: string;
  /** Logo blanc monochrome sur fond transparent, dans public/sponsors/. */
  logo: string;
  /** Dimensions intrinsèques du fichier logo (pour next/image). */
  logoSize: { width: number; height: number };
  /** Hauteur d’affichage en pixels (28 à 36). */
  logoHeight?: number;
};

export const partners: Partner[] = [
  {
    name: "GHaas Management SA",
    role: "Management sportif",
    url: "https://www.ghaasmanagement.ch/",
    logo: "/sponsors/ghaas-white.png",
    logoSize: { width: 946, height: 240 },
    logoHeight: 36,
  },
  {
    name: "HEAD",
    role: "Équipementier",
    url: "https://www.head.com/fr_CH/shop-tennis",
    logo: "/sponsors/head-white.svg",
    logoSize: { width: 119, height: 16 },
    logoHeight: 20,
  },
  {
    // Logo issu de la fiche marchand AutoScout24 (source 220x63 px), affiché petit pour rester net.
    name: "COY Centre Occasions Yvorne",
    role: "Partenaire",
    url: "https://www.facebook.com/100057236508975/",
    logo: "/sponsors/coy-white.png",
    logoSize: { width: 424, height: 120 },
    logoHeight: 36,
  },
];

export const affiliations = {
  label: "Affiliations",
  items: [
    "Swiss Tennis",
    "Team Vaud",
    "Swiss Olympic (Talent régional)",
  ],
};

export const partnersSection = {
  eyebrow: "Partenaires",
  title: "Ils accompagnent Lenart",
};
