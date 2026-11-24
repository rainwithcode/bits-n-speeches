import { getStartOfDayInLA } from "@/utils/date";

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

  const startOfDayLA = getStartOfDayInLA();

  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .eq("is_published", true)
    .gte("starts_at", startOfDayLA)
    .order("starts_at", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
}
