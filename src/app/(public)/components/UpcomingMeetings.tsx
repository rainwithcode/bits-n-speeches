import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import {
  formatMeetingDate,
  formatMeetingTime,
  getLocation,
  getMeetingEndsAt,
  getUpcomingMeetings,
} from "@/lib/meetings";
import IconText from "../../../components/ui/IconText";

export default async function UpcomingMeetings() {
  const meetings = await getUpcomingMeetings();

  if (!meetings || meetings.length === 0) return null;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="font-heading font-bold text-primary text-xl md:text-4xl mb-8">
          Upcoming Meetings
        </h2>
        <ul>
          {meetings.map((meeting, index) => {
            const startsAt = new Date(meeting.starts_at);
            const endsAt = getMeetingEndsAt(startsAt, meeting.ends_at);

            if (index === 0) {
              return (
                <li className="bg-primary p-8 rounded-md" key={meeting.id}>
                  <div className="flex justify-between mb-10">
                    <div className="font-heading font-bold text-accent uppercase">
                      Next Meeting
                    </div>
                    <div className="w-fit bg-accent text-sm text-primary font-bold px-2 mb-4 rounded-md">
                      {meeting.type}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground text-3xl mb-6">
                    {meeting.title}
                  </h3>
                  <IconText icon={Calendar}>
                    <time dateTime={startsAt.toISOString()}>
                      {formatMeetingDate(startsAt)}
                    </time>
                  </IconText>
                  <IconText icon={Clock}>
                    <time dateTime={startsAt.toISOString()}>
                      {formatMeetingTime(startsAt, false)}
                    </time>{" "}
                    –{" "}
                    <time dateTime={endsAt.toISOString()}>
                      {formatMeetingTime(endsAt, true)}
                    </time>
                  </IconText>
                  <IconText icon={MapPin}>{getLocation(meeting.type)}</IconText>

                  <Link
                    href="/meetings"
                    className="flex items-center gap-2 w-fit px-4 py-2 mt-8 rounded-md bg-accent"
                  >
                    View Meeting
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
