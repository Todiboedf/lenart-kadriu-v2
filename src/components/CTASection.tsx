"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { fadeUp, viewInProps } from "@/lib/motion";
import { PremiumButton } from "./ui/PremiumButton";
import { GoldDivider } from "./ui/GoldDivider";

export default function CTASection() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk max-w-4xl text-center">
        <motion.div {...viewInProps} variants={fadeUp} className="flex flex-col items-center gap-6">
          <span className="eyebrow">Devenir partenaire</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Soutenez un <em className="font-400 text-gold">futur champion</em>
          </h2>
          <GoldDivider width="md" />
          <p className="max-w-2xl text-base leading-relaxed text-pearl sm:text-lg">
            Associez votre marque à un parcours d&apos;athlète qualifié aux Jeux
            Olympiques de la Jeunesse. Visibilité sur les tournois nationaux,
            européens et à Hualien 2026. Conditions détaillées sur la page
            sponsoring.
          </p>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="flex items-center gap-2.5 text-sm text-pearl transition-colors hover:text-gold"
            >
              <Mail size={14} strokeWidth={1.4} />
              ghaasmanagement@gmail.com
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-pearl/40 sm:block" />
            <a
              href="tel:+41795667410"
              className="flex items-center gap-2.5 text-sm text-pearl transition-colors hover:text-gold"
            >
              <Phone size={14} strokeWidth={1.4} />
              +41 79 566 74 10
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <PremiumButton href="/sponsoring" variant="primary" size="md" withArrow>
              Dossier sponsors
            </PremiumButton>
            <PremiumButton
              href="mailto:ghaasmanagement@gmail.com?subject=Partenariat%20Lenart%20Kadriu%20%E2%80%94%20JOJ%20Hualien%202026"
              variant="secondary"
              size="md"
            >
              Nous contacter
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
