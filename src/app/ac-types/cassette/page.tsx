import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { cassette } from "@/content/actypes";

export const metadata: Metadata = {
  title: cassette.metaTitle,
  description: cassette.metaDescription,
  alternates: { canonical: `/ac-types/cassette` },
};

export default function Page() {
  return <AcTypeTemplate content={cassette} />;
}
