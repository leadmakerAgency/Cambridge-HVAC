import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { servicing } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: servicing.metaTitle,
  description: servicing.metaDescription,
  path: `/${servicing.slug}`,
  image: { url: servicing.photo.src, alt: servicing.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(servicing.faqs)} />
      <ServiceTemplate content={servicing} />
    </>
  );
}
