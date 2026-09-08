import { getMeetingList } from "@/lib/meetings";

import SectionHeading from "../../shared/SectionHeading";

import MeetingCard from "./MeetingCard";

export default async function MeetingList() {
  const meetings = await getMeetingList();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <SectionHeading className="mb-6">Upcoming Meetings</SectionHeading>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {meetings.map((meeting) => {
          return (
            <li key={meeting.id}>
              <MeetingCard meeting={meeting}></MeetingCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
