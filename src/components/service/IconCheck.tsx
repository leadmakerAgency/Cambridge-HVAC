import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconCheck({ bg, fg }: { bg?: string; fg?: string } = {}) {
  return (
    <span className={cn("grid h-8 w-8 place-items-center rounded-full", bg ?? "bg-plum/10", fg ?? "text-plum")}>
      <Check aria-hidden="true" strokeWidth={2.4} className="h-4 w-4" />
    </span>
  );
}
