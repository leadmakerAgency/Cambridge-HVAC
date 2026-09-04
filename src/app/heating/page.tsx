import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { heating } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: heating.metaTitle,
  description: heating.metaDescription,
  alternates: { canonical: `/${heating.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(heating.faqs)} />
      <ServiceTemplate content={heating} />
    </>
  );
}
