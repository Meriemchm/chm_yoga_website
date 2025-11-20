"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ContactFormData, contactSchema } from "@/schemas/contactSchema";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/button";
import toast from "react-hot-toast";
import { useGsapFade } from "@/hooks/gsap-animations";
import TitleSection from "@/components/ui/title-section";

const ContactForm = () => {
  const fadeleft = useGsapFade("left");

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  {
    /*on submit */
  }

  const onSubmit = (data: ContactFormData) => {
    setIsSending(true);
    toast.success("Message sent successfully!");
    reset();
    setIsSending(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-2xl space-y-6"
      ref={fadeleft}
    >
      {" "}
      <TitleSection text="Get in touch with us today" keyword="touch" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <InputField
          name="firstName"
          register={register}
          placeholder="First Name"
          error={errors.firstName}
        />
        <InputField
          name="lastName"
          register={register}
          placeholder="Last Name"
          error={errors.lastName}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          name="email"
          type="email"
          register={register}
          placeholder="Email"
          error={errors.email}
        />

        <InputField
          name="phone"
          type="tel"
          register={register}
          placeholder="Phone"
          error={errors.phone}
        />
      </div>
      <InputField
        name="subject"
        register={register}
        placeholder="Subject"
        error={errors.subject}
      />
      <InputField
        name="message"
        textarea
        register={register}
        placeholder="Your Message"
        error={errors.message}
      />
      <div className="flex justify-end mt-4">
        <Button type="submit" disabled={isSending}>
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
