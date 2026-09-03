import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Boxes,
  Wind,
  SunSnow,
  Wrench,
  CalendarCheck,
  Layers,
  KeyRound,
  Grid3x3,
  Building2,
  Store,
  UtensilsCrossed,
  Server,
  Dumbbell,
  Scissors,
} from "lucide-react";
import acPhoto from "@/components/home/assets/ac.jpg";
import heatingPhoto from "@/components/home/assets/heating.jpg";
import maintenancePhoto from "@/components/home/assets/maintenance.jpg";
import engineerPhoto from "@/components/home/assets/engineer.jpg";
import wallClean from "./covers/wall-clean.jpg";
import installDrill from "./covers/install-drill.jpg";
import remoteHand from "./covers/remote-hand.jpg";
import remotePanel from "./covers/remote-panel.jpg";
import fanCloseup from "./covers/fan-closeup.jpg";
import outdoorClean from "./covers/outdoor-clean.jpg";
import smartControls from "./covers/smart-controls.jpg";
import engineerHivis from "./covers/engineer-hivis.jpg";
import repairHands from "./covers/repair-hands.jpg";
import pipeLeak from "./covers/pipe-leak.jpg";
import wallPeach from "./covers/wall-peach.jpg";
import units from "./covers/units.jpg";
import remote2 from "./covers/remote2.jpg";
import outdoorRepair from "./covers/outdoor-repair.jpg";
import noise from "./covers/noise.jpg";
import leak from "./covers/leak.jpg";
import fgas from "./covers/fgas.jpg";
import install2 from "./covers/install2.jpg";
import serviceIndoor from "./covers/service-indoor.jpg";
import filterClean from "./covers/filter-clean.jpg";
import diagnostic from "./covers/diagnostic.jpg";
import commercialPhoto from "./actypes/commercial.jpg";

export type ServiceContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  photo: StaticImageData;
  photoAlt: string;
  overview: string[];
  covers: { title: string; body: string; image?: StaticImageData }[];
  coversEyebrow?: string;
  coversHeading?: string;
  systemTypes?: { title: string; body: string; icon?: LucideIcon }[];
  highlightsEyebrow?: string;
  highlightsHeading?: string;
  highlightsIntro?: string;
  propertyTypes: string[];
  propertyEyebrow?: string;
  propertyHeading?: string;
  showBrands: boolean;
  process: { title: string; body: string }[];
  faqs: { question: string; answer: React.ReactNode }[];
};

