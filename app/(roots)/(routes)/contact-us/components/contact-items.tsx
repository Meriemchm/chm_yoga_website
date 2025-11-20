import { ContactData } from "@/components/data/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ContactItems = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-12 w-full">
      {ContactData.map((item, index) => {
        return (
          <div key={index} className="flex justify-start items-center gap-6 text-base">
            <Image height={40} width={40} alt={item.image} src={item.image} />
            <div className="flex flex-col justify-start items-start">
              <p className={cn("text-start uppercase")}>{item.title} </p>
              <p className="text-start pt-2 text-sm max-w-30 text-neutral-500">{item.description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
