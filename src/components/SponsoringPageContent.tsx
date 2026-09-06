"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Medal,
  Trophy,
  Sparkles,
  ShieldCheck,
  Eye,
  Newspaper,
  BarChart3,
  Tv,
  Check,
  ArrowUpRight,
  Building2,
  Award,
  Car,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PremiumButton } from "./ui/PremiumButton";
import { GoldDivider } from "./ui/GoldDivider";
import { fadeUp, staggerContainer, viewInProps } from "@/lib/motion";

const DOSSIER_HREF = "/dossier-sponsors-lenart-2026.pdf";

const whyCards = [
  {
    icon: Medal,
    title: "Qualifié aux JOJ 2026",
    desc: "Hualien, Taïwan · 29 juillet au 8 août 2026. Représentant officiel de la Ville de Vevey aux Jeux Olympiques de la Jeunesse.",
  },
  {
    icon: Trophy,
    title: "Palmarès européen",
    desc: "7+ titres européens, vainqueur à Split (Croatie), finaliste Tirana, Shkodra, Poreč, 4× champion vaudois, vainqueur TC Gland 2025.",
  },
  {
    icon: Sparkles,
    title: "Formation haut niveau",
    desc: "Né en 2012 à Vevey, 4 ans à la première raquette. Tennis Nestlé Club de Mont-Pèlerin. Tactique et sang-froid reconnus pour son âge.",
  },
  {
    icon: ShieldCheck,
    title: "Encadrement officiel",
    desc: "Membre du Team Vaud, cadre vaudois et suprarégional de Swiss Tennis, affilié à Swiss Olympic. Équipementier HEAD.",
  },
];

const packages = [
  {
    name: "Bronze",
    tag: "Entrée",
    price: "5 000",
    highlight: false,
    includes: [
      "Logo sur le site officiel lenartkadriu.com",
      "Remerciement nominatif sur les réseaux sociaux",
      "Mention dans le dossier de presse pré-JOJ",
      "1 post social dédié par saison",
    ],
  },
  {
    name: "Silver",
    tag: "Engagement",
    price: "12 000",
    highlight: true,
    includes: [
      "Inclut l'ensemble du pack Bronze",
      "Logo sur tenue d'entraînement et sac de sport",
      "2 posts social dédiés + 1 story JOJ Hualien",
      "Mention visuelle dans les captations vidéo",
      "Accès privilégié aux résultats et actualités",
    ],
  },
  {
    name: "Gold",
    tag: "Premium",
    price: "25 000",
    highlight: false,
    includes: [
      "Inclut l'ensemble du pack Silver",
      "Logo sur tenue de match : haute visibilité",
      "1 événement partenaire annuel (meet & greet / clinic)",
      "Reporting KPI trimestriel (portée, presse, audience)",
      "Présence sur le dossier JOJ officiel + communiqués",
    ],
  },
];

const kpis = [
  {
    icon: Eye,
    label: "Portée réseaux cible",
    hint: "Audience Suisse romande + communauté tennis junior",
  },
  {
    icon: Newspaper,
    label: "Couverture presse JOJ",
    hint: "Médias régionaux vaudois + nationaux sports",
  },
  {
    icon: Tv,
    label: "Apparitions live JOJ",
    hint: "Matches Hualien · retransmissions et replays",
  },
  {
    icon: BarChart3,
    label: "Audience Swiss Tennis",
    hint: "Écosystème officiel Swiss Tennis + Swiss Olympic",
  },
];

const trustedBy = [
  {
    icon: Building2,
    name: "GHaas Management",
    desc: "Management sportif",
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
    name: "COY Yvorne",
    desc: "Partenaire officiel",
    url: "https://www.facebook.com/100057236508975/about/",
  },
];

const affiliations = ["Team Vaud", "Swiss Tennis", "Swiss Olympic"];

function SponsoringHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/portrait-head.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-top opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black" />
      </div>

      <div className="container-lk flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-gold"
        >
          <span className="block h-px w-8 bg-gold/70" />
          <span>Sponsoring · JOJ Hualien 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,7vw,6rem)] font-300 leading-[0.95] tracking-tight text-bone max-w-5xl"
        >
          Devenez partenaire d&apos;un{" "}
          <em className="font-400 text-gold">futur champion suisse</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="max-w-2xl text-base leading-relaxed text-bone/80 sm:text-lg"
        >
          Lenart Kadriu est qualifié aux Jeux Olympiques de la Jeunesse de
          Hualien. La fenêtre pour s&apos;associer à son parcours se ferme
          avec la cérémonie d&apos;ouverture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <PremiumButton
            href={DOSSIER_HREF}
            variant="primary"
            size="md"
            withArrow
            download
          >
            <span className="flex items-center gap-2">
              <Download size={13} strokeWidth={1.5} /> Télécharger le dossier
            </span>
          </PremiumButton>
          <PremiumButton href="#contact" variant="secondary" size="md">
            Prendre contact
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className="relative border-t border-border py-24 sm:py-28">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Pourquoi maintenant</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            L&apos;opportunité d&apos;un parcours{" "}
            <em className="font-400 text-gold">qualifié JOJ</em>
          </h2>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        >
          {whyCards.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="flex flex-col gap-4 p-8"
            >
              <Icon size={20} strokeWidth={1.3} className="text-gold" />
              <h3 className="font-display text-xl font-500 text-bone">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-pearl">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="relative border-t border-border py-24 sm:py-28">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-4 flex flex-col gap-4"
        >
          <span className="eyebrow">Packages</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Trois niveaux de partenariat
          </h2>
        </motion.div>
        <motion.p
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 max-w-2xl text-sm text-pearl"
        >
          Les montants ci-dessous sont{" "}
          <span className="text-bone">indicatifs : à confirmer</span> avec
          Guillaume Haas. Chaque partenariat est construit sur-mesure autour de
          la saison et de la qualification JOJ.
        </motion.p>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="grid gap-10 md:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={fadeUp}
              className={`relative flex flex-col gap-6 border-t pt-8 ${
                pkg.highlight ? "border-gold" : "border-border"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-0 bg-black pr-3 text-[10px] font-medium tracking-[0.22em] uppercase text-gold">
                  Recommandé
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl font-400 text-bone">
                  {pkg.name}
                </h3>
                <span className="text-[10px] tracking-[0.22em] uppercase text-pearl/70">
                  {pkg.tag}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-400 text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-pearl">CHF / an</span>
                </div>
                <span className="text-[10px] tracking-[0.22em] uppercase text-pearl/60">
                  Indicatif : à confirmer
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {pkg.includes.map((line, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm leading-relaxed text-bone/90"
                  >
                    <Check
                      size={14}
                      strokeWidth={1.5}
                      className="mt-1 flex-shrink-0 text-gold"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <PremiumButton
                  href="#contact"
                  variant={pkg.highlight ? "primary" : "secondary"}
                  size="sm"
                  withArrow
                >
                  Nous contacter
                </PremiumButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function KPIs() {
  return (
    <section className="relative border-t border-border py-24 sm:py-28">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-4 flex flex-col gap-4"
        >
          <span className="eyebrow">KPIs prévisionnels</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Les retombées attendues
          </h2>
        </motion.div>
        <motion.p
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 max-w-2xl text-sm text-pearl"
        >
          Projections liées à la qualification JOJ et à l&apos;écosystème Swiss
          Tennis. Chiffrages définitifs reportés trimestriellement dans le
          package Gold.
        </motion.p>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        >
          {kpis.map(({ icon: Icon, label, hint }) => (
            <motion.article
              key={label}
              variants={fadeUp}
              className="flex flex-col gap-4 p-8"
            >
              <Icon size={20} strokeWidth={1.3} className="text-gold" />
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-500 text-bone">
                  {label}
                </h3>
                <span className="text-[10px] tracking-[0.22em] uppercase text-gold/80">
                  Projection
                </span>
              </div>
              <p className="text-sm leading-relaxed text-pearl">{hint}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="relative border-t border-border py-24 sm:py-28">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Partenaires actuels
          </h2>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={staggerContainer}
          className="mb-14 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {trustedBy.map(({ icon: Icon, name, desc, url }) => (
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

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="flex flex-wrap gap-2"
        >
          {affiliations.map((tag) => (
            <span
              key={tag}
              className="border border-gold/30 px-3.5 py-1.5 text-xs font-500 tracking-[0.1em] uppercase text-gold"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="container-lk max-w-4xl text-center">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="flex flex-col items-center gap-6"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Parlons de votre{" "}
            <em className="font-400 text-gold">partenariat</em>
          </h2>
          <GoldDivider width="md" />
          <p className="max-w-2xl text-base leading-relaxed text-pearl sm:text-lg">
            Guillaume Haas, fondateur de GHaas Management SA, répond
            personnellement à toutes les sollicitations sponsors. Chaque
            proposition est étudiée sous 48&nbsp;h.
          </p>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="eyebrow">Guillaume Haas</span>
            <span className="text-sm text-pearl">GHaas Management SA</span>
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="mt-2 font-display text-2xl italic text-bone transition-colors hover:text-gold sm:text-3xl"
            >
              ghaasmanagement@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <PremiumButton
              href={DOSSIER_HREF}
              variant="primary"
              size="md"
              withArrow
              download
            >
              <span className="flex items-center gap-2">
                <Download size={13} strokeWidth={1.5} /> Télécharger le dossier
              </span>
            </PremiumButton>
            <PremiumButton
              href="mailto:ghaasmanagement@gmail.com?subject=Partenariat%20Lenart%20Kadriu%20%E2%80%94%20JOJ%20Hualien%202026"
              variant="secondary"
              size="md"
            >
              <span className="flex items-center gap-2">
                <Mail size={13} strokeWidth={1.5} /> Envoyer un email
              </span>
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SponsoringPageContent() {
  return (
    <>
      <Navbar />
      <main>
        <SponsoringHero />
        <WhyNow />
        <Packages />
        <KPIs />
        <TrustedBy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
