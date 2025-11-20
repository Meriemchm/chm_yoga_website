import { useGsapFade } from "@/hooks/gsap-animations";
import { PlansData } from "../data/data";

export const Plan = () => {
  const fadeUp = useGsapFade("up");
  return (
    <div className="space-y-6 w-full">
      {PlansData.map((plan, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-8 rounded-xl bg-linear-to-r ${plan.bg}`}
          ref={(el) => {
            fadeUp(el, index);
          }}
        >
          <div>
            <h3 className="font-semibold text-lg">{plan.title}</h3>
            <p className="text-4xl font-bold mt-2">
              ${plan.price}
              <span className="text-neutral-500 text-lg"> / class</span>
            </p>
          </div>

          <ul className="text-neutral-600 space-y-2">
            {plan.features.map((f, i) => (
              <li key={i} className="list-disc list-inside">
                {f}
              </li>
            ))}
          </ul>

          <button
            className={`px-6 py-3 rounded-lg font-semibold ${plan.buttonBg}`}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
};
