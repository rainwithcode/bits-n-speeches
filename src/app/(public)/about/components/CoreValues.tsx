import { Mic, TrendingUp, Users, Star, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { Mic, TrendingUp, Users, Star };

import { about } from "../data/about";

export default function CoreValues() {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {about.values.map((value) => {
        const Icon = icons[value.icon];
        return (
          <li
            key={value.title}
            className="flex flex-col justify-center items-center space-y-2 md:space-y-4 bg-primary/5 p-4 md:p-6 rounded-md border border-border"
          >
            <div className="w-fit p-4 rounded-md bg-primary text-primary-foreground">
              <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="text-primary text-sm md:text-base font-bold">
              {value.title}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