export const airConditioning: ServiceContent = {
  slug: "air-conditioning-installation",
  metaTitle: "Air Conditioning Installation in Cambridge",
  metaDescription:
    "Domestic air conditioning installation across Cambridge. Wall-mounted, multi-room and ducted systems, F‑Gas certified engineers, free survey and fixed-price quotes.",
  eyebrow: "Air conditioning installation",
  title: "Air conditioning installation for Cambridge homes",
  intro:
    "From a single quiet bedroom unit to a whole-house multi-room system, we design, supply and install air conditioning that suits your home and your budget.",
  photo: acPhoto,
  photoAlt: "A wall-mounted air conditioning unit in a modern living room",
  overview: [
    "Modern air conditioning does far more than cool a room on the hottest days. The systems we install are highly efficient, genuinely quiet, and many double as low-cost heating through the cooler months.",
    "Every installation starts with a free survey. We look at the rooms you want to cool, how your home is built and where pipework can run, then design a system sized properly for the space, no over-selling, no guesswork.",
    "The work is carried out by F‑Gas certified engineers, tidily and with minimal disruption. Most single-room installations are completed in a day.",
  ],
  covers: [
    {
      image: wallClean, title: "Design and sizing",
      body: "We size the system to the room, so it runs efficiently rather than fighting a unit that is too small or wasting energy on one too large.",
    },
    {
      image: install2, title: "Clean installation",
      body: "Neat pipe runs, tidy brackets and dust sheets throughout. We talk you through where everything goes before we start.",
    },
    {
      image: remoteHand, title: "Testing and handover",
      body: "Every system is commissioned, tested and handed over working, with a walkthrough of the controls so you are comfortable using it.",
    },
    {
      image: maintenancePhoto, title: "Aftercare",
      body: "We can keep your system serviced and F‑Gas compliant so it stays efficient and the manufacturer warranty stays valid.",
    },
  ],
  systemTypes: [
    {
      icon: AirVent,
      title: "Wall-mounted split",
      body: "The most popular choice: one discreet indoor unit and an outdoor condenser. Ideal for a single room such as a bedroom, living room or home office.",
    },
    {
      icon: Boxes,
      title: "Multi-split",
      body: "Several indoor units run from a single outdoor unit, cooling multiple rooms independently without a condenser for each one.",
    },
    {
      icon: Wind,
      title: "Ducted & concealed",
      body: "Units hidden above ceilings or in bulkheads, delivering cooling through discreet grilles for a near-invisible finish.",
    },
    {
      icon: SunSnow,
      title: "Air-to-air heat pump",
      body: "The same system provides efficient heating as well as cooling, useful right through a UK spring and autumn.",
    },
  ],
  propertyTypes: ["Houses", "Flats and apartments", "New builds", "Home offices and garden rooms"],
  showBrands: true,
  process: [
    { title: "Free survey", body: "We visit, measure up and understand what you want from the system." },
    { title: "Fixed-price quote", body: "A clear, itemised price with no surprises once work begins." },
    { title: "Installation", body: "Certified engineers fit the system cleanly, usually within a day or two." },
    { title: "Commission & handover", body: "Tested, working, and explained, with aftercare on offer." },
  ],
  faqs: [
    {
      question: "How much does air conditioning installation cost?",
      answer: (
        <p>
          It depends on the number of rooms, the type of indoor unit, the pipe run and how your home
          is built, which is why an honest price needs a quick survey. The survey is free and the
          quote is fixed. Our <a href="/what-it-costs">cost guide</a> explains what drives the price.
        </p>
      ),
    },
    {
      question: "How long does an installation take?",
      answer: (
        <p>
          Most single-room systems are a one-day job. A multi-room system usually takes two. We
          confirm the timescale in the quote before anything is booked in.
        </p>
      ),
    },
    {
      question: "Will it be noisy?",
      answer: (
        <p>
          No. Modern indoor units run at a whisper, and we position the outdoor unit to keep sound
          well away from living spaces and neighbours.
        </p>
      ),
    },
    {
      question: "Do I need planning permission?",
      answer: (
        <p>
          Usually not, as most domestic outdoor units fall under permitted development. Listed
          buildings and conservation areas, of which Cambridge has several, are treated differently.
          We check the position for your property before quoting.
        </p>
      ),
    },
  ],
};

