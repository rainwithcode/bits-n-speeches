import type { LucideIcon } from "lucide-react";
import { CircleCheckBig, Gift, MessageCircle } from "lucide-react";

type GuestExperience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const guestExperience: GuestExperience[] = [
  {
    title: "No Pressure",
    description:
      "Guests are never forced to speak during their first visit and can simply observe and enjoy.",
    icon: CircleCheckBig,
  },
  {
    title: "Table Topics",
    description:
      "Feel free to participate in impromptu speaking if you'd like — it's entirely optional and a fun way to get your feet wet.",
    icon: MessageCircle,
  },
  {
    title: "Always Free",
    description:
      "Visiting a club as a guest is completely free. No fees, no obligations.",
    icon: Gift,
  },
];
