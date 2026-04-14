"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const sponsors = [
  {
    emoji: "🏢",
    name: "GHaas Management",
    desc: "Agence de management sportif",
    url: "https://www.ghaasmanagement.ch/",
  },
  {
    emoji: "🎾",
    name: "HEAD Tennis",
    desc: "Équipementier officiel",
    url: "https://www.head.com/fr_CH/shop-tennis",
  },
  {
    emoji: "🚗",
    name: "COY Centre Occasions Yvorne",
    desc: "Partenaire officiel",
    url: "https://www.facebook.com/100057236508975/about/",
  },
];

const affiliationTags = ["Team Vaud", "Swiss Tennis", "Swiss Olympique"];

const packages = [
  {
    name: "Prestige",
    price: "10'000",
    desc: "Logo sur tous les supports + présence médiatique",
    detail: "Visibilité exclusive sur l'ensemble des canaux",
    featured: true,
  },
  {
    name: "Principal",
    price: "8'000",
    desc: "Logo sur site web, sac de sport et survêtement",
    detail: "Visibilité continue sur tous les supports",
    featured: false,
  },
  {
    name: "Mobilité",
    price: "4'000",
    desc: "Logo sur sac de sport",
    detail: "Haute visibilité en tournoi et lors des déplacements",
    featured: false,
  },
  {
    name: "Matériel",
    price: "3'500",
    desc: "Logo sur survêtement",
    detail: "Visibilité lors des entraînements et compétitions",
    featured: false,
  },
  {
    name: "Digital",
    price: "2'000",
    desc: "Logo sur le site officiel",
    detail:
      "Visibilité permanente en ligne auprès de l'audience digitale",
    featured: false,
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Sponsors */}
        <AnimatedSection>
          <span className="section-label">Sponsors</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-16 tracking-[-0.02em]">
            Ceux Qui Croient en Lui
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {sponsors.map((s, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <motion.a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(200,238,68,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="block h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <ExternalLink
                    size={16}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent-lime)] transition-colors"
                  />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-700 text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-lime)] transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {s.desc}
                </p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* Affiliations */}
        <AnimatedSection>
          <span className="section-label">Affiliations</span>
          <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-700 mt-4 mb-10">
            Membres & Structures
          </h3>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <Image
                src="/assets/photo_olympique.jpg"
                alt="Carte Swiss Olympique"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/40 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Lenart est membre du Team Vaud, cadre vaudois et suprarégional
              de Swiss Tennis, et affilié à Swiss Olympique. Ces structures
              lui assurent un encadrement de haut niveau et lui ouvrent les
              portes des compétitions nationales et internationales les plus
              prestigieuses.
            </p>
            <div className="flex flex-wrap gap-2">
              {affiliationTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-500 rounded-full bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 text-[var(--accent-lime)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Partnership packages */}
        <AnimatedSection>
          <span className="section-label">Partenariat</span>
          <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-700 mt-4 mb-10">
            Offres de Partenariat
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <AnimatedSection
              key={i}
              delay={0.1 + i * 0.08}
              className={
                pkg.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full p-6 rounded-xl border transition-all ${
                  pkg.featured
                    ? "bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card-2)] border-[var(--accent-lime)]/30 accent-glow"
                    : "bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-accent)]"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-[10px] font-600 tracking-[0.1em] uppercase bg-[var(--accent-lime)] text-[var(--bg-deep)] rounded-full">
                      Recommandé
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h4 className="font-[var(--font-heading)] text-xl font-700 text-[var(--text-primary)] mb-1">
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[var(--font-heading)] text-3xl font-800 text-[var(--accent-lime)]">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      CHF/an
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-primary)] font-500 mb-2">
                  {pkg.desc}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {pkg.detail}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
