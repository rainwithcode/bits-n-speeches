import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center gap-2 w-fit font-bold cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        primary:
          "bg-primary text-primary-foreground hover:bg-secondary disabled:hover:bg-primary",
        secondary:
          "bg-white text-primary border border-primary hover:bg-secondary hover:text-primary-foreground disabled:hover:bg-white disabled:hover:text-primary",
        accent:
          "bg-accent text-primary hover:bg-secondary hover:text-primary-foreground disabled:hover:bg-accent",
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
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseProps & {
  as?: "link";
  href: string;
};

type NativeButtonProps = BaseProps & {
  as: "button";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  color,
  size,
  className,
  children = "View Details",
  ...props
}: ButtonProps) {
  const classNameValue = cn(buttonVariants({ color, size }), className);

  if (props.as === "button") {
    return (
      <button
        type={props.type}
        onClick={props.onClick}
        className={cn(classNameValue)}
        disabled={props.disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <Link href={props.href} className={classNameValue}>
      {children}
    </Link>
  );
}
