import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Network,
  Wind,
  Grid3x3,
  Snowflake,
  Plug,
  SunSnow,
  Volume1,
  Smartphone,
  SlidersHorizontal,
  EyeOff,
  Home,
  Building2,
  ArrowDownToLine,
  Move,
  Clock,
  BadgePoundSterling,
  Leaf,
} from "lucide-react";
import wallMountedPhoto from "./actypes/wall-mounted.png";
import multiSplitPhoto from "./actypes/multi-split.png";
import ductedPhoto from "./actypes/ducted.png";
import cassettePhoto from "./actypes/cassette.png";
import floorStandingPhoto from "./actypes/floor-standing.png";
import portablePhoto from "./actypes/portable.png";
import heatPumpPhoto from "./actypes/heat-pump.png";

export type AcTypeContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  tagline: string;
  image: StaticImageData;
  imageAlt: string;
  whatIsHeading: string;
  whatIs: string[];
  features: { icon: LucideIcon; title: string; body: string }[];
  benefitsHeading: string;
  benefits: string[];
  suitedForHeading: string;
  suitedFor: string;
  faqs: { question: string; answer: React.ReactNode }[];
};

/** Shared list, used by every page's "Explore other types" grid and the hub. */
export const acTypeNav: { slug: string; label: string; tagline: string; icon: LucideIcon }[] = [
  { slug: "wall-mounted", label: "Wall-mounted", tagline: "The UK's most popular system", icon: AirVent },
  { slug: "multi-split", label: "Multi-split", tagline: "Cool several rooms from one outdoor unit", icon: Network },
  { slug: "ducted", label: "Ducted & concealed", tagline: "Whole-home cooling, hidden from view", icon: Wind },
  { slug: "cassette", label: "Cassette", tagline: "Ceiling-recessed, four-way airflow", icon: Grid3x3 },
  { slug: "floor-standing", label: "Floor-standing", tagline: "Flexible cooling without high-level fixing", icon: Snowflake },
  { slug: "portable", label: "Portable", tagline: "Temporary, plug-in cooling", icon: Plug },
  { slug: "heat-pumps", label: "Air-to-air heat pumps", tagline: "Heating and cooling in one system", icon: SunSnow },
];

