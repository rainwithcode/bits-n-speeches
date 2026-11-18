import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

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

function createMeeting(input: Partial<Meeting>) {
  const newMeeting = { ...meeting, ...input };

  return newMeeting;
}

const expectedCalendarEvent = (
  overrides: Partial<{
    uid: string;
    dtstamp: string;
    dtstart: string;
    dtend: string;
    summary: string;
    description: string;
  }> = {},
) => {
  const event = {
    uid: `meeting-123@${siteConfig.domain}`,
    dtstamp: "20261116T040000Z",
    dtstart: "20261116T180000Z",
    dtend: "20261116T200000Z",
    summary: `${siteConfig.name} (${meeting.title})`,
    description: meeting.description,
    ...overrides,
  };

  const description = [
    event.description,
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
    `UID:${event.uid}`,
    `DTSTAMP:${event.dtstamp}`,
    `DTSTART:${event.dtstart}`,
    `DTEND:${event.dtend}`,
    `SUMMARY:${event.summary}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

describe("create calendar event", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-16T04:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const meetingInputs = [
    {
      meeting: meeting,
      expected: expectedCalendarEvent(),
      description: "returns a calendar event",
    },
    {
      meeting: createMeeting({ description: "" }),
      expected: expectedCalendarEvent({ description: "" }),
      description: "handles a meeting with an empty description",
    },
  ];

  it.each(meetingInputs)("$description", ({ meeting, expected }) => {
    expect(createCalendarEvent(meeting)).toBe(expected);
  });
});
