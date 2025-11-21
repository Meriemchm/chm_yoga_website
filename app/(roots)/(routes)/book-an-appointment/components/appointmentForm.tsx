"use client";

import Button from "@/components/ui/button";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/selectField";
import {
  AppointmentTypeData,
  PreferredInstructorData,
  TimeData,
  DateData,
} from "@/components/data/data";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppointmentFormData,
  appointmentSchema,
} from "@/schemas/appointmentSchema";
import toast from "react-hot-toast";
import { useGsapFade } from "@/hooks/gsap-animations";
import TitleSection from "@/components/ui/title-section";

const AppointmentForm = () => {
  const fadeleft = useGsapFade("left");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSending(true);

    toast.success(
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/Icons/meditation.svg"
          alt="Yoga"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <span>Appointment sent successfully! You will get a call soon.</span>
      </div>,
      {
        duration: 5000,
      }
    );

    setIsSending(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white rounded-2xl space-y-4 "
      ref={fadeleft}
    >
      <div className="py-8">
        <TitleSection
          text="Effortless Online Booking Appointment"
          keyword="Booking"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          name="yourName"
          register={register}
          placeholder="Your Name"
          error={errors.yourName}
        />
        <InputField
          name="phone"
          register={register}
          placeholder="Phone"
          error={errors.phone}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          name="appointmentType"
          options={AppointmentTypeData}
          register={register}
          placeholder="Appointment Type"
          error={errors.appointmentType}
        />
        <SelectField
          name="preferredInstructor"
          options={PreferredInstructorData}
          register={register}
          placeholder="preferred Instructor"
          error={errors.preferredInstructor}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          name="preferredDay"
          options={DateData}
          register={register}
          placeholder="Preferred Day"
          error={errors.preferredDay}
        />
        <SelectField
          name="preferredTime"
          options={TimeData}
          register={register}
          placeholder="Preferred Time"
          error={errors.preferredTime}
        />
      </div>
      <InputField
        name="notes"
        textarea
        register={register}
        placeholder="Notes"
        error={errors.notes}
      />
      <Button type="submit" disabled={isSending} className="mt-5 ">
        Book an Appointment
      </Button>
    </form>
  );
};

export default AppointmentForm;
