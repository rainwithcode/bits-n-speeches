import { ReactNode } from "react";

type BadgeProps = {
  variant?: "default" | "highlight";
  children: ReactNode;
};

export default function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <div
      className={`w-fit text-sm font-bold px-2 mb-4 rounded-md ${variant === "default" ? "bg-primary text-primary-foreground" : "bg-accent text-primary"}`}
    >
      {children}
    </div>
  );
}
