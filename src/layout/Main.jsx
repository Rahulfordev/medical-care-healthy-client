import { Outlet } from "react-router-dom";

import Navbar from "../components/NavBar/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
