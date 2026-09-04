import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * Generates /robots.txt. Kept permissive — indexing itself is controlled by
 * the `robots: { index: false }` meta tag in layout.tsx until go-live, per
 * LAUNCH-CHECKLIST.md. Disallowing crawling here as well would stop Google
 * from ever seeing that tag change.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
