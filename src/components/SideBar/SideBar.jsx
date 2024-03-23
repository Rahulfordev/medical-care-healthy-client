import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FiAlignLeft } from "react-icons/fi";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

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
        <ul className="font-custom text-base menu pt-14 lg:pt-4 lg:mx-4 w-60 lg:rounded-md min-h-full lg:min-h-[90%] bg-blue-700 text-white">
          <li>
            <Link to="/dashboard">
              <FaRegClock /> My Appointments
            </Link>
          </li>
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/allusers">
                  <FaRegUser /> All users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/adddoctor">
                  <IoIosAddCircleOutline /> Add A Doctor
                </Link>
              </li>
              <li>
                <Link to="/dashboard/managedoctors">
                  <MdOutlineManageAccounts /> Manage Doctors
                </Link>
              </li>
              <li>
                <Link to="/dashboard/admin">
                  <MdOutlineDashboard /> Dashboard
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
