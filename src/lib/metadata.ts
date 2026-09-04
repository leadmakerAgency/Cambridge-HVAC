import type { Metadata } from "next";
import { site } from "@/config/site";

/**
 * Builds a complete, correct Metadata object for one page: title, description,
 * canonical, and — critically — its own Open Graph and Twitter card data.
 *
 * Without this, a page that only sets `title`/`description` silently inherits
 * the ROOT layout's entire `openGraph` object (Next does not derive og:title
 * from title, or shallow-merge nested fields), so every shared link — every
 * service page, every AC-type page, every blog post — showed the homepage's
 * title, description and image on WhatsApp/Facebook/LinkedIn/Slack previews.
 * This is the fix: every page builds its own openGraph/twitter explicitly.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: { url: string; alt: string };
  publishedTime?: string;
}): Metadata {
  const fullTitle = `${title} | ${site.businessName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.businessName,
      locale: "en_GB",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(image ? { images: [{ url: image.url, alt: image.alt }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
