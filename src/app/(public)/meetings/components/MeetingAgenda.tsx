import { FileText } from "lucide-react";

import { MeetingRole } from "@/lib/meetings/roles";

type MeetingAgendaProps = {
  meetingRoles: MeetingRole[];
};

export default function MeetingAgenda({ meetingRoles }: MeetingAgendaProps) {
  return (
    <section>
      <h3 className="flex gap-2 mt-5 font-heading font-bold text-primary md:text-xl">
        <FileText className="size-6" aria-hidden="true" />
        Meeting Agenda
      </h3>
    </section>
  );
}
