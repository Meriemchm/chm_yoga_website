import { Classe } from "./classe";
export const Classes = () => {
  return (
    <div className="flex flex-col gap-12 items-start justify-center">
      <h2 className="text-3xl max-w-sm font-bold capitalize">
        Our variety of yoga <span>classes</span> for you
      </h2>

      <Classe />
    </div>
  );
};
