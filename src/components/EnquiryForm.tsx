"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { IconPhone } from "@/components/ui/icons";
import { serviceOptions, propertyOptions } from "@/config/nav";
import { site } from "@/config/site";
import { submitEnquiry, type EnquiryPayload } from "@/lib/form-provider";
import { cn } from "@/lib/utils";

/**
 * The site's one enquiry form (PDR §8). Every route to enquiry funnels through
 * here, and every submission goes through the provider adapter in
 * src/lib/form-provider.ts. Client-side validation, a honeypot, and inline
 * success/error states; nothing leaves the page on success.
 */

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm({
  source,
  defaultService = "",
  defaultPostcode = "",
  compact = false,
  tone = "light",
  size = "default",
}: {
  source: string;
  defaultService?: string;
  defaultPostcode?: string;
  compact?: boolean;
  tone?: "light" | "dark";
  size?: "default" | "hero";
}) {
  const hero = size === "hero";
  const fieldSize = hero ? "sm" : "default";
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload: EnquiryPayload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      postcode: String(data.get("postcode") ?? "").trim(),
      propertyType: String(data.get("propertyType") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      botcheck: String(data.get("botcheck") ?? ""),
      source,
    };

    // Validate.
    const next: Errors = {};
    if (!payload.name) next.name = "Please tell us your name.";
    if (!payload.email) next.email = "We need an email to reply to.";
    else if (!EMAIL.test(payload.email)) next.email = "That email doesn't look right.";
    if (!payload.phone) next.phone = "A phone number helps us call you back.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setServerError("");
    const result = await submitEnquiry(payload);

    if (result.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  }

  if (status === "sent") {
    return (
      <div
        className={cn(
          "text-center",
          hero
            ? "py-4"
            : cn(
                "rounded-card border p-8",
                tone === "dark" ? "border-white/15 bg-white/5" : "border-rule bg-white shadow-card",
              ),
        )}
        role="status"
      >
        <span
          className={cn(
            "mx-auto grid place-items-center rounded-full bg-plum/10 text-plum",
            hero ? "h-10 w-10" : "h-14 w-14",
          )}
        >
          <svg viewBox="0 0 24 24" fill="none" className={hero ? "h-5 w-5" : "h-7 w-7"}>
            <path
              d="m5 12.5 4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3
          className={cn(
            "font-display",
            hero ? "mt-3 text-[1.05rem]" : "mt-5 text-h3",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        >
          Thanks, we&rsquo;ve got it.
        </h3>
        <p
          className={cn(
            "mx-auto mt-2 max-w-sm",
            hero ? "text-[0.82rem] leading-snug" : "",
            tone === "dark" ? "text-white/70" : "text-slate",
          )}
        >
          We&rsquo;ll be in touch shortly to arrange your free survey. For anything urgent, call us
          on{" "}
          <a
            href={site.phone.href}
            className={cn("font-medium underline-offset-4 hover:underline", tone === "dark" ? "text-white" : "text-plum")}
          >
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("flex flex-col", hero ? "gap-3" : "gap-4")}
      aria-label="Enquiry form"
    >
      {hero && (
        <div>
          <h2 className="font-display text-[1.15rem] font-semibold tracking-tight text-navy">
            Send us a message
          </h2>
          <p className="mt-1 text-[0.8rem] leading-snug text-slate">
            Fill this in and we will be in touch.
          </p>
        </div>
      )}
      {/* Honeypot: hidden from people, catches bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={cn("grid", hero ? "gap-3 sm:grid-cols-2" : compact ? "gap-4" : "gap-4 sm:grid-cols-2")}>
        <Input
          label="Your name"
          name="name"
          autoComplete="name"
          required
          tone={tone}
          error={errors.name}
          size={fieldSize}
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          tone={tone}
          error={errors.phone}
          size={fieldSize}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          tone={tone}
          error={errors.email}
          size={fieldSize}
        />
        <Input
          label="Postcode"
          name="postcode"
          autoComplete="postal-code"
          defaultValue={defaultPostcode}
          hint={hero ? undefined : "So we can confirm we cover you."}
          tone={tone}
          size={fieldSize}
        />
        <Select
          label="What do you need?"
          name="service"
          options={serviceOptions}
          placeholder="Choose a service"
          defaultValue={defaultService}
          tone={tone}
          size={fieldSize}
        />
        <Select
          label="Property type"
          name="propertyType"
          options={propertyOptions}
          placeholder="Choose one"
          tone={tone}
          size={fieldSize}
        />
      </div>

      <Textarea
        label="Anything else we should know?"
        name="message"
        placeholder="Number of rooms, access, timescales, anything useful."
        tone={tone}
        size={fieldSize}
        rows={hero ? 2 : 4}
      />

      {status === "error" && (
        <p
          className={cn(
            "rounded-control border border-coral/30 bg-coral/5 text-coral",
            hero ? "px-3 py-2 text-[0.8rem]" : "px-3.5 py-2.5 text-[0.85rem]",
          )}
          role="alert"
        >
          {serverError}
        </p>
      )}

      <div className={cn("flex flex-col", hero ? "gap-2.5" : "mt-1 gap-4 sm:flex-row sm:items-center")}>
        <Button
          type="submit"
          size={hero ? "md" : "lg"}
          disabled={status === "sending"}
          className={hero ? "w-full" : "sm:w-auto"}
        >
          {status === "sending" ? "Sending…" : "Request my free quote"}
        </Button>
        <p
          className={cn(
            hero ? "text-center text-[0.78rem]" : "text-[0.85rem]",
            tone === "dark" ? "text-white/60" : "text-slate",
          )}
        >
          Or call{" "}
          <a
            href={site.phone.href}
            className={cn("inline-flex items-center gap-1 font-medium", tone === "dark" ? "text-white" : "text-plum")}
          >
            <IconPhone className={hero ? "h-3.5 w-3.5" : "h-4 w-4"} />
            {site.phone.display}
          </a>
        </p>
      </div>

      <p
        className={cn(
          hero ? "text-center text-[0.72rem]" : "text-[0.78rem]",
          tone === "dark" ? "text-white/60" : "text-slate",
        )}
      >
        No obligation. We&rsquo;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
