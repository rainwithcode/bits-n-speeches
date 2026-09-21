import { Mail, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { siteConfig } from "@/data/site-config";

import SectionHeading from "../../shared/SectionHeading";

type ContactDetailProps = {
  Icon: LucideIcon | IconType;
  label: string;
  contact: string;
  href: string;
};

function ContactDetail({ Icon, label, contact, href }: ContactDetailProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10">
        <Icon className="text-primary" size={25} />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <a
          href={href}
          className="hover:underline hover:text-primary"
          target="_blank"
        >
          {contact}
        </a>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section>
      <SectionHeading className="mb-6">Get in Touch</SectionHeading>
      <ul className="flex flex-col gap-4">
        <li key="Email">
          <ContactDetail
            Icon={Mail}
            label="Email"
            contact={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
        </li>
        {siteConfig.social.map((social) => (
          <li key={social.name}>
            <ContactDetail
              Icon={social.icon}
              label={social.name}
              contact={social.username}
              href={social.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
