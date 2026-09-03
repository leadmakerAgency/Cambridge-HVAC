import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  image?: string;
  imageAlt?: string;
  draft: boolean;
  body: string;
};

function parsePost(filename: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : "";
  const slug =
    typeof data.slug === "string" && data.slug.trim()
      ? data.slug.trim()
      : filename.replace(/\.md$/, "");

  if (!title || !slug) return null;

  const dateValue = data.date instanceof Date ? data.date.toISOString() : data.date;
  const date = typeof dateValue === "string" ? dateValue.slice(0, 10) : "";

  return {
    title,
    slug,
    date,
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : undefined,
    seoDescription: typeof data.seoDescription === "string" ? data.seoDescription : undefined,
    image: typeof data.image === "string" && data.image ? data.image : undefined,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    draft: Boolean(data.draft),
    body: content.trim(),
  };
}

function readAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parsePost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Published posts for the listing. Drafts are visible in development only. */
export function getPublishedPosts(): BlogPost[] {
  const posts = readAllPosts();
  if (process.env.NODE_ENV === "development") return posts;
  return posts.filter((post) => !post.draft);
}

/** Single post by slug, or null if missing / draft in production. */
export function getPostBySlug(slug: string): BlogPost | null {
  const post = readAllPosts().find((entry) => entry.slug === slug) ?? null;
  if (!post) return null;
  if (post.draft && process.env.NODE_ENV !== "development") return null;
  return post;
}

/** Format an ISO date string for display, e.g. 12 March 2026. */
export function formatPostDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
