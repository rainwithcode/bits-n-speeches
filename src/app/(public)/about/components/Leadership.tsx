import { memberWithRoles } from "../../data/members-with-roles";
import SectionHeading from "../../shared/SectionHeading";

import PersonCard from "./PersonCard";

export default function Leadership() {
  console.log(memberWithRoles);
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading variant="primary">Club Leadership</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-x-14 gap-y-10">
          {memberWithRoles.map((officer) => (
            <li key={officer.officerRole}>
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
