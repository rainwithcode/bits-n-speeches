import { Award, Mic, Users, type LucideIcon } from "lucide-react";

import IconCard from "@/components/ui/IconCard";
import { siteConfig } from "@/data/site-config";

import SectionHeading from "../../shared/SectionHeading";
import { whyJoin } from "../data/why-join";

const icons: Record<string, LucideIcon> = { Mic, Award, Users };

export default function WhyJoin() {
  return (
    <section className="bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <SectionHeading className="mb-6" variant="primary">
          Why Join {siteConfig.name}?
        </SectionHeading>
        <p>
          Whether you&apos;re a seasoned professional or a first-time speaker,
          our structured program helps you grow at your own pace.
        </p>
        <ul className="grid md:grid-cols-3 gap-4 md:gap-8 mt-8">
          {whyJoin.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <li key={reason.label}>
                <IconCard
                  icon={icons[reason.icon]}
                  label={reason.label}
                  description={reason.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
