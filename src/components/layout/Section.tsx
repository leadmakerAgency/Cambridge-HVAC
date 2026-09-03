import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "frost" | "white" | "mist" | "navy" | "navyDeep" | "ink" | "plum" | "spring";

const tones: Record<Tone, string> = {
  frost: "bg-frost text-navy-deep",
  white: "bg-white text-navy-deep",
  mist: "bg-mist text-navy-deep",
  navy: "on-navy bg-navy text-white",
  navyDeep: "on-navy bg-navy-deep text-white",
  ink: "on-navy bg-ink text-white",
  plum: "on-navy bg-plum text-white",
  spring: "bg-spring text-white",
};

/**
 * A full-width band with the site's vertical rhythm. Tone sets the ground and
 * the text colour together, so a section can never end up with one theme's
 * text on another theme's background.
 */
export function Section({
  children,
  tone = "frost",
  className,
  containerClassName,
  size = "default",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  size?: "default" | "large" | "compact";
  id?: string;
}) {
  const padding =
    size === "large"
      ? "py-section-lg"
      : size === "compact"
        ? "py-12 sm:py-16"
        : "py-section";

  return (
    <section id={id} className={cn(tones[tone], padding, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
