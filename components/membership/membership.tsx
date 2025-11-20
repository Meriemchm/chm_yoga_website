"use client";
import Image from "next/image";
import Button from "../ui/button";
import Link from "next/link";
import { useGsapFade } from "@/hooks/gsap-animations";

export default function MembershipSection() {
  const fadeUp = useGsapFade("up");
  return (
    <div className="w-full relative flex items-center justify-center rounded-xl bg-secondary py-20">
      {/* Image Background */}
      <Image
        src="/Images/membership.png"
        alt="Yoga Background"
        height={800}
        width={800}
        className=" absolute bottom-0 left-0 rounded-lg"
      />

      {/* Content Card */}
      <div
        ref={fadeUp}
        className="relative z-10 bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-xl ml-auto mr-6 md:mr-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Free 30-Day Membership
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Become a Member and Enrich your life: Pro & Pro+ include Functional
          Movement Screening, Personalized Goals Oriented Coaching , Progress
          Tracking, Free Towels and Mats & Private Events.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button>Get started</Button>
          <Link
            href="/contact-us"
            className="group flex gap-2 items-center justify-center"
          >
            <button className=" capitalize text-center border-gray-300">
              Contact us
            </button>
            <Image
              src="/Icons/arrow.svg"
              alt="arrow"
              height={20}
              width={20}
              className="group-hover:translate-x-2 transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
