import Link from "next/link";
import { AirVent, Fan, SunSnow, Settings } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const items = [
  {
    Icon: AirVent,
    spin: "pulse-hover",
    title: "Wall-mounted units",
    body: "The popular choice: a discreet indoor unit paired with an outdoor condenser, ideal for cooling a single room.",
    href: "/air-conditioning-installation",
    accent: "text-sky",
    ring: "bg-tint-sky group-hover:ring-sky/30",
  },
  {
    Icon: Fan,
    spin: "spin-hover",
    title: "Multi-room systems",
    body: "One outdoor unit feeding several indoor units, cooling the whole home efficiently from a single install.",
    href: "/air-conditioning-installation",
    accent: "text-spring",
    ring: "bg-tint-mint group-hover:ring-spring/30",
  },
  {
    Icon: SunSnow,
    spin: "spin-hover-slow",
    title: "Air-to-air heat pumps",
    body: "Cooling in summer and low-cost heating through the cooler months, all from one modern system.",
    href: "/heating",
    accent: "text-coral",
    ring: "bg-tint-peach group-hover:ring-coral/30",
  },
  {
    Icon: Settings,
    spin: "spin-hover-slow",
    title: "Servicing & maintenance",
    body: "Keep your system efficient, under warranty and F‑Gas compliant with a regular service plan.",
    href: "/maintenance-and-repairs",
    accent: "text-violet",
    ring: "bg-tint-lilac group-hover:ring-violet/30",
  },
] as const;

export function UnitTypes() {
  return (
    <Section tone="frost" id="unittypes">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-plum">Systems we install</p>
        <h2 className="mt-3 text-h2 text-navy">The right unit for your home</h2>
        <p className="mt-4 text-slate">
          From a single bedroom to a whole house, we size and install the system that fits, and keep
          it running once it&rsquo;s in.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, spin, title, body, href, accent, ring }, i) => (
          <Reveal key={title} delay={(i % 4) * 80}>
            <Link href={href} className="group flex h-full flex-col items-center text-center">
              <span className={cn("grid h-24 w-24 place-items-center rounded-full ring-1 ring-transparent transition-all duration-300", ring)}>
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className={cn("h-11 w-11", accent, spin)}
                />
              </span>

              <h3 className="mt-6 font-display text-[1.2rem] font-semibold text-navy">{title}</h3>
              <p className="mt-2.5 text-[0.95rem] text-slate">{body}</p>

              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-plum/30 px-5 py-2 text-[0.85rem] font-semibold tracking-wide text-plum uppercase transition-all duration-300 group-hover:bg-plum group-hover:text-white group-hover:shadow-action">
                More details
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
