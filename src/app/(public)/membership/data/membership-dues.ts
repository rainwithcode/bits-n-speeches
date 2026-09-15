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
    description: "Billed every six months.",
    amount: 72,
  },
];
