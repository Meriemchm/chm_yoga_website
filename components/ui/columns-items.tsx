import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGsapFade } from "@/hooks/gsap-animations";

interface ColumnsItemsProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: string;
    style?: string;
  }[];
  className?: string;
}

export const ColumnsItems = ({ data, className }: ColumnsItemsProps) => {
  const fadeUp = useGsapFade("up");
  return (
    <div
      className={cn(className, " justify-center items-center gap-12 w-full")}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-start items-center gap-6 text-base"
          ref={(el) => {
            fadeUp(el, index);
          }}
        >
          <Image height={40} width={40} alt={item.icon} src={item.icon} />
          <div className="flex flex-col justify-start items-start">
            <p className={cn("text-start uppercase")}>{item.title}</p>
            <p className="text-start pt-2 text-sm max-w-30 text-neutral-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
