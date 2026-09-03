import Link from "next/link";
import { Container } from "@/components/layout/Container";

/**
 * Compact navy hero for interior pages (service pages, cost guide, about,
 * contact). `data-hero` opts the page into the header's transparent-over-hero
 * behaviour, matching the homepage; the navy ground keeps the white header
 * legible.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb?: string;
  children?: React.ReactNode;
}) {
  return (
    <section data-hero className="on-navy relative -mt-20 overflow-hidden bg-navy-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_-20%,#2a5068_0%,#1d3a4d_45%,#162939_80%)]" />
        <div className="absolute -top-1/2 right-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.5)_0%,rgba(106,33,83,0)_65%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_35%,transparent_85%)]" />
      </div>

      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-5 text-[0.82rem] text-white/55">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="px-2 text-white/30">/</span>
          <span className="text-white/80">{crumb ?? title}</span>
        </nav>

        <p className="eyebrow text-plum-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-hero text-white">{title}</h1>
        {intro && <p className="measure mt-5 text-lg text-white/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
