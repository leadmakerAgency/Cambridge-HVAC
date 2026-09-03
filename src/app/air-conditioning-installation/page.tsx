import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { airConditioning } from "@/content/services";

export const metadata: Metadata = {
  title: airConditioning.metaTitle,
  description: airConditioning.metaDescription,
  alternates: { canonical: `/${airConditioning.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={airConditioning} />;
}
