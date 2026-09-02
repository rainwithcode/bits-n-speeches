import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva("flex items-center gap-2 w-fit font-bold", {
  variants: {
    color: {
      primary: "bg-primary text-primary-foreground hover:bg-secondary",
      secondary:
        "bg-white text-primary border border-primary hover:bg-primary hover:text-primary-foreground",
      accent:
        "bg-accent text-primary hover:bg-secondary hover:text-primary-foreground",
    },
    size: {
      big: "px-6 py-4 md:px-8 md:py-4 text-sm md:text-lg",
      small: "px-4 py-2",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "small",
  },
});

interface buttonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function Button({
  href,
  color,
  size,
  className,
  children = "View Details",
}: buttonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ color, size }), className)}
    >
      {children}
    </Link>
  );
}
