import { meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";
import { Meeting } from "@/types/supabase";

import { getMeetingEndsAt } from "../meetings/meetings";

import { escapeIcsText } from "./escapeIcsText";
import { formatIcsDate } from "./formatIscDate";

export default function createCalendarEvent(meeting: Meeting) {
  const startsAt = new Date(meeting.starts_at);
  const endsAt = getMeetingEndsAt(startsAt, meeting.ends_at);

  const description = [
    meeting.description,
    "",
    `Join on Zoom: ${meetingInfo.meetingUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${siteConfig.name}//Meeting Calendar//EN`,
    "BEGIN:VEVENT",
    `UID:${meeting.id}@${siteConfig.domain}`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startsAt)}`,
    `DTEND:${formatIcsDate(endsAt)}`,
    `SUMMARY:${escapeIcsText(meeting.title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
