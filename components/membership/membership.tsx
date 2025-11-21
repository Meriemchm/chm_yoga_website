"use client";
import Image from "next/image";
import Button from "../ui/button";
import Link from "next/link";
import { useGsapFade } from "@/hooks/gsap-animations";

export default function MembershipSection() {
  const fadeUp = useGsapFade("up");
  return (
    <div className="w-full relative flex items-center justify-center md:h-auto  md:rounded-xl bg-secondary py-20">
      {/* Image Background */}
      <Image
        src="/Images/membership.png"
        alt="Yoga Background"
        height={750}
        width={750}
        className=" absolute bottom-0 left-0 rounded-lg"
      />

      {/* Content Card */}
      <div
        ref={fadeUp}
        className="relative z-10 bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-xl md:ml-auto -top-36 md:top-0  md:mx-0 md:mr-16"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-gray-900 mb-4">
          Free 30-Day Membership
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Become a Member and Enrich your life: Pro & Pro+ include Functional
          Movement Screening, Personalized Goals Oriented Coaching , Progress
          Tracking, Free Towels and Mats & Private Events.
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
    </div>
  );
}
