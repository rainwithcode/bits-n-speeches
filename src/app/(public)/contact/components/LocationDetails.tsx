import { meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";

import MapEmbed from "../../shared/MapEmbed";
import SectionHeading from "../../shared/SectionHeading";

export default function LocationDetails() {
  return (
    <section>
      <SectionHeading className="mb-6">Visit Us</SectionHeading>
      <MapEmbed
        src={meetingInfo.location.mapUrl}
        title={`${siteConfig.name} meeting location`}
      />
      <address className="mt-4 not-italic">
        <p className="font-medium">{meetingInfo.location.inPerson.name}</p>
        <p>{meetingInfo.location.inPerson.room}</p>
        <p>{meetingInfo.location.inPerson.address}</p>
      </address>
    </section>
  );
}
