import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { wallMounted } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: wallMounted.metaTitle,
  description: wallMounted.metaDescription,
  path: `/ac-types/wall-mounted`,
  image: { url: wallMounted.image.src, alt: wallMounted.imageAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(wallMounted.faqs)} />
      <AcTypeTemplate content={wallMounted} />
    </>
  );
}
