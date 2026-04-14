"use client";

import { useEffect, useState } from "react";

const TARGET_ISO = "2026-07-29T09:00:00+08:00";
const TARGET_MS = new Date(TARGET_ISO).getTime();

type Diff = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
};

function computeDiff(): Diff {
  const delta = TARGET_MS - Date.now();
  const past = delta <= 0;
  const clamped = past ? 0 : delta;
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped % 86_400_000) / 3_600_000),
    minutes: Math.floor((clamped % 3_600_000) / 60_000),
    seconds: Math.floor((clamped % 60_000) / 1_000),
    past,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

type Props = {
  className?: string;
  align?: "start" | "end";
  size?: "sm" | "md" | "lg";
};

export default function JOJCountdown({
  className = "",
  align = "end",
  size = "md",
}: Props) {
  const [diff, setDiff] = useState<Diff>(() => computeDiff());

  useEffect(() => {
    setDiff(computeDiff());
    const id = setInterval(() => setDiff(computeDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  const ariaLabel = diff.past
    ? "La cérémonie d'ouverture des Jeux Olympiques de la Jeunesse de Hualien a eu lieu."
    : `Temps restant avant la cérémonie d'ouverture des Jeux Olympiques de la Jeunesse de Hualien : ${diff.days} jours, ${diff.hours} heures, ${diff.minutes} minutes et ${diff.seconds} secondes.`;

  const alignClass = align === "end" ? "sm:items-end" : "sm:items-start";
  const daySize =
    size === "lg"
      ? "text-6xl sm:text-8xl"
      : size === "sm"
        ? "text-4xl sm:text-5xl"
        : "text-5xl sm:text-6xl";
  const timeSize =
    size === "lg"
      ? "text-xl sm:text-2xl"
      : size === "sm"
        ? "text-sm sm:text-base"
        : "text-base sm:text-lg";

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={ariaLabel}
      className={`flex flex-col items-start ${alignClass} gap-3 ${className}`}
    >
      <span className="eyebrow">Compte à rebours</span>
      <div className="flex items-baseline gap-3 leading-none">
        <span
          suppressHydrationWarning
          className={`font-display font-400 text-gold tabular-nums ${daySize}`}
        >
          {diff.days}
        </span>
        <span className="text-sm tracking-[0.2em] uppercase text-pearl">
          jours
        </span>
      </div>
      <span
        suppressHydrationWarning
        className={`hidden tabular-nums text-pearl/80 sm:inline ${timeSize}`}
      >
        {pad(diff.hours)}:{pad(diff.minutes)}:{pad(diff.seconds)}
      </span>
    </div>
  );
}
