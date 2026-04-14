import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ClarityAnalytics from "@/components/ClarityAnalytics";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lenartkadriu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lenart Kadriu — Tennisman Suisse U14 | JOJ Hualien 2026",
    template: "%s | Lenart Kadriu",
  },
  description:
    "Lenart Kadriu, jeune espoir suisse du tennis, qualifié aux Jeux Olympiques de la Jeunesse de Hualien, Taïwan, 29 juillet – 8 août 2026.",
  keywords: [
    "Lenart Kadriu",
    "tennis",
    "tennis junior",
    "suisse",
    "U14",
    "Team Vaud",
    "Swiss Tennis",
    "Swiss Olympique",
    "Jeux Olympiques de la Jeunesse",
    "JOJ 2026",
    "Hualien",
    "Taïwan",
    "Vevey",
    "sponsoring tennis",
  ],
  authors: [
    { name: "GHaas Management SA", url: "https://www.ghaasmanagement.ch/" },
  ],
  creator: "GHaas Management SA",
  publisher: "GHaas Management SA",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lenart Kadriu — Tennisman Suisse U14 | JOJ Hualien 2026",
    description:
      "Jeune espoir suisse du tennis, qualifié aux Jeux Olympiques de la Jeunesse de Hualien 2026. Parcours et partenariats sponsors.",
    url: "/",
    type: "website",
    locale: "fr_CH",
    siteName: "Lenart Kadriu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenart Kadriu — JOJ Hualien 2026",
    description:
      "Jeune espoir suisse du tennis qualifié aux Jeux Olympiques de la Jeunesse de Hualien 2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "sports",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <StructuredData />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
