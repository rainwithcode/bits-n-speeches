import Link from "next/link";

export type LinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight";
};

export default function TextLink({
  href,
  target,
  children,
  className,
  variant = "default",
}: LinkProps) {
  const variantClasses = {
    default: "text-primary hover:text-secondary",
    highlight: "text-accent hover:text-primary-foreground",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`underline transition-colors ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
