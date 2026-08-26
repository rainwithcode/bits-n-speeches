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
