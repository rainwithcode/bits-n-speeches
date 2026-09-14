import { getUpcomingMeetings } from "@/lib/meetings";

import PageHero from "../shared/PageHero";

import MembershipTabs from "./components/MembershipTabs";

export default async function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meetings = await getUpcomingMeetings(8);
  return (
    <>
      <PageHero
        title="Become a Member"
        description="Take the first step toward becoming a confident communicator."
      />
      <MembershipTabs meetings={meetings} />
      {children}
    </>
  );
}
