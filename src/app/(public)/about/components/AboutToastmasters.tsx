import { siteConfig } from "@/data/site-config";

import SectionHeading from "../../shared/SectionHeading";

export default function AboutToastmasters() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <SectionHeading className="mb-6">What is Toastmasters?</SectionHeading>
      <p>
        <span className="font-bold underline">
          <a href={siteConfig.site} className="text-primary">
            {siteConfig.organization}
          </a>
        </span>{" "}
        is a nonprofit educational organization founded in 1924 that helps
        people develop communication and leadership skills through practice,
        feedback, and participation in club meetings. With more than 13,800
        clubs worldwide, Toastmasters offers opportunities for personal and
        professional growth in a supportive, encouraging environment.
      </p>
    </section>
  );
}
