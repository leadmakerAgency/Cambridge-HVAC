import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { repairs } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: repairs.metaTitle,
  description: repairs.metaDescription,
  path: `/${repairs.slug}`,
  image: { url: repairs.photo.src, alt: repairs.photoAlt },
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(repairs.faqs)} />
      <ServiceTemplate content={repairs} />
    </>
  );
}
