import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="">
      <div className="">
        <div className="">
          <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          ></AppointmentBanner>
          <AvailableAppointments
            selectedDate={selectedDate}
          ></AvailableAppointments>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
