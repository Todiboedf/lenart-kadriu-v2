import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";
import SponsoringHero from "@/components/sponsoring/SponsoringHero";
import WhySection from "@/components/sponsoring/WhySection";
import OffersSection from "@/components/sponsoring/OffersSection";
import SupportsSection from "@/components/sponsoring/SupportsSection";
import ContactSection from "@/components/sponsoring/ContactSection";
import { sponsoring } from "@/content/sponsoring";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: sponsoring.meta.title },
  description: sponsoring.meta.description,
  alternates: { canonical: "/sponsoring" },
  openGraph: {
    title: sponsoring.meta.title,
    description: sponsoring.meta.description,
    url: "/sponsoring",
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: sponsoring.meta.title,
    description: sponsoring.meta.description,
  },
};

export default function SponsoringPage() {
  return (
    <>
      <Navbar />
      <main id="contenu">
        <SponsoringHero />
        <WhySection />
        <OffersSection />
        <SupportsSection />
        <PartnersSection
          eyebrow={sponsoring.partners.eyebrow}
          title={sponsoring.partners.title}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
