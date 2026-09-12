type FormField = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "tel" | "date" | "textarea";
  required: boolean;
};

export const guestRegistrationFields: FormField[] = [
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
    name: "phone",
    id: "phone",
    label: "Phone Number",
    placeholder: "+1 202 555 0123",
    type: "tel",
    required: false,
  },
  {
    name: "preferredVisitDate",
    id: "preferred-visit-date",
    label: "Preferred Visit Date",
    type: "date",
    required: false,
  },
  {
    name: "message",
    id: "message",
    label: "Anything you'd like us to know?",
    placeholder: "Goals, questions, accessibility needs...",
    type: "textarea",
    required: false,
  },
];
