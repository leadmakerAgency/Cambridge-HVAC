import {
  AirVent,
  Flame,
  Wrench,
  ShieldCheck,
  BadgePoundSterling,
  Leaf,
  SunSnow,
  Timer,
  Volume1,
  BadgeCheck,
  Boxes,
  MapPin,
  Phone,
  ClipboardList,
  MessageSquareText,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Real icons from the Lucide library (MIT licensed, no attribution required),
 * exposed under the site's own names so components stay decoupled from the
 * library. Size and colour come from the caller's className; stroke weight is
 * set here to keep every icon on one visual weight.
 */

type IconProps = { className?: string };

function make(Icon: LucideIcon) {
  return function Wrapped({ className }: IconProps) {
    // No default size class here — callers set the size, so it can never collide.
    return <Icon aria-hidden="true" strokeWidth={1.6} className={cn(className)} />;
  };
}

export const IconAirCon = make(AirVent);
export const IconHeating = make(Flame);
export const IconWrench = make(Wrench);
export const IconShield = make(ShieldCheck);
export const IconTag = make(BadgePoundSterling);
export const IconLeaf = make(Leaf);
export const IconClimate = make(SunSnow);
export const IconClock = make(Timer);
export const IconQuiet = make(Volume1);
export const IconCertificate = make(BadgeCheck);
export const IconBrands = make(Boxes);
export const IconPin = make(MapPin);
export const IconPhone = make(Phone);
export const IconClipboard = make(ClipboardList);
export const IconChat = make(MessageSquareText);
export const IconInstall = make(CircleCheckBig);
