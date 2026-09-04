import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { repairs } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: repairs.metaTitle,
  description: repairs.metaDescription,
  alternates: { canonical: `/${repairs.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(repairs.faqs)} />
      <ServiceTemplate content={repairs} />
    </>
  );
}