export const wallMounted: AcTypeContent = {
  slug: "wall-mounted",
  metaTitle: "Wall-Mounted Air Conditioning in Cambridge",
  metaDescription:
    "Wall-mounted air conditioning installation in Cambridge. The UK's most popular system: quiet, efficient, and quick to install. Free survey, fixed price.",
  title: "Wall-mounted air conditioning",
  tagline:
    "The UK's most popular system: a discreet indoor unit that cools and heats a single room quietly and efficiently.",
  image: wallMountedPhoto,
  imageAlt: "A wall-mounted air conditioning unit blowing cool air into a modern room",
  whatIsHeading: "What is a wall-mounted air conditioning unit?",
  whatIs: [
    "A wall-mounted unit is the classic split system: a slim indoor unit fixed high on a wall, paired with an outdoor condenser. It is the most popular choice in UK homes, and for good reason, it is efficient, quiet and quick to install.",
    "The indoor unit draws in warm air, passes it over a chilled coil and returns cool air to the room. In the cooler months, the same unit runs in reverse to provide low-cost heating.",
  ],
  features: [
    { icon: Volume1, title: "Whisper-quiet", body: "Modern indoor units run at a whisper, so you notice the comfort, not the noise." },
    { icon: SunSnow, title: "Heating and cooling in one", body: "Cools in summer and provides efficient heating in the cooler months, from a single unit." },
    { icon: Smartphone, title: "Smart control", body: "Set the temperature from a handset or an app, and schedule it around your day." },
  ],
  benefitsHeading: "Easy to install, efficient year-round",
  benefits: [
    "Ideal for living rooms, bedrooms, home offices and studies",
    "Quick to install, usually in a day, with minimal disruption",
    "Compact indoor unit keeps your floor space free",
    "Efficient inverter technology keeps running costs low",
    "One outdoor unit can serve several indoor heads",
    "Cools in summer and heats in the cooler months",
  ],
  suitedForHeading: "Who is wall-mounted best suited for?",
  suitedFor:
    "Wall-mounted units suit almost any home, and most offices too. They are the natural choice for cooling a single room, a bedroom, living room or home office, where a discreet, efficient unit does the job without taking up floor space. If you are not sure whether wall-mounted is right for your space, our team is happy to advise.",
  faqs: [
    { question: "Can I install a wall-mounted unit myself?", answer: <p>No. Air conditioning contains refrigerant gases, and by law only F‑Gas certified engineers may install and handle them. It also keeps your manufacturer warranty valid.</p> },
    { question: "Does a wall-mounted unit provide heating?", answer: <p>Yes. Most modern wall-mounted units are heat pumps, so they cool in summer and provide efficient heating in the cooler months.</p> },
    { question: "How long does installation take?", answer: <p>A single-room wall-mounted system is usually a one-day job. We confirm the timescale in your fixed-price quote.</p> },
    { question: "How noisy are they?", answer: <p>Very quiet. Today's indoor units run at a whisper, and we position the outdoor unit to keep sound away from living spaces and neighbours.</p> },
  ],
};

export const multiSplit: AcTypeContent = {
  slug: "multi-split",
  metaTitle: "Multi-Split Air Conditioning in Cambridge",
  metaDescription:
    "Multi-split air conditioning in Cambridge: cool several rooms independently from a single outdoor unit. Efficient, tidy, F‑Gas certified installation.",
  title: "Multi-split systems",
  tagline:
    "One outdoor unit, several indoor units, cooling multiple rooms independently without a condenser for each one.",
  image: multiSplitPhoto,
  imageAlt: "Diagram of a multi-split system with one outdoor unit feeding indoor units in the living area, home office and bedroom",
  whatIsHeading: "What is a multi-split system?",
  whatIs: [
    "A multi-split system runs several indoor units from a single outdoor condenser. Each indoor unit is controlled independently, so different rooms can be set to different temperatures, or switched off entirely when not in use.",
    "It is the tidy, efficient way to cool several rooms without an outdoor unit for each one, which keeps the outside of your home uncluttered and the installation simpler.",
  ],
  features: [
    { icon: Network, title: "One outdoor unit", body: "A single condenser feeds several indoor units, keeping the outside of your home tidy." },
    { icon: SlidersHorizontal, title: "Room-by-room control", body: "Each room is set independently, so you only cool the spaces you are using." },
    { icon: SunSnow, title: "Heating and cooling", body: "Every indoor unit can heat as well as cool, room by room, all year round." },
  ],
  benefitsHeading: "Cool the whole home, efficiently",
  benefits: [
    "Cool several rooms from a single outdoor unit",
    "Independent temperature control in each room",
    "Only one outdoor condenser, keeping the exterior tidy",
    "Mix indoor unit styles to suit each room",
    "Efficient inverter technology across the whole system",
    "Heating and cooling in every room, year-round",
  ],
  suitedForHeading: "Who is multi-split best suited for?",
  suitedFor:
    "Multi-split systems suit larger homes and any property where you want to cool several rooms but would rather not fit a separate outdoor unit for each one. They are ideal when you want independent control room by room. On the survey we will work out how many indoor units your outdoor condenser can support.",
  faqs: [
    { question: "How many rooms can one outdoor unit cool?", answer: <p>It depends on the size of the outdoor unit and the rooms involved. On the survey we will work out the right combination for your home and give you a fixed price.</p> },
    { question: "Can each room be a different temperature?", answer: <p>Yes. Each indoor unit is controlled independently, so different rooms can be set to different temperatures, or switched off when not needed.</p> },
    { question: "Is it more efficient than separate systems?", answer: <p>Running several indoor units from one outdoor unit is tidy and efficient, and means only one condenser outside. We will advise on the best setup for your home.</p> },
  ],
};

export const ducted: AcTypeContent = {
  slug: "ducted",
  metaTitle: "Ducted Air Conditioning in Cambridge",
  metaDescription:
    "Ducted air conditioning in Cambridge: whole-property cooling hidden above ceilings, delivered through discreet grilles. A near-invisible finish.",
  title: "Ducted & concealed air conditioning",
  tagline:
    "Whole-property cooling, hidden from view. Units concealed above ceilings deliver air through discreet grilles.",
  image: ductedPhoto,
  imageAlt: "Ceiling-recessed slot diffusers distributing air across an open-plan living room, with a duct diagram inset",
  whatIsHeading: "How does ducted air conditioning work?",
  whatIs: [
    "A ducted system hides the indoor unit above a ceiling or in a bulkhead, and distributes cooled air through a network of ducts to discreet grilles in each room. All you see is the grille, so the system all but disappears.",
    "It is the choice for a clean, uninterrupted finish, and for cooling several rooms, or a whole property, from a single concealed unit with independent zone control.",
  ],
  features: [
    { icon: EyeOff, title: "Completely concealed", body: "The unit and ductwork are hidden away, leaving only a discreet grille on show." },
    { icon: Home, title: "Whole-property coverage", body: "One concealed system can cool several rooms, or an entire property." },
    { icon: SlidersHorizontal, title: "Independent zones", body: "Set different areas to different temperatures with zoned control." },
  ],
  benefitsHeading: "A near-invisible finish",
  benefits: [
    "Nothing on the wall, just a discreet ceiling grille",
    "Cools several rooms, or a whole property, from one system",
    "Zoned control for different temperatures in different areas",
    "Ideal for new builds and renovations where ceilings are open",
    "Quiet operation, with the unit tucked out of sight",
    "A clean, high-end finish that suits considered interiors",
  ],
  suitedForHeading: "Who is ducted best suited for?",
  suitedFor:
    "Ducted systems suit anyone who wants cooling without anything visible on the walls, and it is best planned when ceilings are accessible, in a new build, a renovation or an extension. It is equally at home in larger houses and in commercial spaces that want a clean, uninterrupted finish. We will advise on whether ducted is practical for your property on the survey.",
  faqs: [
    { question: "Can ducted air conditioning be fitted to an existing home?", answer: <p>Often, yes, though it is easiest when ceilings are accessible, such as during a renovation or loft conversion. We will check what is practical for your property on the survey.</p> },
    { question: "What can you see once it's installed?", answer: <p>Very little, just discreet grilles in the ceiling. The unit and ductwork are concealed out of sight.</p> },
    { question: "Can different rooms be set separately?", answer: <p>Yes. Ducted systems can be zoned, so different areas can be set to different temperatures or switched off independently.</p> },
  ],
};

export const cassette: AcTypeContent = {
  slug: "cassette",
  metaTitle: "Cassette Air Conditioning in Cambridge",
  metaDescription:
    "Cassette air conditioning in Cambridge: ceiling-recessed units with four-way airflow, ideal for offices, shops and larger open spaces.",
  title: "Cassette air conditioning",
  tagline:
    "Ceiling-recessed with four-way airflow, cassette units cool larger open spaces evenly and discreetly.",
  image: cassettePhoto,
  imageAlt: "Two ceiling cassette air conditioning units cooling a living room, with a four-way dispersal grille diagram inset",
  whatIsHeading: "How does a cassette air conditioning unit work?",
  whatIs: [
    "A cassette unit sits recessed into a suspended ceiling, with only its slim square face on show. It draws air in through the centre and pushes cooled air out in four directions, spreading it evenly across a large space.",
    "Because the unit is out of the way and distributes air evenly, cassettes are a favourite for offices, shops and other open-plan spaces where even cooling matters.",
  ],
  features: [
    { icon: Grid3x3, title: "Flush ceiling fit", body: "The unit sits flush in a suspended ceiling, with only a neat square face visible." },
    { icon: Wind, title: "Four-way airflow", body: "Air is pushed out in four directions for even cooling across a large space." },
    { icon: Building2, title: "Great for open spaces", body: "Ideal for offices, shops and larger rooms that need even, discreet cooling." },
  ],
  benefitsHeading: "Even cooling, discreetly delivered",
  benefits: [
    "Recessed into the ceiling for a clean, discreet finish",
    "Four-way airflow cools large spaces evenly",
    "Ideal for offices, retail and open-plan rooms",
    "One unit covers a wide area, reducing clutter",
    "Quiet operation suited to workplaces",
    "Heating and cooling from a single unit",
  ],
  suitedForHeading: "Who is cassette best suited for?",
  suitedFor:
    "Cassette systems are best suited to commercial and larger open spaces with a suspended ceiling, offices, shops, restaurants and studios, where even cooling across a wide area matters and you would rather not see wall-mounted units. They also work well in larger domestic rooms with the right ceiling. We will confirm what suits your space on the survey.",
  faqs: [
    { question: "Do I need a suspended ceiling for a cassette unit?", answer: <p>Usually, yes, cassettes are designed to recess into a ceiling void. Where there is no suitable ceiling, we may suggest a wall-mounted or ceiling-suspended unit instead.</p> },
    { question: "Are cassette units suitable for homes?", answer: <p>They can be, in larger rooms with the right ceiling. For most homes a wall-mounted unit is simpler, but we will advise on the best option for your space.</p> },
    { question: "How many people can one cassette cool?", answer: <p>A single cassette covers a wide area thanks to its four-way airflow. On the survey we will size the system to the space and how it is used.</p> },
  ],
};

export const floorStanding: AcTypeContent = {
  slug: "floor-standing",
  metaTitle: "Floor-Standing AC in Cambridge",
  metaDescription:
    "Floor-standing air conditioning in Cambridge: flexible cooling without high-level fixing, ideal for conservatories, period rooms and awkward walls.",
  title: "Floor-standing air conditioning",
  tagline:
    "Flexible cooling without high-level fixing, a floor-mounted unit that works where wall or ceiling fixing is not practical.",
  image: floorStandingPhoto,
  imageAlt: "A floor-standing air conditioning unit in a bright living room",
  whatIsHeading: "What is a floor-standing air conditioning unit?",
  whatIs: [
    "A floor-standing unit sits at low level rather than being fixed high on a wall or in a ceiling. It works exactly like other split systems, with an outdoor condenser, but the indoor unit stands on or near the floor.",
    "That makes it the practical answer where high-level fixing is difficult, under large windows, in conservatories, or in rooms where wall space is limited or the walls cannot be drilled.",
  ],
  features: [
    { icon: ArrowDownToLine, title: "No high-level fixing", body: "Sits at low level, so there is no need to fix a unit high on a wall or ceiling." },
    { icon: Wind, title: "Low-level air distribution", body: "Delivers air from floor level, ideal under windows and along glazing." },
    { icon: SunSnow, title: "Full heat-pump function", body: "Heats as well as cools, so it earns its keep through the cooler months too." },
  ],
  benefitsHeading: "Flexible where other units won't fit",
  benefits: [
    "Ideal where high-level fixing is difficult or unwanted",
    "Works well under large windows and in conservatories",
    "A good fit for period rooms and delicate walls",
    "Heats as well as cools, as a full heat pump",
    "Efficient inverter technology keeps running costs low",
    "Easy to position where wall space is limited",
  ],
  suitedForHeading: "Who is floor-standing best suited for?",
  suitedFor:
    "Floor-standing units suit rooms where fixing a unit high on the wall is not practical or not wanted, conservatories, rooms with lots of glazing, period properties, or anywhere the walls cannot take a wall-mounted unit. If your room is a tricky one, we will advise on whether floor-standing is the right answer.",
  faqs: [
    { question: "Does a floor-standing unit still need an outdoor unit?", answer: <p>Yes. Like other split systems it pairs with an outdoor condenser. Only the indoor unit is different, standing at low level rather than fixed high on a wall.</p> },
    { question: "How much floor space does it take?", answer: <p>Modern floor-standing units are slim and designed to sit neatly against a wall or under a window. We will show you the footprint on the survey.</p> },
    { question: "Does it provide heating too?", answer: <p>Yes. Floor-standing units are full heat pumps, so they cool in summer and heat efficiently in the cooler months.</p> },
  ],
};

export const portable: AcTypeContent = {
  slug: "portable",
  metaTitle: "Portable Air Conditioning in Cambridge",
  metaDescription:
    "Portable air conditioning explained: how plug-in units compare with fixed installation, and when a permanent system is the better choice for a Cambridge home.",
  title: "Portable air conditioning",
  tagline:
    "Plug-in units offer temporary cooling with no installation, useful as a stop-gap, though a fixed system is quieter and far more efficient.",
  image: portablePhoto,
  imageAlt: "A portable air conditioning unit venting through a window in a living room",
  whatIsHeading: "What is a portable air conditioning unit?",
  whatIs: [
    "A portable unit is a free-standing box on castors that you plug into a socket and vent through a window using a flexible hose. It needs no installation, which makes it a quick fix for a heatwave or a room you only need to cool occasionally.",
    "We think it is only fair to be straight about the trade-offs: portable units are noisier, less efficient and less effective than a fixed system, and the window hose lets warm air back in. For a room you use regularly, a proper installation is almost always the better investment.",
  ],
  features: [
    { icon: Plug, title: "No installation", body: "Plug it in and vent it through a window, no engineer required to get going." },
    { icon: Move, title: "Move it around", body: "On castors, so you can wheel it between rooms as you need it." },
    { icon: Clock, title: "A temporary fix", body: "Handy as a short-term measure while you plan a permanent system." },
  ],
  benefitsHeading: "When a portable unit makes sense",
  benefits: [
    "No installation, cooling in minutes",
    "Move it from room to room on castors",
    "A useful stop-gap during a heatwave",
    "No fixed commitment, ideal for rentals",
    "Lower upfront cost than a fixed system",
    "A sensible bridge while you plan a permanent install",
  ],
  suitedForHeading: "Is portable the right choice for you?",
  suitedFor:
    "A portable unit suits occasional, short-term use, or a rented home where a fixed installation is not an option. For a room you cool regularly, though, a wall-mounted or multi-split system is quieter, far more efficient and much more effective. We are happy to talk through the honest pros and cons and point you to the right answer for your situation.",
  faqs: [
    { question: "Is a portable unit as good as a fixed system?", answer: <p>No. Portable units are noisier and less efficient, and the window hose lets warm air back in. For regular use a fixed system is quieter, cheaper to run and far more effective.</p> },
    { question: "Do you install fixed alternatives?", answer: <p>Yes. If you have been relying on a portable unit, we can install a quiet, efficient wall-mounted or multi-split system, with a free survey and a fixed-price quote.</p> },
    { question: "Do portable units need venting?", answer: <p>Yes. They exhaust warm air through a hose that has to reach a window, which is part of why they are less efficient than a fixed system.</p> },
  ],
};

export const heatPumps: AcTypeContent = {
  slug: "heat-pumps",
  metaTitle: "Air-to-Air Heat Pumps in Cambridge",
  metaDescription:
    "Air-to-air heat pumps in Cambridge: efficient heating and cooling from a single system. Low running costs, F‑Gas certified installation, free survey.",
  title: "Air-to-air heat pumps",
  tagline:
    "Heating and cooling from one modern system, cooling in summer and efficient, low-cost warmth through the cooler months.",
  image: heatPumpPhoto,
  imageAlt: "An outdoor heat pump condenser beside a house, with an indoor wall-mounted unit visible through the window",
  whatIsHeading: "What is an air-to-air heat pump?",
  whatIs: [
    "An air-to-air heat pump is an air conditioning system that also runs in reverse to heat your home. In summer it cools; in the cooler months it moves warmth from the outside air into your rooms, efficiently and at low cost.",
    "Because one system does both jobs, a heat pump earns its keep all year, rather than sitting idle for half of it, which makes it one of the most cost-effective ways to keep a room comfortable.",
  ],
  features: [
    { icon: SunSnow, title: "Heating and cooling", body: "One system that cools in summer and heats through the cooler months." },
    { icon: Leaf, title: "Highly efficient", body: "Heat pumps move heat rather than burning fuel, so they run at low cost." },
    { icon: BadgePoundSterling, title: "Low running costs", body: "Efficient inverter technology keeps the bills down, especially in milder weather." },
  ],
  benefitsHeading: "One system, all year round",
  benefits: [
    "Cooling in summer and heating in the cooler months",
    "Highly efficient, moving heat rather than burning fuel",
    "Low running costs, especially in milder shoulder seasons",
    "The same tidy wall-mounted or floor-standing indoor units",
    "Quiet operation, day and night",
    "Earns its keep year-round, not just in summer",
  ],
  suitedForHeading: "Who are heat pumps best suited for?",
  suitedFor:
    "Air-to-air heat pumps suit anyone who wants both cooling and efficient heating from a single, tidy system, especially for the rooms you use most. They are a smart choice if you want comfort year-round without a separate heating system for the shoulder seasons. We will advise on the right size and setup for your home on the survey.",
  faqs: [
    { question: "How is a heat pump different from normal air conditioning?", answer: <p>It is the same technology. All modern air conditioning we install can run in reverse to heat as well as cool, which is what makes it an air-to-air heat pump.</p> },
    { question: "Is a heat pump cheaper to run than other heating?", answer: <p>Air-to-air heat pumps are highly efficient and can be a low-cost way to warm the rooms you use most, especially in the milder shoulder seasons. We will talk you through what to expect for your home.</p> },
    { question: "Can one system really both heat and cool?", answer: <p>Yes. A single air-to-air heat pump cools in summer and heats in the cooler months, all from the same indoor and outdoor units.</p> },
  ],
};

export const acTypes = [
  wallMounted,
  multiSplit,
  ducted,
  cassette,
  floorStanding,
  portable,
  heatPumps,
];
