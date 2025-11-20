'use client'
import { useGsapFade } from "@/hooks/gsap-animations";
import { Classe } from "./classe";
import TitleSection from "../ui/title-section";
export const Classes = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div className="flex flex-col gap-12 items-start justify-center">
      <TitleSection
        text="Our variety of yoga classes for you"
        keyword="classes"
        ref={fadeUp}
      />

      <Classe />
    </div>
  );
};
