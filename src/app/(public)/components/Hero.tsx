import Link from "next/link";

export default function Hero() {
  return (
    <div className="from-gradient-from to-gradient-to bg-gradient-to-r text-gradient-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-18 md:py-32">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            Find Your Voice.{" "}
            <div className="text-accent">Lead With Confidence.</div>
          </h1>
          <p className="text-base md:text-xl">
            Bits 'N Speeches is a welcoming community where you develop public
            speaking and leadership skills in a supportive, fun environment.
          </p>
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
    </div>
  );
}
