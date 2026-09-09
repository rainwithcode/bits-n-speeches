import PageHero from "../shared/PageHero";

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title="Become a Member"
        description="Take the first step toward becoming a confident communicator."
      />
      {children}
    </>
  );
}
