import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { maintenance } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: maintenance.metaTitle,
  description: maintenance.metaDescription,
  alternates: { canonical: `/${maintenance.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(maintenance.faqs)} />
      <ServiceTemplate content={maintenance} />
    </>
  );
}
