import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit bg-accent text-sm text-primary font-bold px-2 mb-4 rounded-md">
      {children}
    </div>
  );
}
