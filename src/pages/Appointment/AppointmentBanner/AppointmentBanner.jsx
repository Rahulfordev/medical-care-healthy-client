import { DayPicker } from "react-day-picker";
import "./appointmentBanner.css";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-6 max-w-7xl mx-auto">
      <div className="sm:hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow"
          />

          <div className="sm:mr-6 sm:w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
