import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { IconAirCon, IconHeating, IconWrench } from "@/components/ui/icons";
import acPhoto from "./assets/ac.jpg";
import heatingPhoto from "./assets/heating.jpg";
import maintenancePhoto from "./assets/maintenance.jpg";

/**
 * PDR §6 section 04 / §2, air conditioning installation carries the dominant
 * weight: a large card in the left column, with heating and maintenance stacked
 * in the right.
 *
 * Each card is photo-led. Every image gets a navy gradient overlay so the stock
 * photography reads as art-directed and on-brand (PDR §10). No image is
 * captioned or framed as this company's own completed job (PDR §11).
 */

const secondary: {
  href: string;
  icon: typeof IconHeating;
  photo: StaticImageData;
  alt: string;
  title: string;
  body: string;
}[] = [
  {
    href: "/heating",
    icon: IconHeating,
    photo: heatingPhoto,
    alt: "A home radiator against a wall",
    title: "Heating",
    body: "Installation and repair of heating and heat-pump systems, to keep the house warm through a Cambridge winter.",
  },
  {
    href: "/maintenance-and-repairs",
    icon: IconWrench,
    photo: maintenancePhoto,
    alt: "An engineer servicing an air conditioning system",
    title: "Maintenance & repairs",
    body: "Servicing, callouts and F‑Gas compliance checks that keep a system efficient and under warranty.",
  },
];

export function Services() {
  return (
    <Section tone="frost" id="services">
      <div className="max-w-2xl">
        <p className="eyebrow text-plum">What we do</p>
        <h2 className="mt-3 text-h2 text-navy">Bespoke cooling and heating, done properly</h2>
        <p className="measure mt-4 text-slate">
          Air conditioning installation is what we do most, but we cover the whole system, from a
          single bedroom unit to whole-house heating and the servicing that keeps it running.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        {/* Lead card, air conditioning installation. */}
        <Reveal>
          <Link
            href="/air-conditioning-installation"
            className="group on-navy flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-navy text-white transition-colors duration-300 hover:bg-navy-deep"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[16/9]">
              <Image
                src={acPhoto}
                alt="A wall-mounted air conditioning unit in a modern living room"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
                className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
              <span className="absolute top-5 left-5 inline-flex rounded-xl bg-navy-deep/70 p-3 text-plum-light ring-1 ring-white/15 backdrop-blur">
                <IconAirCon className="h-7 w-7" />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-8 sm:p-9">
              <h3 className="font-display text-[1.6rem] font-semibold tracking-tight text-white">
                Air conditioning installation
              </h3>
              <p className="mt-3 max-w-xl text-white/75">
                Wall-mounted splits, multi-room systems and discreet ducted setups, sized to your
                home and installed to last. Most single rooms are done in a day.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {["Wall-mounted & multi-split", "Ducted & concealed", "Air-to-air heat pumps"].map(
                  (p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/15 px-3 py-1 text-[0.8rem] text-white/80"
                    >
                      {p}
                    </li>
                  ),
                )}
              </ul>

              <span className="mt-auto inline-flex items-center gap-2 pt-7 font-medium text-plum-light">
                Explore AC installation
                <ArrowRight className="group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Heating & maintenance, stacked. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {secondary.map((s, i) => (
            <Reveal key={s.href} delay={(i + 1) * 80}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-rule bg-white transition-colors duration-300 hover:border-navy/20 lg:flex-row"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-2/5">
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-plum">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-3 font-display text-h3 text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.95rem] text-slate">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-medium text-plum">
                    Learn more
                    <ArrowRight className="group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
