import PageHero from "../shared/PageHero";

import MembershipTabs from "./components/MembershipTabs";

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
      <MembershipTabs />
      {children}
    </>
  );
}
