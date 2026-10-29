import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import Sidebar from "./shared/sidebar/Sidebar";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex gap-2">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
