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
