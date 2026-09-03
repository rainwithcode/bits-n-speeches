import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type IconTextProps = {
  icon: LucideIcon;
  variant?: "primary" | "accent";
  children: ReactNode;
};

export default function IconText({
  icon: Icon,
  variant = "primary",
  children,
}: IconTextProps) {
  return (
    <div className="text-sm md:text-lg mb-2" key="schedule">
      <div className="flex gap-2">
        <Icon
          className={`w-5 ${variant === "primary" ? "text-primary" : "text-accent"}`}
        />
        <span className="text-primary-foreground">{children}</span>
      </div>
    </div>
  );
}
