import { ReactNode } from "react";

export default function AvatarFallback({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full flex justify-center items-center bg-primary text-primary-foreground text-sm font-bold">
      {children}
    </div>
  );
}
