import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center gap-2 w-fit px-4 py-2 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-secondary",
        secondary:
          "bg-white text-primary border border-primary hover:bg-primary hover:text-primary-foreground",
        accent:
          "bg-accent text-primary hover:bg-secondary hover:text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface buttonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  label?: string;
  className?: string;
}

export default function Button({
  href,
  label = "View Details",
  variant,
  className,
}: buttonProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), className)}>
      {label}
    </Link>
  );
}
