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
    activity: "Open with thought of the day",
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
    activity: "Share a joke or humorous story",
    duration: "1 min",
  },
  {
    time: "7:09 PM – 7:10 PM",
    role: "Educational Minute",
    activity: "Share a brief educational insight or speaking tip",
    duration: "1 min",
  },
  {
    time: "7:10 PM – 7:13 PM",
    role: "Toastmaster",
    activity: "Call on role players to briefly explain their responsibilities",
    duration: "3 min",
  },

  // Prepared Speeches
  {
    time: "7:13 PM – 7:13:30 PM",
    role: "Timer",
    activity: "Explain timing constraints for Speaker #1",
    duration: "30 sec",
  },
  {
    time: "7:13:30 PM – 7:14 PM",
    role: "Evaluator #1",
    activity: "Explain evaluation objectives for Speaker #1",
    duration: "30 sec",
  },
  {
    time: "7:14 PM – 7:14:30 PM",
    role: "Toastmaster",
    activity: "Introduce Speaker #1",
    duration: "30 sec",
  },
  {
    time: "7:14:30 PM – 7:21:30 PM",
    role: "Speaker #1",
    activity: "Deliver a prepared speech",
    duration: "5–7 min",
  },
  {
    time: "7:21:30 PM – 7:22 PM",
    role: "Timer",
    activity: "Explain timing constraints for Speaker #2",
    duration: "30 sec",
  },
  {
    time: "7:22 PM – 7:22:30 PM",
    role: "Evaluator #2",
    activity: "Explain evaluation objectives for Speaker #2",
    duration: "30 sec",
  },
  {
    time: "7:22:30 PM – 7:23 PM",
    role: "Toastmaster",
    activity: "Introduce Speaker #2",
    duration: "30 sec",
  },
  {
    time: "7:23 PM – 7:30 PM",
    role: "Speaker #2",
    activity: "Deliver a prepared speech",
    duration: "5–7 min",
  },
  {
    time: "7:30 PM – 7:31 PM",
    role: "Timer",
    activity: "Report prepared speech times",
    duration: "1 min",
  },
  {
    time: "7:31 PM – 7:32 PM",
    role: "Awards Master",
    activity: "Conduct voting for Best Speaker",
    duration: "1 min",
  },

  // Table Topics
  {
    time: "7:32 PM – 7:33 PM",
    role: "Table Topics Master",
    activity: "Introduce the Table Topics session",
    duration: "1 min",
  },
  {
    time: "7:33 PM – 7:33:30 PM",
    role: "Timer",
    activity: "Explain Table Topics timing requirements",
    duration: "30 sec",
  },
  {
    time: "7:33:30 PM – 7:34 PM",
    role: "Grammarian",
    activity: "Introduce the Word of the Day",
    duration: "30 sec",
  },
  {
    time: "7:34 PM – 7:58 PM",
    role: "Table Topics Master",
    activity: "Conduct impromptu speaking session",
    duration: "24 min",
  },
  {
    time: "7:58 PM – 7:59 PM",
    role: "Timer",
    activity: "Report Table Topics speaking times",
    duration: "1 min",
  },
  {
    time: "7:59 PM – 8:00 PM",
    role: "Awards Master",
    activity: "Conduct voting for Best Table Topics Speaker",
    duration: "1 min",
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
    time: "8:07 PM – 8:08 PM",
    role: "Timer",
    activity: "Report speech evaluation times",
    duration: "1 min",
  },
  {
    time: "8:08 PM – 8:09 PM",
    role: "Awards Master",
    activity: "Conduct voting for Best Evaluator",
    duration: "1 min",
  },
  {
    time: "8:09 PM – 8:10 PM",
    role: "General Evaluator",
    activity: "Provide feedback on speech evaluations",
    duration: "1 min",
  },
  {
    time: "8:10 PM – 8:11:30 PM",
    role: "Grammarian",
    activity: "Report effective language use and usage of the Word of the Day",
    duration: "1 min 30 sec",
  },
  {
    time: "8:11:30 PM – 8:12:30 PM",
    role: "Ah Counter",
    activity: "Report filler words and unnecessary sounds used by speakers",
    duration: "1 min",
  },
  {
    time: "8:12:30 PM – 8:17:30 PM",
    role: "Listener",
    activity: "Quiz members on details shared during the meeting",
    duration: "5 min",
  },
  {
    time: "8:17:30 PM – 8:20 PM",
    role: "General Evaluator",
    activity:
      "Evaluate meeting organization, role performance, and opportunities for improvement",
    duration: "2 min 30 sec",
  },

  // Awards and Closing
  {
    time: "8:20 PM – 8:20:30 PM",
    role: "Awards Master",
    activity: "Announce Best Table Topics, Best Evaluator, and Best Speaker",
    duration: "30 sec",
  },
  {
    time: "8:20:30 PM – 8:21 PM",
    role: "Toastmaster",
    activity: "Close meeting program and return control to President",
    duration: "30 sec",
  },
  {
    time: "8:21 PM – 8:26 PM",
    role: "President",
    activity:
      "Share announcements, invite guest feedback, and deliver closing remarks",
    duration: "5 min",
  },
  {
    time: "8:26 PM – 8:29 PM",
    role: "Vice President of Education",
    activity: "Review upcoming meeting schedule and confirm role assignments",
    duration: "3 min",
  },
  {
    time: "8:29 PM – 8:30 PM",
    role: "President",
    activity: "Thank attendees and adjourn the meeting",
    duration: "1 min",
  },
];
