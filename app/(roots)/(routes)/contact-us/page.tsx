"use client";
import { Container } from "@/components/ui/container";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";
import { useGsapFade } from "@/hooks/gsap-animations";
import HearderTitle from "@/components/ui/hearder-title";

const ContactUsPage = () => {
  const fadeup = useGsapFade("up");
  return (
    <div>
      <HearderTitle title="Contact Us" url="Contact Us" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <div
            ref={fadeup}
            className="flex flex-col gap-4 items-center justify-center"
          ></div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:py-14">
            <div className="order-2 md:order-1">
              <ContactInfo />
            </div>

            <div className="order-1 md:order-2">
              <ContactForm />
            </div>
          </div>
        </Container>{" "}
      </div>
    </div>
  );
};

export default ContactUsPage;
