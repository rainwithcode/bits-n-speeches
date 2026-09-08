import MeetingList from "./components/MeetingList";
import MeetingRoles from "./components/MeetingRoles";
import MeetingStructure from "./components/MeetingStructure";

export default function Meetings() {
  return (
    <>
      <MeetingList />
      <MeetingStructure />
      <MeetingRoles />
    </>
  );
}
