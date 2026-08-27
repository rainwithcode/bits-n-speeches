import { about } from "../data/about";
export default function StoryAndMission() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="text-primary text-lg md:text-2xl font-heading font-bold">
          Our Story and Mission
        </h2>
        <p className="text-primary text-base md:text-lg mt-2">{about.story}</p>
      </div>
    </div>
  );
}
