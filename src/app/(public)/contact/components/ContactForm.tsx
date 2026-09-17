import Button from "@/components/ui/Button";

import SectionHeading from "../../shared/SectionHeading";
import { contactFields } from "../data/contact-fields";

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <form
        action="/api/contact"
        method="POST"
        className="mx-auto max-w-lg p-6 border border-border rounded-md"
      >
        <SectionHeading className="mb-6">Send a Message</SectionHeading>
        <div className="space-y-4">
          {contactFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block mb-1 font-medium">
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
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
}
