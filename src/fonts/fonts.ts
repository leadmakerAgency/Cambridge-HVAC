import localFont from "next/font/local";

/**
 * Self-hosted brand faces. Nothing is requested from an external origin at
 * runtime, see PDR §12 ("No third-party scripts").
 *
 * Both families are free for commercial use under the Fontshare licence.
 * See LICENCE.md in this directory.
 */

export const clashDisplay = localFont({
  src: [
    { path: "./ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
  fallback: ["Archivo", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const satoshi = localFont({
  src: [
    { path: "./Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});
