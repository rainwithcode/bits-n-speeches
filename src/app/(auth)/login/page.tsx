import { siteConfig } from "@/data/site-config";

import LogInForm from "./components/LogInForm";

export default function LogIn() {
  return (
    <section className="bg-primary/5">
      <div className="flex flex-col gap-4 justify-center items-center max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <h1 className="font-heading font-bold text-xl md:text-3xl text-primary">
          Log in
        </h1>
        <p>
          Sign in to access your {siteConfig.organization.split(" ")[0]} club
          dashboard.
        </p>
        <LogInForm />
      </div>
    </section>
  );
}
