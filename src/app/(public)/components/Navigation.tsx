"use client";

import { navLinks } from "../data/nav-links";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function navLinkClassName(isActive: boolean, variant: "desktop" | "mobile") {
    if (variant === "desktop") {
      return isActive
        ? "text-primary-foreground font-bold text-sm border-b-2 border-accent px-5 py-2"
        : "text-primary-foreground/90 font-bold text-sm border-b-2 border-transparent px-5 py-2 hover:text-primary-foreground transition-colors";
    } else if (variant === "mobile") {
      return isActive
        ? "text-accent text-sm font-bold px-5 py-2"
        : "text-primary-foreground/90 text-sm font-bold px-5 py-2 hover:text-primary-foreground transition-colors";
    }
  }

  return (
    <div className="font-heading">
      <nav className="hidden lg:flex gap-4 items-center">
        {/* Desktop Navigation */}
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className={navLinkClassName(link.href === pathname, "desktop")}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="flex lg:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <X className="text-primary-foreground" />
        ) : (
          <Menu className="text-primary-foreground" />
        )}
      </button>
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 w-full flex flex-col lg:hidden gap-4 items-center py-8 bg-surface-dark">
          {/* Mobile Navigation */}
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className={navLinkClassName(link.href === pathname, "mobile")}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
