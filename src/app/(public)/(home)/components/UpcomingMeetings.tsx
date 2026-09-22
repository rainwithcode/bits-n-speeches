import { ArrowRight, Calendar, Clock, MapPin, UserPlus } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";


import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  formatDateTime,
  getLocation,
  getMeetingEndsAt,
  getUpcomingMeetings,
} from "@/lib/meetings";

import IconText from "../../../../components/ui/IconText";
import { getMembershipUrl } from "../../data/nav-links";
import SectionHeading from "../../shared/SectionHeading";

export default async function UpcomingMeetings() {
  noStore();
  const meetings = await getUpcomingMeetings();

  if (!meetings || meetings.length === 0) return null;

  const nextMeeting = meetings[0];
  const nextMeetingStartsAt = new Date(nextMeeting.starts_at);
  const nextMeetingEndsAt = getMeetingEndsAt(
    nextMeetingStartsAt,
    nextMeeting.ends_at,
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <SectionHeading className="mb-6" variant="primary">
        Upcoming Meetings
      </SectionHeading>
      <div className="flex flex-col gap-4 md:gap-8 md:flex-row ">
        {nextMeeting && (
          <article className="bg-primary p-8 rounded-md" key={nextMeeting.id}>
            <div className="flex justify-between mb-3 md:mb-10">
              <div className="font-heading font-bold text-accent uppercase">
                Next Meeting
              </div>
              <Badge variant="highlight">{nextMeeting.type}</Badge>
            </div>
            <h3 className="font-heading font-bold text-primary-foreground text-sm md:text-2xl mb-6">
              {nextMeeting.title}
            </h3>
            <IconText icon={Calendar} variant="accent">
              <time dateTime={nextMeetingStartsAt.toISOString()}>
                {formatDateTime(nextMeetingStartsAt, { format: "date" })}
              </time>
            </IconText>
            <IconText icon={Clock} variant="accent">
              <time dateTime={nextMeetingStartsAt.toISOString()}>
                {formatDateTime(nextMeetingStartsAt, { format: "time" })}
              </time>{" "}
              –{" "}
              <time dateTime={nextMeetingEndsAt.toISOString()}>
                {formatDateTime(nextMeetingEndsAt, {
                  format: "time",
                  includeTimeZone: true,
                })}
              </time>
            </IconText>
            <IconText icon={MapPin} variant="accent">
              {getLocation(nextMeeting.type)}
            </IconText>

            <div className="flex gap-4 mt-8">
              <Button href={`/meetings/${nextMeeting.id}`} color="accent">
                View Meeting
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={getMembershipUrl("guest")} color="secondary">
                Register
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
          </article>
        )}
        <div className="space-y-4 md:space-y-8">
          {meetings.slice(1).map((meeting) => {
            const starts_at = new Date(meeting.starts_at);

            return (
              <article
                className="space-y-2 p-8 border border-border hover:shadow-md rounded-md bg-white"
                key={meeting.id}
              >
                <div className="flex items-center">
                  <h3 className="text-sm md:text-lg font-bold font-heading text-primary">
                    {meeting.title}
                  </h3>
                  <Badge>{meeting.type}</Badge>
                </div>

                <time
                  dateTime={starts_at.toISOString()}
                  className="text-sm md:text-base"
                >
                  {formatDateTime(starts_at, { format: "date" })}
                </time>
                <div className="flex gap-4 mt-4">
                  <Button href={`/meetings/${meeting.id}`}>
                    View Meeting
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button href={getMembershipUrl("guest")} color="secondary">
                    Register
                    <UserPlus className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
