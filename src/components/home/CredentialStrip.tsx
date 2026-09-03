import { Container } from "@/components/layout/Container";
import { IconShield, IconTag, IconClipboard, IconCertificate } from "@/components/ui/icons";

/**
 * PDR §6 section 03. Replaces the reference site's client-logo wall, a new
 * business has no client logos, so this leads on what is genuinely true:
 * the credentials from PDR §11. Nothing here is a claim we cannot stand behind.
 */
const items = [
  { icon: IconShield, label: "F‑Gas certified", sub: "Refrigerant handled legally" },
  { icon: IconCertificate, label: "Fully insured", sub: "Public liability on every job" },
  { icon: IconClipboard, label: "Free survey", sub: "No cost, no obligation" },
  { icon: IconTag, label: "Fixed-price quotes", sub: "The price we quote is the price" },
];

export function CredentialStrip() {
  return (
    <section className="on-navy bg-navy py-8">
      <Container>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {items.map(({ icon: Icon, label, sub }, i) => (
            <li
              key={label}
              className={
                "flex items-center gap-3.5 md:justify-center " +
                (i > 0 ? "md:border-l md:border-white/12 md:pl-8" : "")
              }
            >
              <Icon className="h-7 w-7 shrink-0 text-plum-light" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-[0.98rem] font-semibold text-white">{label}</span>
                <span className="text-[0.8rem] text-white/55">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
