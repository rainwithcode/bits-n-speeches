import PageHero from "../shared/PageHero";

import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question? We'd love to hear from you."
      />
      <ContactForm />
    </>
  );
}
