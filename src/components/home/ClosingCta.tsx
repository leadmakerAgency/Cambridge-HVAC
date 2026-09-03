import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconPhone } from "@/components/ui/icons";
import { site } from "@/config/site";

/**
 * PDR §6 section 10, conversion point 3. A full-width plum band closing the
 * page on a single, clear action.
 */
export function ClosingCta() {
  return (
    <section className="on-navy relative overflow-hidden bg-plum py-20 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(63,18,47,0.9)_0%,transparent_55%)]"
      />
      <Container className="relative">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-white">Ready for a cooler, more comfortable home?</h2>
            <p className="mt-4 text-lg text-white/80">
              Book a free survey and get a fixed-price quote for your {site.serviceArea.primary} home.
              No pressure, no obligation.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href="/get-a-quote" variant="secondary" size="lg">
              Get a quote
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
              <IconPhone className="h-4 w-4" />
              {site.phone.display}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
