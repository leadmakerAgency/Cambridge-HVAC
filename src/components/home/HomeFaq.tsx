import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { site } from "@/config/site";

/**
 * PDR §6 section 09. Answers the real pre-purchase questions, cost drivers,
 * disruption, planning, running costs, timescales, warranty. Marked up for FAQ
 * rich results in Part 5. Every answer stays inside the claims boundary (§11):
 * no prices, no fixed warranty length on our own labour.
 */
export const faqs = [
  {
    question: "How much does air conditioning installation cost?",
    answer: (
      <p>
        It depends on the number of rooms, the type of indoor unit, the pipe run and your home&rsquo;s
        construction, which is why an honest price needs a quick survey rather than a number over the
        phone. The survey is free, and the quote we give is fixed. Our{" "}
        <a href="/what-it-costs">cost guide</a> explains what drives the price.
      </p>
    ),
  },
  {
    question: "How disruptive is the installation?",
    answer: (
      <p>
        Less than most people expect. A single-room system is usually a one-day job, and we work
        cleanly, dust sheets down, mess taken away. We&rsquo;ll always talk you through where pipework
        runs before we start.
      </p>
    ),
  },
  {
    question: "Do I need planning permission?",
    answer: (
      <p>
        Usually not, most domestic outdoor units fall under permitted development. Listed buildings
        and conservation areas, of which Cambridge has several, are treated differently. We check the
        position for your property before quoting.
      </p>
    ),
  },
  {
    question: "What does it cost to run?",
    answer: (
      <p>
        Modern inverter units are highly efficient and only use significant power on the hottest days.
        Because the same system can provide low-cost heating in cooler months, many homeowners find it
        earns part of its keep year-round.
      </p>
    ),
  },
  {
    question: "How long does a system last?",
    answer: (
      <p>
        A well-installed, serviced system typically lasts well over a decade. Systems come with
        manufacturer-backed warranties, and regular servicing keeps both the efficiency and the
        warranty intact.
      </p>
    ),
  },
  {
    question: "Which areas do you cover?",
    answer: (
      <p>
        {site.serviceArea.primary} and the surrounding towns within roughly{" "}
        {site.serviceArea.radiusMiles} miles, including {site.serviceArea.towns.slice(0, 4).join(", ")}{" "}
        and more. If you&rsquo;re nearby and unsure, just ask.
      </p>
    ),
  },
];

export function HomeFaq() {
  return (
    <Section tone="white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow text-plum">Questions</p>
          <h2 className="mt-3 text-h2 text-navy">Good to know before you start</h2>
          <p className="measure mt-4 text-slate">
            The things homeowners ask us most. Can&rsquo;t see yours?{" "}
            <a href="/contact" className="font-medium text-plum underline-offset-4 hover:underline">
              Get in touch
            </a>{" "}
, we&rsquo;re happy to talk it through.
          </p>
        </div>

        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
