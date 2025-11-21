"use client";
import { useGsapFade } from "@/hooks/gsap-animations";
import Button from "../ui/button";
import Link from "next/link";

export const Banner = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div
      className="flex flex-col justify-end items-center py-10 text-center h-[500px] bg-cover bg-top bg-no-repeat rounded-xl"
      style={{ backgroundImage: "url('/Images/banner___1.jpg')" }}
    >
      <div ref={fadeUp} className="flex flex-col justify-center items-center">
        <p className="text-4xl md:text-5xl font-light text-black max-w-2xl capitalize">
          You Can always <span className="cormorant">control</span> what goes
          inside you
        </p>
        <Link href="/pricing">
          <Button className="mt-6 px-10">Get Started</Button>{" "}
        </Link>
      </div>
    </div>
  );
};
