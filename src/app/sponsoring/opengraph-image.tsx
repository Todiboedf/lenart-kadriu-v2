import { ImageResponse } from "next/og";
import { sponsoring } from "@/content/sponsoring";
import { stills } from "@/content/photos";
import { loadOgFonts, loadPublicImage, OgLayout, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "Sponsoring, Lenart Kadriu. Devenez partenaire.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fonts, image] = await Promise.all([
    loadOgFonts(),
    loadPublicImage(stills[1].src),
  ]);

  return new ImageResponse(
    (
      <OgLayout
        eyebrow={sponsoring.hero.eyebrow}
        titleLines={["Devenez partenaire", "de Lenart Kadriu"]}
        titleSize={64}
        subtitle="Argent en simple, ICG Hualien 2026. Niveaux Bronze, Silver et Gold, montants sur demande."
        footer="lenartkadriu.com/sponsoring"
        image={image}
        imagePosition="50% 30%"
      />
    ),
    { ...size, fonts },
  );
}
