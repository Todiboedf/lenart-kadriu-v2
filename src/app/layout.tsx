import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import { site } from "@/content/site";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Lenart Kadriu",
    "tennis",
    "tennis junior",
    "Suisse",
    "espoir suisse",
    "Team Vaud",
    "Swiss Tennis",
    "Swiss Olympic",
    "International Children's Games",
    "Hualien 2026",
    "Vevey",
    "sponsoring tennis",
  ],
  authors: [{ name: site.manager.company, url: site.manager.url }],
  creator: site.manager.company,
  publisher: site.manager.company,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
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
  themeColor: "#0B0B0C",
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
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          {site.nav.skipLink}
        </a>
        {children}
        <StructuredData />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
