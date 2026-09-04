import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { commercial } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: commercial.metaTitle,
  description: commercial.metaDescription,
  alternates: { canonical: `/${commercial.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(commercial.faqs)} />
      <ServiceTemplate content={commercial} />
    </>
  );
}
