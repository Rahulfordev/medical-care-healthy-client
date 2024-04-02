import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Reviews from "../pages/Reviews/Reviews";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import DashboardLayout from "../layout/DashboardLayout";
import DisplayError from "../pages/Shared/DisplayError/DisplayError";
import MyAppointment from "../pages/Dashboard/MyAppointment/MyAppointment";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../pages/Dashboard/Payment/Payment";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://medical-care-healthy-server.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
