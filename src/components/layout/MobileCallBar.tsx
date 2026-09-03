import Link from "next/link";
import { site } from "@/config/site";
import { PhoneIcon } from "./Header";

/**
 * PDR §6 section 12, conversion point 2. A persistent call and quote bar on
 * small screens, hidden from 768px up where the header already carries both.
 */
export function MobileCallBar() {
  return (
    <div className="on-navy fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy-deep md:hidden">
      <a
        href={site.phone.href}
        className="flex h-14 items-center justify-center gap-2 text-[0.95rem] font-medium text-white transition-colors hover:bg-navy"
      >
        <PhoneIcon className="h-4 w-4" />
        Call us
      </a>
      <Link
        href="/get-a-quote"
        className="flex h-14 items-center justify-center bg-plum text-[0.95rem] font-semibold text-white transition-colors hover:bg-plum-deep"
      >
        Get a quote
      </Link>
    </div>
  );
}
