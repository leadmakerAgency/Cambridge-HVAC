import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Placeholder for a page whose content is still to be written. The route is
 * live and navigable; the body is intentionally empty beyond a short note and
 * the usual calls to action, so nothing here needs to be undone when the real
 * content lands.
 */
export function StubPage({
  eyebrow,
  title,
  crumb,
}: {
  eyebrow: string;
  title: string;
  crumb?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} crumb={crumb ?? title} />

      <Section tone="white">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-slate">
            We&rsquo;re putting this page together. In the meantime, tell us what you need and
            we&rsquo;ll be glad to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/get-a-quote" size="lg">
              Get a free quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
