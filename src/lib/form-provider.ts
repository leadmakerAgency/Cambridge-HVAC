/**
 * Enquiry submission adapter. PDR §8.
 *
 * Every form in the site calls `submitEnquiry` and nothing else. The delivery
 * provider is named once, below. Moving from Web3Forms to Formspree, Resend,
 * a Supabase table or a CRM webhook means editing THIS FILE ONLY, no form
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
  | { ok: true; preview?: boolean }
  | { ok: false; error: string };

type Provider = (payload: EnquiryPayload) => Promise<EnquiryResult>;

const GENERIC_ERROR =
  "We could not send that just now. Please try again, or call us instead.";

/**
 * Web3Forms. No account beyond an email confirmation, no monthly cost.
 * The access key is public by design, it only authorises delivery to the
 * address that created it, and cannot be used to read anything.
 */
const web3forms: Provider = async (payload) => {
  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

  // No key yet (pre-launch): accept the submission as a preview so the success
  // flow can be reviewed. The form surfaces that it is preview mode. Setting the
  // key in .env.local turns on real delivery, with no code change.
  if (!accessKey) {
    return { ok: true, preview: true };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Website enquiry, ${payload.service ?? "general"}`,
        from_name: "Cambridge HVAC website",
        ...payload,
      }),
    });

    if (!response.ok) return { ok: false, error: GENERIC_ERROR };

    const data: { success?: boolean } = await response.json();
    return data.success ? { ok: true } : { ok: false, error: GENERIC_ERROR };
  } catch {
    return { ok: false, error: GENERIC_ERROR };
  }
};

/** Swap the provider by changing this one line. */
const provider: Provider = web3forms;

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // Honeypot: a real person never fills a hidden field. Report success so a
  // bot has nothing to learn from the response.
  if (payload.botcheck) return { ok: true };

  return provider(payload);
}
