import type { LucideIcon } from "lucide-react";

type InfoItemProps = {
  Icon: LucideIcon;
  children: React.ReactNode;
};

export default function InfoItem({ Icon, children }: InfoItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-primary/10">
        <Icon aria-hidden="true" />
      </div>
      <div>{children}</div>
    </div>
  );
}
