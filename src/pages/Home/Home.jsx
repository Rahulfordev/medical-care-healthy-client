import Header from "../../components/Header/Header";
import MoreHospitals from "./MoreHospital/MoreHospitals";
import Question from "./Question/Question";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Header />
      <Services />
      <MoreHospitals />
      <Question />
    </div>
  );
};

export default Home;
