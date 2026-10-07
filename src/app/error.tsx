"use client";

import { ArrowLeft } from "lucide-react";

import Button from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <h1 className="font-heading text-3xl font-bold text-primary">
        Something went wrong
      </h1>

      <p>We couldn&apos;t complete your request. Please try again.</p>

      <div className="flex gap-4">
        <button onClick={reset}>Try Again</button>

        <Button href="/" size="big">
          <ArrowLeft aria-hidden="true" />
          Back to Home
        </Button>
      </div>
    </main>
  );
}
