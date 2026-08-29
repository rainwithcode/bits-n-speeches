import { siteConfig } from "@/data/site-config";

import { about } from "../data/about";

export default function Milestones() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="mb-6 text-primary text-lg md:text-3xl font-heading font-bold">
          Our Milestones
        </h2>
        <p>
          Explore the key events that have shaped {siteConfig.name} into the
          thriving community it is today.
        </p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {about.milestones.map((milestone) => (
            <li
              key={milestone.title}
              className="flex flex-col gap-4 p-6 rounded-md border border-border"
            >
              <time
                dateTime={milestone.year}
                className="w-fit px-3 py-1 rounded-full bg-secondary/10 font-bold text-secondary text-xs"
              >
                {milestone.year}
              </time>
              <h3 className="text-lg md:text-xl font-bold">
                {milestone.title}
              </h3>
              <p className="text-sm md:text-base">{milestone.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
