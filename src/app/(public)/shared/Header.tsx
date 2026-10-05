import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-dark">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <Link
          href="/"
          className="flex items-center gap-4 text-primary-foreground font-heading font-bold text-lg md:text-2xl tracking-wide"
        >
          <Image
            src="/logo.png"
            alt="Toastmasters logo"
            className="w-auto h-8 md:h-12"
            width={148}
            height={124}
          />
          <span className="hidden md:inline">{siteConfig.name}</span>
          <span className="inline md:hidden">{siteConfig.shortName}</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
