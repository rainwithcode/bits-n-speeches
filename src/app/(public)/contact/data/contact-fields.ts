import type { FormField } from "@/types/forms";

export const contactFields: FormField[] = [
  {
    name: "fullName",
    id: "full-name",
    label: "Full Name",
    placeholder: "Jane Smith",
    type: "text",
    required: true,
  },
  {
    name: "email",
    id: "email",
    label: "Email Address",
    placeholder: "jane@example.com",
    type: "email",
    required: true,
  },
  {
    name: "subject",
    id: "subject",
    label: "Subject",
    placeholder: "What should I expect in my first Toastmasters meeting?",
    type: "text",
    required: true,
  },
  {
    name: "message",
    id: "message",
    label: "Message",
    placeholder:
      "Hello! Is there anything I need to prepare or bring in my first Toastmasters meeting?",
    type: "textarea",
    required: true,
  },
  {
    name: "newsletter",
    id: "newsletter",
    label: " Email me news and updates from Bits 'N Speeches.",
    type: "checkbox",
    required: false,
  },
];
