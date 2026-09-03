import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import { QuotePanel } from "./QuotePanel";
import { IconShield, IconTag } from "@/components/ui/icons";

/**
 * PDR §6 section 02, the design centrepiece.
 *
 * A deep navy field with a soft plum bloom and a faint engineered grid: the
 * palette itself is the hero, so the page opens without a stock photograph and
 * keeps the largest asset off the critical render path. The inline quote panel
 * is the first of the site's three conversion points.
 */
export function Hero() {
  return (
    <section data-hero className="on-navy relative -mt-20 overflow-hidden bg-ink pt-32 sm:pt-36">
      {/* Layered background, all CSS, no image. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_-10%,#1a4a5a_0%,#132f42_38%,#0e2130_72%)]" />
        <div className="absolute -top-1/3 right-0 h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.35)_0%,rgba(106,33,83,0)_65%)] blur-2xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.3)_0%,rgba(106,33,83,0)_60%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(120%_80%_at_50%_0%,#000_40%,transparent_85%)]" />
      </div>

      <Container className="relative pb-20 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow text-plum-light">
              Air conditioning installation &middot; {site.serviceArea.primary}
            </p>

            <h1 className="mt-5 max-w-2xl text-hero text-white">
              Cool, quiet air conditioning for your Cambridge home.
            </h1>

            <p className="measure mt-6 text-lg text-white/75">
              Expert installation of wall-mounted, multi-room and ducted systems &mdash; with heating
              and year-round servicing alongside. F&#8209;Gas certified, fully insured, and every
              price fixed before we start.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] text-white/80">
              <li className="flex items-center gap-2">
                <IconShield className="h-5 w-5 text-plum-light" />
                F&#8209;Gas certified &amp; fully insured
              </li>
              <li className="flex items-center gap-2">
                <IconTag className="h-5 w-5 text-plum-light" />
                Free survey, fixed-price quote
              </li>
            </ul>
          </div>

          <QuotePanel />
        </div>
      </Container>

      {/* Clean hand-off to the credential strip below. */}
      <div aria-hidden="true" className="relative h-px w-full bg-white/10" />
    </section>
  );
}
