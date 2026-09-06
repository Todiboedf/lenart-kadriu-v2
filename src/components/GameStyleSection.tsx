"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Brain, Target } from "lucide-react";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";

const qualities = [
  {
    icon: Zap,
    title: "Offensif",
    desc: "Initiative, intensité, pression constante sur l'adversaire.",
  },
  {
    icon: Brain,
    title: "Tactique",
    desc: "Intelligence de jeu, lecture rapide des adversaires.",
  },
  {
    icon: Target,
    title: "Polyvalent",
    desc: "Compétitif sur dur, terre battue et gazon.",
  },
];

export default function GameStyleSection() {
  return (
    <section id="jeu" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Style de jeu</span>
            <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
              Un jeu <em className="font-400 text-gold">offensif</em>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-pearl sm:text-lg">
            Lenart possède un style de jeu résolument offensif, fondé sur une
            intensité constante et une pression permanente. Il ne laisse aucun
            répit à ses opposants, les poussant à la faute par son rythme
            soutenu et son agressivité maîtrisée.
          </p>
          <p className="text-base leading-relaxed text-pearl sm:text-lg">
            Sa force réside dans sa capacité à s&apos;adapter à toutes les
            surfaces. Son intelligence tactique lui permet de s&apos;ajuster à
            tout type d&apos;adversaire, et son calme dans les moments
            décisifs fait de lui un compétiteur redoutable à son niveau.
          </p>

          <motion.ul
            {...viewInProps}
            variants={staggerContainer}
            className="mt-4 flex flex-col divide-y divide-border"
          >
            {qualities.map(({ icon: Icon, title, desc }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="flex items-start gap-5 py-5"
              >
                <Icon size={18} strokeWidth={1.3} className="mt-1 flex-shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-xl font-500 text-bone">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-pearl">
                    {desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src="/assets/action-gradignan.jpg"
            alt="Lenart Kadriu en match"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
