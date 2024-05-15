import Header from "../../components/Header/Header";
import MoreHospitals from "./MoreHospital/MoreHospitals";
import OurInfo from "./OurInfo/OurInfo";
import Question from "./Question/Question";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <OurInfo />
      <MoreHospitals />
      <Question />
    </div>
  );
};

export default Home;
