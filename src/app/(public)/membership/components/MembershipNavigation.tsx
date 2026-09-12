"use client";

import { membershipLinks } from "../../data/nav-links";

import type { MembershipSection } from "./MembershipTabs";

type MembershipNavigationProps = {
  activeSection: MembershipSection;
  onSectionChange: (section: MembershipSection) => void;
};

export default function MembershipNavigation({
  activeSection,
  onSectionChange,
}: MembershipNavigationProps) {
  return (
    <nav
      aria-label="Membership sections"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-4 md:pt-16 md:pb-8"
    >
      <div
        role="tablist"
        className="flex flex-wrap gap-4 md:gap-8 border-b border-border"
      >
        {membershipLinks.map((link) => {
          const isActive = activeSection === link.sectionId;

          return (
            <button
              key={link.sectionId}
              type="button"
              role="tab"
              id={`tab-${link.sectionId}`}
              aria-selected={isActive}
              aria-controls={`panel-${link.sectionId}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSectionChange(link.sectionId)}
              className={`px-4 py-1.5 md:py-2.5 font-medium cursor-pointer ${
                isActive
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-primary hover:border-b-2 hover:border-gray-200"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
