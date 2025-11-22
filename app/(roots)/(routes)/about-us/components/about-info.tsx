import { AboutData } from "@/components/data/data";
import { ColumnsItems } from "@/components/ui/columns-items";
import { useGsapFade } from "@/hooks/gsap-animations";

export const AboutInfo = () => {
  const fadeRight = useGsapFade("right");
  return (
    <div className="flex flex-col gap-8">
      <div ref={fadeRight} className="flex flex-col max-w-xl gap-8">
        <h1 className="md:text-4xl text-3xl font-extra-bold">
          Welcome discover balance, strength,{" "}
          <span className="cormorant">and</span> peace.
        </h1>

        <p className="md:text-base text-sm  text-neutral-400">
          At Flexflow, we believe in the power of harmony—both mentally and
          physically. Our certified instructors, with their unique approaches,
          will guide you through invigorating sessions in our cozy crafted
          space. Our vision is to cultivate a place where you feel supported and
          valued, leaving each experience with a profound sense of
          accomplishment.
        </p>
      </div>
      <ColumnsItems data={AboutData} className="grid grid-cols-2" />
    </div>
  );
};
