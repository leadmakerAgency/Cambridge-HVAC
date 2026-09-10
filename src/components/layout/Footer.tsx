import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footerNav } from "@/config/nav";
import { site } from "@/config/site";
import { PhoneIcon } from "./Header";

/** PDR §6 section 11. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-ink-deep text-white/70">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-5">
            <Logo variant="onDark" />
            <p className="measure text-[0.95rem] text-white/65">
              {site.tagline}. Serving {site.serviceArea.primary} and{" "}
              {site.serviceArea.towns.length} surrounding towns within about{" "}
              {site.serviceArea.radiusMiles} miles.
            </p>

            <div className="flex flex-col gap-2 text-[0.95rem]">
              <a
                href={site.phone.href}
                className="inline-flex w-fit items-center gap-2 font-medium text-white transition-colors hover:text-plum-light"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phone.display}
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading} className="flex flex-col gap-3">
              <h2 className="eyebrow text-white/60">{group.heading}</h2>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.925rem] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Credential line. PDR §11, the only claims permitted at launch. */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-8 text-[0.83rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            F-Gas certified. {site.credentials.insurance}.
          </p>
          <p>
            &copy; {year} {site.legalName}
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-3 text-[0.83rem] text-white/60">
          <p>
            Opening hours:{" "}
            {site.openingHours
              .filter((h) => h.hours !== "Closed")
              .map((h) => `${h.days} ${h.hours}`)
              .join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
