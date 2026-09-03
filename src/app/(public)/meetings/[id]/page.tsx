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

  return <MeetingDetail meeting={meeting} />;
}
