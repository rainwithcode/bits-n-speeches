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

type DateTimeFormat = "date" | "time" | "datetime";

type FormatDateTimeOptions = {
  format?: DateTimeFormat;
  timeZone?: string;
  includeTimeZone?: boolean;
};

export function formatDateTime(
  value: string | Date | null | undefined,
  {
    format = "datetime",
    timeZone = "America/Los_Angeles",
    includeTimeZone = false,
  }: FormatDateTimeOptions = {},
) {
  if (!value) return "TBD";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  const baseOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    ...(includeTimeZone && { timeZoneName: "short" }),
  };

  if (format === "date") {
    return new Intl.DateTimeFormat("en-US", {
      ...baseOptions,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  if (format === "time") {
    return new Intl.DateTimeFormat("en-US", {
      ...baseOptions,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    ...baseOptions,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatMeetingDateTime(
  startsAt: string | Date | null | undefined,
) {
  if (!startsAt) return "TBD";

  const date = new Date(startsAt);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  }).format(date);

  return `${datePart} • ${timePart}`;
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
