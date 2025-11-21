"use client";
import { useGsapFade } from "@/hooks/gsap-animations";
import React from "react";
import Image from "next/image";

interface hearderTitleProps {
  title: string;
  url: string;
}

const HearderTitle: React.FC<hearderTitleProps> = ({ title, url }) => {
  const fadeup = useGsapFade("up");
  return (
    <div
      ref={fadeup}
      className="relative flex flex-col w-full items-center text-center  justify-center py-24 bg-thirdary "
    >
      <h1 className="md:text-5xl text-2xl capitalize text-black font-thin my-12 cormorant ">
        {title}
      </h1>
      <p className="text-sm md:text-base capitalize text-neutral-500">
        Home / {url}
      </p>
      <Image
        height={200}
        width={200}
        className="absolute bottom-0 right place-self-end -z-1"
        alt="leaf-border-image"
        src="/Icons/leaf_border_4.svg"
      />
    </div>
  );
};

export default HearderTitle;
