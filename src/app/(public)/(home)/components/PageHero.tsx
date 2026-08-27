export default function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h1 className="text-primary-foreground text-2xl md:text-4xl font-heading font-bold">
          {title}
        </h1>
        <p className="text-primary-foreground/70 text-base md:text-lg mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
