import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `${site.businessName} does not use cookies for analytics, advertising or tracking.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        intro="Short and honest: this website does not set cookies to track you."
      />

      <LegalArticle updated="4 September 2026">
        <h2>We don&rsquo;t use cookies</h2>
        <p>
          This website does not use cookies, and it does not run analytics, advertising, or any
          other tracking technology. There is no cookie banner on this site because there is
          nothing non-essential to ask your consent for.
        </p>

        <h2>What this means in practice</h2>
        <ul>
          <li>No analytics tools (such as Google Analytics) measure your visit</li>
          <li>No advertising or retargeting scripts run on this site</li>
          <li>No third-party embeds (maps, chat widgets, video players) set cookies here</li>
          <li>We don&rsquo;t store anything in your browser to recognise you on a return visit</li>
        </ul>

        <h2>Forms</h2>
        <p>
          When you submit the quote or contact form, the information you type is sent directly to
          our enquiry inbox using a third-party delivery service (Web3Forms). This is a one-off
          submission, not a cookie, and it is covered by our{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </p>

        <h2>If this ever changes</h2>
        <p>
          If we introduce analytics or any other technology that sets cookies in the future, we
          will update this page first and add a consent banner before any non-essential cookie is
          set, in line with UK law.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any questions about this policy, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalArticle>
    </>
  );
}