export const heating: ServiceContent = {
  slug: "heating",
  metaTitle: "Heating & Heat Pump Installation in Cambridge",
  metaDescription:
    "Heating installation and repair across Cambridge, including air-to-air heat pumps. F‑Gas certified engineers, free survey and fixed-price quotes.",
  eyebrow: "Heating services",
  title: "Heating that keeps a Cambridge home warm",
  intro:
    "Warmth for the cooler months, including efficient air-to-air heat pumps that heat and cool from a single system, installed and maintained by certified engineers.",
  photo: heatingPhoto,
  photoAlt: "A home radiator against a wall",
  overview: [
    "Heating and cooling used to mean two separate systems. Today, an air-to-air heat pump can do both, warming your home efficiently in spring and autumn and cooling it through summer.",
    "We install and repair heating and heat-pump systems, sized to your home and fitted cleanly by the same certified engineers who handle our air conditioning work.",
    "As with everything we do, it starts with a free survey and a fixed-price quote, so you know exactly what you are getting before any work begins.",
  ],
  covers: [
    {
      image: outdoorClean, title: "Heat pump installation",
      body: "Air-to-air heat pumps that provide efficient heating and cooling from one modern, low-running-cost system.",
    },
    {
      image: diagnostic, title: "Repairs & fault-finding",
      body: "Diagnosis and repair of heating and heat-pump systems that are underperforming or have stopped working.",
    },
    {
      image: remote2, title: "Efficiency upgrades",
      body: "Advice on getting more from your existing setup, from controls to sizing and servicing.",
    },
    {
      image: serviceIndoor, title: "Servicing",
      body: "Regular servicing to keep the system efficient, reliable and under warranty.",
    },
  ],
  propertyTypes: ["Houses", "Flats and apartments", "New builds", "Extensions and conversions"],
  showBrands: true,
  process: [
    { title: "Free survey", body: "We assess your home and how you want to heat it." },
    { title: "Fixed-price quote", body: "A clear price for the right system, with no surprises." },
    { title: "Installation", body: "Clean, certified installation with minimal disruption." },
    { title: "Handover", body: "Tested, explained, and backed by aftercare." },
  ],
  faqs: [
    {
      question: "What is an air-to-air heat pump?",
      answer: (
        <p>
          It is an air conditioning system that also runs in reverse to heat your home. One unit
          gives you cooling in summer and efficient, low-cost warmth in the cooler months.
        </p>
      ),
    },
    {
      question: "Is a heat pump cheaper to run than other heating?",
      answer: (
        <p>
          Air-to-air heat pumps are highly efficient and can be a low-cost way to warm the rooms you
          use most, especially in the milder shoulder seasons. We will talk you through what to
          expect for your home.
        </p>
      ),
    },
    {
      question: "Can you repair a system you did not install?",
      answer: (
        <p>
          Yes. We repair and service heating and heat-pump systems regardless of who installed them.
          Get in touch and we will arrange a visit.
        </p>
      ),
    },
  ],
};

export const maintenance: ServiceContent = {
  slug: "maintenance-and-repairs",
  metaTitle: "AC Servicing & Repairs in Cambridge",
  metaDescription:
    "Air conditioning servicing, repairs and F‑Gas compliance checks across Cambridge. Keep your system efficient, reliable and under warranty.",
  eyebrow: "Maintenance & repairs",
  title: "Servicing and repairs that keep systems running",
  intro:
    "Regular servicing keeps an air conditioning system efficient, reliable and under warranty, and when something goes wrong, we put it right.",
  photo: maintenancePhoto,
  photoAlt: "An engineer servicing an air conditioning system",
  overview: [
    "Air conditioning is a long-term investment, and a little regular care keeps it working at its best. Servicing protects efficiency, heads off breakdowns, and keeps the manufacturer warranty valid.",
    "It is also a legal matter: systems containing fluorinated refrigerant gases must be handled by F‑Gas certified engineers, and we are certified to carry out the checks the law requires.",
    "Whether you need a one-off repair or an ongoing service plan, we look after systems across Cambridge, including ones we did not install.",
  ],
  covers: [
    {
      image: maintenancePhoto, title: "Routine servicing",
      body: "Cleaning, checks and adjustments that keep a system efficient and reliable year after year.",
    },
    {
      image: outdoorRepair, title: "Repairs & callouts",
      body: "Fault-finding and repair when a system is underperforming or has stopped working.",
    },
    {
      image: fgas, title: "F‑Gas compliance",
      body: "Leak checks and record-keeping that keep your system compliant with F‑Gas regulations.",
    },
    {
      image: serviceIndoor, title: "Service plans",
      body: "Scheduled servicing so you never have to remember, and your warranty stays intact.",
    },
  ],
  propertyTypes: ["Homes", "Home offices", "Landlords and lettings", "Small commercial premises"],
  showBrands: false,
  process: [
    { title: "Get in touch", body: "Tell us the system and the symptoms, or ask about a service plan." },
    { title: "We visit", body: "A certified engineer inspects, services or diagnoses the fault." },
    { title: "Clear quote", body: "For any repair, a clear price before we proceed." },
    { title: "Sorted", body: "Working, efficient and compliant, with records kept." },
  ],
  faqs: [
    {
      question: "How often should air conditioning be serviced?",
      answer: (
        <p>
          Once a year is a good rule for a domestic system. Regular servicing keeps efficiency up,
          reduces the chance of breakdowns, and keeps the manufacturer warranty valid.
        </p>
      ),
    },
    {
      question: "Can you service a system you did not install?",
      answer: (
        <p>
          Yes. We service and repair systems across Cambridge regardless of who fitted them. Get in
          touch and we will arrange a visit.
        </p>
      ),
    },
    {
      question: "What is F‑Gas compliance?",
      answer: (
        <p>
          Air conditioning systems contain fluorinated refrigerant gases, and the law requires that
          they are handled by certified engineers and, for larger systems, checked for leaks on a
          schedule. We are F‑Gas certified and keep the records you need.
        </p>
      ),
    },
  ],
};

