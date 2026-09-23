import { Clock, MapPin } from "lucide-react";

import InfoItem from "@/components/ui/InfoItem";
import { meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";

import MapEmbed from "../../shared/MapEmbed";
import SectionHeading from "../../shared/SectionHeading";

export default function MeetingDetails() {
  return (
    <section>
      <SectionHeading className="mb-6">Visit Us</SectionHeading>
      <div className="space-y-4 mb-6">
        <InfoItem Icon={Clock}>
          <p>
            <span className="font-medium">
              {meetingInfo.schedule.day} {"• "} {meetingInfo.schedule.time}
            </span>{" "}
          </p>
          <p>
            <span className="font-medium">
              Online {meetingInfo.schedule.online.toLowerCase()}
            </span>
            {" • "} In-person {meetingInfo.schedule.inPerson}
          </p>
        </InfoItem>
        <address className="not-italic">
          <InfoItem Icon={MapPin}>
            <p className="font-medium">
              {meetingInfo.location.inPerson.name},{" "}
              {meetingInfo.location.inPerson.room}
            </p>
            <p>{meetingInfo.location.inPerson.address}</p>
          </InfoItem>
        </address>
      </div>
      <MapEmbed
        src={meetingInfo.location.mapUrl}
        title={`${siteConfig.name} meeting location`}
      />
    </section>
  );
}
