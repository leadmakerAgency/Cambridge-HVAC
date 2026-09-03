import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { ducted } from "@/content/actypes";

export const metadata: Metadata = {
  title: ducted.metaTitle,
  description: ducted.metaDescription,
  alternates: { canonical: `/ac-types/ducted` },
};

export default function Page() {
  return <AcTypeTemplate content={ducted} />;
}
