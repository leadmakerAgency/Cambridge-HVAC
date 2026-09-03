import type { Metadata } from "next";
import { clashDisplay, satoshi } from "@/fonts/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName}, ${site.tagline}`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Air conditioning installation, heating and maintenance for homes in Cambridge. F-Gas certified, fully insured, free fixed-price quotes.",
  // Full metadata, Open Graph and JSON-LD are completed in Part 5.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-control focus:bg-plum focus:px-4 focus:py-2.5 focus:text-white"
        >
          Skip to content
        </a>

        <Header />

        {/* Header is fixed; hero sections opt out with -mt-20. */}
        <main id="main" className="pt-20">
          {children}
        </main>

        <Footer />

        {/* Space for the fixed mobile call bar. */}
        <div className="h-14 md:hidden" aria-hidden="true" />
        <MobileCallBar />
      </body>
    </html>
  );
}
