import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { IconPin } from "@/components/ui/icons";
import { site } from "@/config/site";

/**
 * PDR §6 section 08, Cambridge and the surrounding towns. A stylised navy
 * radius graphic rather than an embedded Google map: no third-party script and
 * no cookie, in line with PDR §12.
 */
export function ServiceArea() {
  return (
    <Section tone="navyDeep">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-plum-light">Where we work</p>
          <h2 className="mt-3 text-h2 text-white">
            Covering {site.serviceArea.primary} and{" "}
            <span className="text-plum-light">the towns around it</span>
          </h2>
          <p className="measure mt-4 text-white/70">
            Based in {site.serviceArea.primary}, we cover homes within about{" "}
            {site.serviceArea.radiusMiles} miles &mdash; across Cambridgeshire and into the bordering
            counties. If you&rsquo;re nearby and not listed, just ask.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {[site.serviceArea.primary, ...site.serviceArea.towns].map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.88rem] text-white/85"
              >
                <IconPin className="h-4 w-4 text-plum-light" />
                {town}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <ButtonLink href="/get-a-quote" size="lg">
              Check we cover you
            </ButtonLink>
          </div>
        </div>

        {/* Stylised radius graphic, decorative, not a real map. */}
        <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[12%] rounded-full border border-white/10" />
          <div className="absolute inset-[26%] rounded-full border border-white/10" />
          <div className="absolute inset-[42%] rounded-full border border-dashed border-plum-light/40" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.25)_0%,transparent_60%)]" />

          {/* Scattered town dots */}
          {[
            [50, 50, true],
            [30, 32],
            [72, 30],
            [78, 60],
            [60, 74],
            [34, 66],
            [22, 52],
            [64, 20],
          ].map(([x, y, primary], i) => (
            <span
              key={i}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={
                "absolute -translate-x-1/2 -translate-y-1/2 rounded-full " +
                (primary
                  ? "h-4 w-4 bg-plum-light ring-4 ring-plum-light/25"
                  : "h-2 w-2 bg-white/50")
              }
            />
          ))}

          <span className="absolute left-1/2 top-[38%] -translate-x-1/2 font-display text-sm font-semibold tracking-wide text-white">
            {site.serviceArea.primary}
          </span>
        </div>
      </div>
    </Section>
  );
}
