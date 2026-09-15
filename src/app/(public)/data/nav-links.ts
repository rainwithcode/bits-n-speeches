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
    sectionId: "benefits",
  },
  { label: "How to Join", sectionId: "join" },
  {
    label: "Register as a Guest",
    sectionId: "guest",
  },
  { label: "Membership Dues", sectionId: "dues" },
];

export function getMembershipUrl(section: MembershipSection) {
  return `/membership?tab=${section}`;
}
