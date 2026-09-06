import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FactsSection from "@/components/FactsSection";
import HualienSection from "@/components/HualienSection";
import ProfileSection from "@/components/ProfileSection";
import GameStyleSection from "@/components/GameStyleSection";
import PalmaresSection from "@/components/PalmaresSection";
import SeasonSection from "@/components/SeasonSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import { filmPoster } from "@/content/photos";
import { partnersSection } from "@/content/partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu">
        <Hero />
        <FactsSection />
        <HualienSection />
        <ProfileSection />
        <GameStyleSection />
        <PalmaresSection />
        <SeasonSection />
        <VideoSection
          id="video"
          eyebrow={site.film.eyebrow}
          title={site.film.title}
          description={site.film.description}
          src={site.film.src}
          poster={filmPoster}
          playLabel={site.film.playLabel}
        />
        <GallerySection />
        <PartnersSection
          id="partenaires"
          eyebrow={partnersSection.eyebrow}
          title={partnersSection.title}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
