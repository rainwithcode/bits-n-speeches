import { Quote } from "lucide-react";
import Image from "next/image";

import { members } from "../../data/members";

export default function Testimonials() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="font-heading font-bold text-primary-foreground text-xl md:text-4xl mb-4">
          What Our Members Say
        </h2>
        <ul className="grid md:grid-cols-3 gap-4 md:gap-8 mt-8">
          {members.slice(0, 3).map((members) => {
            const nameParts = members.name.split(/\s+/);

            const initials =
              nameParts.length > 1
                ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
                : nameParts[0][0].toUpperCase();

            return (
              <li
                key={members.name}
                className="flex flex-col space-y-2 md:space-y-4 bg-white/10 p-8 rounded-md shadow-sm"
              >
                <Quote className="w-8 h-8 text-accent" />

                <blockquote className="text-sm md:text-base text-primary-foreground">
                  <p>{members.testimonial}</p>
                </blockquote>

                <div className="mt-auto flex gap-4 items-center">
                  {members.image ? (
                    <Image
                      src={`/members/${members.image}`}
                      alt={members.name}
                      width={128}
                      height={128}
                      quality={75}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full flex justify-center items-center bg-primary text-primary-foreground text-sm font-bold">
                      {initials}
                    </div>
                  )}

                  <div>
                    <cite className="text-xs md:text-sm text-primary-foreground font-bold not-italic">
                      {members.name}
                    </cite>
                    <div className="text-xs md:text-sm text-primary-foreground">
                      {members.role}
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
