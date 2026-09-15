import Link from "next/link";
import type { ReactNode } from "react";

type MembershipStep = {
  title: string;
  description: ReactNode;
};

export const membershipSteps: MembershipStep[] = [
  {
    title: "Register as a Guest",
    description: (
      <>
        Fill out our{" "}
        <Link href="/guest-registration" className="text-primary underline">
          guest registration form
        </Link>{" "}
        so we can welcome you personally. Guests can attend meetings for free
        with no obligation to join.
      </>
    ),
  },
  {
    title: "Attend a Meeting",
    description: (
      <>
        Join us for a{" "}
        <Link href="/meetings" className="text-primary underline">
          meeting
        </Link>{" "}
        and experience Toastmasters firsthand. You can simply observe or
        participate in Table Topics if you feel comfortable — there&apos;s no
        pressure to speak.
      </>
    ),
  },
  {
    title: "Decide to Join",
    description: (
      <>
        If Toastmasters feels right for you, let our VP of Membership know.
        They&apos;ll answer your questions and guide you through the membership
        process.
      </>
    ),
  },
  {
    title: "Apply for Membership",
    description: (
      <>
        Complete the{" "}
        <Link href="/membership/apply" className="text-primary underline">
          official Toastmasters membership application
        </Link>{" "}
        and submit your completed form to our VP of Membership. They&apos;ll
        guide you through the remaining steps, including membership dues.
      </>
    ),
  },
  {
    title: "Start Your Journey",
    description:
      "Once your membership is complete, you'll get access to Pathways. Choose your first project, sign up for a speech, and start building your communication and leadership skills.",
  },
];
