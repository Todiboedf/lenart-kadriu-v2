"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const photos = [
  {
    src: "/assets/photo_hju.jpg",
    alt: "Victoire — index levé, trophée",
    tall: true,
  },
  { src: "/assets/photo_petit.jpg", alt: "Premiers pas — 4 ans" },
  {
    src: "/assets/photo_3.jpg",
    alt: "Remise de prix Vaud — HEAD sponsor",
  },
  { src: "/assets/photo_trophe.jpg", alt: "Trophée RealSport" },
  {
    src: "/assets/photo_10.jpg",
    alt: "Victoire indoor — coupe en mains",
  },
  { src: "/assets/photo_de.jpg", alt: "Lenart Kadriu" },
  {
    src: "/assets/photo_2.jpg",
    alt: "Trophée Tennis Europe — Croatie",
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Photos</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-16 tracking-[-0.02em]">
            Galerie
          </h2>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
          {photos.map((photo, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className={photo.tall ? "row-span-2" : ""}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-500">
                    {photo.alt}
                  </p>
                </div>
                {/* Accent border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-[var(--accent-lime)]/0 group-hover:border-[var(--accent-lime)]/20 transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
