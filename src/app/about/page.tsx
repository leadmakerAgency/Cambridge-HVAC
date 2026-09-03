import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { IconShield, IconTag, IconLeaf, IconPin } from "@/components/ui/icons";
import { site } from "@/config/site";
import engineerPhoto from "@/components/home/assets/engineer.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cambridge HVAC installs and maintains air conditioning and heating across Cambridge. F‑Gas certified, fully insured, and straight with you.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: IconShield, title: "Certified and insured", body: "F‑Gas certified engineers and full insurance on every job. It is the first thing to check, so we lead with it.", tint: "bg-tint-sky", accent: "text-sky" },
  { icon: IconTag, title: "Honest pricing", body: "A free survey, a fixed price, and no pressure. What we quote is what you pay.", tint: "bg-tint-mint", accent: "text-spring" },
  { icon: IconLeaf, title: "Efficient systems", body: "We size systems properly and fit efficient equipment, so they cost less to run.", tint: "bg-tint-sun", accent: "text-sun" },
  { icon: IconPin, title: "Local to Cambridge", body: "We cover Cambridge and the towns around it, and we know the area's homes.", tint: "bg-tint-lilac", accent: "text-violet" },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Air conditioning and heating, done properly"
        intro="Cambridge HVAC installs, services and repairs air conditioning and heating for homes across Cambridge. Here is how we work, and what you can expect from us."
      />

      {/* Who we are + photo */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="measure text-slate">
              We are an air conditioning and heating specialist serving Cambridge and the surrounding
              area. Our focus is domestic installation: sizing and fitting systems that are efficient,
              quiet and built to last, then keeping them running with proper aftercare.
            </p>
            <p className="measure text-slate">
              Every job is handled by F‑Gas certified engineers and starts with a free survey, because
              a system that is sized and installed properly is one you will barely think about again.
              We keep the work tidy, the pricing fixed, and the advice honest, even when that means
              telling you air conditioning is not the right answer.
            </p>
            <p className="measure text-slate">
              If you are weighing up cooling for a hot bedroom, a multi-room system for the whole
              house, or heating for the cooler months, we are happy to talk it through with no
              obligation.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src={engineerPhoto}
              alt="An engineer checking an outdoor air conditioning unit"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="frost">
        <div className="max-w-2xl">
          <p className="eyebrow text-plum">What we stand for</p>
          <h2 className="mt-3 text-h2 text-navy">Four things we always do</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 70}>
              <div className={`flex h-full flex-col rounded-card p-6 ${v.tint}`}>
                <span className={v.accent}>
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-[0.92rem] text-slate">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Credentials band */}
      <Section tone="ink">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-plum-light">Credentials</p>
            <h2 className="mt-3 text-h2 text-white">Qualified for the work</h2>
            <p className="measure mt-4 text-white/70">
              Air conditioning contains fluorinated refrigerant gases, and by law only F‑Gas certified
              engineers may handle them. We are certified with {site.credentials.fgasBody}, and
              carry full insurance on every job.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-card border border-white/12 bg-white/5 p-5 on-navy">
              <h3 className="font-display text-[1.05rem] font-semibold text-white">F‑Gas certified</h3>
              <p className="mt-1.5 text-[0.9rem] text-white/70">
                {site.credentials.fgasBody}, reg. {site.credentials.fgasNumber}.
              </p>
            </li>
            <li className="rounded-card border border-white/12 bg-white/5 p-5 on-navy">
              <h3 className="font-display text-[1.05rem] font-semibold text-white">Fully insured</h3>
              <p className="mt-1.5 text-[0.9rem] text-white/70">{site.credentials.insurance}.</p>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="on-navy relative overflow-hidden rounded-[1.75rem] bg-ink px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_0%_50%,rgba(106,33,83,0.4)_0%,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:32px_32px]"
            />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-h2 text-white">Ready when you are</h2>
                <p className="mt-3 text-white/70">Book a free survey, or just ask us a question.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/get-a-quote" variant="outlineLight" size="lg">
                  Get a quote
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" size="lg" className="text-white/75 hover:bg-white/5 hover:text-white">
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
