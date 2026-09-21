import PageHero from "../shared/PageHero";

import ContactInformation from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import LocationDetails from "./components/LocationDetails";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question? We'd love to hear from you."
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <div className="order-2 md:order-1 flex flex-col gap-12">
          <ContactInformation />
          <LocationDetails />
        </div>
        <div className="order-1 md:order-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
