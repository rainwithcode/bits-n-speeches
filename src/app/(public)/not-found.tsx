import { ArrowLeft } from "lucide-react";

import Button from "@/components/ui/Button";

export default function PublicNotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 min-h-[40vh] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <h1 className="text-primary text-2xl md:text-4xl font-heading font-bold">
        404 — Page Not Found
      </h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Button href="/" size="big">
        <ArrowLeft aria-hidden="true" />
        Back to Home
      </Button>
    </section>
  );
}
