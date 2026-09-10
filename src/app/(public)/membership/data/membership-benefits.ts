import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  ChartNoAxesCombined,
  MessageCircle,
  Mic,
  Users,
} from "lucide-react";

type MembershipBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const membershipBenefits: MembershipBenefit[] = [
  {
    title: "Prepared Speaking",
    description:
      "Deliver structured speeches and receive detailed evaluations to sharpen your delivery, structure, and presence.",
    icon: Mic,
  },
  {
    title: "Impromptu Speaking",
    description:
      "Table Topics trains you to think and speak on your feet — a critical skill in meetings, interviews, and everyday conversations.",
    icon: MessageCircle,
  },
  {
    title: "Leadership Roles",
    description:
      "Every meeting role — from Toastmaster to Timer — builds leadership. You're always learning, even when you're not speaking.",
    icon: Award,
  },
  {
    title: "Pathways Education",
    description:
      "A flexible, self-paced curriculum covering 300+ projects across 11 paths. Earn internationally recognized credentials.",
    icon: BookOpen,
  },
  {
    title: "Professional Network",
    description:
      "Meet driven professionals from all industries who share your commitment to growth. Friendships that last beyond the club.",
    icon: Users,
  },
  {
    title: "Measurable Growth",
    description:
      "Track your progress through a clear education structure. See tangible improvements in confidence and clarity within months.",
    icon: ChartNoAxesCombined,
  },
];
