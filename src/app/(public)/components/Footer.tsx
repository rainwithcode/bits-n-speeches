import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/app/data/site-config";
import toastmastersLogo from "@/imports/toastmasters-logo_2x.png";

import { navLinks, membershipLinks } from "../data/nav-links";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p8 ">
        <div className="flex gap-8">
          <div className="space-y-3">
            <Image
              src={toastmastersLogo}
              alt="Toastmasters logo"
              className="w-14 h-auto"
            />
            <h2 className="font-heading font-bold text-lg">
              {siteConfig.name}
            </h2>
            <p className="text-primary-foreground/70">{siteConfig.tagline}</p>
          </div>
          <nav
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            aria-label="Footer"
          >
            <div>
              <h2 className="text-accent font-heading font-bold mb-3">
                Quick Links
              </h2>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-semi-bold text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
