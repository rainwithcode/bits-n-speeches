import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { meetingDetailItems } from "@/data/meetings";
import type { Meeting } from "@/types/supabase";

import SectionHeading from "../../shared/SectionHeading";

type MeetingDetailProps = {
  meeting: Meeting;
};

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="p-8 border border-border rounded-md">
        <SectionHeading className="mb-3">{meeting.title}</SectionHeading>
        <Badge {...(meeting.type === "hybrid" && { variant: "highlight" })}>
          {meeting.type}
        </Badge>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {meetingDetailItems.map((meetingDetail) => {
            const Icon = meetingDetail.icon;
            return (
              <li key={meetingDetail.label} className="flex gap-3 items-center">
                <Icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-primary">
                    {meetingDetail.label}
                  </div>
                  <p>{meetingDetail.getValue(meeting)}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <h3 className="mt-5 font-heading font-bold text-primary md:text-xl">
          About This Meeting
        </h3>
        <p className="mt-2 pb-8 border-b border-border">
          {meeting.description}
        </p>
        <Button href="/membership" className="mt-6">
          Register as a Guest for This Meeting
        </Button>
      </div>
    </article>
  );
}
