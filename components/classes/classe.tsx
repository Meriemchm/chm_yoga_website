import Image from "next/image";
import { ClassesData } from "../data/data";
import { useGsapFade } from "@/hooks/gsap-animations";
import Link from "next/link";
import Button from "../ui/button";

export const Classe = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center md:gap-6 gap-8">
      {ClassesData.map((classe, index) => (
        <div
          key={index}
          className="flex flex-col md:items-start items-center justify-center text-start"
          ref={(el) => {
            fadeUp(el, index);
          }}
        >
          <div
            className="flex items-center justify-center rounded-lg w-full"
            style={classe.style}
          >
            <Image
              height={500}
              width={500}
              className=" w-auto h-80 object-contain p-4"
              src={classe.image}
              alt={classe.title}
            />
          </div>
          <div className="py-4">
            <h3 className="text-md font-semibold mb-2 self-start">
              {classe.title}
            </h3>
            <p className="text-sm text-neutral-500 max-w-sm" dangerouslySetInnerHTML={{ __html: classe.description }} />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-2">
              <Image
                height={16}
                width={16}
                src="/Icons/time.svg"
                alt="Time Icon"
              />
              <p>{classe.time}</p>
            </div>

            <Link href="/pricing">
              <Button className="px-4">Get started</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
