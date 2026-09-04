"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Button";
import { serviceOptions } from "@/config/nav";

/**
 * PDR §6 section 02 / §8, conversion point 1.
 *
 * A deliberately short two-field start: postcode and service. Someone who
 * types a postcode has committed, and lands on /get-a-quote with both values
 * already filled. The full form and its delivery live in Part 3; this panel
 * carries the values forward as query params.
 */
export function QuotePanel() {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");
  const [service, setService] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (postcode.trim()) params.set("postcode", postcode.trim());
    if (service) params.set("service", service);
    router.push(`/get-a-quote${params.size ? `?${params}` : ""}`);
  }

  return (
    <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-1.5 shadow-panel backdrop-blur-sm">
      <form
        onSubmit={onSubmit}
        className="rounded-[calc(1rem-2px)] bg-white p-6 sm:p-7"
        aria-label="Get a quick quote"
      >
        <h2 className="font-display text-h3 text-navy">Get a fixed-price quote</h2>
        <p className="mt-1.5 text-[0.9rem] text-slate">
          Tell us where you are and what you need. Takes under a minute.
        </p>

        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hero-postcode" className="text-[0.8rem] font-medium text-slate">
              Your postcode
            </label>
            <input
              id="hero-postcode"
              name="postcode"
              inputMode="text"
              autoComplete="postal-code"
              placeholder="e.g. CB1 2AB"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="h-12 w-full rounded-control border border-rule bg-white px-3.5 text-[0.95rem] text-navy-deep transition-colors placeholder:text-slate/55 hover:border-slate/50"
            />
          </div>

          <Select
            label="What do you need?"
            options={serviceOptions}
            placeholder="Choose a service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-12"
          />

          <Button type="submit" size="lg" className="mt-1 w-full">
            Get my quote
            <ArrowRight />
          </Button>
        </div>

        <p className="mt-4 text-center text-[0.8rem] text-slate">
          No obligation. We&rsquo;ll never share your details.
        </p>
      </form>
    </div>
  );
}
