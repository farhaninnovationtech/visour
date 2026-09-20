import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { prompts } from "@/lib/data/prompts";
import { categories } from "@/lib/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/explore`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.url}/categories`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteConfig.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteConfig.url}/categories/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const promptRoutes: MetadataRoute.Sitemap = prompts.map((p) => ({
    url: `${siteConfig.url}/prompt/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: p.createdAt,
  }));

  return [...staticRoutes, ...categoryRoutes, ...promptRoutes];
}
