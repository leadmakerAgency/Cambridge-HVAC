import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { formatPostDate, getPostBySlug, getPublishedPosts } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;

  return pageMetadata({
    title,
    description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: post.image ? { url: post.image, alt: post.imageAlt ?? title } : undefined,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <PageHero
        eyebrow="Blog"
        title={post.title}
        intro={post.excerpt}
      >
        <time dateTime={post.date} className="text-[0.9rem] text-white/60">
          {formatPostDate(post.date)}
        </time>
      </PageHero>

      <Section tone="white" containerClassName="max-w-3xl">
        {post.image && (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-card">
            <Image
              src={post.image}
              alt={post.imageAlt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
              priority
            />
          </div>
        )}

        <div className="article-body">
          <ReactMarkdown
            components={{
              a: ({ href, children, node, ...props }) => {
                const external = /^https?:\/\//.test(href ?? "");
                return (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
