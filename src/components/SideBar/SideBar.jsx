import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FiAlignLeft } from "react-icons/fi";
function Sidebar() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="hover:bg-blue-700 ml-8 btn bg-transparent border-none drawer-button lg:hidden"
        >
          <FiAlignLeft className="text-2xl text-black hover:text-white" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu lg:mx-4 w-60 lg:rounded-md min-h-full lg:min-h-[90%] bg-blue-700 text-white">
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
              <li>
                <Link to="/dashboard/adddoctor">Add A Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/managedoctors">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
