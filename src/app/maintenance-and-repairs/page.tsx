import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { maintenance } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: maintenance.metaTitle,
  description: maintenance.metaDescription,
  path: `/${maintenance.slug}`,
  image: { url: maintenance.photo.src, alt: maintenance.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(maintenance.faqs)} />
      <ServiceTemplate content={maintenance} />
    </>
  );
}
