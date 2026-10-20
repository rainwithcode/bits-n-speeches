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
  // Opening (7:00–7:15 PM)
  {
    time: "7:00–7:15 PM",
    role: "Sergeant-at-Arms",
    activity: "Call meeting to order",
    duration: "1 min",
  },
  {
    time: "",
    role: "Opening Thought",
    activity: "Open with thought of the day",
    duration: "1 min",
  },
  {
    time: "",
    role: "President",
    activity: "Welcome and introduce guests",
    duration: "3 min",
  },
  {
    time: "",
    role: "Toastmaster",
    activity:
      "Introduce meeting theme, club updates, role players, and participants",
    duration: "3 min",
  },
  {
    time: "",
    role: "Humorous",
    activity: "Share a joke or humorous story",
    duration: "1 min",
  },
  {
    time: "",
    role: "Educational Minute",
    activity: "Share a brief educational insight or speaking tip",
    duration: "1 min",
  },
  {
    time: "",
    role: "Toastmaster",
    activity: "Call on role players to briefly explain their responsibilities",
    duration: "3 min",
  },

  // Prepared Speeches (7:15–7:40 PM)
  {
    time: "7:15–7:40 PM",
    role: "Toastmaster",
    activity: "Introduce Speaker #1",
    duration: "",
  },
  {
    time: "",
    role: "Speaker #1",
    activity: "Deliver a prepared speech",
    duration: "5–7 min",
  },
  {
    time: "",
    role: "Toastmaster",
    activity: "Introduce Speaker #2",
    duration: "",
  },
  {
    time: "",
    role: "Speaker #2",
    activity: "Deliver a prepared speech",
    duration: "5–7 min",
  },
  {
    time: "7:40 PM",
    role: "Toastmaster",
    activity: "Call on Timer and direct members to send votes to Awards Master",
    duration: "1 min",
  },

  // Table Topics (7:40–8:00 PM)
  {
    time: "7:40–7:55 PM",
    role: "Table Topics Master",
    activity:
      "Introduce the Table Topics session and call on Grammarian and Timer",
    duration: "1 min",
  },
  {
    time: "7:55 PM",
    role: "Table Topics Master",
    activity:
      "Call on Timer and Grammarian, and direct members to send votes to Awards Master",
    duration: "",
  },
  {
    time: "8:00 PM",
    role: "Toastmaster",
    activity: "Give control to General Evaluator",
    duration: "1 min",
  },

  // Evaluations (8:00–8:15 PM)
  {
    time: "8:00–8:15 PM",
    role: "General Evaluator",
    activity: "Introduce the evaluation segment",
    duration: "1 min",
  },
  {
    time: "",
    role: "Evaluator #1",
    activity: "Evaluate speech #1",
    duration: "2–3 min",
  },
  {
    time: "",
    role: "Evaluator #2",
    activity: "Evaluate speech #2",
    duration: "2–3 min",
  },
  {
    time: "",
    role: "General Evaluator",
    activity: "Call on Timer and direct members to send votes to Awards Master",
    duration: "1 min",
  },
  {
    time: "",
    role: "General Evaluator",
    activity:
      "Evaluate the entire meeting, including organization, transitions, speech evaluations, role performance, and opportunities for improvement",
    duration: "3–5 min",
  },
  {
    time: "",
    role: "Grammarian",
    activity: "Report effective language use and usage of the Word of the Day",
    duration: "1–2 min",
  },
  {
    time: "",
    role: "Ah Counter",
    activity: "Report filler words and unnecessary sounds used by speakers",
    duration: "1–2 min",
  },
  {
    time: "",
    role: "Listener",
    activity:
      "Quiz members on details shared during the meeting, adjusting to available time",
    duration: "2–5 min (flexible)",
  },
  {
    time: "8:15 PM",
    role: "Awards Master",
    activity:
      "Announce Best Table Topics, Best Evaluator, and Best Speaker; return control to Toastmaster",
    duration: "30 sec",
  },

  // Closing
  {
    time: "",
    role: "Toastmaster",
    activity: "Close meeting program and return control to President",
    duration: "1–2 min",
  },
  {
    time: "",
    role: "President",
    activity:
      "Share announcements, including upcoming roles and meeting schedules; invite guest feedback and deliver closing remarks",
    duration: "5 min",
  },
  {
    time: "8:30 PM",
    role: "President",
    activity: "Thank attendees and adjourn the meeting",
    duration: "1 min",
  },
];
