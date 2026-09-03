import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";

export function StubPage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />

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
