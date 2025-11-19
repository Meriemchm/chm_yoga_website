import { Plan } from "../plans/plan";

export const Plans = () => {
  return (
    <div className="flex flex-col w-full gap-12 items-start ">
      <div className="flex items-start justify-between w-full">

        <h2 className="text-3xl max-w-sm font-bold capitalize">
          Our flexible class <span>pricing</span> plans
        </h2>

        <p className="text-neutral-400 capitalize max-w-sm">
          our flexible membership cater to practitioners of all levels, ensuring
          accessibility to everyone.
        </p>

      </div>

      <Plan />
    </div>
  );
};
