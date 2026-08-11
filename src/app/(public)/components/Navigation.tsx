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

  const links = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "about", label: "About", active: pathname === "/about" },
    { href: "meetings", label: "Meetings", active: pathname === "/meetings" },
    {
      href: "membership",
      label: "Membership",
      active: pathname === "/membership",
    },
    {
      href: "contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className="relative font-heading">
      <nav className="flex gap-4 items-center">
        {/* Desktop Navigation */}
        {links.map((link) => (
          <Link href={link.href} className={navLinkClassName(link.active)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
