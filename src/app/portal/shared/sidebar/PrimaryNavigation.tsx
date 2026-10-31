"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "../../data/nav-links";

export default function PrimaryNavigation() {
  const activeLink = usePathname();

  console.log(activeLink);

  return (
    <nav>
      <ul className="space-y-2 p-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeLink === link.href;
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex items-center gap-3 py-2 px-4 text-xl ${isActive ? "bg-accent text-primary" : "hover:bg-primary/40"}`}
              >
                <Icon className="size-5" />
                <span
                  className={`${isActive ? "font-bold" : "text-primary-foreground/90 border-b-2 border-transparent transition-colors"}`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
