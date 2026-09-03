import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { floorStanding } from "@/content/actypes";

export const metadata: Metadata = {
  title: floorStanding.metaTitle,
  description: floorStanding.metaDescription,
  alternates: { canonical: `/ac-types/floor-standing` },
};

export default function Page() {
  return <AcTypeTemplate content={floorStanding} />;
}
