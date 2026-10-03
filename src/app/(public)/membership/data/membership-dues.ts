type MembershipDue = {
  title: string;
  description: string;
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
    description:
      "Billed every six months,  $72 USD per six-month period, due on April 1 and October 1.",
    amount: 72,
  },
];
