import type { FormField } from "@/types/forms";

export const loginFields: FormField[] = [
  {
    name: "username",
    id: "username",
    label: "Username",
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
