import { revalidatePath } from "next/cache";

import type { MeetingUpdate } from "@/types/supabase";

export async function updateMeeting(meetingId: string, values: MeetingUpdate) {
  const supabase = await createClient();

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
