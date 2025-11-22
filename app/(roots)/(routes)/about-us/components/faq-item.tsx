"use client";
import { useGsapFade } from "@/hooks/gsap-animations";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface FaqItemProps {
  data: {
    question: string;
    answer: string;
    style: string;
  }[];
}

export const FaqItem = ({ data }: FaqItemProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const fadeUp = useGsapFade('up')

  return (
    <div className="w-full space-y-3">
      {data.map((item, index) => (
        <div
          key={index}
          className={cn(
            item.style,
            "w-full rounded-xl p-6 cursor-pointer transition-all"
          )}
          onClick={() => toggle(index)}
          ref={(el)=> {fadeUp(el,index)}}
        >
          <div className="flex justify-between items-center">
            <h3 className=" font-medium">{item.question}</h3>
            {openIndex === index ? (
              <Image src="/Icons/arrow-up.svg" alt="" width={12} height={12} />
            ) : (
              <Image
                src="/Icons/arrow-down.svg"
                alt=""
                width={12}
                height={12}
              />
            )}
          </div>

          {openIndex === index && (
            <>
              <div className="border-b border-neutral-400 py-2"></div>
              <p className="pt-4 text-sm text-neutral-500 leading-relaxed">
                {item.answer}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
