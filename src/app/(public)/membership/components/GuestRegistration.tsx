"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { submitForm } from "@/lib/forms/submitForm";
import { formatMeetingDateTime } from "@/lib/meetings/meetings";
import type { FormStatus } from "@/types/forms";
import type { Meeting } from "@/types/supabase";

import SectionHeading from "../../shared/SectionHeading";
import { guestRegistrationFields } from "../data/guest-registration-fields";

type GuestRegistrationProps = {
  meetingId: string | null;
  meetings: Meeting[];
};

export default function GuestRegistration({
  meetingId,
  meetings,
}: GuestRegistrationProps) {
  const buttonLabel = {
    idle: "Register as a Guest",
    loading: "Registering...",
    success: "Registered",
  };

  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const isDisabled = status === "loading" || status === "success";

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitForm("/api/guest-registration", formData);

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
    <section
      role="tabpanel"
      id="panel-guest"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg p-6 border border-border"
      >
        <SectionHeading className="mb-6">Guest Registration</SectionHeading>
        <p className="mb-6">
          Join us for a free meeting — no experience required.
        </p>
        <div className="space-y-4">
          {guestRegistrationFields.map((field) => (
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
                  <label htmlFor={field.id} className="block mb-1">
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
              ) : field.type === "select" ? (
                <>
                  <label htmlFor={field.id} className="block mb-1">
                    {field.label} {field.required && " *"}
                  </label>
                  <select
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    defaultValue={meetingId ?? undefined}
                    className="w-full px-3 py-2 border border-border focus:ring-2 focus:surface-dark"
                  >
                    {meetings.map((meeting) => (
                      <option value={meeting.id} key={meeting.id}>
                        {formatMeetingDateTime(new Date(meeting.starts_at))} —{" "}
                        {meeting.title}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <>
                  <label htmlFor={field.id} className="block mb-1">
                    {field.label} {field.required && " *"}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-3 py-2  border border-border focus:ring-2 focus:surface-dark"
                  />
                </>
              )}
            </div>
          ))}
          <Button
            as="button"
            type="submit"
            disabled={isDisabled}
            className="inline w-full mt-2"
          >
            {status === "success" && <CheckIcon />}
            {buttonLabel[status]}
          </Button>
          {error && <p className="text-secondary font-medium">{error}</p>}
        </div>
      </form>
    </section>
  );
}
