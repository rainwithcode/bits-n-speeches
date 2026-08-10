import Link from "next/link";
import toastmastersLogo from "@/imports/toastmasters-logo_2x.png";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-4 p-8 text-primary-foreground font-bold text-2xl tracking-wide"
        >
          <img
            src={toastmastersLogo.src}
            alt="Toastmasters logo"
            className="w-auto h-12"
          />
          Bits 'N Speeches
        </Link>
      </div>
    </header>
  );
}
