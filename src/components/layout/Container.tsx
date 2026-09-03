import { cn } from "@/lib/utils";

/** The single horizontal measure for the whole site. PDR §3 layout rhythm. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "narrow" ? "max-w-3xl" : "max-w-site",
        className,
      )}
    >
      {children}
    </div>
  );
}
