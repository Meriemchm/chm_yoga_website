import Image from "next/image";
import { Container } from "../ui/container";
import Link from "next/link";

export const AboutSection = () => {
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
          />
          <div className="max-w-2xl text-center ">
            <h2 className="text-5xl py-5">
              YOGA LIFE FOR GREATER SELF CONTROL
            </h2>
            <p className="text-lg mb-6 text-neutral-600">
              An enchanting wellness studio where the art of yoga blends with
              captivating experiences inspired by sound, movement, and the
              nature.
            </p>
          </div>
          <Link href="/about-us">
            <button className="capitalize border-b border-gray-300 pt-2 hover:scale-105 duration-200 transition-all">
              More about us
            </button>
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
