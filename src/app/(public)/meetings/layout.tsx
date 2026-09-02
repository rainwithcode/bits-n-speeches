import PageHero from "../shared/PageHero";

export default function MeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title="Meetings"
        description="Join us in person or online — everyone is welcome."
      />
      {children}
    </>
  );
}
