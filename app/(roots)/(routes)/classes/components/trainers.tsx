"use client";
import TitleSection from "@/components/ui/title-section";
import { Trainer } from "./trainer";
import Image from "next/image";
import { useGsapFade } from "@/hooks/gsap-animations";

export const Trainers = () => {
  const fadeLeft = useGsapFade("left");
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col items-start justify-center gap-12">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-start justify-between w-full">
        <TitleSection
          text="Meet the Experts Behind Our Classes"
          keyword="Experts"
          ref={fadeLeft}
        />
        <p ref={fadeRight} className="text-neutral-400 capitalize max-w-sm">
          Our team of expert trainers, dedicated to guiding you on your
          wellness journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <Image
          height={400}
          width={400}
          alt="leaf-border-image"
          src="/Icons/leaf_border_b.svg"
          className=" md:order-1 order-2"
        />
        <div className="md:order-2 order-1">
          <Trainer />
        </div>
      </div>
    </div>
  );
};
