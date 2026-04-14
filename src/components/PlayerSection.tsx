"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";

const stats = [
  { value: "4", unit: "ans", label: "À la 1re raquette" },
  { value: "U14", unit: "", label: "Catégorie actuelle" },
  { value: "7+", unit: "titres", label: "Européens remportés" },
  { value: "2012", unit: "", label: "Né à Vevey" },
];

const tags = [
  "Swiss Tennis",
  "Team Vaud",
  "Vevey",
  "Français · Anglais",
  "HEAD Tennis",
];

export default function PlayerSection() {
  return (
    <section id="joueur" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Le joueur</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Profil d&apos;athlète
          </h2>
        </motion.div>

        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            {...viewInProps}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/photo_identite.jpg"
                alt="Lenart Kadriu — Tennisman Suisse U14"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/assets/photo_vaud.jpg"
                alt="Team Vaud"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div
              {...viewInProps}
              variants={fadeUp}
              className="flex flex-col gap-5"
            >
              <p className="text-base leading-relaxed text-pearl sm:text-lg">
                Lenart Kadriu est un jeune espoir suisse du tennis. Classé
                parmi les meilleurs joueurs nationaux de sa génération, il
                incarne une relève prometteuse pour le tennis suisse et brille
                régulièrement sur la scène européenne. Né le 16 janvier 2012 à
                Vevey, il pratique le tennis à haut niveau depuis l&apos;âge
                de 4 ans.
              </p>
              <p className="text-base leading-relaxed text-pearl sm:text-lg">
                Membre du Team Vaud, cadre vaudois et suprarégional de Swiss
                Tennis, et du Tennis Nestlé Club de Mont-Pèlerin, il est
                reconnu pour sa capacité à imposer son rythme, son calme dans
                les moments clés et son intelligence tactique remarquable pour
                son âge. Son ambition : représenter la Suisse aux plus grands
                rendez-vous internationaux.
              </p>
            </motion.div>

            <motion.div
              {...viewInProps}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3.5 py-1.5 text-xs font-500 tracking-[0.1em] uppercase text-pearl"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.dl
              {...viewInProps}
              variants={staggerContainer}
              className="grid grid-cols-2 divide-x divide-y divide-border border border-border"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col gap-2 p-6"
                >
                  <dt className="eyebrow">{stat.label}</dt>
                  <dd className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-400 text-bone sm:text-5xl">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm tracking-[0.18em] uppercase text-pearl/80">
                        {stat.unit}
                      </span>
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
