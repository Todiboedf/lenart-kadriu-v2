"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  MailPlus,
  Trophy,
  ShieldCheck,
  Medal,
  Sparkles,
  Instagram,
  Camera,
  Megaphone,
  LineChart,
  Check,
  ExternalLink,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import JOJCountdown from "./JOJCountdown";

const DOSSIER_HREF = "/dossier-sponsors-lenart-2026.pdf";

const whyCards = [
  {
    icon: <Medal className="w-5 h-5" />,
    title: "Qualifié aux JOJ 2026",
    desc: "Hualien, Taïwan · 29 juillet – 8 août 2026. Représentant officiel de la Ville de Vevey aux Jeux Olympiques de la Jeunesse.",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Palmarès européen solide",
    desc: "7+ titres européens, vainqueur à Split (Croatie), finaliste Tirana, Shkodra, Poreč, 4× champion vaudois, vainqueur TC Gland 2025.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Formation haut niveau",
    desc: "Né en 2012 à Vevey, 4 ans à la première raquette. Tennis Nestlé Club de Mont-Pèlerin. Tactique et sang-froid reconnus pour son âge.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Encadrement officiel",
    desc: "Membre du Team Vaud, cadre vaudois et suprarégional de Swiss Tennis, affilié à Swiss Olympique. Équipementier HEAD.",
  },
];

const packages = [
  {
    name: "Bronze",
    price: "5 000",
    tag: "Entrée",
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
    price: "12 000",
    tag: "Engagement",
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
    price: "25 000",
    tag: "Premium",
    highlight: false,
    includes: [
      "Inclut l'ensemble du pack Silver",
      "Logo sur tenue de match (haute visibilité)",
      "1 événement partenaire annuel (meet & greet / clinic)",
      "Reporting KPI trimestriel (portée, presse, audience)",
      "Présence sur le dossier JOJ officiel + communiqués",
      "Droit d'usage de l'image pour la marque (cadre à définir)",
    ],
  },
];

const kpis = [
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Portée réseaux cible",
    value: "[projection]",
    hint: "Audience Suisse romande + communauté tennis junior",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    label: "Couverture presse JOJ",
    value: "[projection]",
    hint: "Médias régionaux vaudois + nationaux sports",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    label: "Apparitions live JOJ",
    value: "[projection]",
    hint: "Matches Hualien · retransmissions et replays",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    label: "Audience Swiss Tennis",
    value: "[projection]",
    hint: "Écosystème officiel Swiss Tennis + Swiss Olympique",
  },
];

const trustedBy = [
  {
    emoji: "🏢",
    name: "GHaas Management",
    desc: "Management sportif",
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
    name: "COY Yvorne",
    desc: "Partenaire officiel",
    url: "https://www.facebook.com/100057236508975/about/",
  },
];

const affiliations = ["Team Vaud", "Swiss Tennis", "Swiss Olympique"];

