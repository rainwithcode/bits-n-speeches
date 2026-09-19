"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { formatMeetingDateTime } from "@/lib/meetings";
import type { Meeting } from "@/types/supabase";

import SectionHeading from "../../shared/SectionHeading";
import { guestRegistrationFields } from "../data/guest-registration";

type GuestRegistrationProps = {
  meetings: Meeting[];
};

export default function GuestRegistration({
  meetings,
}: GuestRegistrationProps) {
  const buttonLabel = {
    idle: "Register as a Guest",
    loading: "Registering...",
    success: "Registered",
    error: "Try Again",
  };

  type FormStatus = "idle" | "loading" | "success" | "error";
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/guest-registration", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      role="tabpanel"
      id="panel-guest"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg p-6 border border-border rounded-md"
      >
        <SectionHeading className="mb-6">Guest Registration</SectionHeading>
        <p className="mb-6">
          Join us for a free meeting — no experience required.
        </p>
        <div className="space-y-4">
          {guestRegistrationFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block mb-1">
                {field.label} {field.required && " *"}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-3 py-2 rounded-md border border-border focus:ring-2 focus:surface-dark"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.name}
                  required={field.required}
                  className="w-full px-3 py-2 rounded-md border border-border focus:ring-2 focus:surface-dark"
                >
                  {meetings.map((meeting) => (
                    <option value={meeting.id} key={meeting.id}>
                      {formatMeetingDateTime(new Date(meeting.starts_at))} —{" "}
                      {meeting.title}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-3 py-2 rounded-md border border-border focus:ring-2 focus:surface-dark"
                />
              )}
            </div>
          ))}
          <Button as="button" type="submit">
            {buttonLabel[status] === "Registered" && <CheckIcon />}
            {buttonLabel[status]}
          </Button>
        </div>
      </form>
    </section>
  );
}
