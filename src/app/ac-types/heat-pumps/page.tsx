import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { heatPumps } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: heatPumps.metaTitle,
  description: heatPumps.metaDescription,
  path: `/ac-types/heat-pumps`,
  image: { url: heatPumps.image.src, alt: heatPumps.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(heatPumps.faqs)} />
      <AcTypeTemplate content={heatPumps} />
    </>
  );
}
