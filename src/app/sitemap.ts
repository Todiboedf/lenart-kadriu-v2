import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/sponsoring`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
