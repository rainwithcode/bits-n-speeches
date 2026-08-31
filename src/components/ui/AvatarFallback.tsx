import { ReactNode } from "react";

export default function AvatarFallback({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-full flex justify-center items-center bg-primary text-primary-foreground font-bold ${className}`}
    >
      {children}
    </div>
  );
}
