import HearderTitle from "@/components/ui/hearder-title";
import React from "react";
import Appointment from "./components/appointment";


const BookAnAppointmentPage = () => {
  return (
    <div className="overflow-hidden">
      <HearderTitle title="Book an Appointment" url="Book an Appointment" />
      <Appointment />
    </div>
  );
};

export default BookAnAppointmentPage;
