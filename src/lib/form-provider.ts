/**
 * Enquiry submission adapter. PDR §8.
 *
 * Every form in the site calls `submitEnquiry` and nothing else. The delivery
 * provider is named once, below. Moving to a different provider — Resend,
 * a Supabase table, a CRM webhook — means editing THIS FILE ONLY, no form
 * component changes, no page changes.
 *
 * Forms are wired up in Part 3. This module ships in Part 1 so the contract
 * is fixed before anything is built against it.
 */

export type EnquiryPayload = {
  name?: string;
  email: string;
  phone?: string;
  postcode?: string;
  propertyType?: string;
  service?: string;
  message?: string;
  /** Which form and page the enquiry came from, for triage in the inbox. */
  source: string;
  /** Anti-spam honeypot. Must be empty. */
  botcheck?: string;
};

export type EnquiryResult =
  | { ok: true }
  | { ok: false; error: string };

type Provider = (payload: EnquiryPayload) => Promise<EnquiryResult>;

const GENERIC_ERROR =
  "We could not send that just now. Please try again, or call us instead.";

/**
 * Formspree. Endpoint is fixed per-form on their end; nothing to configure
 * here beyond the URL below.
 */
const formspree: Provider = async (payload) => {
  try {
    const response = await fetch("https://formspree.io/f/maeybbel", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Website enquiry, ${payload.service ?? "general"}`,
        ...payload,
      }),
    });

    if (response.ok) return { ok: true };
    return { ok: false, error: GENERIC_ERROR };
  } catch {
    return { ok: false, error: GENERIC_ERROR };
  }
};

/** Swap the provider by changing this one line. */
const provider: Provider = formspree;

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // Honeypot: a real person never fills a hidden field. Report success so a
  // bot has nothing to learn from the response.
  if (payload.botcheck) return { ok: true };

  return provider(payload);
}
