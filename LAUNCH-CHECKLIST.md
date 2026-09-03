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
- [ ] Logo approved; favicon and Open Graph card generated
- [ ] `robots.index` set back to `true` in `src/app/layout.tsx` (currently `false`)
- [ ] `sitemap.xml` and `robots.txt` live and correct
- [ ] LocalBusiness JSON-LD completed with real details and validated
- [ ] Lighthouse run on the production URL: 95+ across all four categories
- [ ] Cross-browser pass — Chrome, Safari, Firefox, Edge
- [ ] Device pass at 375px, 768px, 1024px, 1440px
- [ ] All five blog articles published
- [ ] 404 page reachable and correct

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
