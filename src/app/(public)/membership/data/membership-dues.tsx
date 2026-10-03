import { ReactNode } from "react";

type MembershipDue = {
  title: string;
  description: ReactNode;
  amount: number;
};

export const membershipDues: MembershipDue[] = [
  {
    title: "New Member Fee (one-time)",
    description: "Paid once when you join.",
    amount: 15,
  },
  {
    title: "Semi-Annual Dues",
    description: (
      <>
        Billed every six months, <strong>$72 USD</strong> per six-month period,
        due on <strong>April 1</strong> and <strong>October 1</strong>.
      </>
    ),
    amount: 72,
  },
];

export const membershipDuesContent = {
  title: "Membership Dues",

  proration: {
    title: "Joining mid-cycle?",
    description: (
      <>
        International dues are prorated at <strong>$12 USD per month</strong>{" "}
        based on the month you join between the <strong>April 1</strong> and{" "}
        <strong>October 1</strong> renewal dates.
      </>
    ),
  },

  firstPayment: {
    title: "First Payment Total",
    description: "Total amount due when you first join the club.",
  },

  callToAction: {
    text: "Ready to join? Visit a",
    linkText: "meeting",
    href: "/meetings",
    suffix: "and speak with our VP of Membership to get started.",
  },
} as const;
