import { achievements } from "../../data/achievements";
export default function Achievements() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16 text-center"
      aria-labelledby="achievements-heading"
    >
      <h2 id="achievements-heading" className="sr-only">
        Achievements
      </h2>
      <dl className="grid grid-cols-3 gap-4 md:gap-8">
        {achievements.map((achievement) => (
          <div key={achievement.label}>
            <dd className="text-primary text-xl md:text-4xl font-bold">
              {achievement.value}
            </dd>
            <dt className="text-[12px] md:text-base">{achievement.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
