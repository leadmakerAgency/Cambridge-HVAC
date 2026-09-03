/**
 * Navigation structure.
 *
 * The header nav mixes plain links with dropdown menus (AC Types, Services).
 * New pages below are content stubs for now; the routes are live so the
 * navigation is real from day one.
 */

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const acTypes: NavLink[] = [
  { label: "Wall-mounted air conditioning", href: "/ac-types/wall-mounted" },
  { label: "Multi-split / multi-room systems", href: "/ac-types/multi-split" },
  { label: "Ducted & concealed", href: "/ac-types/ducted" },
  { label: "Cassette air conditioning", href: "/ac-types/cassette" },
  { label: "Floor-standing units", href: "/ac-types/floor-standing" },
  { label: "Portable air conditioning", href: "/ac-types/portable" },
  { label: "Air-to-air heat pumps", href: "/ac-types/heat-pumps" },
];

export const servicesLinks: NavLink[] = [
  { label: "Air conditioning installation", href: "/air-conditioning-installation" },
  { label: "Air conditioning servicing", href: "/services/servicing" },
  { label: "Air conditioning repairs", href: "/services/repairs" },
  { label: "Heating & heat pumps", href: "/heating" },
  { label: "Maintenance & repairs", href: "/maintenance-and-repairs" },
  { label: "Commercial air conditioning", href: "/services/commercial" },
];

/** Header navigation. */
export const mainNav: NavItem[] = [
  { label: "AC Types", children: acTypes },
  { label: "Services", children: servicesLinks },
  { label: "What It Costs", href: "/what-it-costs" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer, three columns. */
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Air conditioning installation", href: "/air-conditioning-installation" },
      { label: "Heating services", href: "/heating" },
      { label: "Maintenance & repairs", href: "/maintenance-and-repairs" },
      { label: "What it costs", href: "/what-it-costs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Cookie policy", href: "/cookie-policy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

/** Services offered, used by the quote form's service selector. */
export const serviceOptions = [
  { value: "ac-installation", label: "Air conditioning installation" },
  { value: "heating", label: "Heating installation or repair" },
  { value: "maintenance", label: "Servicing or maintenance" },
  { value: "repair", label: "Repair or callout" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const propertyOptions = [
  { value: "house", label: "House" },
  { value: "flat", label: "Flat or apartment" },
  { value: "new-build", label: "New build" },
  { value: "commercial", label: "Commercial premises" },
] as const;

/** Type guard: does a nav item open a dropdown? */
export function hasChildren(item: NavItem): item is { label: string; children: NavLink[] } {
  return "children" in item;
}
