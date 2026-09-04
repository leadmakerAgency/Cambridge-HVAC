import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { cassette } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: cassette.metaTitle,
  description: cassette.metaDescription,
  path: `/ac-types/cassette`,
  image: { url: cassette.image.src, alt: cassette.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(cassette.faqs)} />
      <AcTypeTemplate content={cassette} />
    </>
  );
}
