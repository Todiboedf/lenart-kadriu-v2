"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JOBanner from "@/components/JOBanner";
import PlayerSection from "@/components/PlayerSection";
import GameStyleSection from "@/components/GameStyleSection";
import VideoSection from "@/components/VideoSection";
import PalmaresSection from "@/components/PalmaresSection";
import GallerySection from "@/components/GallerySection";
import PassionSection from "@/components/PassionSection";
import SponsorsSection from "@/components/SponsorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <JOBanner />
        <PlayerSection />
        <GameStyleSection />
        <VideoSection
          label="Highlights"
          title="Lenart"
          titleAccent="En Action"
          subtitle="Intensité, précision, victoires — les moments qui définissent un champion en devenir."
          videoSrc="/assets/video_lenart.mp4"
          showPlayPause={true}
        />
        <PalmaresSection />
        <VideoSection
          id="video2"
          label="En Vidéo"
          title="LENART"
          titleAccent="EN ACTION"
          subtitle="Puissance, précision, caractère — l'essence d'un champion."
          videoSrc="/assets/lenart_kadriu_web.mp4"
          showPlayPause={false}
        />
        <GallerySection />
        <PassionSection />
        <SponsorsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
