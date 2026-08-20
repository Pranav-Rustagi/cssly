import type { MetadataRoute } from "next";

import { getAllArtworks } from "@/lib/artworks";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cssly.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const artworkRoutes: MetadataRoute.Sitemap = getAllArtworks().map((artwork) => ({
    url: `${BASE_URL}/art/${artwork.slug}`,
    lastModified: new Date(artwork.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...artworkRoutes];
}
