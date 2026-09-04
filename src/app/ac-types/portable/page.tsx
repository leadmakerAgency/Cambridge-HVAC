import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { portable } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: portable.metaTitle,
  description: portable.metaDescription,
  path: `/ac-types/portable`,
  image: { url: portable.image.src, alt: portable.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(portable.faqs)} />
      <AcTypeTemplate content={portable} />
    </>
  );
}
