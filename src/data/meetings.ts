import { Calendar, Clock, MapPin } from "lucide-react";

import {
  formatMeetingDate,
  formatMeetingTime,
  getLocation,
  getMeetingEndsAt,
} from "@/lib/meetings";
import type { Meeting } from "@/types/supabase";

export const meetingInfo = {
  day: "Thursday",
  time: "7:00 – 8:30 PM Pacific",
  location: {
    online: "Zoom",
    inPerson: "WINN Center Consumnes River College, Elk Grove, CA 95624",
  },
};

export const meetingDetailItems = [
  {
    label: "Date",
    icon: Calendar,
    getValue: (meeting: Meeting) =>
      formatMeetingDate(new Date(meeting.starts_at)),
  },
  {
    label: "Time",
    icon: Clock,
    getValue: (meeting: Meeting) =>
      `${formatMeetingTime(new Date(meeting.starts_at), false)} – ${formatMeetingTime(getMeetingEndsAt(new Date(meeting.starts_at), meeting.ends_at), true)}`,
  },
  {
    label: "Location",
    icon: MapPin,
    getValue: (meeting: Meeting) => getLocation(meeting.type),
  },
];
