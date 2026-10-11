import { FileText } from "lucide-react";

import { MeetingRole } from "@/lib/meetings/roles";

type MeetingAgendaProps = {
  meetingRoles: MeetingRole[];
};

export default function MeetingAgenda({ meetingRoles }: MeetingAgendaProps) {
  return (
    <section>
      <h3 className="flex gap-2 mt-8 mb-4 font-heading font-bold text-primary md:text-xl">
        <FileText className="size-6" aria-hidden="true" />
        Meeting Roles
      </h3>
      <table className="w-full max-w-3xl table-fixed text-left border border-border rounded-md">
        <thead>
          <tr className="bg-primary/5">
            <th scope="col" className="text-primary p-3">
              Role
            </th>
            <th scope="col" className="text-primary p-3">
              Member
            </th>
          </tr>
        </thead>

        <tbody>
          {meetingRoles.map(({ role, memberName }) => (
            <tr
              key={role}
              className={`border-t border-border ${!memberName ? "bg-gray-50/60" : ""}`}
            >
              <th scope="row" className="p-3 font-medium">
                {role}
              </th>
              <td
                className={`p-3 ${!memberName ? "italic text-gray-500" : ""}`}
              >
                {memberName ?? "Open"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
