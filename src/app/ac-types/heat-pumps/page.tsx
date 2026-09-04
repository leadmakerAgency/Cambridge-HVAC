import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { heatPumps } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: heatPumps.metaTitle,
  description: heatPumps.metaDescription,
  alternates: { canonical: `/ac-types/heat-pumps` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(heatPumps.faqs)} />
      <AcTypeTemplate content={heatPumps} />
    </>
  );
}
