import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { heating } from "@/content/services";

export const metadata: Metadata = {
  title: heating.metaTitle,
  description: heating.metaDescription,
  alternates: { canonical: `/${heating.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={heating} />;
}
