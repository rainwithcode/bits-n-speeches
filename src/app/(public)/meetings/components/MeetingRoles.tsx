import SectionHeading from "../../shared/SectionHeading";
import { meetingRoles } from "../data/meeting-roles";

export default function MeetingRoles() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <SectionHeading className="mb-6">Common Meeting Roles</SectionHeading>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {meetingRoles.map((item) => (
          <li
            key={item.role}
            className="space-y-3 p-4 border border-border rounded-md bg-primary/5"
          >
            <h3 className="font-heading font-bold text-sm md:text-base text-primary">
              {item.role}
            </h3>
            <p className="text-sm md:text-base">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
