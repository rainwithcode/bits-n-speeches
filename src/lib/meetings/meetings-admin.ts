import { revalidatePath } from "next/cache";

import type { MeetingUpdate } from "@/types/supabase";

import { createServerClient } from "../supabase/server";

export async function updateMeeting(meetingId: string, values: MeetingUpdate) {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("meetings")
    .update(values)
    .eq("id", meetingId)
    .select()
    .single();

  if (error) {
    return error;
  }

  revalidatePath("/");
  revalidatePath("/meetings");
  revalidatePath(`/meetings/${meetingId}`);

  return data;
}
