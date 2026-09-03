import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { portable } from "@/content/actypes";

export const metadata: Metadata = {
  title: portable.metaTitle,
  description: portable.metaDescription,
  alternates: { canonical: `/ac-types/portable` },
};

export default function Page() {
  return <AcTypeTemplate content={portable} />;
}
