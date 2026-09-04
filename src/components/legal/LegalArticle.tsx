import { Section } from "@/components/layout/Section";

/**
 * Shared prose shell for the three legal pages. Kept deliberately plain —
 * these pages exist to be read and trusted, not designed.
 */
export function LegalArticle({
  updated,
  children,
}: {
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Section tone="white">
      <article className="mx-auto max-w-3xl">
        <p className="text-[0.85rem] text-slate/70">Last updated: {updated}</p>
        <div className="article-body mt-8">{children}</div>
      </article>
    </Section>
  );
}
