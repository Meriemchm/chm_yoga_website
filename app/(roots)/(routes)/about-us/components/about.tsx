"use client";
import TitleSection from "@/components/ui/title-section";
import Image from "next/image";
import { AboutInfo } from "./about-info";
import { useGsapFade } from "@/hooks/gsap-animations";

export const About = () => {
  const fadeLeft = useGsapFade("left");
  const fadeUp = useGsapFade("up");
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection
        text="Learn more about us and discover more"
        keyword="about"
        ref={fadeUp}
      />
      <div className="flex md:flex-row flex-col justify-center items-center gap-8">
        <Image
          height={600}
          width={600}
          alt="hero-image"
          src="/Images/pic-about.png"
          ref={fadeLeft}
        />

        <AboutInfo />
      </div>
    </div>
  );
};
