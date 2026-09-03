import type { Metadata } from "next";
import { AcTypeTemplate } from "@/components/actype/AcTypeTemplate";
import { heatPumps } from "@/content/actypes";

export const metadata: Metadata = {
  title: heatPumps.metaTitle,
  description: heatPumps.metaDescription,
  alternates: { canonical: `/ac-types/heat-pumps` },
};

export default function Page() {
  return <AcTypeTemplate content={heatPumps} />;
}
