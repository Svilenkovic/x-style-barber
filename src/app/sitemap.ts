import type { MetadataRoute } from "next";

const SITE_URL = "https://x.svilenkovic.rs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/pwa/client`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/pwa/admin`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
