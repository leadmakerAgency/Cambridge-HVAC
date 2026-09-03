import { Check } from "lucide-react";

/** Small plum check in a tinted disc, used in service "what we cover" lists. */
export function IconCheck() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-plum/10 text-plum">
      <Check aria-hidden="true" strokeWidth={2.4} className="h-4 w-4" />
    </span>
  );
}
