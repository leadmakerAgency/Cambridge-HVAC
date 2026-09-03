import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { repairs } from "@/content/services";

export const metadata: Metadata = {
  title: repairs.metaTitle,
  description: repairs.metaDescription,
  alternates: { canonical: `/${repairs.slug}` },
};

export default function Page() {
  return <ServiceTemplate content={repairs} />;
}
