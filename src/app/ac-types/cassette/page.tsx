import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { cassette } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: cassette.metaTitle,
  description: cassette.metaDescription,
  alternates: { canonical: `/ac-types/cassette` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(cassette.faqs)} />
      <AcTypeTemplate content={cassette} />
    </>
  );
}
