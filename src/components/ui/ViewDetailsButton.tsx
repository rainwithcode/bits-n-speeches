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
        primary: "bg-accent text-primary hover:bg-hover",
        secondary: "bg-accent text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ViewDetailsButtonProps extends VariantProps<
  typeof viewDetailsButtonVariants
> {
  href: string;
  label?: string;
  className?: string;
}

export default function ViewDetailsButton({
  href,
  label = "View Details",
  variant,
  className,
}: ViewDetailsButtonProps) {
  return (
    <Link
      href={href}
      className={cn(viewDetailsButtonVariants({ variant }), className)}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
