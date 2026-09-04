import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { airConditioning } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: airConditioning.metaTitle,
  description: airConditioning.metaDescription,
  alternates: { canonical: `/${airConditioning.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(airConditioning.faqs)} />
      <ServiceTemplate content={airConditioning} />
    </>
  );
}
