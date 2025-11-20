"use client";
import SocialMediaIcons from "@/components/ui/socialMediaIcons";
import { useGsapFade } from "@/hooks/gsap-animations";
import Image from "next/image";
import { ContactItems } from "./contact-items";

const ContactInfo = () => {
  const faderight = useGsapFade("right");
  return (
    <div
      ref={faderight}
      className=" relative bg-secondary rounded-xl w-full text-lg md:text-xl"
    >
      <Image
        height={200}
        width={200}
        className="top"
        alt="leaf-border-image"
        src="/Icons/leaf_border.svg"
      />
      <div className="flex items-center justify-center w-full p-4">
        <ContactItems />
      </div>
      <Image
        height={200}
        width={200}
        className="right place-self-end"
        alt="leaf-border-image"
        src="/Icons/leaf_border_2.svg"
      />
    </div>
  );
};

export default ContactInfo;
