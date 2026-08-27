import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const viewDetailsButtonVariants = cva(
  "flex items-center gap-2 w-fit px-4 py-2 rounded-md",
  {
    variants: {
      variant: {
        primary: "bg-accent text-primary",
        secondary: "bg-accent text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
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
