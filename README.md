# Cambridge HVAC

Marketing site for an air conditioning and heating installer serving Cambridge, UK.

Built to **PDR v2** — the governing specification. Read it before changing anything:
https://claude.ai/code/artifact/16382145-7de8-4cab-b50b-a372f19134b9

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build status

| Part | Scope | State |
| --- | --- | --- |
| 1 | Foundation and design system | **Done** |
| 2 | Copy and homepage | Not started |
| 3 | Service pages and conversion | Not started |
| 4 | Blog | Not started |
| 5 | Technical, legal and launch | Not started |

`/` currently renders a temporary design-system page. Part 2 replaces it with the real homepage.
Most navigation links resolve to the branded 404 until Parts 3 to 5 build those pages.

## How this project is organised

| Path | What lives there |
| --- | --- |
| `src/config/site.ts` | **Every business detail.** Phone, email, hours, credentials. Nothing is hard-coded elsewhere. |
| `src/config/nav.ts` | Header, footer and form option lists |
| `src/app/globals.css` | All design tokens — colour, type scale, spacing. No component writes a raw hex. |
| `src/fonts/` | Self-hosted Clash Display and Satoshi, plus licences |
| `src/components/brand/` | Logo and C-mark |
| `src/components/layout/` | Header, footer, mobile call bar, section and container primitives |
| `src/components/ui/` | Buttons, form fields, accordion, the one motion primitive |
| `src/lib/form-provider.ts` | Enquiry delivery adapter. Swap providers by editing this file only. |

## Rules that are not obvious from the code

1. **No third-party scripts.** No analytics, tag manager, chat widget, map embed, font CDN or
   CAPTCHA. The site therefore sets no non-essential cookies and needs no consent banner.
   Adding any of these changes that, and needs a decision first — PDR section 12.

2. **The claims boundary is binding.** PDR section 11 lists exactly what the site may and may not
   claim. No reviews, no testimonials, no installation counts, no years in business, no prices,
   no 24/7 availability. This is a new business with no track record.

3. **Placeholders are realistic on purpose,** so the design reads correctly in review. Every one
   is marked `LAUNCH:` in `src/config/site.ts`. See `LAUNCH-CHECKLIST.md`.

## Stack

Next.js 16 (App Router) - TypeScript - Tailwind CSS v4 - statically generated - no database, no CMS.
