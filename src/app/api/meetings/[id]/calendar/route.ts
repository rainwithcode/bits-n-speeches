import { NextResponse } from "next/server";

import { siteConfig } from "@/data/site-config";
import createCalendarEvent from "@/lib/calendar/createCalendarEvent";
import { getMeetingById } from "@/lib/meetings/meetings";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: RouteProps) {
  const { id } = await params;

  const meeting = await getMeetingById(id);

  if (!meeting) {
    return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
  }

  const calendar = createCalendarEvent(meeting);

  return new Response(calendar, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${siteConfig.shortName.toLowerCase()}-meeting.ics`,
    },
  });
}
