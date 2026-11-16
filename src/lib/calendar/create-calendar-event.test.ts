import { describe, expect, it } from "vitest";

import { meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";
import type { Meeting } from "@/types/supabase";

import createCalendarEvent from "./create-calendar-event";

const meeting: Meeting = {
  created_at: "2026-11-16T10:00:00-08:00",
  created_by: null,
  description: "Weekly Toastmasters meeting.",
  ends_at: "2026-11-16T12:00:00-08:00",
  id: "meeting-123",
  is_published: true,
  meeting_url: "https://example.com/meeting",
  starts_at: "2026-11-16T10:00:00-08:00",
  title: "Toastmasters Meeting",
  type: "hybrid",
  updated_at: "2026-11-16T10:00:00-08:00",
};

const expectedCalendarEvent = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  `PRODID:-//${siteConfig.name}//Meeting Calendar//EN`,
  "BEGIN:VEVENT",
  `UID:meeting-123@${siteConfig.domain}`,
  `DTSTAMP:${new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z")}`,
  "DTSTART:20261116T180000Z",
  "DTEND:20261116T200000Z",
  `SUMMARY:${`${siteConfig.name} (${meeting.title})`}`,
  `DESCRIPTION:Weekly Toastmasters meeting.\\nJoin on Zoom: ${meetingInfo.meetingUrl}`,
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");


describe("create calendar event", () => {
  const meetingInputs = [
    {
      meeting: meeting,
      expected: expectedCalendarEvent,
      description: "returns a calendar event",
    },
  ];

  it.each(meetingInputs)("$description", ({ meeting, expected }) => {
    expect(createCalendarEvent(meeting)).toBe(expected);
  });
});
