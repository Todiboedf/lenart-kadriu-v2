import type { Metadata } from "next";
import SponsoringPageContent from "@/components/SponsoringPageContent";

export const metadata: Metadata = {
  title: "Sponsoring : Lenart Kadriu | JOJ Hualien 2026",
  description:
    "Devenez partenaire de Lenart Kadriu, jeune espoir suisse du tennis qualifié aux Jeux Olympiques de la Jeunesse de Hualien 2026. Packages Bronze, Silver et Gold.",
  alternates: { canonical: "/sponsoring" },
  openGraph: {
    title: "Sponsoring : Lenart Kadriu | JOJ Hualien 2026",
    description:
      "Devenez partenaire d'un futur champion suisse du tennis qualifié aux JOJ Hualien 2026. Packages Bronze, Silver et Gold.",
    url: "/sponsoring",
    type: "website",
    locale: "fr_CH",
  },
};

export default function SponsoringPage() {
  return <SponsoringPageContent />;
}
