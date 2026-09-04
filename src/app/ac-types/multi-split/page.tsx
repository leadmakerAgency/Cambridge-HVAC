import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { multiSplit } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: multiSplit.metaTitle,
  description: multiSplit.metaDescription,
  path: `/ac-types/multi-split`,
  image: { url: multiSplit.image.src, alt: multiSplit.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(multiSplit.faqs)} />
      <AcTypeTemplate content={multiSplit} />
    </>
  );
}
