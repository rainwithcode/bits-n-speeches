import PageHero from "../components/layout/PageHero";

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
