import { ArrowRight, UserPlus } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatMeetingDateTime } from "@/lib/meetings";

type MeetingCardProps = {
  date: string;
  type: "virtual" | "hybrid" | "in-person";
  theme: string;
  id: "string";
};

export default function MeetingCard({
  date,
  theme,
  type,
  id,
}: MeetingCardProps) {
  return (
    <article className="p-4 border border-border rounded-md">
      <div className="flex justify-between">
        <p>{formatMeetingDateTime(date)}</p>
        <Badge {...(type === "hybrid" && { variant: "highlight" })}>
          {type}
        </Badge>
      </div>
      <h3 className="font-heading font-bold text-primary text-base md:text-lg">
        {theme}
      </h3>
      <div className="flex gap-4 mt-4">
        <Button href={`/meetings/${id}`}>
          View Meeting
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button href={`/meetings/${id}/register`} color="secondary">
          Register
          <UserPlus className="w-4 h-4" />
        </Button>
      </div>
    </article>
  );
}
