import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink, ArrowRight } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IconCheck } from "@/components/service/IconCheck";
import { site } from "@/config/site";
import { acTypeNav, type AcTypeContent } from "@/content/actypes";

export function AcTypeTemplate({ content }: { content: AcTypeContent }) {
  const others = acTypeNav.filter((t) => t.slug !== content.slug);

  return (
    <>
      <PageHero eyebrow="AC Types" title={content.title} intro={content.tagline} crumb={content.title}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/get-a-quote" size="lg">
            Get a free quote
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
            {site.phone.display}
          </ButtonLink>
        </div>
      </PageHero>

      {/* What is it + feature cards */}
      <Section tone="white">
        <div className="max-w-2xl">
          <p className="eyebrow text-plum">The basics</p>
          <h2 className="mt-3 text-h2 text-navy">{content.whatIsHeading}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {content.whatIs.map((p) => (
              <p key={p.slice(0, 24)} className="measure text-slate">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-card border border-rule bg-frost p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-plum/10 text-plum">
                  <f.icon aria-hidden="true" strokeWidth={1.6} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-[0.92rem] text-slate">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits + image */}
      <Section tone="frost">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-first aspect-[4/3] overflow-hidden rounded-card lg:order-last">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
          </div>

          <div>
            <p className="eyebrow text-plum">Benefits</p>
            <h2 className="mt-3 text-h2 text-navy">{content.benefitsHeading}</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {content.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <IconCheck />
                  <span className="text-[0.95rem] text-navy">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/get-a-quote" size="lg">
                Get a free quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Suited for */}
      <Section tone="white">
        <div className="max-w-3xl">
          <p className="eyebrow text-plum">Right for you?</p>
          <h2 className="mt-3 text-h2 text-navy">{content.suitedForHeading}</h2>
          <p className="measure mt-4 text-slate">{content.suitedFor}</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="outline" size="lg">
              Talk to our team
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Explore other types */}
      <Section tone="navyDeep">
        <div className="max-w-2xl">
          <p className="eyebrow text-plum-light">Explore</p>
          <h2 className="mt-3 text-h2 text-white">Other AC system types</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 70}>
              <Link
                href={`/ac-types/${t.slug}`}
                className="group flex h-full items-center gap-4 rounded-card border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-plum-light/40 hover:bg-white/[0.07] on-navy"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/8 text-plum-light ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-plum group-hover:text-white group-hover:ring-plum">
                  <t.icon aria-hidden="true" strokeWidth={1.6} className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1rem] font-semibold text-white">{t.label}</span>
                  <span className="block text-[0.85rem] text-white/60">{t.tagline}</span>
                </span>
                <ArrowRight className="shrink-0 text-plum-light transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-plum">Questions</p>
            <h2 className="mt-3 text-h2 text-navy">Good to know</h2>
            <p className="measure mt-4 text-slate">
              Can&rsquo;t see your question?{" "}
              <a href="/contact" className="font-medium text-plum underline-offset-4 hover:underline">
                Get in touch
              </a>
              .
            </p>
          </div>
          <Accordion items={content.faqs} />
        </div>
      </Section>

      {/* Enquiry form */}
      <section className="on-navy bg-navy-deep py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-plum-light">Get started</p>
              <h2 className="mt-3 text-h2 text-white">Book your free survey</h2>
              <p className="measure mt-4 text-white/70">
                Tell us about your home and we will help you choose the right system, with a
                fixed-price quote and no obligation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-panel sm:p-8">
              <EnquiryForm source={`ac-type:${content.slug}`} defaultService="ac-installation" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
