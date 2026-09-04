import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { airConditioning } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: airConditioning.metaTitle,
  description: airConditioning.metaDescription,
  path: `/${airConditioning.slug}`,
  image: { url: airConditioning.photo.src, alt: airConditioning.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(airConditioning.faqs)} />
      <ServiceTemplate content={airConditioning} />
    </>
  );
}
