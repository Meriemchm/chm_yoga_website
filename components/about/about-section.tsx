'use client'
import Image from "next/image";
import { Container } from "../ui/container";
import Link from "next/link";
import { useGsapFade } from "@/hooks/gsap-animations";
import Button from "../ui/button";

export const AboutSection = () => {
  const fadeUp = useGsapFade("up");
  const fadeUp_2 = useGsapFade("up");
  const fadeUp_3 = useGsapFade("up");
  const fadeUp_4 = useGsapFade("up");
  return (
    <>
      <Image
        height={300}
        width={300}
        className="top"
        alt="leaf-border-image"
        src="/Icons/leaf_border.svg"
      />

      <Container>
        <div className="flex flex-col justify-center items-center mx-auto ">
          <Image
            height={80}
            width={80}
            className="top"
            alt="logo-image"
            src="/Icons/logo_2.svg"
            ref={(el) => fadeUp(el)}
          />
          <div className="max-w-2xl text-center ">
            <h2 ref={(el) => fadeUp_2(el)} className="md:text-5xl text-4xl py-5">
              YOGA LIFE FOR GREATER <span className="cormorant">SELF CONTROL</span>
            </h2>
            <p ref={fadeUp_3} className="text-lg mb-6 text-neutral-600">
              An enchanting wellness studio where the art of yoga blends with
              captivating experiences inspired by sound, movement, and the
              nature.
            </p>
          </div>
          <Link
            href="/about-us"
            className="group flex gap-2 items-center justify-center"
            ref={(el) => fadeUp_4(el)}
          >
            <Button variant="linkArrow">
              More about us
            </Button>
          </Link>
        </div>
      </Container>

      <Image
        height={300}
        width={300}
        className="right place-self-end"
        alt="leaf-border-image"
        src="/Icons/leaf_border_2.svg"
      />
    </>
  );
};
