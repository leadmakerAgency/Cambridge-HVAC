import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms of use for the ${site.businessName} website.`,
  path: "/terms",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        intro="The terms that apply when you use this website. This is about the site itself, not a contract for any work we carry out."
      />

      <LegalArticle updated="4 September 2026">
        <h2>About these terms</h2>
        <p>
          These terms apply to your use of {site.url}, operated by {site.legalName}. By using this
          site you agree to them. They do not form a contract for any installation, servicing or
          repair work, that is agreed separately once we have surveyed your property and given you
          a fixed-price quote.
        </p>

        <h2>The information on this site</h2>
        <p>
          We try to keep the content on this site accurate and up to date, including guidance on
          what drives the cost of air conditioning and how our services work. It is provided for
          general information and does not replace a proper site survey. Pricing, timescales and
          suitability for your specific property are only confirmed once we have visited and
          quoted.
        </p>

        <h2>Enquiries and quotes</h2>
        <p>
          Submitting the quote or contact form does not create a booking or a contract. It is a
          request for us to get in touch. A quote becomes a fixed price for the work described in
          it once we have surveyed your property and confirmed it in writing.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse this site, including attempting to disrupt it, submitting forms
          with false or malicious information, or trying to access parts of it not intended for
          public use.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The text, design, and images on this site belong to {site.legalName} or are used with
          permission, except where otherwise credited. You may not reproduce or reuse them without
          our consent.
        </p>

        <h2>Liability</h2>
        <p>
          We take reasonable care to keep this site accurate and available, but we do not guarantee
          it will be free of errors or interruptions, and we accept no liability for loss arising
          from your use of the general information on it. Nothing in these terms limits our
          responsibilities for the actual work we carry out, which are set out in the terms agreed
          when a quote is accepted.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Where this site links to third-party websites, we are not responsible for their content
          or practices. We recommend reviewing their own terms and privacy policies.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales, and any disputes are subject
          to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent by calling{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </LegalArticle>
    </>
  );
}
