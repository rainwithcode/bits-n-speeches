import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import toastmastersLogo from "@/imports/toastmasters-logo_2x.png";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
        <Link
          href="/"
          className="flex items-center gap-4 text-primary-foreground font-heading font-bold text-2xl tracking-wide"
        >
          <Image
            src={toastmastersLogo}
            alt="Toastmasters logo"
            className="w-auto h-12"
          />
          Bits 'N Speeches
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
