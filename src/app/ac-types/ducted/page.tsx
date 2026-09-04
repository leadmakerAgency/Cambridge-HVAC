import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { ducted } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: ducted.metaTitle,
  description: ducted.metaDescription,
  path: `/ac-types/ducted`,
  image: { url: ducted.image.src, alt: ducted.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(ducted.faqs)} />
      <AcTypeTemplate content={ducted} />
    </>
  );
}
