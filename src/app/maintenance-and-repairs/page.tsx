import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { maintenance } from "@/content/services";

export const metadata: Metadata = {
  title: maintenance.metaTitle,
  description: maintenance.metaDescription,
  alternates: { canonical: `/${maintenance.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={maintenance} />;
}