export const servicing: ServiceContent = {
  slug: "services/servicing",
  metaTitle: "Air Conditioning Servicing in Cambridge",
  metaDescription:
    "Air conditioning servicing and annual service plans across Cambridge. Keep your system efficient, reliable and under warranty, F‑Gas certified.",
  eyebrow: "Air conditioning servicing",
  title: "Servicing that protects your system",
  intro:
    "A yearly service keeps your air conditioning efficient, heads off breakdowns, and keeps the manufacturer warranty valid. We look after systems across Cambridge, including ones we did not install.",
  photo: maintenancePhoto,
  photoAlt: "An engineer servicing an air conditioning system",
  overview: [
    "Air conditioning works hard, and like any system it runs best with a little regular care. A service clears out the grime that builds up over a year, checks the system is running as it should, and catches small issues before they become expensive ones.",
    "It matters for efficiency too. A clogged, unserviced unit uses more power to do the same job, so a service often pays for part of itself in lower running costs.",
    "And it is a warranty matter: most manufacturers require regular servicing by a qualified engineer to keep their warranty valid. We are F‑Gas certified and keep the records you need.",
  ],
  covers: [
    { image: wallClean, title: "Filter and coil cleaning", body: "We clean the parts that quietly rob a system of efficiency, so it cools properly and runs cleanly." },
    { image: maintenancePhoto, title: "Performance checks", body: "We check refrigerant levels, temperatures and controls to confirm the system is working as it should." },
    { image: filterClean, title: "Fault prevention", body: "We spot early signs of wear and put them right before they turn into a breakdown." },
    { image: fgas, title: "Records kept", body: "A full service record that keeps your warranty valid and your F‑Gas obligations met." },
  ],
  coversEyebrow: "The service",
  coversHeading: "What a service includes",
  systemTypes: [
    { icon: Wrench, title: "One-off service", body: "A single, thorough service whenever your system is due, with no ongoing commitment." },
    { icon: CalendarCheck, title: "Annual service plan", body: "Scheduled servicing once a year so you never have to remember, and your warranty stays intact." },
    { icon: Layers, title: "Multi-system plan", body: "For homes with several indoor units or multiple systems, looked after together on one plan." },
    { icon: KeyRound, title: "Landlord & lettings", body: "Servicing for rental properties, keeping systems safe, efficient and compliant between tenancies." },
  ],
  highlightsEyebrow: "Options",
  highlightsHeading: "Service plans to suit you",
  highlightsIntro: "Whether you want a one-off visit or hands-off cover, there is an option that fits.",
  propertyTypes: ["Homes", "Home offices", "Landlords and lettings", "Small commercial premises"],
  propertyEyebrow: "Who it's for",
  propertyHeading: "We service systems everywhere",
  showBrands: true,
  process: [
    { title: "Book a service", body: "Tell us your system and where you are, and we will arrange a visit." },
    { title: "Full inspection", body: "A certified engineer cleans, checks and tests the system." },
    { title: "Any issues flagged", body: "If anything needs attention, we explain it clearly with a fixed price." },
    { title: "Records updated", body: "Your service record and warranty stay up to date." },
  ],
  faqs: [
    {
      question: "How often should air conditioning be serviced?",
      answer: <p>Once a year is a good rule for a domestic system. Regular servicing keeps efficiency up, reduces the chance of breakdowns, and keeps the manufacturer warranty valid.</p>,
    },
    {
      question: "Can you service a system you did not install?",
      answer: <p>Yes. We service systems across Cambridge regardless of who fitted them. Get in touch and we will arrange a visit.</p>,
    },
    {
      question: "Does servicing really keep my warranty valid?",
      answer: <p>Most manufacturers require regular servicing by a qualified engineer as a condition of their warranty. We keep the records that prove it has been done.</p>,
    },
  ],
};

