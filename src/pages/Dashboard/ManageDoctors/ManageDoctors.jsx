import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import "./manage.css";
const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:3000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:3000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="custom-scrollbar">
      <h2 className="text-3xl mb-4">Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto h-[500px]">
        <table className="overflow-x-auto border-collapse w-[100%] mt-0">
          <tr>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              NB
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Avatar
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Name
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Email
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Specialty
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Action
            </th>
          </tr>

          <>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <td className="border text-left border-gray-500 p-2">
                  {i + 1}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {doctor.name}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {doctor.email}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {doctor.specialty}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
          successAction={handleDeleteDoctor}
          successButtonName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