function SponsoringHero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/photo_trophy.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#050810]/80 to-[#050810]" />
      </div>
      <div className="stadium-light w-[700px] h-[700px] bg-[var(--accent-lime)] top-[-200px] right-[-200px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Sponsoring</span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-6xl lg:text-7xl font-800 mt-4 mb-6 tracking-[-0.02em] leading-[1.02] max-w-4xl">
            Devenez partenaire d&apos;un futur{" "}
            <span className="gradient-text">champion suisse</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10">
            Lenart Kadriu est qualifié aux Jeux Olympiques de la Jeunesse de
            Hualien. La fenêtre pour s&apos;associer à son parcours se ferme
            avec la cérémonie d&apos;ouverture.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-10">
            <JOJCountdown align="start" size="lg" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-3">
            <a
              href={DOSSIER_HREF}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-lime)] text-[var(--bg-deep)] text-sm font-600 rounded-full hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,238,68,0.3)]"
            >
              <Download size={16} />
              Télécharger le dossier
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-subtle)] hover:border-[var(--border-accent)] text-[var(--text-primary)] text-sm font-600 rounded-full transition-all"
            >
              <MailPlus size={16} />
              Prendre contact
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Pourquoi maintenant</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-800 mt-4 mb-12 tracking-[-0.02em] max-w-3xl">
            L&apos;opportunité d&apos;un parcours{" "}
            <span className="gradient-text">qualifié JOJ</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 flex items-center justify-center text-[var(--accent-lime)] mb-4">
                  {card.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-700 text-[var(--text-primary)] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      <div className="stadium-light w-[500px] h-[500px] bg-[var(--accent-lime)] bottom-[10%] left-[-200px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Packages</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-800 mt-4 mb-3 tracking-[-0.02em]">
            Trois niveaux de partenariat
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-2xl mb-12">
            Les montants ci-dessous sont{" "}
            <span className="text-[var(--text-primary)] font-500">
              indicatifs — à confirmer
            </span>{" "}
            avec Guillaume Haas. Chaque partenariat est construit sur-mesure
            autour de la saison et de la qualification JOJ.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={0.1 + i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full p-6 sm:p-7 rounded-2xl border transition-all flex flex-col ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card-2)] border-[var(--accent-lime)]/40 accent-glow"
                    : "bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-accent)]"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-[10px] font-600 tracking-[0.1em] uppercase bg-[var(--accent-lime)] text-[var(--bg-deep)] rounded-full">
                      Recommandé
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[var(--font-heading)] text-2xl font-800 text-[var(--text-primary)]">
                    {pkg.name}
                  </h3>
                  <span className="text-[10px] font-600 tracking-[0.1em] uppercase text-[var(--text-muted)]">
                    {pkg.tag}
                  </span>
                </div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-[var(--font-heading)] text-4xl font-800 text-[var(--accent-lime)]">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    CHF / an
                  </span>
                </div>
                <span className="inline-block mb-5 text-[10px] font-500 uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  [indicatif — à confirmer]
                </span>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((line, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <Check
                        size={16}
                        className="text-[var(--accent-lime)] mt-0.5 flex-shrink-0"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  aria-label={`Nous contacter pour le package ${pkg.name}`}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-600 rounded-full transition-all ${
                    pkg.highlight
                      ? "bg-[var(--accent-lime)] text-[var(--bg-deep)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(200,238,68,0.3)]"
                      : "border border-[var(--border-subtle)] hover:border-[var(--border-accent)] text-[var(--text-primary)]"
                  }`}
                >
                  Nous contacter
                </a>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function KPIs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">KPIs prévisionnels</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-800 mt-4 mb-3 tracking-[-0.02em]">
            Les retombées attendues
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-2xl mb-12">
            Les indicateurs ci-dessous sont des projections liées à la
            qualification JOJ et à l&apos;écosystème Swiss Tennis. Ils seront
            chiffrés et reportés trimestriellement dans le package Gold.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <AnimatedSection key={kpi.label} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 flex items-center justify-center text-[var(--accent-lime)] mb-4">
                  {kpi.icon}
                </div>
                <div className="font-[var(--font-heading)] text-xl font-800 text-[var(--accent-lime)] mb-1">
                  {kpi.value}
                </div>
                <h3 className="text-sm font-600 text-[var(--text-primary)] mb-1">
                  {kpi.label}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {kpi.hint}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Ils nous font confiance</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-800 mt-4 mb-12 tracking-[-0.02em]">
            Partenaires actuels
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustedBy.map((s, i) => (
            <AnimatedSection key={s.name} delay={0.1 + i * 0.08}>
              <motion.a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
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
                <p className="text-sm text-[var(--text-secondary)]">{s.desc}</p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-2">
            {affiliations.map((tag) => (
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
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      <div className="stadium-light w-[500px] h-[500px] bg-[var(--accent-lime)] top-[20%] right-[-200px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="section-label justify-center">Contact</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-800 mt-4 mb-6 tracking-[-0.02em]">
            Parlons de votre <span className="gradient-text">partenariat</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
            Guillaume Haas, fondateur de GHaas Management SA, répond
            personnellement à toutes les sollicitations sponsors. Chaque
            proposition est étudiée sous 48&nbsp;h.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-6 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-10">
            <div className="text-left">
              <p className="text-xs font-600 tracking-[0.15em] uppercase text-[var(--accent-lime)] mb-1">
                Guillaume Haas
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                GHaas Management SA
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[var(--border-subtle)]" />
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="font-[var(--font-heading)] text-base sm:text-lg font-700 text-[var(--text-primary)] hover:text-[var(--accent-lime)] transition-colors"
            >
              ghaasmanagement@gmail.com
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={DOSSIER_HREF}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-lime)] text-[var(--bg-deep)] text-sm font-600 rounded-full hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,238,68,0.3)]"
            >
              <Download size={16} />
              Télécharger le dossier
            </a>
            <a
              href="mailto:ghaasmanagement@gmail.com?subject=Partenariat%20Lenart%20Kadriu%20%E2%80%94%20JOJ%20Hualien%202026"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-subtle)] hover:border-[var(--border-accent)] text-[var(--text-primary)] text-sm font-600 rounded-full transition-all"
            >
              <MailPlus size={16} />
              Envoyer un email
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-500 rounded-full transition-colors"
            >
              Retour au site
            </Link>
          </div>
        </AnimatedSection>
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
