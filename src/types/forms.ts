export type FormField = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "select"
    | "textarea"
    | "checkbox"
    | "password";
  required: boolean;
};

export type FormStatus = "idle" | "loading" | "success";
