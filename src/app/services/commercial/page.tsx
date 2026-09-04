import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { commercial } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: commercial.metaTitle,
  description: commercial.metaDescription,
  path: `/${commercial.slug}`,
  image: { url: commercial.photo.src, alt: commercial.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(commercial.faqs)} />
      <ServiceTemplate content={commercial} />
    </>
  );
}
