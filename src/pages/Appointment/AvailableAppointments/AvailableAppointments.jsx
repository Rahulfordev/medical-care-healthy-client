/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://medical-care-healthy-server.onrender.com/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(appointmentOptions);
  return (
    <section className="pb-16 pt-10 bg-[#f4f9fc]">
      <div className="max-w-7xl mx-auto">
        <div className="mx-5">
          <p className="text-center text-[#e12454] font-bold text-2xl mb-8">
            Available Appointments on {format(selectedDate, "PP")}
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {appointmentOptions.map((option) => (
              <AppointmentOption
                key={option._id}
                appointmentOption={option}
                setTreatment={setTreatment}
              ></AppointmentOption>
            ))}
          </div>
          {treatment && (
            <BookingModal
              selectedDate={selectedDate}
              treatment={treatment}
              setTreatment={setTreatment}
              refetch={refetch}
            ></BookingModal>
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailableAppointments;
