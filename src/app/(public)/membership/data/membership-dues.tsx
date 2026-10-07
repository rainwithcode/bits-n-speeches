import { ReactNode } from "react";

import { siteConfig } from "@/data/site-config";

type MembershipDue = {
  title: string;
  description: ReactNode;
  amount: number;
};

export const membershipDues: MembershipDue[] = [
  {
    title: "Club Dues",
    description: `Paid directly to ${siteConfig.name}.`,
    amount: 15,
  },
  {
    title: `${siteConfig.organization} Dues`,
    description: `Paid to ${siteConfig.organization}.`,
    amount: 72,
  },
];

export const membershipDuesSchedule = {
  frequency: "Every six months",
  dueDates: ["April 1", "October 1"],
};

export const membershipDuesContent = {
  title: "Membership Dues",

  proration: {
    title: "Joining mid-cycle?",
    description: (
      <>
        International dues are prorated at <strong>$12 USD per month</strong>{" "}
        based on the month you join between the{" "}
        <strong>{membershipDuesSchedule.dueDates[0]}</strong> and{" "}
        <strong>{membershipDuesSchedule.dueDates[1]}</strong> renewal dates.
      </>
    ),
  },

  firstPayment: {
    title: "Payment Total",
    description: "Total amount due when you join the club.",
  },

  callToAction: {
    text: "Ready to join? Visit a",
    linkText: "meeting",
    href: "/meetings",
    suffix: "and speak with our VP of Membership to get started.",
  },
} as const;
