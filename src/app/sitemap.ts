import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { acTypeNav } from "@/content/actypes";
import { getPublishedPosts } from "@/lib/blog";

/**
 * Generates /sitemap.xml at build time from the site's own route data — every
 * static page, every service and AC-type page, and every published blog post.
 * No route is listed twice.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/get-a-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/what-it-costs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${site.url}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // /air-conditioning-installation, /heating, /maintenance-and-repairs,
  // plus /services/servicing, /services/repairs, /services/commercial.
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const acTypeRoutes: MetadataRoute.Sitemap = acTypeNav.map((t) => ({
    url: `${site.url}/ac-types/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...acTypeRoutes, ...blogRoutes];
}
