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

  const nextMeeting = meetings[0];
  const nextMeetingStartsAt = new Date(nextMeeting.starts_at);
  const nextMeetingEndsAt = getMeetingEndsAt(
    nextMeetingStartsAt,
    nextMeeting.ends_at,
  );

  return (
    <section className="bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="font-heading font-bold text-primary text-xl md:text-4xl mb-8">
          Upcoming Meetings
        </h2>
        <div className="space-y-4 md:flex">
          {nextMeeting && (
            <article>
              <article
                className="bg-primary p-8 rounded-md"
                key={nextMeeting.id}
              >
                <div className="flex justify-between mb-10">
                  <div className="font-heading font-bold text-accent uppercase">
                    Next Meeting
                  </div>
                  <div className="w-fit bg-accent text-sm text-primary font-bold px-2 mb-4 rounded-md">
                    {nextMeeting.type}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-3xl mb-6">
                  {nextMeeting.title}
                </h3>
                <IconText icon={Calendar}>
                  <time dateTime={nextMeetingStartsAt.toISOString()}>
                    {formatMeetingDate(nextMeetingStartsAt)}
                  </time>
                </IconText>
                <IconText icon={Clock}>
                  <time dateTime={nextMeetingStartsAt.toISOString()}>
                    {formatMeetingTime(nextMeetingStartsAt, false)}
                  </time>{" "}
                  –{" "}
                  <time dateTime={nextMeetingEndsAt.toISOString()}>
                    {formatMeetingTime(nextMeetingEndsAt, true)}
                  </time>
                </IconText>
                <IconText icon={MapPin}>
                  {getLocation(nextMeeting.type)}
                </IconText>

                <Link
                  href="/meetings"
                  className="flex items-center gap-2 w-fit px-4 py-2 mt-8 rounded-md bg-accent"
                >
                  View Meeting
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
