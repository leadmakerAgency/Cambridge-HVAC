import type { Metadata } from "next";
import { clashDisplay, satoshi } from "@/fonts/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/config/site";
import "./globals.css";

const description =
  "Air conditioning installation, heating and maintenance for homes in Cambridge. F-Gas certified, fully insured, free fixed-price quotes.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName}, ${site.tagline}`,
    template: `%s | ${site.businessName}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName}, ${site.tagline}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName}, ${site.tagline}`,
    description,
  },
  // Flip to true as part of go-live (LAUNCH-CHECKLIST.md) — kept false until
  // the site is ready to be indexed.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="min-h-screen">
        <JsonLd data={localBusinessSchema()} />

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
