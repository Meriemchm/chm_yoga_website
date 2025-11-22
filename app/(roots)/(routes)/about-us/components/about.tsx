import TitleSection from "@/components/ui/title-section";
import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection text="lean more about us" keyword="about" />
      <div className="flex justify-center items-center gap-8">
        <Image
          height={600}
          width={600}
          alt="hero-image"
          src="/Images/pic-about.png"
        />

        <div className="flex flex-col max-w-xl gap-8">
          <h1 className="md:text-4xl text-3xl font-extra-bold">
            Welcome discover balance, strength,{" "}
            <span className="cormorant">and</span> peace.
          </h1>

          <p className="md:text-base text-sm  text-neutral-400">
            At Tranquil Flexflow, we believe in the power of harmony—both
            mentally and physically. Our certified instructors, with their
            unique approaches, will guide you through invigorating sessions in
            our cozy crafted space. Our vision is to cultivate a place where you
            feel supported and valued, leaving each experience with a profound
            sense of accomplishment.
          </p>
        </div>
      </div>
    </div>
  );
};
