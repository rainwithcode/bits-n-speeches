import { renderToBuffer } from "@react-pdf/renderer";
import { notFound } from "next/navigation";

import MeetingAgendaPDF from "@/components/pdf/MeetingAgendaPDF";
import { formatDate, formatDateTime } from "@/lib/meetings/format";
import {
  getLocation,
  getMeetingById,
  getMeetingEndsAt,
} from "@/lib/meetings/meetings";
import { getMeetingRoles } from "@/lib/meetings/roles";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const meeting = await getMeetingById(id);

  if (!meeting) {
    notFound();
  }

  const startsAt = new Date(meeting.starts_at);
  const endsAt = getMeetingEndsAt(startsAt, meeting.ends_at);

  const meetingRoles = await getMeetingRoles(
    formatDate({ date: startsAt, format: "short" }),
  );

  const pdf = await renderToBuffer(
    <MeetingAgendaPDF
      title={meeting.title}
      date={formatDate({ date: startsAt, format: "long" })}
      time={`${formatDateTime(startsAt, { format: "time" })} – ${formatDateTime(
        endsAt,
        {
          format: "time",
          includeTimeZone: true,
        },
      )}`}
      location={getLocation(meeting.type)}
      roles={meetingRoles}
    />,
  );

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="meeting-agenda.pdf"',
      "Cache-Control": "private, no-store",
    },
  });
}
