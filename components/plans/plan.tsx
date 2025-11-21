import { useGsapFade } from "@/hooks/gsap-animations";
import { PlansData } from "../data/data";
import Button from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export const Plan = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div className="space-y-6 w-full">
      {PlansData.map((plan, index) => (
        <div
          key={index}
          className={`flex md:flex-row flex-col gap-8 md:gap-0 pricing-card justify-between items-center p-2 md:p-8 py-8 rounded-xl ${plan.bg}`}
          style={{ ["--circle-bg"]: plan.circleColor } as React.CSSProperties}
          ref={(el) => {
            fadeUp(el, index);
          }}
        >
          <div>
            <h3 className="font-semibold md:text-lg text-base">{plan.title}</h3>
            <p className="md:text-4xl text-2xl font-bold mt-2">
              ${plan.price}
              <span className="text-neutral-500 md:text-lg text-base">
                {" "}
                / class
              </span>
            </p>
          </div>

          <ul className="text-neutral-600 space-y-2 md:text-base text-sm">
            {plan.features.map((f, i) => (
              <div key={i} className="flex justify-start items-center gap-2">
                <Image
                  src="/Icons/flower.svg"
                  alt="meditation-icon"
                  height={10}
                  width={10}
                  className="w-4 h-4"
                />
                {f}
              </div>
            ))}
          </ul>
          <Link href="/book-an-appointment">
            <Button
              className={`px-6 py-3 rounded-md font-semibold ${plan.buttonBg}`}
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