export const repairs: ServiceContent = {
  slug: "services/repairs",
  metaTitle: "Air Conditioning Repairs in Cambridge",
  metaDescription:
    "Air conditioning repairs across Cambridge. We diagnose and fix all major AC brands, from poor cooling to leaks and strange noises. F‑Gas certified.",
  eyebrow: "Air conditioning repairs",
  title: "Reliable air conditioning repairs",
  intro:
    "When a system stops cooling, leaks, or starts making unfamiliar noises, we diagnose the fault and put it right, on all major brands, with a clear price before we start.",
  photo: engineerPhoto,
  photoAlt: "An engineer diagnosing an air conditioning unit",
  overview: [
    "Air conditioning can develop a range of faults over its life, from a gradual drop in cooling to water where it should not be. Most have a straightforward cause once you know where to look.",
    "Our F‑Gas certified engineers diagnose the problem properly rather than guessing, explain what is wrong in plain terms, and give you a fixed price before any repair goes ahead.",
    "We repair all major brands, whether or not we installed the system, and we will always tell you honestly if a repair is worth it or a replacement makes more sense.",
  ],
  covers: [
    { image: wallClean, title: "Not cooling properly", body: "Weak airflow or warm air usually points to refrigerant, filters or a worn component, all fixable." },
    { image: leak, title: "Water leaks", body: "Dripping or pooling water is often a blocked drain or condensate issue we can clear quickly." },
    { image: noise, title: "Strange noises", body: "Rattles, hums or grinding can signal a loose or failing part. We find it and put it right." },
    { image: wallPeach, title: "Bad smells", body: "Musty or sour odours usually mean a system that needs a deep clean and a check for mould." },
    { image: remoteHand, title: "Won't turn on", body: "From controls to electrical supply, we track down why a system will not start." },
    { image: remotePanel, title: "Error codes", body: "We read the fault the system is reporting and fix the underlying cause, not just the symptom." },
  ],
  coversEyebrow: "Common faults",
  coversHeading: "Problems we repair",
  systemTypes: [
    { icon: AirVent, title: "Wall-mounted splits", body: "The most common domestic system, and the one we repair most often." },
    { icon: Boxes, title: "Multi-split systems", body: "Several indoor units on one outdoor unit, diagnosed as a whole." },
    { icon: Grid3x3, title: "Ducted & cassette", body: "Concealed and ceiling systems, repaired with minimal disruption." },
    { icon: SunSnow, title: "Heat pumps", body: "Air-to-air heat pumps that heat and cool, kept running through the year." },
  ],
  highlightsEyebrow: "What we fix",
  highlightsHeading: "Systems we repair",
  highlightsIntro: "We are experienced across the full range of domestic and light commercial systems.",
  propertyTypes: ["Homes", "Home offices", "Landlords and lettings", "Small commercial premises"],
  propertyEyebrow: "Who it's for",
  propertyHeading: "We repair systems everywhere",
  showBrands: true,
  process: [
    { title: "Tell us the symptoms", body: "Describe what the system is doing, and we will arrange a visit." },
    { title: "Diagnosis", body: "A certified engineer finds the real cause, not just the symptom." },
    { title: "Fixed-price repair", body: "A clear price for the fix before we proceed, with no surprises." },
    { title: "Tested and working", body: "We confirm the system is running properly before we leave." },
  ],
  faqs: [
    {
      question: "Do you repair systems you did not install?",
      answer: <p>Yes. We diagnose and repair all major brands across Cambridge, regardless of who fitted the system.</p>,
    },
    {
      question: "Will you tell me if it's not worth repairing?",
      answer: <p>Always. If a repair does not make financial sense against a replacement, we will say so honestly and lay out the options.</p>,
    },
    {
      question: "How much will a repair cost?",
      answer: <p>It depends on the fault, which is why we diagnose first and give you a fixed price before any work starts. No surprises.</p>,
    },
  ],
};

