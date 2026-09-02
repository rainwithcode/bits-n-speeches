import PageHero from "../shared/PageHero";

import MeetingList from "./components/MeetingList";

export default function Meetings() {
  return (
    <>
      <PageHero
        title="Meetings"
        description="Join us in person or online — everyone is welcome."
      />
      <MeetingList />
    </>
  );
}
