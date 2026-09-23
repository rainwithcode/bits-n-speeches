import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const siteConfig = {
  // identity
  name: "Bits ’N Speeches",
  organization: "Toastmasters International",
  tagline:
    "A Toastmasters club dedicated to developing confident communicators and leaders.",
  organizationUrl: "https://www.toastmasters.org/",
  // contact
  contact: {
    email: {
      address: "bitsspeeches@gmail.com",
      subject: "Question about Bits ’N Speeches",
      body: "Hi! I'd like to learn more about Bits ’N Speeches.",
      icon: Mail,
    },
    social: [
      {
        name: "Facebook",
        username: "BitsnSpeeches",
        href: "https://www.facebook.com/BitsnSpeeches",
        icon: FaFacebook,
      },
      {
        name: "Instagram",
        username: "bits_nspeeches",
        href: "https://www.instagram.com/bits_nspeeches/",
        icon: FaInstagram,
      },
    ],
  },
};
