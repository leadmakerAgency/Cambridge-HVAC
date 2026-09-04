import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.businessName} collects, uses and protects your personal data.`,
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="A plain explanation of what we collect through this website, why, and what your rights are."
      />

      <LegalArticle updated="4 September 2026">
        <h2>Who we are</h2>
        <p>
          This policy covers {site.url}, operated by {site.legalName} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). We are the data controller for the personal information described
          below. You can reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          We only collect what you give us when you use the quote or contact forms on this site.
          Depending on the form, that may include:
        </p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Postcode</li>
          <li>Property type</li>
          <li>The service you are enquiring about</li>
          <li>Any message or details you choose to add</li>
        </ul>
        <p>
          We do not use cookies, analytics or advertising trackers to collect information about
          you as you browse this site. See our{" "}
          <a href="/cookie-policy">cookie policy</a> for the full detail.
        </p>

        <h2>Why we collect it</h2>
        <p>
          We use the information you submit for one purpose: to respond to your enquiry, arrange a
          survey, and provide a quote for air conditioning or heating work. We do not use it for
          marketing you have not asked for, and we do not sell or rent it to anyone.
        </p>

        <h2>How it is handled</h2>
        <p>
          Form submissions on this site are delivered by{" "}
          <a href="https://web3forms.com" target="_blank" rel="noreferrer">
            Web3Forms
          </a>
          , a third-party service that forwards your submission to our enquiry inbox by email.
          Web3Forms processes the submission only to deliver it to us, and we are not aware of it
          being used for any other purpose. Once received, your details are handled by our team in
          the same way as any other customer enquiry.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep enquiry details for as long as reasonably needed to respond to you and, if you
          become a customer, for as long as needed to carry out and support the work, plus any
          period required by law (for example, for accounting records). If nothing comes of an
          enquiry, we do not keep it longer than necessary.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK data protection law, you have the right to ask what information we hold about
          you, to have it corrected if it is wrong, to have it deleted, and to object to how it is
          used. To make any of these requests, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. If you are not satisfied with our
          response, you can complain to the{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
            Information Commissioner&rsquo;s Office
          </a>
          , the UK&rsquo;s data protection regulator.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time, for example if the way we handle enquiries
          changes. The date at the top of this page shows when it was last revised.
        </p>
      </LegalArticle>
    </>
  );
}
