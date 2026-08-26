import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export default function IconText({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="text-base md:text-lg mb-2" key="schedule">
      <div className="flex gap-2">
        <Icon className="w-5 text-accent" />
        <span className="text-primary-foreground">{children}</span>
      </div>
    </div>
  );
}
