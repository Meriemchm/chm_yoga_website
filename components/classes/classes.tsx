'use client'
import { useGsapFade } from "@/hooks/gsap-animations";
import { Classe } from "./classe";
export const Classes = () => {
  const fadeUp = useGsapFade('up');
  return (
    <div className="flex flex-col gap-12 items-start justify-center">
      <h2 ref={fadeUp} className="text-3xl max-w-sm font-bold capitalize">
        Our variety of yoga <span>classes</span> for you
      </h2>

      <Classe />
    </div>
  );
};
