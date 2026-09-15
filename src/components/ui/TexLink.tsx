import Link from "next/link";
export type LinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TextLink({
  href,
  target,
  children,
  className,
}: LinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`text-primary underline hover:text-secondary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
