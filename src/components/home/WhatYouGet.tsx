import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconLeaf,
  IconClimate,
  IconClock,
  IconQuiet,
  IconCertificate,
  IconBrands,
} from "@/components/ui/icons";

const facts = [
  {
    icon: IconLeaf,
    title: "A‑rated efficiency",
    body: "Modern inverter systems sip power compared with older units, and cost less to run.",
    tint: "bg-tint-mint",
    accent: "text-spring",
  },
  {
    icon: IconClimate,
    title: "Heating and cooling",
    body: "One system that cools in summer and warms in the shoulder months, from a single unit.",
    tint: "bg-tint-sun",
    accent: "text-sun",
  },
  {
    icon: IconClock,
    title: "Installed in days",
    body: "Most homes are cooling within one to two days, with minimal disruption.",
    tint: "bg-tint-sky",
    accent: "text-sky",
  },
  {
    icon: IconQuiet,
    title: "Genuinely quiet",
    body: "Today’s indoor units run at a whisper, you notice the comfort, not the noise.",
    tint: "bg-tint-lilac",
    accent: "text-violet",
  },
  {
    icon: IconCertificate,
    title: "Manufacturer warranty",
    body: "Systems come with manufacturer-backed warranties, kept valid by regular servicing.",
    tint: "bg-tint-peach",
    accent: "text-coral",
  },
  {
    icon: IconBrands,
    title: "All major brands",
    body: "We install Daikin, Mitsubishi Electric, Panasonic, Samsung and LG, matched to your home.",
    tint: "bg-tint-teal",
    accent: "text-teal",
  },
];

export function WhatYouGet() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-plum">Why homeowners choose it</p>
        <h2 className="mt-3 text-h2 text-navy">What modern air conditioning gives you</h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 80}>
            <div className={`flex h-full flex-col rounded-card p-8 ${f.tint}`}>
              <span className={f.accent}>
                <f.icon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-[1.2rem] font-semibold text-navy-deep">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
