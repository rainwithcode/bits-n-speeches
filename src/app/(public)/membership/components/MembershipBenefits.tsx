import IconCard from "@/components/ui/IconCard";

import { membershipBenefits } from "../data/membership-benefits";

export default function MembershipBenefits() {
  return (
    <section
      role="tabpanel"
      id="panel-benefits"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {membershipBenefits.map((benefit) => (
          <li key={benefit.title}>
            <IconCard
              icon={benefit.icon}
              label={benefit.title}
              description={benefit.description}
            ></IconCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
