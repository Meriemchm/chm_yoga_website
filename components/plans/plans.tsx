"use client";
import { useGsapFade } from "@/hooks/gsap-animations";
import { Plan } from "../plans/plan";
import TitleSection from "../ui/title-section";

export const Plans = () => {
  const fadeLeft = useGsapFade("left");
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col w-full gap-12 items-start ">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-start justify-between w-full">
        <TitleSection
          text="Our flexible class pricing plans"
          keyword="pricing"
          ref={fadeLeft}
        />

        <p ref={fadeRight} className="text-neutral-400 capitalize max-w-sm">
          our flexible membership cater to practitioners of all levels, ensuring
          accessibility to everyone.
        </p>
      </div>

      <Plan />
    </div>
  );
};
