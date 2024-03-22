import { Outlet } from "react-router-dom";
 
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";

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
