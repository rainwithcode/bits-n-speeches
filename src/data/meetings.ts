import { Calendar, Clock, MapPin } from "lucide-react";

import { formatDateTime, getLocation, getMeetingEndsAt } from "@/lib/meetings";
import type { Meeting } from "@/types/supabase";

export const meetingInfo = {
  time: "7:00 – 8:30 PM Pacific",
  schedule: {
    online: "Every Thursday",
    inPerson: "1st and 3rd Thursdays",
  },
  location: {
    online: "Zoom",
    inPerson: {
      name: "WINN Center, Cosumnes River College",
      room: "Room 252",
      address: "8401 Center Parkway, Sacramento, CA 95823",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5003431079263!2d-121.42334172305533!3d38.45300867182229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac6751a891f97%3A0xb6f8808396d03863!2sWinn%20Center!5e0!3m2!1sen!2sph!4v1789978646046!5m2!1sen!2sph",
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
