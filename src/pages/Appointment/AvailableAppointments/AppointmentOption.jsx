/* eslint-disable react/prop-types */

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots, image, specialty } = appointmentOption;
  return (
    <div className="card bg-white">
      <div className="card-body text-center">
        <div className="items-center flex justify-center">
          <img
            src={image}
            alt="doctor image"
            className="w-48 h-48 rounded-lg"
          />
        </div>
        <h2 className="text-2xl text-[#223645] font-bold text-center hover:text-[#e12454] cursor-pointer">
          {name}
        </h2>
        <p className="font-semibold text-[#223645]">{specialty}</p>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p className="text-[#223645]">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-[#223645]">
          <small className="font-bold">Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-[#e12454] hover:bg-[#e12453d7] text-white border-none"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
