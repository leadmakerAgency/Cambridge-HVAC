import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { heating } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: heating.metaTitle,
  description: heating.metaDescription,
  path: `/${heating.slug}`,
  image: { url: heating.photo.src, alt: heating.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(heating.faqs)} />
      <ServiceTemplate content={heating} />
    </>
  );
}
