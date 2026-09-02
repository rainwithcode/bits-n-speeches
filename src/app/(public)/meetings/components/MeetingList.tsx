import { getMeetingList } from "@/lib/meetings";

import SectionHeading from "../../shared/SectionHeading";

import MeetingCard from "./MeetingCard";

export default async function MeetingList() {
  const meetings = await getMeetingList();
  console.log(meetings);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <SectionHeading>Upcoming Meetings</SectionHeading>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {meetings.map((meeting) => {
          return (
            <li key={meeting.id}>
              <MeetingCard
                date={meeting.starts_at}
                theme={meeting.title}
                type={meeting.type}
              ></MeetingCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
