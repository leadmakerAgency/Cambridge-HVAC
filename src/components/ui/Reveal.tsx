"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The site's only motion primitive. PDR §4, a short fade and rise as an
 * element enters the viewport, once. No animation library.
 *
 * Fail-safe by design: the element renders visible in the markup, and the
 * hidden-then-reveal behaviour lives entirely in CSS behind
 * `@media (scripting: enabled)` (see globals.css). So with JavaScript disabled
 *, or for any crawler that does not run it, the content is simply visible,
 * and no copy is ever hidden behind JS. When scripting is on, this component
 * adds `is-visible` once the element scrolls into view.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "span";
}) {
  const nodeRef = useRef<HTMLElement | null>(null);

  const setRef = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={setRef}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
