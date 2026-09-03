import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IconCheck } from "@/components/service/IconCheck";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import type { ServiceContent } from "@/content/services";

const cardAccents = [
  { tint: "bg-tint-sky", accent: "text-sky", checkBg: "bg-sky/10", checkFg: "text-sky" },
  { tint: "bg-tint-mint", accent: "text-spring", checkBg: "bg-spring/10", checkFg: "text-spring" },
  { tint: "bg-tint-sun", accent: "text-sun", checkBg: "bg-sun/10", checkFg: "text-sun" },
  { tint: "bg-tint-lilac", accent: "text-violet", checkBg: "bg-violet/10", checkFg: "text-violet" },
  { tint: "bg-tint-peach", accent: "text-coral", checkBg: "bg-coral/10", checkFg: "text-coral" },
  { tint: "bg-tint-teal", accent: "text-teal", checkBg: "bg-teal/10", checkFg: "text-teal" },
];

const stepAccents = [
  { bg: "bg-tint-sky", fg: "text-sky" },
  { bg: "bg-tint-mint", fg: "text-spring" },
  { bg: "bg-tint-lilac", fg: "text-violet" },
  { bg: "bg-tint-peach", fg: "text-coral" },
];

export function ServiceTemplate({ content }: { content: ServiceContent }) {
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/get-a-quote" size="lg">
            Get a free quote
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
            {site.phone.display}
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview + photo */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            {content.overview.map((p) => (
              <p key={p.slice(0, 24)} className="measure text-slate">
                {p}
              </p>
            ))}
          </div>
          <div className="relative order-first aspect-[4/3] overflow-hidden rounded-card lg:order-last">
            <Image
              src={content.photo}
              alt={content.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
          </div>
        </div>
      </Section>

      {/* What we cover */}
      <Section tone="frost" id="covers">
        <div className="max-w-2xl">
          <p className="eyebrow text-plum">{content.coversEyebrow ?? "What's included"}</p>
          <h2 className="mt-3 text-h2 text-navy">{content.coversHeading ?? "What we cover"}</h2>
        </div>
        <div
          className={cn(
            "mt-10 grid gap-5 sm:grid-cols-2",
            content.covers.length % 3 === 0 && "lg:grid-cols-3",
          )}
        >
          {content.covers.map((c, i) => {
            const color = cardAccents[i % cardAccents.length];
            return (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-rule bg-white transition-shadow duration-300 hover:shadow-card">
                  {c.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 flex items-center gap-2.5">
                      <IconCheck bg={color.checkBg} fg={color.checkFg} />
                    </span>
                    <h3 className="font-display text-[1.1rem] font-semibold text-navy">{c.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-slate">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Options grid */}
      {content.systemTypes && (
        <Section tone="ink" id="options">
          <div className="max-w-2xl">
            <p className="eyebrow text-plum-light">{content.highlightsEyebrow ?? "Options"}</p>
            <h2 className="mt-3 text-h2 text-white">
              {content.highlightsHeading ?? "Types of system we install"}
            </h2>
            <p className="measure mt-4 text-white/70">
              {content.highlightsIntro ??
                "Every home is different. On the survey we will recommend the right approach, but here is the range we work with."}
            </p>
          </div>
          <div
            className={cn(
              "mt-12 grid gap-4 sm:grid-cols-2",
              content.systemTypes.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4",
            )}
          >
            {content.systemTypes.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 4) * 70}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-plum-light/40 hover:bg-white/[0.07] on-navy">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-8 -right-6 h-24 w-24 rounded-full bg-plum/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      {Icon ? (
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/8 text-plum-light ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-plum group-hover:text-white group-hover:ring-plum">
                          <Icon aria-hidden="true" strokeWidth={1.6} className="h-6 w-6" />
                        </span>
                      ) : (
                        <span className="h-12 w-12" />
                      )}
                      <span className="font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.15rem] font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.92rem] text-white/70">{s.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* Suitable for + brands */}
      <Section tone={content.systemTypes ? "frost" : "white"}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-plum">{content.propertyEyebrow ?? "Suitable for"}</p>
            <h2 className="mt-3 text-h2 text-navy">{content.propertyHeading ?? "Homes of every kind"}</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {content.propertyTypes.map((t, i) => {
                const color = cardAccents[i % cardAccents.length];
                return (
                  <li
                    key={t}
                    className={cn("rounded-full px-4 py-2 text-[0.9rem] font-medium", color.tint, color.accent)}
                  >
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>

          {content.showBrands && (
            <div>
              <p className="eyebrow text-plum">Brands</p>
              <h2 className="mt-3 text-h2 text-navy">Quality equipment</h2>
              <p className="measure mt-4 text-slate">
                We install and maintain systems from the leading manufacturers, matched to your home
                and budget.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {site.brands.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-navy/15 bg-navy/[0.03] px-4 py-2 text-[0.9rem] font-medium text-navy"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Process */}
      <Section tone={content.systemTypes ? "white" : "frost"}>
        <div className="max-w-2xl">
          <p className="eyebrow text-plum">How it works</p>
          <h2 className="mt-3 text-h2 text-navy">Simple from start to finish</h2>
        </div>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {content.process.map((step, i) => {
            const color = stepAccents[i % stepAccents.length];
            return (
              <Reveal as="li" key={step.title} delay={(i % 4) * 70}>
                <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl font-bold", color.bg, color.fg)}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-navy">{step.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-slate">{step.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* FAQ */}
      <Section tone={content.systemTypes ? "frost" : "white"}>
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
      <section id="quote" className="on-navy bg-ink py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-plum-light">Get started</p>
              <h2 className="mt-3 text-h2 text-white">Book your free survey</h2>
              <p className="measure mt-4 text-white/70">
                Tell us about your home and we will arrange a visit and a fixed-price quote. No
                obligation, and no pressure.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-panel sm:p-8">
              <EnquiryForm source={`service:${content.slug}`} defaultService={defaultServiceFor(content.slug)} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function defaultServiceFor(slug: string): string {
  if (slug === "air-conditioning-installation") return "ac-installation";
  if (slug === "heating") return "heating";
  if (slug === "maintenance-and-repairs" || slug === "services/servicing") return "maintenance";
  if (slug === "services/repairs") return "repair";
  if (slug === "services/commercial") return "ac-installation";
  return "";
}
