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
    label: "Membership Benefits",
    section: "benefits",
  },
  { label: "How to Join", section: "join" },
  {
    label: "Register as a Guest",
    section: "guest",
  },
  { label: "Membership Dues", section: "dues" },
];

export function getMembershipUrl(section: MembershipSection) {
  return `/membership?tab=${section}`;
}
