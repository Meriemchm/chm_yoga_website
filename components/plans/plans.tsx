'use client'
import { useGsapFade } from "@/hooks/gsap-animations";
import { Plan } from "../plans/plan";

export const Plans = () => {
  const fadeLeft = useGsapFade("left");
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col w-full gap-12 items-start ">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-start justify-between w-full">

        <h2 ref={fadeLeft} className="text-3xl max-w-xs font-extralight capitalize">
          Our flexible class <span className="cormorant">pricing</span> plans
        </h2>

        <p ref={fadeRight} className="text-neutral-400 capitalize max-w-sm">
          our flexible membership cater to practitioners of all levels, ensuring
          accessibility to everyone.
        </p>

      </div>

      <Plan />
    </div>
  );
};
