import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import UpcomingMeetings from "./components/UpcomingMeetings";
import WhyJoin from "./components/WhyJoin";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <WhyJoin />
      <UpcomingMeetings />
      <Testimonials />
    </>
  );
}
