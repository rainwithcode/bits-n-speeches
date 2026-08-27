import { about } from "../data/about";
export default function StoryAndMission() {
  const lastIndex = about.story.length - 1;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="mb-6 text-primary text-lg md:text-3xl font-heading font-bold">
          Our Story and Mission
        </h2>
        <div className="space-y-4">
          {about.story.map((paragraph, index) => {
            return (
              <p
                key={index}
                className={
                  index === lastIndex
                    ? "text-primary text-base md:text-lg font-bold"
                    : "text-foreground text-base md:text-lg"
                }
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