export const commercial: ServiceContent = {
  slug: "services/commercial",
  metaTitle: "Commercial Air Conditioning in Cambridge",
  metaDescription:
    "Commercial air conditioning installation, servicing and repair across Cambridge, for offices, shops, restaurants and server rooms. F‑Gas certified.",
  eyebrow: "Commercial air conditioning",
  title: "Commercial air conditioning for Cambridge business",
  intro:
    "Reliable climate control for offices, shops, restaurants and server rooms, designed around your premises and installed with minimal disruption to your day.",
  photo: commercialPhoto,
  photoAlt: "A bank of commercial air conditioning condenser units on a rooftop",
  overview: [
    "A comfortable temperature is not a luxury for a business, it keeps staff productive, customers happy and sensitive equipment safe. We design, install, service and repair commercial air conditioning across Cambridge.",
    "Every commercial job starts with a site survey. We look at the space, how it is used and the loads involved, then design a system that holds the right temperature efficiently without getting in the way of your business.",
    "Work is carried out by F‑Gas certified engineers, scheduled around your opening hours where we can, and priced as a fixed quote so there are no surprises.",
  ],
  covers: [
    { image: units, title: "Design and specification", body: "Systems sized to the space and its use, from a single office to a whole floor." },
    { image: install2, title: "Installation", body: "Clean, certified installation planned around your business, with minimal disruption." },
    { image: maintenancePhoto, title: "Servicing & compliance", body: "Scheduled servicing and F‑Gas leak checks that keep systems efficient and compliant." },
    { image: outdoorRepair, title: "Repairs", body: "Fault diagnosis and repair to get a system back up and keep your premises comfortable." },
  ],
  coversEyebrow: "What we do",
  coversHeading: "Commercial services",
  systemTypes: [
    { icon: Building2, title: "Offices", body: "Comfortable, quiet climate control that keeps staff productive year-round." },
    { icon: Store, title: "Shops & retail", body: "A welcoming temperature for customers, whatever the weather outside." },
    { icon: UtensilsCrossed, title: "Restaurants & cafés", body: "Cooling that copes with kitchens, crowds and long opening hours." },
    { icon: Server, title: "Server & comms rooms", body: "Precise, reliable cooling to protect sensitive equipment from overheating." },
    { icon: Dumbbell, title: "Gyms & studios", body: "High-capacity cooling for busy, active spaces." },
    { icon: Scissors, title: "Salons & clinics", body: "A comfortable, controlled environment for clients and treatments." },
  ],
  highlightsEyebrow: "Where we work",
  highlightsHeading: "Every kind of premises",
  highlightsIntro: "From a small office to a busy restaurant, we tailor the system to how the space is actually used.",
  propertyTypes: ["Offices", "Retail units", "Hospitality", "Server rooms", "Gyms & studios", "Clinics & salons"],
  propertyEyebrow: "Who it's for",
  propertyHeading: "Businesses of every kind",
  showBrands: true,
  process: [
    { title: "Site survey", body: "We assess the premises, its use and the cooling loads involved." },
    { title: "System design", body: "A design and fixed-price quote sized to the space and your budget." },
    { title: "Installation", body: "Certified installation scheduled around your opening hours where possible." },
    { title: "Ongoing care", body: "Servicing, compliance and repairs to keep it running reliably." },
  ],
  faqs: [
    {
      question: "Can you work around our opening hours?",
      answer: <p>Where possible, yes. We plan commercial installations and servicing around your business so we cause as little disruption as we can.</p>,
    },
    {
      question: "Do you cover server and comms rooms?",
      answer: <p>Yes. We install and maintain dedicated cooling for server and comms rooms, where reliable, precise temperature control protects your equipment.</p>,
    },
    {
      question: "Do you offer servicing contracts for businesses?",
      answer: <p>We do. Scheduled servicing keeps commercial systems efficient, compliant and reliable, with records kept for your F‑Gas obligations.</p>,
    },
  ],
};

export const services = [airConditioning, heating, maintenance, servicing, repairs, commercial];
