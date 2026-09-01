import { meetings } from "@/data/meetings";
import { Database } from "@/types/supabase";

import { createServerClient } from "./supabase/server";

export async function getUpcomingMeetings() {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("is_published", true)
    .gte("starts_at", new Date().toISOString())
    .order("starts_at", { ascending: true })
    .limit(3);

  if (error) throw error;
  return data;
}

export async function getMeetingList() {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("is_published", "true")
    .gte("starts_at", new Date().toISOString())
    .order("starts_at", { ascending: true })
    .limit(8);

  if (error) throw error;
  return data;
}

// src/lib/meetings.ts
export function formatMeetingDateTime(startsAt: string | Date) {
  const date = new Date(startsAt);

  const parts = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  }).formatToParts(date);

  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const hour = parts.find((p) => p.type === "hour")?.value ?? "";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "";
  const period = parts.find((p) => p.type === "dayPeriod")?.value ?? "";

  return `${month} ${day} • ${hour}:${minute} ${period}`;
}

export function formatMeetingDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export function formatMeetingTime(date: Date, includeTimeZone: boolean) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
    ...(includeTimeZone && { timeZoneName: "short" }),
  });
}

export function getMeetingEndsAt(startsAt: Date, endsAt: string | null) {
  return endsAt
    ? new Date(endsAt)
    : new Date(startsAt.getTime() + 90 * 60 * 1000);
}

type MeetingType = Database["public"]["Enums"]["meeting_type"];

export function getLocation(meetingType: MeetingType) {
  switch (meetingType) {
    case "virtual":
      return meetings.location.online;
    case "hybrid":
      return `${meetings.location.online} & ${meetings.location.inPerson}`;
    case "in_person":
      return meetings.location.inPerson;
    default:
      meetingType satisfies never;
      throw new Error("Unhandled meeting type: ${meetingType}");
  }
}
