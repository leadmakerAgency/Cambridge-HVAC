import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconChat, IconClipboard, IconInstall } from "@/components/ui/icons";

/**
 * PDR §6 section 05 — a genuine three-step sequence on a navy band, laid out as
 * a connected stepper: numbered icon nodes joined by a dashed line. The order
 * carries real information, so the numbering earns its place.
 */
const steps = [
  {
    icon: IconChat,
    title: "Tell us about your space",
    body: "A quick call or the online form: which rooms, what you want, and when. We tell you honestly if air conditioning is the right answer.",
  },
  {
    icon: IconClipboard,
    title: "We survey and quote",
    body: "We visit, measure up, and work out the right system for your home. You get a clear, fixed price, with no surprises once work starts.",
  },
  {
    icon: IconInstall,
    title: "We install and commission",
    body: "A clean, tidy installation by certified engineers, tested and handed over working. Most homes are done in one to two days.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="ink" id="howitworks">
      <div className="max-w-2xl">
        <p className="eyebrow text-plum-light">How it works</p>
        <h2 className="mt-3 text-h2 text-white">Three steps, no guesswork</h2>
        <p className="measure mt-4 text-white/70">
          From first call to a working system, here is exactly how a job runs.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Connector line, desktop only, running through the node centres. */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-[16.6%] left-[16.6%] hidden border-t-2 border-dashed border-white/15 lg:block"
        />

        <ol className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="flex flex-col items-center text-center">
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-navy ring-1 ring-white/15">
                  <step.icon className="h-8 w-8 text-plum-light" />
                </span>
                <span className="absolute -top-1.5 -right-1.5 grid h-8 w-8 place-items-center rounded-full bg-plum font-display text-[0.95rem] font-bold text-white ring-4 ring-ink">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-7 font-display text-h3 text-white">{step.title}</h3>
              <p className="measure mt-2.5 text-[0.95rem] text-white/70">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
