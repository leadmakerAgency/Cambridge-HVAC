import type { Metadata } from "next";
import Image from "next/image";
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
      />

      <Section tone="frost">
        {posts.length === 0 ? (
          <p className="measure text-slate">No articles published yet. Check back soon.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    {post.image && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.imageAlt ?? ""}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <time
                        dateTime={post.date}
                        className="text-[0.82rem] font-medium tracking-wide text-slate uppercase"
                      >
                        {formatPostDate(post.date)}
                      </time>
                      <h2 className="mt-3 text-h3 text-navy-deep transition-colors group-hover:text-plum">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-[0.95rem] text-slate">{post.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.925rem] font-medium text-plum transition-colors group-hover:text-plum-deep">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
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
