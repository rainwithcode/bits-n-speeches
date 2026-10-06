"use client";

import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

import { navLinks } from "../data/nav-links";

export default function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function navLinkClassName(isActive: boolean, variant: "desktop" | "mobile") {
    if (variant === "desktop") {
      return isActive
        ? "text-primary-foreground font-bold text-sm border-b-2 border-accent px-5 py-2"
        : "text-primary-foreground/90 font-bold text-sm border-b-2 border-transparent px-5 py-2 hover:text-hover transition-colors";
    } else if (variant === "mobile") {
      return isActive
        ? "text-accent text-base font-bold"
        : "text-primary-foreground/90 text-base font-bold hover:text-hover transition-colors";
    }
  }

  return (
    <div className="font-heading">
      <nav className="hidden lg:block" aria-label="Primary">
        {/* Desktop Navigation */}
        <ul className="flex gap-4 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href === "/login" ? (
                <div className="pl-8 border-l-2 border-primary-foreground/15">
                  <Button
                    href={link.href}
                    color="accent"
                    className="md:text-sm"
                  >
                    <LogIn className="size-4" aria-hidden="true" />
                    {link.label}
                  </Button>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={navLinkClassName(
                    link.href === pathname,
                    "desktop",
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex lg:hidden items-center gap-4">
        <Button
          href={navLinks[navLinks.length - 1].href}
          color="accent"
          className="text-sm"
        >
          <LogIn className="w-4 h-4" />
          {navLinks[navLinks.length - 1].label}
        </Button>
        <button
          className="cursor-pointer"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="text-primary-foreground size-6" />
          ) : (
            <Menu className="text-primary-foreground size-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <nav
          className="absolute top-full left-0 right-0 w-full flex flex-col items-center lg:hidden gap-4 py-8 bg-surface-dark"
          aria-label="Primary"
        >
          {/* Mobile Navigation */}
          <ul className="w-full max-w-300 text-center">
            {navLinks.map((link) =>
              link.href === "/login" ? (
                <li key={link.href} className="w-full mt-4">
                  <Button
                    href={link.href}
                    color="accent"
                    className="w-full text-sm flex justify-center p-4"
                  >
                    <LogIn className="w-5 h-5" aria-hidden={true} />
                    {link.label}
                  </Button>
                </li>
              ) : (
                <li key={link.href} className="py-4">
                  <Link
                    href={link.href}
                    className={navLinkClassName(
                      link.href === pathname,
                      "mobile",
                    )}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
