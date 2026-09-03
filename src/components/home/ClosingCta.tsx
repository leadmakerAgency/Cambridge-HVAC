import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconPhone } from "@/components/ui/icons";
import { site } from "@/config/site";

export function ClosingCta() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="on-navy relative overflow-hidden rounded-[1.75rem] bg-ink px-8 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_0%_50%,rgba(106,33,83,0.4)_0%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 -right-1/4 h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.15)_0%,transparent_55%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:32px_32px]"
          />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-h2 text-white">Ready for a cooler, more comfortable home?</h2>
              <p className="mt-4 text-lg text-white/70">
                Book a free survey and get a fixed-price quote for your {site.serviceArea.primary} home.
                No pressure, no obligation.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href="/get-a-quote" variant="outlineLight" size="lg">
                Get a quote
              </ButtonLink>
              <ButtonLink href={site.phone.href} variant="ghost" size="lg" className="text-white/75 hover:bg-white/5 hover:text-white">
                <IconPhone className="h-4 w-4" />
                {site.phone.display}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
