import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

import { heroContent } from "../data/hero-content";

export default function Hero() {
  return (
    <section className="from-gradient-from to-gradient-to bg-gradient-to-r text-gradient-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-18 md:py-32">
        <Badge variant="highlight">{siteConfig.organization}</Badge>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold br-50">
            {heroContent.heroTagline[0]}{" "}
            <div className="text-accent">{heroContent.heroTagline[1]}</div>
          </h1>
          <p className="text-base md:text-xl">{heroContent.heroDescription}</p>
          <div className="flex gap-4 md:gap-6">
            <Button href="/membership#guest" color="accent" size="big">
              Attend a Free Meeting
            </Button>
            <Button href="/about" color="secondary" size="big">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
