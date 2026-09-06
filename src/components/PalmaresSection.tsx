"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Globe, Users } from "lucide-react";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";

type Category = {
  icon: typeof Trophy;
  label: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Trophy,
    label: "Suisse",
    items: [
      "4× Champion Vaudois",
      "Vainqueur TC Gland 2025 : Road to Montreux MS",
      "Plusieurs victoires nationales",
    ],
  },
  {
    icon: Globe,
    label: "Europe · Simple",
    items: [
      "Vainqueur Split, Croatie",
      "Finaliste Tirana, Albanie",
      "Finaliste Shkodra, Albanie",
      "Finaliste Poreč, Croatie",
      "3e Poreč, Croatie",
      "4 victoires cat.1 Tournoi Europe France",
    ],
  },
  {
    icon: Users,
    label: "Europe · Double",
    items: [
      "Finaliste Podgorica, Monténégro",
      "3e Tirana, Albanie",
      "Plusieurs victoires double Tournoi Europe France",
    ],
  },
];

const objectives = [
  {
    horizon: "2025 au 2026",
    title: "Court terme",
    desc: "Intégrer ITF Junior, renforcer la présence sur les tournois européens, développement physique et mental complet.",
  },
  {
    horizon: "2027 au 2030",
    title: "Moyen terme",
    desc: "Devenir leader suisse de sa génération, représenter la Suisse dans les compétitions internationales majeures.",
  },
  {
    horizon: "Long terme",
    title: "Circuit ATP",
    desc: "Intégrer le circuit professionnel avec un encadrement complet. Faire rayonner la Suisse sur la scène mondiale.",
  },
];

export default function PalmaresSection() {
  return (
    <section id="palmares" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Palmarès</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Les résultats qui tracent la <em className="font-400 text-gold">trajectoire</em>
          </h2>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="relative mb-16 aspect-[21/9] overflow-hidden"
        >
          <Image
            src="/assets/trophee-realsport.jpg"
            alt="TC Gland 2025 : Vainqueur"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <figcaption className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 p-6 sm:p-10">
            <span className="eyebrow">Victoire</span>
            <p className="font-display text-2xl font-400 text-bone sm:text-3xl">
              TC Gland 2025 : Vainqueur Road to Montreux
            </p>
          </figcaption>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="grid gap-10 md:grid-cols-3"
        >
          {categories.map(({ icon: Icon, label, items }) => (
            <motion.article
              key={label}
              variants={fadeUp}
              className="flex flex-col gap-5 border-t border-border pt-8"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} strokeWidth={1.3} className="text-gold" />
                <h3 className="eyebrow">{label}</h3>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="py-3.5 text-sm leading-relaxed text-bone/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mt-24 flex flex-col gap-4"
        >
          <span className="eyebrow">Horizon</span>
          <h3 className="font-display text-3xl font-400 leading-[1.1] tracking-tight text-bone sm:text-4xl">
            Objectifs à court, moyen et long terme
          </h3>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="mt-10 grid gap-10 md:grid-cols-3"
        >
          {objectives.map((obj) => (
            <motion.article
              key={obj.horizon}
              variants={fadeUp}
              className="flex flex-col gap-3 border-t border-border pt-8"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                {obj.horizon}
              </span>
              <h4 className="font-display text-2xl font-400 text-bone">
                {obj.title}
              </h4>
              <p className="text-sm leading-relaxed text-pearl">{obj.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
