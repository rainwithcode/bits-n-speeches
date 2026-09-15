import { MembershipSection } from "../membership/components/MembershipTabs";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/meetings", label: "Meetings" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export const membershipLinks = [
  {
    href: "/membership#benefits",
    label: "Membership Benefits",
    sectionId: "benefits",
  },
  { href: "/membership#join", label: "How to Join", sectionId: "join" },
  {
    href: "/membership#guest",
    label: "Register as a Guest",
    sectionId: "guest",
  },
  { href: "/membership#dues", label: "Membership Dues", sectionId: "dues" },
];

export function getMembershipUrl(section: MembershipSection) {
  return `/membership?tab=${section}`;
}
