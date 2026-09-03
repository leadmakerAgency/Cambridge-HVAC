import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CredentialStrip } from "@/components/home/CredentialStrip";
import { Services } from "@/components/home/Services";
import { UnitTypes } from "@/components/home/UnitTypes";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ServiceArea } from "@/components/home/ServiceArea";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ClosingCta } from "@/components/home/ClosingCta";

/**
 * Homepage. PDR §6.
 *
 * Section order, top to bottom:
 *   02 Hero (with inline quote panel)   06 What you get
 *   03 Credential strip                  07 How we work
 *   04 Services                          08 Service area
 *   05 How it works                      09 Questions
 *                                        10 Closing call to action
 * (01 header, 11 footer and 12 mobile call bar live in the shared layout.)
 */

export const metadata: Metadata = {
  title: "Air Conditioning Installation in Cambridge",
  description:
    "F‑Gas certified air conditioning installation, heating and servicing for homes across Cambridge. Free survey, fixed-price quotes, fully insured.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialStrip />
      <Services />
      <UnitTypes />
      <HowItWorks />
      <WhatYouGet />
      <HowWeWork />
      <ServiceArea />
      <HomeFaq />
      <ClosingCta />
    </>
  );
}
