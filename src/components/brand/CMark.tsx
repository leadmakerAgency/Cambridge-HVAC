import Image from "next/image";
import { cn } from "@/lib/utils";
import markLight from "./assets/mark-light.png";
import markDark from "./assets/mark-dark.png";

/**
 * The Cambridge HVAC mark, the client's supplied artwork, used as delivered.
 * The C-ring encloses a snowflake and a flame: cooling and heating in one figure.
 *
 * Two versions ship because a raster mark cannot recolour itself:
 *   - light ground → navy ring, navy snowflake, plum flame
 *   - dark ground  → white ring, white snowflake, plum flame
 *
 * The structure of the mark is not altered here; the component only chooses
 * which supplied file to show for the surface behind it.
 */
export function CMark({
  variant = "onLight",
  className,
  title,
}: {
  variant?: "onLight" | "onDark";
  className?: string;
  title?: string;
}) {
  const src = variant === "onDark" ? markDark : markLight;

  return (
    <Image
      src={src}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      priority
      className={cn("h-10 w-10 object-contain", className)}
      sizes="44px"
    />
  );
}
