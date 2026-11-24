import { meetingInfo } from "@/data/meetings";
import { Database } from "@/types/supabase";

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
export function getMeetingEndsAt(startsAt: Date, endsAt: string | null) {
  return endsAt
    ? new Date(endsAt)
    : new Date(startsAt.getTime() + 90 * 60 * 1000);
}
