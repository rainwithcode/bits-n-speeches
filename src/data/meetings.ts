import { Calendar, Clock, MapPin } from "lucide-react";

import { formatDateTime, getLocation, getMeetingEndsAt } from "@/lib/meetings";
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
      formatDateTime(new Date(meeting.starts_at), { format: "date" }),
  },
  {
    label: "Time",
    icon: Clock,
    getValue: (meeting: Meeting) => {
      const startsAt = new Date(meeting.starts_at);
      const endsAt = new Date(getMeetingEndsAt(startsAt, meeting.ends_at));

      return `${formatDateTime(startsAt, { format: "time" })} – ${formatDateTime(
        endsAt,
        { format: "time" },
      )}`;
    },
  },
  {
    label: "Location",
    icon: MapPin,
    getValue: (meeting: Meeting) => getLocation(meeting.type),
  },
];
