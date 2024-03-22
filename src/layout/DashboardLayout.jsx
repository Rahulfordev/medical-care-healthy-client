import { Outlet } from "react-router-dom";

import Navbar from "../pages/Shared/NavBar/Navbar";
import Sidebar from "../components/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="flex flex-col max-w-7xl mx-auto mt-2 lg:mt-12 h-[100vh]">
        <nav className="w-12 flex-shrink-0 z-10">
          <Sidebar />
        </nav>
        <main className="flex-1 pl-4 md:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
