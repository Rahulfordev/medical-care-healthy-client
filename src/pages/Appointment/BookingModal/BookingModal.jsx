/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProviders";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
    fetch("https://medical-care-healthy-server.onrender.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm bg-blue-700 border-none hover:bg-blue-500 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-blue-700 font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              className="input w-full bg-white input-bordered "
            />
            <select
              name="slot"
              className="bg-white select select-bordered w-full"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="bg-white input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full bg-white input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="bg-white input w-full input-bordered"
            />
            <br />
            <input
              className="btn bg-blue-700 border-none hover:bg-blue-500 text-white w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
