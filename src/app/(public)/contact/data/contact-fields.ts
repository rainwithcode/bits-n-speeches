type FormField = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
};

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
      "Is there anything I need to prepare or bring in my first Toastmasters meeting?",
    type: "textarea",
    required: true,
  },
];
