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

/**
 * PDR §6 section 06, product facts standing in for the stat counters we can't
 * honestly run (no installation count, no years in business). Every line is a
 * fact about the equipment or the service, permitted under PDR §11.
 */
const facts = [
  {
    icon: IconLeaf,
    title: "A‑rated efficiency",
    body: "Modern inverter systems sip power compared with older units, and cost less to run.",
  },
  {
    icon: IconClimate,
    title: "Heating and cooling",
    body: "One system that cools in summer and warms in the shoulder months, from a single unit.",
  },
  {
    icon: IconClock,
    title: "Installed in days",
    body: "Most homes are cooling within one to two days, with minimal disruption.",
  },
  {
    icon: IconQuiet,
    title: "Genuinely quiet",
    body: "Today's indoor units run at a whisper, you notice the comfort, not the noise.",
  },
  {
    icon: IconCertificate,
    title: "Manufacturer warranty",
    body: "Systems come with manufacturer-backed warranties, kept valid by regular servicing.",
  },
  {
    icon: IconBrands,
    title: "All major brands",
    body: "We install Daikin, Mitsubishi Electric, Panasonic, Samsung and LG, matched to your home.",
  },
];

export function WhatYouGet() {
  return (
    <Section tone="frost">
      <div className="max-w-2xl">
        <p className="eyebrow text-plum">Why homeowners choose it</p>
        <h2 className="mt-3 text-h2 text-navy">What modern air conditioning gives you</h2>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 70}>
            <div className="flex h-full flex-col bg-white p-7">
              <span className="text-plum">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-[1.15rem] font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
