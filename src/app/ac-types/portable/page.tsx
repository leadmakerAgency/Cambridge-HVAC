import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { portable } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: portable.metaTitle,
  description: portable.metaDescription,
  alternates: { canonical: `/ac-types/portable` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(portable.faqs)} />
      <AcTypeTemplate content={portable} />
    </>
  );
}
