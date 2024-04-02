import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:3000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl mb-4">My Appointments</h3>
      <div className="overflow-x-auto sm:overflow-x-clip">
        <table className="overflow-x-auto border-collapse w-[100%] mt-0">
          <tr>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              NB
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Name
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Treatment
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Date
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Time
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Payment
            </th>
          </tr>

          <>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <td className="border text-left border-gray-500 p-2">
                    {i + 1}
                  </td>
                  <td className="border text-left border-gray-500 p-2">
                    {booking.patient}
                  </td>
                  <td className="border text-left border-gray-500 p-2">
                    {booking.treatment}
                  </td>
                  <td className="border text-left border-gray-500 p-2">
                    {booking.appointmentDate}
                  </td>
                  <td className="border text-left border-gray-500 p-2">
                    {booking.slot}
                  </td>
                  <td className="border text-left border-gray-500 p-2">
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
