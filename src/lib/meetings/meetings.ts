import { meetingInfo } from "@/data/meetings";
import { Database } from "@/types/supabase";

import { createClient } from "../supabase/server";

export async function getMeetingById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch meeting: ", error);
  }

  return data;
}

export async function getUpcomingMeetings(limit = 3) {
  const supabase = await createClient();

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
      return `${meetingInfo.location.online} & ${meetingInfo.location.inPerson.name}, ${meetingInfo.location.inPerson.room}`;
    case "in_person":
      return `${meetingInfo.location.inPerson.name}, ${meetingInfo.location.inPerson.room}`;
    default:
      meetingType satisfies never;
      throw new Error("Unhandled meeting type: ${meetingType}");
  }
}
