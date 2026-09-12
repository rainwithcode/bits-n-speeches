"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { membershipLinks } from "../../data/nav-links";

import GuestRegistration from "./GuestRegistration";
import MembershipBenefits from "./MembershipBenefits";
import MembershipDues from "./MembershipDues";
import MembershipNavigation from "./MembershipNavigation";
import MembershipSteps from "./MembershipSteps";

export type MembershipSection = (typeof membershipLinks)[number]["sectionId"];

const defaultSection: MembershipSection = "benefits";

function isMembershipSection(value: string | null): value is MembershipSection {
  return membershipLinks.some((link) => link.sectionId === value);
}

export default function MembershipTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const querySection = searchParams.get("tab");

  const activeSection = isMembershipSection(querySection)
    ? querySection
    : defaultSection;

  function updateSection(section: MembershipSection) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", section);

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <>
      <MembershipNavigation
        activeSection={activeSection}
        onSectionChange={updateSection}
      />

      {activeSection === "benefits" && <MembershipBenefits />}
      {activeSection === "join" && <MembershipSteps />}
      {activeSection === "guest" && <GuestRegistration />}
      {activeSection === "dues" && <MembershipDues />}
    </>
  );
}
