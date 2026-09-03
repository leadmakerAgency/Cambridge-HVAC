import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { IconCheck } from "@/components/service/IconCheck";
import { Home, Wind, Route, BrickWall, Plug, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "What Air Conditioning Costs",
  description:
    "What drives the cost of air conditioning installation in the UK, explained honestly. Number of rooms, unit type, pipe runs, access and more. Free survey, fixed price.",
  alternates: { canonical: "/what-it-costs" },
};

const drivers = [
  { icon: Home, title: "Number of rooms", body: "One room or the whole house makes the biggest difference. More indoor units and more pipework means more materials and time." },
  { icon: Wind, title: "Type of indoor unit", body: "A standard wall-mounted unit costs less than a concealed ducted system that has to be hidden above ceilings." },
  { icon: Route, title: "Pipe run length", body: "The distance between the indoor units and the outdoor condenser affects the materials and labour involved." },
  { icon: BrickWall, title: "How your home is built", body: "Solid walls, cavities and finishes all change how straightforward the installation is." },
  { icon: Plug, title: "Electrical supply", body: "Some installations need additional electrical work to power the system safely." },
  { icon: Construction, title: "Access", body: "Upper floors, awkward outdoor positions or scaffolding needs can add to the job." },
];

const included = [
  "A free, no-obligation survey",
  "System design and correct sizing",
  "Supply of the units and materials",
  "Clean, certified installation",
  "Commissioning, testing and handover",
  "A fixed price, agreed before work starts",
];

const faqs = [
  {
    question: "Why won't you give a price over the phone?",
    answer: (
      <p>
        Because an honest price depends on your home. Guessing over the phone either overcharges you
        or leads to surprises later. A short survey lets us give a fixed price we can stand behind,
        and it is completely free.
      </p>
    ),
  },
  {
    question: "Is the quote really fixed?",
    answer: (
      <p>
        Yes. Once we have surveyed, the price we quote is the price you pay. The only reason it would
        change is if you ask us to change the scope of the work.
      </p>
    ),
  },
  {
    question: "What does it cost to run?",
    answer: (
      <p>
        Modern inverter systems are highly efficient and only draw significant power on the hottest
        days. Because the same system can provide low-cost heating in cooler months, many homeowners
        find it earns part of its keep year-round.
      </p>
    ),
  },
  {
    question: "Are there ways to keep the cost down?",
    answer: (
      <p>
        Often, yes, from choosing the right unit type to phasing a multi-room system over time. We
        will talk you through the sensible options on the survey.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="What it costs"
        title="What air conditioning actually costs"
        intro="There is no single price for air conditioning, because no two homes are the same. Here is an honest look at what drives the cost, and why a free survey gives you a better answer than a number over the phone."
        crumb="What it costs"
      />

      {/* Drivers */}
      <Section tone="white">
        <div className="max-w-2xl">
          <p className="eyebrow text-plum">The main factors</p>
          <h2 className="mt-3 text-h2 text-navy">What changes the price</h2>
          <p className="measure mt-4 text-slate">
            Six things account for most of the difference between one installation and the next.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drivers.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 70}>
              <div className="flex h-full flex-col rounded-card border border-rule bg-white p-6">
                <span className="text-plum">
                  <d.icon aria-hidden="true" strokeWidth={1.6} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-navy">{d.title}</h3>
                <p className="mt-2 text-[0.92rem] text-slate">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section tone="frost">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-plum">Fixed price</p>
            <h2 className="mt-3 text-h2 text-navy">What your quote includes</h2>
            <p className="measure mt-4 text-slate">
              Our quotes are all-in and fixed once we have surveyed. No day-rate surprises, no
              hidden extras.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-card border border-rule bg-white p-4">
                <IconCheck />
                <span className="text-[0.95rem] text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-plum">Questions</p>
            <h2 className="mt-3 text-h2 text-navy">Straight answers on cost</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-navy-deep py-16 on-navy sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-h2 text-white">Want a real number for your home?</h2>
              <p className="mt-3 text-white/70">
                Book a free survey and we will give you a fixed price, with no obligation.
              </p>
            </div>
            <ButtonLink href="/get-a-quote" size="lg">
              Get a free quote
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
