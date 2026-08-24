import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-9 md:py-18 flex flex-col justify-center items-center gap-8">
        <h2 className="font-heading font-bold text-primary text-xl md:text-4xl">
          Ready to Find Your Voice?
        </h2>
        <p className="text-sm md:text-lg text-center">
          Join as a guest for free. No experience, no pressure — just growth.
        </p>
        <div className="flex gap-4 md:gap-6">
          <Link
            href="/membership#guest"
            className="block w-fit px-6 py-4 md:px-8 md:py-4 bg-primary text-sm md:text-lg text-primary-foreground font-bold hover:bg-hover hover:text-primary"
          >
            Register as a Guest
          </Link>
          <Link
            href="/about"
            className="block w-fit px-6 py-4 md:px-8 py-4 bg-white text-sm md:text-lg text-primary font-bold hover:bg-primary hover:text-primary-foreground"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
