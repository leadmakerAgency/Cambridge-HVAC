import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { wallMounted } from "@/content/actypes";

export const metadata: Metadata = {
  title: wallMounted.metaTitle,
  description: wallMounted.metaDescription,
  alternates: { canonical: `/ac-types/wall-mounted` },
};

export default function Page() {
  return <AcTypeTemplate content={wallMounted} />;
}
