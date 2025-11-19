import Button from "../ui/button";

export const Banner = () => {
  return (
    <div
      className="flex flex-col justify-end items-center py-10 text-center h-[500px] bg-cover bg-top bg-no-repeat rounded-xl"
      style={{ backgroundImage: "url('/Images/banner___1.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl md:text-5xl font-semibold text-black max-w-3xl">
          You Can always control what goes inside you
        </p>

        <Button className="mt-6 px-10">Get Started</Button>
      </div>
    </div>
  );
};
