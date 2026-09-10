import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IconPhone, IconPin, IconClock } from "@/components/ui/icons";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Cambridge HVAC for air conditioning and heating across Cambridge. Call or request a free quote online.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Call or send us a message and we will get back to you. For a survey, the quickest route is a quick call or the quote form."
      />

      <Section tone="frost">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-card border border-rule bg-white p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum/10 text-plum">
                <IconPhone className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-[1.05rem] font-semibold text-navy">Phone</h2>
                <a href={site.phone.href} className="mt-1 inline-block text-lg font-semibold text-plum">
                  {site.phone.display}
                </a>
                <p className="mt-1 text-[0.9rem] text-slate">The fastest way to reach us.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-card border border-rule bg-white p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum/10 text-plum">
                <IconClock className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-[1.05rem] font-semibold text-navy">Opening hours</h2>
                <ul className="mt-1.5 flex flex-col gap-0.5 text-[0.92rem] text-slate">
                  {site.openingHours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span className="tabular-nums">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-card border border-rule bg-white p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum/10 text-plum">
                <IconPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-[1.05rem] font-semibold text-navy">Where we work</h2>
                <p className="mt-1 text-[0.92rem] text-slate">
                  {site.serviceArea.primary} and the surrounding towns within about{" "}
                  {site.serviceArea.radiusMiles} miles, including {site.serviceArea.towns.slice(0, 4).join(", ")} and more.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-h3 text-navy">Send us a message</h2>
            <p className="mt-1.5 text-[0.95rem] text-slate">
              Fill this in and we will be in touch. For a quote, add a few details about your home.
            </p>
            <div className="mt-6">
              <EnquiryForm source="contact" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
