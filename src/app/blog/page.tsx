import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ArrowRight } from "@/components/ui/Button";
import { formatPostDate, getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on air conditioning, heat pumps and servicing for Cambridge homes — from Cambridge HVAC.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for cooler, more comfortable homes"
        intro="Straight answers on air conditioning, heat pumps and looking after your system — written for Cambridge homes."
        crumb="Blog"
      />

      <Section tone="frost">
        {posts.length === 0 ? (
          <p className="measure text-slate">No articles published yet. Check back soon.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="flex h-full flex-col rounded-card bg-white p-6 shadow-card">
                  <time
                    dateTime={post.date}
                    className="text-[0.82rem] font-medium tracking-wide text-slate uppercase"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="mt-3 text-h3 text-navy-deep">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-plum"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] text-slate">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.925rem] font-medium text-plum transition-colors hover:text-plum-deep"
                  >
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <ClosingCta />
    </>
  );
}
