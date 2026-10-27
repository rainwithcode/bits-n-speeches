import type { FormField } from "@/types/forms";

export const loginFields: FormField[] = [
  {
    name: "email",
    id: "email",
    label: "Email",
    type: "text",
    required: true,
  },
  {
    name: "password",
    id: "password",
    label: "Password",
    type: "password",
    required: true,
  },
];
