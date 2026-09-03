import { ButtonLink, ArrowRight } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { servicesLinks } from "@/config/nav";
import { site } from "@/config/site";
import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section tone="ink" size="large" className="-mt-20 pt-40">
      <p className="eyebrow text-plum-light">Error 404</p>

      <h1 className="mt-4 max-w-4xl text-hero text-white">That page isn&rsquo;t here.</h1>

      <p className="measure mt-6 text-lg text-white/70">
        The link may be out of date, or the address slightly off. Everything we do is one of the
        links below, or call us on{" "}
        <a href={site.phone.href} className="text-white underline underline-offset-4">
          {site.phone.display}
        </a>{" "}
        and we&rsquo;ll point you the right way.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Back to the homepage
        </ButtonLink>
        <ButtonLink href="/get-a-quote" variant="outlineLight" size="lg">
          Get a quote
        </ButtonLink>
      </div>

      <ul className="mt-14 grid gap-x-8 gap-y-3 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 py-1 text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <ArrowRight className="text-plum-light group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
