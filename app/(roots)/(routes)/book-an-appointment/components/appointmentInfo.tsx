import Image from "next/image";
import { useGsapFade } from "@/hooks/gsap-animations";
import Button from "@/components/ui/button";
import Link from "next/link";

const AppointmentInfo = () => {
  const faderight_1 = useGsapFade("right");
  const faderight_2 = useGsapFade("right");
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full  ">
      <Image
        src="/Images/appointment-info.png"
        alt="phone"
        height={400}
        width={400}
        ref={faderight_1}
      />
      <div
        ref={faderight_2}
        className="pricing-card bg-secondary flex flex-col md:flex-row rounded-xl w-full p-4 items-start justify-center gap-4 md:justify-between"
        style={{ ["--circle-bg"]: "#faf1ed" } as React.CSSProperties}
      >
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/Icons/phone.svg"
            alt="phone"
            height={25}
            width={25}
            className="w-5 h-5 md:h-auto md:w-auto"
          />

          <div className="flex flex-col ">
            <p className=" capitalize text-neutral-500 ">
              your peace, our priority
            </p>
            <p className="md:text-2xl text-lg font-light">PHONE</p>
            <p className="text-neutral-400 pt-2">+213 500 00 00 00</p>
          </div>
        </div>
        <Link href="/contact-us" className="self-end">
          <Button variant="linkArrow">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentInfo;
