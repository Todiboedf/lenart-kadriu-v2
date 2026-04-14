"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Award, Car } from "lucide-react";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";
import { PremiumButton } from "./ui/PremiumButton";

const sponsors = [
  {
    icon: Building2,
    name: "GHaas Management",
    desc: "Agence de management sportif",
    url: "https://www.ghaasmanagement.ch/",
  },
  {
    icon: Award,
    name: "HEAD Tennis",
    desc: "Équipementier officiel",
    url: "https://www.head.com/fr_CH/shop-tennis",
  },
  {
    icon: Car,
    name: "COY Centre Occasions Yvorne",
    desc: "Partenaire officiel",
    url: "https://www.facebook.com/100057236508975/about/",
  },
];

const affiliations = ["Team Vaud", "Swiss Tennis", "Swiss Olympique"];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Partenaires</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Ceux qui croient en lui
          </h2>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="mb-24 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {sponsors.map(({ icon: Icon, name, desc, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group flex flex-col gap-4 p-8 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex items-start justify-between">
                <Icon size={20} strokeWidth={1.3} className="text-gold" />
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.3}
                  className="text-pearl/60 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-500 text-bone transition-colors group-hover:text-gold">
                  {name}
                </h3>
                <p className="text-sm text-pearl">{desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            {...viewInProps}
            variants={fadeUp}
            className="relative aspect-[16/9] overflow-hidden"
          >
            <Image
              src="/assets/photo_olympique.jpg"
              alt="Carte Swiss Olympique"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            {...viewInProps}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">Affiliations</span>
            <h3 className="font-display text-3xl font-400 leading-[1.1] tracking-tight text-bone sm:text-4xl">
              Membre des structures officielles du tennis suisse
            </h3>
            <p className="text-base leading-relaxed text-pearl sm:text-lg">
              Lenart est membre du Team Vaud, cadre vaudois et suprarégional de
              Swiss Tennis, et affilié à Swiss Olympique. Ces structures lui
              assurent un encadrement de haut niveau et lui ouvrent les portes
              des compétitions nationales et internationales les plus
              prestigieuses.
            </p>
            <div className="flex flex-wrap gap-2">
              {affiliations.map((tag) => (
                <span
                  key={tag}
                  className="border border-gold/30 px-3.5 py-1.5 text-xs font-500 tracking-[0.1em] uppercase text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <PremiumButton href="/sponsoring" variant="primary" size="md" withArrow>
                Dossier sponsors
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
