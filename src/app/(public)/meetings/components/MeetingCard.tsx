import { ArrowRight, MapPin, UserPlus } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import IconText from "@/components/ui/IconText";
import { formatMeetingOption, getLocation } from "@/lib/meetings";
import { Meeting } from "@/types/supabase";

type MeetingCardProps = {
  meeting: Meeting;
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="p-4 border border-border rounded-md">
      <div className="flex justify-between">
        <p>{formatMeetingOption(meeting.starts_at)}</p>
        <Badge {...(meeting.type === "hybrid" && { variant: "highlight" })}>
          {meeting.type}
        </Badge>
      </div>
      <div className="space-y-2">
        <h3 className="font-heading font-bold text-primary text-sm md:text-lg">
          {meeting.title}
        </h3>
        <IconText icon={MapPin}>{getLocation(meeting.type)}</IconText>
      </div>
      <div className="flex gap-4 mt-4">
        <Button href={`/meetings/${meeting.id}`}>
          View Meeting
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button href={`/meetings/${meeting.id}/register`} color="secondary">
          Register
          <UserPlus className="w-4 h-4" />
        </Button>
      </div>
    </article>
  );
}
