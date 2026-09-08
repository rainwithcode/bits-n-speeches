import { memberWithRoles } from "../../data/members-with-roles";
import SectionHeading from "../../shared/SectionHeading";

import PersonCard from "./PersonCard";

export default function Leadership() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading className="mb-6" variant="primary">
          Meet Our Leaders
        </SectionHeading>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
          {memberWithRoles.map((officer) => (
            <li key={officer.name}>
              <PersonCard
                name={officer.name}
                src={officer.image}
                role={officer.officerRole}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
