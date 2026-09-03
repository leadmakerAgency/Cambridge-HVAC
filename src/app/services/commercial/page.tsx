import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { commercial } from "@/content/services";

export const metadata: Metadata = {
  title: commercial.metaTitle,
  description: commercial.metaDescription,
  alternates: { canonical: `/${commercial.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={commercial} />;
}
