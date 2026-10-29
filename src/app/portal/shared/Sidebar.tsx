import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import SidebarNavigation from "./SidebarNavigation";

export default function Sidebar() {
  return (
    <aside className="flex flex-col min-h-screen w-[280px] p-4 bg-surface-dark text-primary-foreground">
      <Link
        href="/portal"
        className="flex items-center gap-2 mb-8 font-heading font-bold text-xl"
      >
        <Image
          src="/logo.png"
          alt="Toastmasters Logo"
          className="w-auto h-8 md:h-9"
          width="148"
          height="124"
        ></Image>
        {siteConfig.name}
      </Link>
      <SidebarNavigation />
    </aside>
  );
}
