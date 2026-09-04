import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { multiSplit } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: multiSplit.metaTitle,
  description: multiSplit.metaDescription,
  alternates: { canonical: `/ac-types/multi-split` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(multiSplit.faqs)} />
      <AcTypeTemplate content={multiSplit} />
    </>
  );
}
