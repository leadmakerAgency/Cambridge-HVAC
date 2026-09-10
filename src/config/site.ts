/**
 * ============================================================================
 * THE ONLY FILE THAT HOLDS BUSINESS DETAILS.  PDR §14.
 * ============================================================================
 *
 * No phone number, opening hour or credential is hard-coded anywhere else
 * in this project. Going live is a matter of replacing the values below
 * and working through LAUNCH-CHECKLIST.md.
 */

export const site = {
  /** LAUNCH: confirm the registered trading name. */
  businessName: "Cambridge HVAC",
  legalName: "Cambridge HVAC Ltd",
  domain: "cambridge-hvac.co.uk",
  url: "https://cambridge-hvac.co.uk",

  tagline: "Air conditioning and heating for Cambridge homes",

  phone: {
    display: "+44 7397 601087",
    href: "tel:+447397601087",
  },

  /**
   * LAUNCH: hours as actually operated.
   * PDR §11 forbids any 24/7 or emergency-availability claim.
   */
  openingHours: [
    { days: "Monday to Friday", hours: "8:00am to 6:00pm" },
    { days: "Saturday", hours: "9:00am to 1:00pm" },
    { days: "Sunday", hours: "Closed" },
  ],

  /**
   * PDR §5, Cambridge is the only location page at launch. These towns are
   * named in copy to signal reach; they do not get pages of their own.
   * LAUNCH: confirm the real coverage area.
   */
  serviceArea: {
    primary: "Cambridge",
    towns: [
      "Ely",
      "Newmarket",
      "St Ives",
      "Huntingdon",
      "Royston",
      "Saffron Walden",
      "Haverhill",
      "St Neots",
    ],
    radiusMiles: 25,
  },

  /**
   * PDR §11, the ONLY credentials permitted at launch.
   * Nothing may be added here without a source to back it.
   */
  credentials: {
    insurance: "Fully insured, including £5m public liability",
  },

  /**
   * PDR §11, permitted claims, in the exact wording approved.
   * These feed the credential strip and the how-we-work section.
   */
  guarantees: [
    {
      title: "F-Gas certified",
      body: "Refrigerant is handled by engineers certified to work with it, as the law requires.",
    },
    {
      title: "Fully insured",
      body: "Public liability cover in place on every job we take on.",
    },
    {
      title: "Free, no-obligation quotes",
      body: "We survey, we price it, and you decide. No cost either way.",
    },
    {
      title: "Fixed-price quotes",
      body: "The price is fixed once we have surveyed. What we quote is what you pay.",
    },
  ],

  /**
   * PDR §11, named in body copy only. Never as a logo wall, and never
   * phrased as authorised-installer status.
   * LAUNCH: confirm the list the client actually installs.
   */
  brands: ["Daikin", "Mitsubishi Electric", "Panasonic", "Samsung", "LG"],

  /**
   * PDR §11, no public street address is being published.
   * Kept here because LocalBusiness schema (Part 5) needs the locality.
   */
  address: {
    locality: "Cambridge",
    region: "Cambridgeshire",
    country: "GB",
    /** LAUNCH: postcode district only, if the client agrees to publish one. */
    postalCode: "",
  },

  /** LAUNCH: add real profiles, or delete the entries entirely. */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type Site = typeof site;
