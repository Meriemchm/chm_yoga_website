"use client";
import { Container } from "@/components/ui/container";
import AppointmentForm from "./appointmentForm";
import AppointmentInfo from "./appointmentInfo";
import { useGsapFade } from "@/hooks/gsap-animations";
import TitleSection from "@/components/ui/title-section";

const Appointment = () => {
  const fadeup = useGsapFade("up");
  return (
    <div className="min-h-screen bg-white">
      <Container>
        {" "}

        <div className="grid lg:grid-cols-2 grid-cols-1 py-18 gap-16 ">
          <AppointmentForm />
          <AppointmentInfo />
        </div>
      </Container>{" "}
    </div>
  );
};

export default Appointment;
