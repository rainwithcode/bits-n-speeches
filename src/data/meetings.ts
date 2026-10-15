import { Calendar, Clock, MapPin } from "lucide-react";

import { formatDateTime } from "@/lib/meetings/format";
import { getLocation, getMeetingEndsAt } from "@/lib/meetings/meetings";
import type { Meeting } from "@/types/supabase";

export const meetingInfo = {
  schedule: {
    time: "7:00 – 8:30 PM Pacific",
    day: "Thursdays",
    online: "Every week",
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
  meetingUrl:
    "https://us06web.zoom.us/j/81863776938?pwd=i6URQwXqSRntUeQUjDegU82MeZvEL9.1#success",
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
        { format: "time", includeTimeZone: true },
      )}`;
    },
  },
  {
    label: "Location",
    icon: MapPin,
    getValue: (meeting: Meeting) => getLocation(meeting.type),
  },
];

export const agenda = [
  // Opening
  {
    time: "7:00 PM – 7:01 PM",
    role: "Sergeant at Arms",
    activity: "Call meeting to order",
    duration: "1 min",
  },
  {
    time: "7:01 PM – 7:02 PM",
    role: "Opening Thought",
    activity: "Pledge and opening thought",
    duration: "1 min",
  },
  {
    time: "7:02 PM – 7:05 PM",
    role: "President",
    activity: "Welcome and introduce guests",
    duration: "3 min",
  },
  {
    time: "7:05 PM – 7:08 PM",
    role: "Toastmaster",
    activity: "Introduce meeting theme, club updates, and participants",
    duration: "3 min",
  },
  {
    time: "7:08 PM – 7:09 PM",
    role: "Humorous",
    activity: "Humorous segment",
    duration: "1 min",
  },
  {
    time: "7:09 PM – 7:10 PM",
    role: "Educational Minute",
    activity: "Educational segment",
    duration: "1 min",
  },
  {
    time: "7:10 PM – 7:15 PM",
    role: "Toastmaster",
    activity:
      "Call on role players to read their responsibilities from the slide",
    duration: "5 min",
  },

  // Prepared Speeches
  {
    time: "7:15 PM – 7:23:30 PM",
    role: "Speaker #1",
    activity:
      "Timer explains timing requirements (30 sec); Evaluator #1 explains evaluation objectives (30 sec); Toastmaster introduces speaker (30 sec); Prepared speech (5–7 min)",
    duration: "8 min 30 sec",
  },
  {
    time: "7:23:30 PM – 7:32 PM",
    role: "Speaker #2",
    activity:
      "Timer explains timing requirements (30 sec); Evaluator #2 explains evaluation objectives (30 sec); Toastmaster introduces speaker (30 sec); Prepared speech (5–7 min)",
    duration: "8 min 30 sec",
  },
  {
    time: "7:32 PM – 7:34 PM",
    role: "Toastmaster",
    activity: "Request timer's report and conduct speaker voting",
    duration: "2 min",
  },

  // Table Topics
  {
    time: "7:34 PM – 7:36 PM",
    role: "Table Topics Master",
    activity: "Introduce Table Topics and explain timing",
    duration: "2 min",
  },
  {
    time: "7:36 PM – 7:58 PM",
    role: "Table Topics Master",
    activity: "Conduct impromptu speaking session",
    duration: "22 min",
  },
  {
    time: "7:58 PM – 8:00 PM",
    role: "Table Topics Master",
    activity: "Request timer's report and conduct Table Topics voting",
    duration: "2 min",
  },

  // Evaluations
  {
    time: "8:00 PM – 8:01 PM",
    role: "General Evaluator",
    activity: "Introduce evaluation segment",
    duration: "1 min",
  },
  {
    time: "8:01 PM – 8:04 PM",
    role: "Evaluator #1",
    activity: "Evaluate speech #1",
    duration: "2–3 min",
  },
  {
    time: "8:04 PM – 8:07 PM",
    role: "Evaluator #2",
    activity: "Evaluate speech #2",
    duration: "2–3 min",
  },
  {
    time: "8:07 PM – 8:09 PM",
    role: "General Evaluator",
    activity: "Request timer's report and conduct evaluator voting",
    duration: "2 min",
  },
  {
    time: "8:09 PM – 8:11 PM",
    role: "General Evaluator",
    activity: "Evaluate speech evaluators",
    duration: "2 min",
  },
  {
    time: "8:11 PM – 8:13 PM",
    role: "Grammarian",
    activity: "Grammarian's report",
    duration: "2 min",
  },
  {
    time: "8:13 PM – 8:14 PM",
    role: "Ah Counter",
    activity: "Ah-Counter's report",
    duration: "1 min",
  },
  {
    time: "8:14 PM – 8:16 PM",
    role: "Listener",
    activity: "Listener's report",
    duration: "2 min",
  },
  {
    time: "8:16 PM – 8:21 PM",
    role: "General Evaluator",
    activity: "General meeting evaluation",
    duration: "5 min",
  },

  // Awards and Closing
  {
    time: "8:21 PM – 8:24 PM",
    role: "Awards Master",
    activity: "Announce Best Table Topics, Best Evaluator, and Best Speaker",
    duration: "3 min",
  },
  {
    time: "8:24 PM – 8:25 PM",
    role: "Toastmaster",
    activity: "Close meeting program and return control to President",
    duration: "1 min",
  },
  {
    time: "8:25 PM – 8:30 PM",
    role: "President",
    activity: "Announcements, guest feedback, and closing remarks",
    duration: "5 min",
  },
  {
    time: "8:30 PM",
    role: "End of Meeting",
    activity: "Meeting adjourned",
    duration: "—",
  },
];
