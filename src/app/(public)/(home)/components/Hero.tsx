import Link from "next/link";

import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/data/site-config";

import { heroContent } from "../data/hero-content";

export default function Hero() {
  return (
    <section className="from-gradient-from to-gradient-to bg-gradient-to-r text-gradient-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-18 md:py-32">
        <Badge>{siteConfig.organization}</Badge>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold br-50">
            {heroContent.heroTagline[0]}{" "}
            <div className="text-accent">{heroContent.heroTagline[1]}</div>
          </h1>
          <p className="text-base md:text-xl">{heroContent.heroDescription}</p>
          <div className="flex gap-4 md:gap-6">
            <Link
              href="/membership#guest"
              className="block w-fit px-6 py-4 md:px-8 md:py-4 bg-accent text-sm md:text-lg text-primary font-bold hover:bg-hover"
            >
              Attend a Free Meeting
            </Link>
            <Link
              href="/about"
              className="block w-fit px-6 py-4 md:px-8 py-4 border text-sm md:text-lg text-gradient-foreground font-bold hover:bg-hover hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
