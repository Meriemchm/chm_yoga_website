import { TrainerData } from "@/components/data/data";
import SocialMediaIcons from "@/components/ui/socialMediaIcons";
import { useGsapFade } from "@/hooks/gsap-animations";
import Image from "next/image";

export const Trainer = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {TrainerData.map((trainer, index) => (
        <div
          key={index}
          className="p-4"
          ref={(el) => {
            fadeUp(el, index);
          }}
        >
          <div className="flex justify-center flex-col items-center gap-2 ">
            <Image
              src={trainer.image}
              alt={trainer.image}
              width={250}
              height={250}
              className=" rounded-xl"
            />
            <div className=" self-start">
              <p className="py-2 text-neutral-600">{trainer.name}</p>
              <SocialMediaIcons className="bg-[#cfd1d3]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
