import Circle from "@/components/ui/Circle";

import SectionHeading from "../../shared/SectionHeading";
import { membershipSteps } from "../data/membership-steps";

export default function MembershipSteps() {
  return (
    <section
      role="tabpanel"
      id="panel-join"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <SectionHeading className="mb-6">How to Join</SectionHeading>
      <ul className="space-y-4">
        {membershipSteps.map((step, index) => (
          <li key={step.title} className="flex items-center gap-6">
            <Circle>{index + 1}</Circle>
            <div className="w-full p-6 border border-border rounded-md">
              <h3 className="font-heading font-bold text-primary text-base md:text-lg">
                {step.title}
              </h3>
              <p className="text-sm md:text-base">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
