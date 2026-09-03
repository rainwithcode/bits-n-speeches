import { ReactNode } from "react";

type SectionHeadingProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({
  variant = "primary",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-heading font-bold text-lg md:text-3xl ${variant === "primary" ? "text-primary" : "text-primary-foreground"} ${className}`}
    >
      {children}
    </h2>
  );
}
