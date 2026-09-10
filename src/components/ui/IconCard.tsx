import { LucideIcon } from "lucide-react";

type IconCardProps = {
  icon: LucideIcon;
  label: string;
  description?: string;
};

export default function IconCard({
  icon: Icon,
  label,
  description,
}: IconCardProps) {
  return (
    <div className="space-y-2 md:space-y-4 bg-white p-8 rounded-md border border-border">
      <div className="mx-auto w-fit px-4 py-4 rounded-md bg-primary/10">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-heading font-bold text-base md:text-xl text-primary">
        {label}
      </h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
}
