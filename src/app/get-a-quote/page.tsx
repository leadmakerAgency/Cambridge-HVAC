import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/layout/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IconShield, IconClipboard, IconInstall, IconPhone } from "@/components/ui/icons";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation air conditioning or heating quote for your Cambridge home. Free survey, fixed price, F‑Gas certified.",
  path: "/get-a-quote",
});

const next = [
  { icon: IconClipboard, title: "We arrange a survey", body: "We call to book a convenient time to visit and measure up. No charge, no obligation." },
  { icon: IconShield, title: "You get a fixed price", body: "A clear, itemised quote for the right system, fixed once we have surveyed." },
  { icon: IconInstall, title: "We install", body: "If you go ahead, certified engineers fit it cleanly, usually within a day or two." },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ postcode?: string; service?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Get your free, fixed-price quote"
        intro="Tell us a little about your home and what you need. We will arrange a free survey and come back with a clear price, with no obligation to go ahead."
      />

      <Section tone="frost">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-h3 text-navy">Request a quote</h2>
            <p className="mt-1.5 text-[0.95rem] text-slate">
              The more you can tell us, the more accurate we can be.
            </p>
            <div className="mt-6">
              <EnquiryForm
                source="get-a-quote"
                defaultPostcode={sp.postcode ?? ""}
                defaultService={sp.service ?? ""}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="eyebrow text-plum">What happens next</p>
              <ol className="mt-5 flex flex-col gap-5">
                {next.map((n, i) => (
                  <li key={n.title} className="flex gap-4">
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-plum-light">
                      <n.icon className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-plum text-[0.7rem] font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-display text-[1.05rem] font-semibold text-navy">{n.title}</h3>
                      <p className="mt-1 text-[0.92rem] text-slate">{n.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-card border border-rule bg-white p-6">
              <p className="text-[0.95rem] text-slate">
                Prefer to talk it through? Call us on{" "}
                <a href={site.phone.href} className="inline-flex items-center gap-1.5 font-semibold text-plum">
                  <IconPhone className="h-4 w-4" />
                  {site.phone.display}
                </a>
                .
              </p>
              <p className="mt-3 text-[0.85rem] text-slate/80">
                {site.credentials.fgasBody} F‑Gas certified &middot; {site.credentials.insurance}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
