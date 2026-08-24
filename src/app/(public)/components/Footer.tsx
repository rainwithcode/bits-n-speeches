import { Clock, MapPin, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { meetings } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";
import toastmastersLogo from "@/imports/toastmasters-logo_2x.png";

import { navLinks, membershipLinks } from "../data/nav-links";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 mb-6 border-b border-primary-foreground/70">
          <div>
            <Image
              src={toastmastersLogo}
              alt="Toastmasters logo"
              className="w-14 h-auto mb-3"
            />
            <div className="space-y-2">
              <h2 className="font-heading font-bold text-lg">
                {siteConfig.name}
              </h2>
              <p className="text-primary-foreground/70">{siteConfig.tagline}</p>
            </div>
          </div>
          <nav className="contents" aria-label="Footer">
            <div>
              <ul>
                <h2 className="text-sm md:text-base font-heading font-bold text-accent mb-3">
                  Quick Links
                </h2>
                {navLinks.map((link) => (
                  <li key={link.href} className="mb-2">
                    <Link
                      href={link.href}
                      className="text-base md:text-lg font-semi-bold text-primary-foreground/70 hover:text-hover transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="text-sm md:text-base font-heading font-bold text-accent mb-3">
                  Join Us
                </h2>
                {membershipLinks.map((link) => (
                  <li className="mb-2" key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base md:text-lg font-semi-bold text-primary-foreground/70 hover:text-hover transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="font-semi-bold text-primary-foreground/70">
                <h2 className="text-sm md:text-base font-heading font-bold text-accent mb-3">
                  Visit Us
                </h2>
                <li className="text-base md:text-lg mb-2" key="schedule">
                  <div className="flex gap-2">
                    <Clock className="w-5 text-accent" />
                    <span className="text-primary-foreground">
                      Schedule:
                    </span>{" "}
                  </div>
                  Every {meetings.day} at {meetings.time}
                </li>
                <li className="text-base md:text-lg mb-2" key="in-person">
                  <div className="flex gap-2">
                    <MapPin className="w-5 text-accent" />
                    <span className="text-primary-foreground">
                      In Person (1st &amp; 3rd {meetings.day}s):
                    </span>{" "}
                  </div>
                  {meetings.location.inPerson}
                </li>
                <li className="text-base md:text-lg mb-2" key="online">
                  <div className="flex gap-2">
                    <Video className="w-5 text-accent" />
                    <span className="text-primary-foreground">
                      {meetings.location.online}:
                    </span>{" "}
                  </div>
                  <a
                    href="mailto:bitsspeeches@gmail.com?subject=Meeting%20Link%20Request&body=Hi%2C%20could%20you%20send%20me%20the%20link%20to%20join%20the%20next%20meeting%3F"
                    className="text-accent underline hover:text-hover transition-colors"
                  >
                    Email us for link
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <small className="text-base">
            © 2026 {siteConfig.name} Toastmasters Club
          </small>
          <p>
            A chartered club of{" "}
            <a
              href="https://www.toastmasters.org/"
              className="text-accent underline hover:text-hover transition-colors"
            >
              Toastmasters International
            </a>
          </p>
        </div>
        <p className="text-sm mt-4 text-primary-foreground/70">
          The information on this website is for the sole use of Toastmasters’
          members, for Toastmasters business only. It is not to be used for
          solicitation and distribution of non-Toastmasters material or
          information.
        </p>
      </div>
    </footer>
  );
}
