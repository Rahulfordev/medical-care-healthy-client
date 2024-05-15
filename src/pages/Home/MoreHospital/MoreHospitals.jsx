import hospitalOne from "/public/image/hospital-one.jpg";
import hospitalTwo from "/public/image/hospital-two.jpg";
import hospitalThree from "/public/image/hospital-three.jpg";
import MoreHospital from "./MoreHospital";

const MoreHospitals = () => {
  const Hospitals = [
    {
      id: 1,
      title: "Medical Care Healthy, New Delhi",
      description:
        "Medical Care Healthy, Sarita Vihar, Delhi Mathura Road New Delhi 110076",
      img: hospitalOne,
    },
    {
      id: 2,
      title: "Medical Care Healthy, Greams Road, Chennai",
      description: "21, Greams Lane, Chennai 600006",
      img: hospitalTwo,
    },
    {
      id: 3,
      title: "Medical Care Healthy (Bannerghatta Road) Bangalore",
      description: "154/11, Bannerghatta Main Road, Bangalore 560076",
      img: hospitalThree,
    },
  ];

  return (
    <div className="bg-[#f4f9fc] pt-10 pb-14 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-lg md:text-3xl font-bold text-[#e12454] uppercase">
            Hospitals in Apollo Group <br /> Hospitals Network
          </h3>
        </div>
        <div className="mx-5 mt-8 flex gap-8 flex-wrap items-center justify-center">
          {Hospitals.map((hospital) => (
            <MoreHospital key={hospital.id} hospital={hospital}></MoreHospital>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreHospitals;
