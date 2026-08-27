import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";

import {
  formatMeetingDate,
  formatMeetingTime,
  getLocation,
  getMeetingEndsAt,
  getUpcomingMeetings,
} from "@/lib/meetings";
import IconText from "../../../components/ui/IconText";
import ViewDetailsButton from "@/components/ui/ViewDetailsButton";

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
        <div className="flex flex-col gap-8 md:flex-row">
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
                  <Badge>{nextMeeting.type}</Badge>
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

                <ViewDetailsButton
                  href="/meetings"
                  label="View Meeting"
                  className="mt-8"
                ></ViewDetailsButton>
              </article>
            </article>
          )}
          <div className="space-y-8">
            {meetings.slice(1).map((meeting) => {
              const starts_at = new Date(meeting.starts_at);

              const ends_at = getMeetingEndsAt(starts_at, meeting.ends_at);

              return (
                <article
                  className="space-y-2 p-8 border border-gray-200 hover:shadow-md rounded-md bg-white text-primary"
                  key={meeting.id}
                >
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold font-heading">
                      {meeting.title}
                    </h3>
                    <Badge>{meeting.type}</Badge>
                  </div>

                  <time dateTime={starts_at.toISOString()}>
                    {formatMeetingDate(starts_at)}
                  </time>
                  <ViewDetailsButton
                    href="/meetings"
                    label="View Meeting"
                    variant="secondary"
                    className="mt-4"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
