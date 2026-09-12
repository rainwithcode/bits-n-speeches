import { meetingInfo } from "@/data/meetings";
import { Database } from "@/types/supabase";

import { createServerClient } from "./supabase/server";

export async function getMeetingById(id: string) {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw Error;
  return data;
}

export async function getUpcomingMeetings(limit = 3) {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("is_published", true)
    .gte("starts_at", new Date().toISOString())
    .order("starts_at", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
}

export function formatMeetingDateTime(
  startsAt: string | Date | null | undefined,
) {
  if (!startsAt) return "TBD";

  const date = new Date(startsAt);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

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
      return meetingInfo.location.online;
    case "hybrid":
      return `${meetingInfo.location.online} & ${meetingInfo.location.inPerson}`;
    case "in_person":
      return meetingInfo.location.inPerson;
    default:
      meetingType satisfies never;
      throw new Error("Unhandled meeting type: ${meetingType}");
  }
}
