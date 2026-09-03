"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Form primitives. Shapes and states only, nothing submits until Part 3,
 * when they are wired to the adapter in src/lib/form-provider.ts (PDR §8).
 */

const controlBase =
  "w-full rounded-control border bg-white px-3.5 text-[0.95rem] text-navy-deep " +
  "transition-colors duration-150 placeholder:text-slate/60 " +
  "disabled:cursor-not-allowed disabled:bg-mist";

function Wrapper({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  tone,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
  tone: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className={cn(
          "text-[0.8rem] font-medium",
          tone === "dark" ? "text-white/80" : "text-slate",
        )}
      >
        {label}
        {required && (
          <span className="ml-1 text-plum" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {hint && !error && (
        <p className={cn("text-[0.78rem]", tone === "dark" ? "text-white/55" : "text-slate/80")}>
          {hint}
        </p>
      )}

      {error && (
        <p className="text-[0.78rem] font-medium text-plum" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  tone?: "light" | "dark";
};

export function Input({
  label,
  hint,
  error,
  tone = "light",
  className,
  ...props
}: FieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <Wrapper
      label={label}
      hint={hint}
      error={error}
      required={props.required}
      htmlFor={id}
      tone={tone}
    >
      <input
        id={id}
        className={cn(
          controlBase,
          "h-11",
          error ? "border-plum" : "border-rule hover:border-slate/50",
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
    </Wrapper>
  );
}

export function Textarea({
  label,
  hint,
  error,
  tone = "light",
  className,
  ...props
}: FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <Wrapper
      label={label}
      hint={hint}
      error={error}
      required={props.required}
      htmlFor={id}
      tone={tone}
    >
      <textarea
        id={id}
        rows={4}
        className={cn(
          controlBase,
          "py-2.5 leading-relaxed",
          error ? "border-plum" : "border-rule hover:border-slate/50",
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
    </Wrapper>
  );
}

export function Select({
  label,
  hint,
  error,
  tone = "light",
  options,
  placeholder,
  className,
  ...props
}: FieldProps & {
  options: readonly { value: string; label: string }[];
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <Wrapper
      label={label}
      hint={hint}
      error={error}
      required={props.required}
      htmlFor={id}
      tone={tone}
    >
      <div className="relative">
        <select
          id={id}
          className={cn(
            controlBase,
            "h-11 cursor-pointer appearance-none pr-10",
            error ? "border-plum" : "border-rule hover:border-slate/50",
            className,
          )}
          aria-invalid={error ? true : undefined}
          // Only default the placeholder when the select is uncontrolled.
          {...(props.value === undefined ? { defaultValue: "" } : {})}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-slate"
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Wrapper>
  );
}
