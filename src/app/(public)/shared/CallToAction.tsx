import Button from "@/components/ui/Button";

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
          <Button
            href="/membership#guest"
            label="Register as a Guest"
            size="big"
          />
          <Button
            href="/contact"
            label="Contact Us"
            color="secondary"
            size="big"
          />
        </div>
      </div>
    </section>
  );
}
