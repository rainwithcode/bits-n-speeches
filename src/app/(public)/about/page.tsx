import PageHero from "../shared/PageHero";

import StoryAndMission from "./components/StoryAndMission";

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Who we are, what we believe, and why we meet every Thursday."
      />
      <StoryAndMission />
    </>
  );
}
