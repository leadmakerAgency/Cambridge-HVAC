import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { CMark } from "./CMark";

/**
 * The full lockup: mark plus wordmark.
 *
 * PDR §3, the supplied logo file sets "CAMBRIDGE" in white, so it vanishes on
 * light backgrounds. The fix is to stop treating the wordmark as artwork: it is
 * live text here, coloured from the surface it sits on, so the light and dark
 * variants can never drift apart or be used on the wrong ground.
 */
export function Logo({
  variant = "onLight",
  markOnly = false,
  href = "/",
  className,
}: {
  variant?: "onLight" | "onDark";
  markOnly?: boolean;
  href?: string | null;
  className?: string;
}) {
  const onDark = variant === "onDark";

  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <CMark variant={variant} className="h-11 w-11 shrink-0" />

      {!markOnly && (
        <span className="flex flex-col justify-center leading-none">
          <span
            className={cn(
              "font-display text-[0.95rem] tracking-[0.2em]",
              onDark ? "text-white" : "text-navy",
            )}
            style={{ fontWeight: 600 }}
          >
            CAMBRIDGE
          </span>

          <span className="mt-1 flex items-center gap-1.5">
            <span
              className={cn("h-px flex-1", onDark ? "bg-plum-light" : "bg-plum")}
              aria-hidden="true"
            />
            <span
              className={cn(
                "font-display text-[0.7rem] tracking-[0.34em]",
                onDark ? "text-plum-light" : "text-plum",
              )}
              style={{ fontWeight: 700 }}
            >
              HVAC
            </span>
            <span
              className={cn("h-px flex-1", onDark ? "bg-plum-light" : "bg-plum")}
              aria-hidden="true"
            />
          </span>
        </span>
      )}

      <span className="sr-only">{site.businessName}</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex rounded-sm" aria-label={`${site.businessName}, home`}>
      {content}
    </Link>
  );
}
