import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { ducted } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: ducted.metaTitle,
  description: ducted.metaDescription,
  alternates: { canonical: `/ac-types/ducted` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(ducted.faqs)} />
      <AcTypeTemplate content={ducted} />
    </>
  );
}
