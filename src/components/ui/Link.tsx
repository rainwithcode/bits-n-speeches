import Link from "next/link";
export type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function TextLink({ href, children, className }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-primary underline hover:text-secondary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
