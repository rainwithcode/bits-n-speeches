import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function ViewDetailsButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 w-fit px-4 py-2 mt-8 rounded-md bg-accent"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
