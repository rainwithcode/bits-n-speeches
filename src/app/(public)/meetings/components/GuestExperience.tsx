import SectionHeading from "../../shared/SectionHeading";
import { guestExperience } from "../data/guest-experience";

export default function GuestExpectations() {
  return (
    <section className="bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading className="mb-6">
          What to Expect as a Guest
        </SectionHeading>
        <ul className="grid md:grid-cols-3 gap-4">
          {guestExperience.map((experience) => {
            const Icon = experience.icon;
            return (
              <li
                key={experience.title}
                className="flex flex-col items-center gap-3"
              >
                <Icon className="w-10 h-10 text-primary"></Icon>
                <h3 className="font-bold text-base md:text-xl text-primary">
                  {experience.title}
                </h3>
                <p className="text-center text-sm md:text-base">
                  {experience.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
