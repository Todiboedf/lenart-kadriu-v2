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
  const dayFontSize =
    size === "lg"
      ? "text-5xl sm:text-7xl"
      : size === "sm"
        ? "text-3xl sm:text-4xl"
        : "text-4xl sm:text-5xl";
  const timeFontSize =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-xl sm:text-2xl"
        : "text-2xl sm:text-3xl";

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={ariaLabel}
      className={`flex flex-col items-start ${alignClass} gap-1.5 ${className}`}
    >
      <div className="flex items-baseline gap-2 sm:gap-3 font-[var(--font-heading)] font-800 tracking-tight leading-none">
        <span
          suppressHydrationWarning
          className={`text-[var(--accent-lime)] ${dayFontSize}`}
        >
          J-{diff.days}
        </span>
        <span
          suppressHydrationWarning
          className={`hidden sm:inline text-[var(--text-primary)] tabular-nums ${timeFontSize}`}
        >
          {pad(diff.hours)}:{pad(diff.minutes)}:{pad(diff.seconds)}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-500 tracking-[0.18em] uppercase text-[var(--text-muted)]">
        Hualien, Taïwan · 29 juillet 2026
      </span>
    </div>
  );
}
