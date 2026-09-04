import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { floorStanding } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: floorStanding.metaTitle,
  description: floorStanding.metaDescription,
  path: `/ac-types/floor-standing`,
  image: { url: floorStanding.image.src, alt: floorStanding.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(floorStanding.faqs)} />
      <AcTypeTemplate content={floorStanding} />
    </>
  );
}
