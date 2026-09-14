import Button from "@/components/ui/Button";
import { formatMeetingOption } from "@/lib/meetings";
import type { Meeting } from "@/types/supabase";

import SectionHeading from "../../shared/SectionHeading";
import { guestRegistrationFields } from "../data/guest-registration";

type GuestRegistrationProps = {
  meetings: Meeting[];
};

export default function GuestRegistration({
  meetings,
}: GuestRegistrationProps) {
  return (
    <section
      role="tabpanel"
      id="panel-guest"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-4 md:pb-8"
    >
      <form
        action="/api/guest-registration"
        method="POST"
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
                      {formatMeetingOption(new Date(meeting.starts_at))} —{" "}
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
            Register as a Guest
          </Button>
        </div>
      </form>
    </section>
  );
}
