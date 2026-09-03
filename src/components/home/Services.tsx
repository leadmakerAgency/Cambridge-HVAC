"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Section } from "@/components/layout/Section";
import { ArrowRight } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import acPhoto from "./assets/services-ac.png";
import heatPumpPhoto from "./assets/services-heat-pump.png";
import repairsPhoto from "./assets/services-repairs.png";

/**
 * PDR §6 section 04 / §2. Not a card grid: a readable index of the three
 * services, with one large photograph. Hovering or focusing a row updates
 * the image so the photography stays visible and the offer stays scannable.
 * Air conditioning is first. No image is framed as this company's own job
 * (PDR §10 / §11).
 */

const items: {
  href: string;
  index: string;
  title: string;
  body: string;
  cta: string;
  photo: StaticImageData;
  alt: string;
}[] = [
  {
    href: "/air-conditioning-installation",
    index: "01",
    title: "Air conditioning installation",
    body: "Wall-mounted, multi-room and ducted systems, sized to the house. Most single rooms are done in a day.",
    cta: "Explore installation",
    photo: acPhoto,
    alt: "A wall-mounted air conditioning unit in a calm, modern interior",
  },
  {
    href: "/heating",
    index: "02",
    title: "Heating and heat pumps",
    body: "Air-to-air heat pumps that warm in winter and cool in summer, from the same outdoor unit.",
    cta: "Explore heating",
    photo: heatPumpPhoto,
    alt: "An outdoor heat pump installed on a stand beside a house",
  },
  {
    href: "/maintenance-and-repairs",
    index: "03",
    title: "Servicing and repairs",
    body: "Yearly servicing, fault-finding and F‑Gas checks that keep the system efficient and the warranty valid.",
    cta: "Explore servicing",
    photo: repairsPhoto,
    alt: "An engineer checking an outdoor air conditioning unit with gauges",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  const handleActivate = (index: number) => {
    setActive(index);
  };

  return (
    <Section tone="frost" id="services">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch">
        <div className="max-w-xl lg:col-start-1 lg:row-start-1">
          <p className="eyebrow text-plum">What we do</p>
          <h2 className="mt-3 text-h2 text-navy">Cooling, heating and looking after the system</h2>
          <p className="mt-4 text-slate">
            One certified team for the install, the heating that comes with modern kit, and the
            servicing that keeps it running.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-card lg:aspect-auto lg:h-full lg:min-h-[36rem]">
            {items.map((item, i) => (
              <Image
                key={item.href}
                src={item.photo}
                alt={i === active ? item.alt : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                aria-hidden={i !== active}
                className={cn(
                  "object-cover transition-opacity duration-500 ease-out-soft",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <p className="mt-3 text-[0.85rem] text-slate">{items[active].title}</p>
        </div>

        <ul className="flex flex-col lg:col-start-1 lg:row-start-2">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.href} className="border-t border-rule last:border-b">
                <Link
                  href={item.href}
                  onMouseEnter={() => handleActivate(i)}
                  onFocus={() => handleActivate(i)}
                  className={cn(
                    "group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 px-1 py-6 transition-colors duration-200 ease-out-soft sm:px-3",
                    isActive && "bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-[0.8rem] font-bold tracking-[0.18em]",
                      isActive ? "text-plum" : "text-slate",
                    )}
                  >
                    {item.index}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={cn(
                        "font-display text-[1.25rem] font-semibold tracking-tight",
                        isActive ? "text-navy" : "text-navy-deep",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] text-slate">{item.body}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[0.925rem] font-medium text-plum">
                      {item.cta}
                      <ArrowRight className="group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
