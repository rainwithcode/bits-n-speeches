import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getMeetingById } from "@/lib/meetings";


import MeetingDetail from "../components/MeetingDetail";

type MeetingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MeetingDetailPage({
  params,
}: MeetingDetailPageProps) {
  const { id } = await params;

  const meeting = await getMeetingById(id);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <Link
        href="/meetings"
        className="group flex items-center gap-1 font-bold text-primary mb-6 hover:underline"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Meetings
      </Link>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
