import Button from "@/components/ui/Button";

import { loginFields } from "../data/login-fields";

export default function LoginForm() {
  return (
    <form className="w-full max-w-lg space-y-4 p-6 border border-border rounded-md bg-primary-foreground">
      {loginFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.id} className="block mb-1 font-medium">
            {field.label} {field.required && " *"}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="w-full px-3 py-2 border border-border focus:ring-2 focus:surface-dark"
          />
        </div>
      ))}
      <Button as="button" type="submit" className="inline w-full mt-4">
        Log In
      </Button>
    </form>
  );
}
