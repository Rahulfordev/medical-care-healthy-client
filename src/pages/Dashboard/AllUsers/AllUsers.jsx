import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://medical-care-healthy-server.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://medical-care-healthy-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful.");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="overflow-x-auto border-collapse w-[100%] mt-0">
          <tr>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              NB
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Name
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Email
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Admin
            </th>
            <th className="py-3 bg-green-700 text-white border border-gray-500 text-left p-2">
              Delete
            </th>
          </tr>

          <>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td className="border text-left border-gray-500 p-2">
                  {i + 1}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {user.name}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {user.email}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="px-2 py-1 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border text-left border-gray-500 p-2">
                  <button className="btn btn-xs btn-danger bg-red-500 border-none text-white hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
