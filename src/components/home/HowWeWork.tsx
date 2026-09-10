import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { IconShield } from "@/components/ui/icons";
import { site } from "@/config/site";
import engineerPhoto from "./assets/engineer.jpg";

/**
 * PDR §6 section 07, the approved guarantee set (from config, PDR §11) plus a
 * plain-English explanation of what F‑Gas certification means and why it
 * matters when someone handles refrigerant in your home. The photograph is
 * illustrative of the work, never framed as this company's own job (PDR §11).
 */
export function HowWeWork() {
  return (
    <Section tone="white" id="howwework">
      <div className="max-w-2xl">
        <p className="eyebrow text-plum">How we work</p>
        <h2 className="mt-3 text-h2 text-navy">Certified, insured, and straight with you</h2>
      </div>

      <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative min-h-72 overflow-hidden rounded-card lg:min-h-full">
          <Image
            src={engineerPhoto}
            alt="An engineer checking an outdoor air conditioning unit"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-start gap-3.5 p-6 text-white on-navy">
            <span className="mt-0.5 shrink-0 text-plum-light">
              <IconShield className="h-7 w-7" />
            </span>
            <p className="text-[0.95rem] text-white/90">
              <span className="font-semibold text-white">F‑Gas certified.</span>{" "}
              Refrigerant handled safely and legally, so your warranty stays valid and the work is
              done to standard.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="measure text-slate">
            Air conditioning uses fluorinated refrigerant gases, and by law only F‑Gas certified
            engineers may handle them. It is the single most important thing to check before letting
            anyone install a system in your home, so we lead with it.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.guarantees.map((g) => (
              <li key={g.title} className="rounded-card border border-rule bg-white p-5 shadow-card">
                <h3 className="font-display text-[1.05rem] font-semibold text-navy">{g.title}</h3>
                <p className="mt-2 text-[0.9rem] text-slate">{g.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink href="/about" variant="outline" size="lg">
              More about how we work
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
