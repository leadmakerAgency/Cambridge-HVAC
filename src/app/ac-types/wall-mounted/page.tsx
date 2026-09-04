import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { wallMounted } from "@/content/actypes";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: wallMounted.metaTitle,
  description: wallMounted.metaDescription,
  alternates: { canonical: `/ac-types/wall-mounted` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema(wallMounted.faqs)} />
      <AcTypeTemplate content={wallMounted} />
    </>
  );
}
