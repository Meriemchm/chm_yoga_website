"use client";
import Image from "next/image";
import Button from "../ui/button";
import { useGsapFade } from "@/hooks/gsap-animations";
import Link from "next/link";

export const Hero = () => {
  const fadeLeft = useGsapFade("left");
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto py-10 md:py-0">
      <div
        ref={fadeRight}
        className="flex flex-col items-start justify-center gap-8"
      >
        <h1 className="md:text-6xl text-5xl font-extra-bold">
          Discover balance, strength, <span className="cormorant">and</span>{" "}
          peace.
        </h1>
        <p className="text-neutral-500">
          Join us for a nurtured Mind, Body & Soul Approaching.
        </p>
        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/pricing">
            <Button>Get started</Button>
          </Link>
          <Link
            href="/contact-us"
            className="group flex gap-2 items-center justify-center"
          >
            <Button variant="linkArrow">Contact us</Button>
          </Link>
        </div>
      </div>

      <Image
        height={600}
        width={600}
        className="w-full h-full"
        alt="hero-image"
        src="/Images/hero_1.png"
        ref={fadeLeft}
      />
    </div>
  );
};
