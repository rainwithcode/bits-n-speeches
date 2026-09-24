import { Quote } from "lucide-react";

import MemberAvatar from "@/components/ui/MemberAvatar";

import { members } from "../../data/members";
import SectionHeading from "../../shared/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading className="mb-6" variant="secondary">
          What Our Members Say
        </SectionHeading>
        <ul className="grid md:grid-cols-3 gap-4 md:gap-8 mt-8">
          {members.slice(0, 3).map((member) => {
            return (
              <li
                key={member.name}
                className="flex flex-col space-y-2 md:space-y-4 bg-white/10 p-8 rounded-md shadow-sm"
              >
                <Quote className="w-8 h-8 text-accent" />

                <blockquote className="text-sm md:text-base text-primary-foreground">
                  <p>{member.testimonial}</p>
                </blockquote>

                <div className="mt-auto flex gap-4 items-center">
                  <MemberAvatar image={member.image} name={member.name} />
                  <div>
                    <cite className="text-xs md:text-sm text-primary-foreground font-bold not-italic">
                      {member.name}
                    </cite>
                    <div className="text-xs md:text-sm text-primary-foreground">
                      {member.profession}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
