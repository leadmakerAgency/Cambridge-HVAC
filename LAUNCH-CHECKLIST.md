# Launch checklist

Nothing goes live until every box below is ticked. Transcribed from PDR section 15.

Governing spec: https://claude.ai/code/artifact/16382145-7de8-4cab-b50b-a372f19134b9

---

## Client to supply

- [ ] Real phone number, confirmed working (update `phone.display` and `phone.href`)
- [ ] Enquiry email inbox, monitored (update `email`)
- [ ] Opening hours as actually operated (update `openingHours`)
- [ ] F-Gas registration number and certifying body (update `credentials`)
- [ ] Insurance wording confirmed with the broker (update `credentials.insurance`)
- [ ] Confirmed list of equipment brands actually installed (update `brands`)
- [ ] Confirmed service-area town list (update `serviceArea`)
- [ ] Sign-off on the guarantee wording (PDR section 11, `guarantees`)
- [ ] Review of the three legal pages
- [ ] Stock image licences purchased in the client name

## Build side

- [ ] Every `LAUNCH:` marker in `src/config/site.ts` resolved; no placeholder strings remain
- [ ] Web3Forms key set in `.env.local` and pointed at the live inbox
- [ ] Test submission sent and confirmed received
- [ ] Logo approved; favicon generated
- [x] Open Graph card generated (`src/app/opengraph-image.tsx`) — regenerate if the palette or wordmark changes
- [ ] `robots.index` set back to `true` in `src/app/layout.tsx` (currently `false`) — the one remaining go-live switch
- [x] `sitemap.xml` and `robots.txt` live and correct (`src/app/sitemap.ts`, `src/app/robots.ts`) — 26 URLs, includes every service, AC-type and published blog page
- [x] `HVACBusiness` JSON-LD sitewide (`src/app/layout.tsx`) and `FAQPage` JSON-LD on the homepage, every service page and every AC-type page (`src/lib/schema.ts`) — built against the current `LAUNCH:` placeholders, re-validate once real details are in
- [x] Lighthouse run on the production URL — Performance 98-99, Accessibility 97-100, Best Practices 100. SEO sits at 69 for one reason only: `robots.index: false`, which is correct pre-launch and will resolve the moment that flag flips
- [ ] The new accent palette (sky/spring/sun/teal/coral text on their matching tint backgrounds — `ServiceTemplate.tsx`, `AcTypeTemplate.tsx`, `what-it-costs/page.tsx`) fails WCAG AA contrast on 5 of 6 pairings (2.35–4.04:1 against a 4.5:1 requirement; only violet passes). Left untouched pending a design decision — needs either darker accent tones or darker tints
- [ ] Cross-browser pass — Chrome, Safari, Firefox, Edge
- [ ] Device pass at 375px, 768px, 1024px, 1440px
- [ ] Blog content reviewed before launch — 4 posts currently live, including a test entry (`sdfsdf`) that should be removed or replaced
- [x] 404 page reachable and correct
- [x] Legal pages built — `/privacy-policy`, `/cookie-policy`, `/terms` (still need the client review row above)

## Go-live

- [ ] `cambridge-hvac.co.uk` DNS pointed at Vercel — **client action**
- [ ] HTTPS certificate issued and verified
- [ ] Google Search Console verified and sitemap submitted — **pending the PDR section 12 decision**
- [ ] Final live walkthrough with the client

---

## Do not ship with any of these on the site

PDR section 11. This is a new business with no trading history.

- Reviews, testimonials or star ratings
- Installation counts, or any "trusted by X customers" phrasing
- Years in business, or "established since"
- Checkatrade, Which? Trusted Trader or TrustMark badges
- Awards or accreditations other than F-Gas
- 24/7 or emergency availability claims
- Any specific price or "from GBP X" figure
- A public street address
- A stated warranty length on our own labour
- Manufacturer logo walls implying authorised-installer status
