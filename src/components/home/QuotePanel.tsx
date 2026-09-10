import { EnquiryForm } from "@/components/EnquiryForm";

/**
 * Hero conversion card. Same enquiry fields and Formspree delivery as the
 * contact page, scaled down so it sits quietly beside the headline.
 */
export function QuotePanel() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.07] p-1 shadow-panel backdrop-blur-sm">
      <div className="rounded-[calc(0.75rem-1px)] bg-white/95 p-4 sm:p-5">
        <EnquiryForm source="hero" size="hero" />
      </div>
    </div>
  );
}
