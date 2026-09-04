import { isValidElement, type ReactNode } from "react";
import { site } from "@/config/site";

/**
 * Structured data helpers (Part 5). Pure, server-only functions that turn the
 * site's existing content into schema.org JSON-LD — nothing here changes what
 * a visitor sees.
 */

/**
 * Flatten a small JSX answer (e.g. <p>text <a>link</a> more text</p>) to plain
 * text by walking the element tree directly — avoids importing
 * react-dom/server, which the App Router disallows in Server Components.
 */
function toPlainText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return toPlainText(props.children);
  }
  return "";
}

function clean(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/**
 * Sitewide business identity, injected once in the root layout. Every value
 * comes from src/config/site.ts, so it stays accurate as LAUNCH: placeholders
 * are replaced with real details.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.businessName,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    },
    areaServed: [site.serviceArea.primary, ...site.serviceArea.towns].map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: site.openingHours
      .filter((h) => h.hours !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        // Human "8:00am to 6:00pm" isn't machine-parseable; the schema still
        // conveys accurate open days without a brittle time parse.
        description: h.hours,
      })),
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

/** FAQPage schema from the same {question, answer} pairs the page already renders. */
export function faqPageSchema(faqs: { question: string; answer: ReactNode }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: clean(toPlainText(f.answer)),
      },
    })),
  };
}

/** BlogPosting schema for an individual article. */
export function blogPostingSchema(post: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${site.url}/blog/${post.slug}`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
    author: { "@type": "Organization", name: site.businessName },
    publisher: {
      "@type": "Organization",
      name: site.businessName,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.png` },
    },
  };
}

/**
 * BreadcrumbList schema for an interior page. The last entry (the current
 * page) may omit `path` — Google's own guidance allows the final item to
 * have no `item` URL, since linking a breadcrumb to itself is redundant.
 */
export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${site.url}${item.path}` } : {}),
    })),
  };
}
