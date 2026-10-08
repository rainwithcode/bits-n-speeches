"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { submitForm } from "@/lib/forms/submitForm";
import type { FormStatus } from "@/types/forms";

import SectionHeading from "../../shared/SectionHeading";
import { contactFields } from "../data/contact-fields";

export default function ContactForm() {
  const buttonLabel = {
    idle: "Send Message",
    loading: "Sending...",
    success: "Sent",
  };

  const [status, setStatus] = useState<FormStatus>("success");
  const [error, setError] = useState<string | null>(null);

  const isDisabled = status === "loading" || status === "success";

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitForm("/api/contact", formData);

      form.reset();
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (err) {
      console.error("Contact form failed: ", err);
      setStatus("idle");

      setError("We couldn't send your message. Please try again.");
    }
  }

  return (
    <section className="h-full">
      <form onSubmit={handleSubmit} className="p-6 border border-border">
        <SectionHeading className="mb-6">Send a Message</SectionHeading>
        <div className="space-y-4">
          {contactFields.map((field) => (
            <div key={field.id}>
              {field.type === "checkbox" ? (
                <label htmlFor={field.id} className="flex gap-2">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    value="true"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                  <span>{field.label}</span>
                </label>
              ) : field.type === "textarea" ? (
                <>
                  <label htmlFor={field.id} className="block mb-1 font-medium">
                    {field.label} {field.required && " *"}
                  </label>
                  <textarea
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-3 py-2 border border-border focus:ring-2 focus:surface-dark"
                  />
                </>
              ) : (
                <>
                  <label htmlFor={field.id} className="block mb-1 font-medium">
                    {field.label} {field.required && " *"}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-3 py-2 border border-border focus:ring-2 focus:surface-dark"
                  />
                </>
              )}
            </div>
          ))}
          <Button
            as="button"
            type="submit"
            disabled={isDisabled}
            className="w-full mt-2 justify-center"
          >
            {status === "success" && (
              <CheckIcon aria-hidden="true" className="size-5" />
            )}
            {buttonLabel[status]}
          </Button>
          {error && <p className="text-secondary font-medium">{error}</p>}
        </div>
      </form>
    </section>
  );
}
