import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { portrait } from "@/content/photos";
import { loadOgFonts, loadPublicImage, OgLayout, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "Lenart Kadriu, tennis, Suisse. Argent en simple, ICG Hualien 2026.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fonts, image] = await Promise.all([
    loadOgFonts(),
    loadPublicImage(portrait.src),
  ]);

  return new ImageResponse(
    (
      <OgLayout
        eyebrow={site.hero.eyebrow}
        titleLines={["Lenart", "Kadriu"]}
        subtitle="Argent en simple, International Children’s Games Hualien 2026"
        footer="lenartkadriu.com"
        image={image}
        imagePosition="50% 15%"
      />
    ),
    { ...size, fonts },
  );
}
