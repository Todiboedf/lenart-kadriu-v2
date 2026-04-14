import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenart Kadriu — Tennisman Suisse U14",
  description:
    "Lenart Kadriu — Jeune espoir suisse du tennis, U14, Team Vaud. Sélectionné aux Jeux Olympiques Juniors 2026 à Hualien, Taïwan.",
  keywords: [
    "Lenart Kadriu",
    "tennis",
    "suisse",
    "U14",
    "Team Vaud",
    "Jeux Olympiques Juniors 2026",
    "Hualien",
    "Taiwan",
  ],
  openGraph: {
    title: "Lenart Kadriu — Tennisman Suisse U14",
    description:
      "Jeune espoir suisse du tennis, U14, Team Vaud. Sélectionné aux Jeux Olympiques Juniors 2026.",
    type: "website",
    locale: "fr_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${syne.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
