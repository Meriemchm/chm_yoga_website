"use client";
import { FaqsData } from "@/components/data/data";
import { FaqItem } from "./faq-item";
import TitleSection from "@/components/ui/title-section";
import Image from "next/image";
import { useGsapFade } from "@/hooks/gsap-animations";

export const Faqs = () => {
  const fadeLeft = useGsapFade("left");
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-start justify-between w-full">
        <TitleSection
          text="our answers to the most popular questions"
          keyword="answers"
          ref={fadeLeft}
        />

        <p ref={fadeRight} className="text-neutral-400 capitalize max-w-sm">
          our flexible membership cater to practitioners of all levels, ensuring
          accessibility to everyone.
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
          <FaqItem data={FaqsData} />
        </div>
      </div>
    </div>
  );
};
