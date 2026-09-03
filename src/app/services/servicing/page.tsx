import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { servicing } from "@/content/services";

export const metadata: Metadata = {
  title: servicing.metaTitle,
  description: servicing.metaDescription,
  alternates: { canonical: `/${servicing.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={servicing} />;
}
