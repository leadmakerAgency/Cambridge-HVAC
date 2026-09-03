"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { question: string; answer: React.ReactNode };

/**
 * Keyboard-operable accordion for the FAQ sections (PDR §6 section 09).
 * One panel open at a time; the open panel can be closed again.
 */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-rule border-y border-rule", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-t-${i}`;
        const panelId = `${baseId}-p-${i}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-h3 text-navy">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                    isOpen ? "border-plum bg-plum text-white" : "border-rule text-navy",
                  )}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    <path
                      d="M4 10h12"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 4v12"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      className={cn(
                        "origin-center transition-transform duration-300 ease-out-soft",
                        isOpen && "scale-y-0",
                      )}
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              <div className="measure text-slate">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
