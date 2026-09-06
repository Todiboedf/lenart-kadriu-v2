import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";

const FONT_DIR = path.join(process.cwd(), "src/app/fonts");

type OgFont = {
  name: string;
  data: Buffer;
  weight: 500 | 600 | 700;
  style: "normal";
};

export async function loadOgFonts(): Promise<OgFont[]> {
  const [archivo600, archivo700, inter500] = await Promise.all([
    readFile(path.join(FONT_DIR, "Archivo-600.ttf")),
    readFile(path.join(FONT_DIR, "Archivo-700.ttf")),
    readFile(path.join(FONT_DIR, "Inter-500.ttf")),
  ]);
  return [
    { name: "Archivo", data: archivo600, weight: 600, style: "normal" },
    { name: "Archivo", data: archivo700, weight: 700, style: "normal" },
    { name: "Inter", data: inter500, weight: 500, style: "normal" },
  ];
}

/** Lit une image de public/ et la renvoie en data URL (les images OG sont générées au build). */
export async function loadPublicImage(publicPath: string): Promise<string> {
  const buffer = await readFile(path.join(process.cwd(), "public", publicPath));
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

export const OG_SIZE = { width: 1200, height: 630 };

const colors = {
  bg: "#0B0B0C",
  fg: "#F3F2EE",
  muted: "#A3A29C",
  accent: "#E2231A",
};

type OgLayoutProps = {
  eyebrow: string;
  titleLines: string[];
  subtitle: string;
  footer: string;
  image: string;
  imagePosition?: string;
  /** Corps du titre en pixels (112 pour deux mots courts, 64 pour une phrase). */
  titleSize?: number;
};

export function OgLayout({
  eyebrow,
  titleLines,
  subtitle,
  footer,
  image,
  imagePosition = "50% 20%",
  titleSize = 112,
}: OgLayoutProps): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: colors.bg,
        color: colors.fg,
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 700,
          padding: "64px 56px 56px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: colors.muted,
          }}
        >
          <span
            style={{
              display: "flex",
              width: 28,
              height: 2,
              background: colors.accent,
            }}
          />
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Archivo",
              fontWeight: 700,
              fontSize: titleSize,
              lineHeight: 0.95,
              letterSpacing: titleSize >= 100 ? -3 : -2,
              textTransform: "uppercase",
            }}
          >
            {titleLines.map((line) => (
              <span key={line} style={{ display: "flex" }}>
                {line}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              color: colors.fg,
              maxWidth: 560,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 2,
            color: colors.muted,
          }}
        >
          {footer}
        </div>
      </div>
      <div style={{ display: "flex", width: 500, height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          width={500}
          height={630}
          style={{
            width: 500,
            height: 630,
            objectFit: "cover",
            objectPosition: imagePosition,
          }}
        />
      </div>
    </div>
  );
}
