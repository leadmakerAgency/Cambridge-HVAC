import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { floorStanding } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: floorStanding.metaTitle,
  description: floorStanding.metaDescription,
  alternates: { canonical: `/ac-types/floor-standing` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(floorStanding.faqs)} />
      <AcTypeTemplate content={floorStanding} />
    </>
  );
}
