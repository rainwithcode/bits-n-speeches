import { ReactNode } from "react";

type SectionHeadingProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export default function SectionHeading({
  variant = "primary",
  children,
}: SectionHeadingProps) {
  return (
    <h2
      className={`mb-6 font-heading font-bold text-lg md:text-3xl ${variant === "primary" ? "text-primary" : "text-primary-foreground"}`}
    >
      {children}
    </h2>
  );
}
