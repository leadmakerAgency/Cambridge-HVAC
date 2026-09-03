"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, hasChildren, type NavItem } from "@/config/nav";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Sticky header with dropdown menus (AC Types, Services).
 *
 * On a page that opens with a hero the header starts transparent and resolves
 * to solid navy on scroll; everywhere else it is solid from the top. It detects
 * a `data-hero` element on mount, so a page opts in simply by having a hero.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOverHero(Boolean(document.querySelector("[data-hero]")));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [pathname]);

  // Close desktop dropdowns on outside click or Escape.
  useEffect(() => {
    if (!openDesktop) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDesktop(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenDesktop(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDesktop]);

  // Mobile menu: Escape to close, focus trapped, page scroll locked.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const solid = scrolled || !overHero || menuOpen;

  const isActive = (item: NavItem) => {
    if (hasChildren(item)) {
      return item.children.some((c) => pathname === c.href || pathname.startsWith(`${c.href}/`));
    }
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <header
      className={cn(
        "on-navy fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out-soft",
        solid ? "bg-navy-deep shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
        <Logo variant="onDark" />

        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item);

            if (!hasChildren(item)) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[0.925rem] font-medium transition-colors duration-150",
                    active ? "text-white" : "text-white/75 hover:text-white",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-plum-light" aria-hidden="true" />
                  )}
                </Link>
              );
            }

            const open = openDesktop === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.label)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenDesktop(open ? null : item.label)}
                  className={cn(
                    "relative flex items-center gap-1 py-2 text-[0.925rem] font-medium transition-colors duration-150",
                    active || open ? "text-white" : "text-white/75 hover:text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
                  />
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-plum-light" aria-hidden="true" />
                  )}
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 pt-3 transition-opacity duration-150",
                    open ? "visible opacity-100" : "invisible opacity-0",
                  )}
                >
                  <ul className="w-72 rounded-card border border-white/10 bg-navy-deep p-2 shadow-panel">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={cn(
                            "block rounded-control px-3 py-2.5 text-[0.9rem] transition-colors",
                            pathname === child.href
                              ? "bg-white/10 text-white"
                              : "text-white/75 hover:bg-white/5 hover:text-white",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-[0.925rem] font-medium text-white/85 transition-colors hover:text-white xl:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone.display}
          </a>

          <span className="hidden sm:block">
            <ButtonLink href="/get-a-quote" size="sm">
              Get a quote
            </ButtonLink>
          </span>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-control text-white lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!menuOpen}
        className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-navy-deep lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
          {mainNav.map((item) => {
            if (!hasChildren(item)) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-white/10 py-3.5 text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }

            const open = openMobile === item.label;
            return (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenMobile(open ? null : item.label)}
                  className="flex w-full items-center justify-between py-3.5 text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-180")}
                  />
                </button>
                {open && (
                  <ul className="flex flex-col pb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2.5 pl-4 text-[0.9rem] text-white/65 transition-colors hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          <div className="flex flex-col gap-3 pt-5 pb-2">
            <ButtonLink href="/get-a-quote" size="lg">
              Get a quote
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.2 3H4a1 1 0 0 0-1 1.1C3.4 10.6 9.4 16.6 15.9 17a1 1 0 0 0 1.1-1v-2.2a1 1 0 0 0-.8-1l-2.3-.5a1 1 0 0 0-1 .4l-.6.8a10.6 10.6 0 0 1-4.3-4.3l.8-.6a1 1 0 0 0 .4-1l-.5-2.3a1 1 0 0 0-1-.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
