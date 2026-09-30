import { Mic, Star, TrendingUp, Users, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { Mic, TrendingUp, Users, Star };

import SectionHeading from "../../shared/SectionHeading";
import { about } from "../data/about";

export default function CoreValues() {
  return (
    <section>
      <SectionHeading className="sr-only">Core Values</SectionHeading>
      <ul className="grid grid-cols-2 gap-6">
        {about.values.map((value) => {
          const Icon = icons[value.icon];
          return (
            <li
              key={value.title}
              className="flex flex-col justify-center items-center space-y-2 md:space-y-4 bg-primary/5 p-4 md:p-6 rounded-md border border-border"
            >
              <div
                className="w-fit p-4 rounded-md bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <Icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="text-center text-primary text-base font-bold">
                {value.title}
              </h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
