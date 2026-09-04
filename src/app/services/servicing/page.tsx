import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { servicing } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: servicing.metaTitle,
  description: servicing.metaDescription,
  alternates: { canonical: `/${servicing.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(servicing.faqs)} />
      <ServiceTemplate content={servicing} />
    </>
  );
}
