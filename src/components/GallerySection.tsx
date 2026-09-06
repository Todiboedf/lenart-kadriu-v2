"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";

const photos = [
  {
    src: "/assets/victoire-indoor.jpg",
    alt: "Victoire : index levé, trophée en main",
    span: "row-span-2",
  },
  { src: "/assets/trophee-realsport.jpg", alt: "En tournoi" },
  {
    src: "/assets/remise-prix-vaud.jpg",
    alt: "Remise de prix Vaud : partenariat HEAD",
  },
  { src: "/assets/trophee-realsport.jpg", alt: "Trophée RealSport" },
  {
    src: "/assets/istarska-riviera.jpg",
    alt: "Victoire indoor : coupe en mains",
  },
  { src: "/assets/portrait-head.jpg", alt: "Portrait" },
  {
    src: "/assets/tennis-europe-croatie.jpg",
    alt: "Tennis Europe : tournoi en Croatie",
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Photographies</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Galerie
          </h2>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[300px]"
        >
          {photos.map((photo, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              className={`relative overflow-hidden ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
