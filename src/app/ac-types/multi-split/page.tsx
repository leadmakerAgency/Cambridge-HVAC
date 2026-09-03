import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { multiSplit } from "@/content/actypes";

export const metadata: Metadata = {
  title: multiSplit.metaTitle,
  description: multiSplit.metaDescription,
  alternates: { canonical: `/ac-types/multi-split` },
};

export default function Page() {
  return <AcTypeTemplate content={multiSplit} />;
}
