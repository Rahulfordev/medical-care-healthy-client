import { Outlet } from "react-router-dom";

import Navbar from "../pages/Shared/NavBar/Navbar";
import Sidebar from "../components/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="lg:grid lg:grid-cols-5 mt-2 lg:mt-12 h-[100vh]">
        <nav className="lg:col-span-1 w-12 flex-shrink-0 z-10">
          <Sidebar />
        </nav>
        <main className="lg:col-span-4 pl-4 md:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
