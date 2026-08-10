"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  function navLinkClassName(isActive: boolean) {
    return isActive
      ? "text-primary-foreground font-bold text-sm border-b-2 border-accent px-5 py-2 transition-colors"
      : "text-primary-foreground/90 font-bold text-sm border-b-2 border-transparent px-5 py-2 hover:text-primary-foreground transition-colors";
  }


  return (
    <nav className="flex gap-4 items-center font-heading">
      <Link href="/" className={navLinkClassName(pathname === "/")}>
        Home
      </Link>
      <Link href="about" className={navLinkClassName(pathname === "/about")}>
        About
      </Link>
      <Link
        href="meetings"
        className={navLinkClassName(pathname === "/meetings")}
      >
        Meetings
      </Link>
      <Link
        href="membership"
        className={navLinkClassName(pathname === "/membership")}
      >
        Membership
      </Link>
      <Link
        href="contact"
        className={navLinkClassName(pathname === "/contact")}
      >
        Contact
      </Link>
    </nav>
  );
}
