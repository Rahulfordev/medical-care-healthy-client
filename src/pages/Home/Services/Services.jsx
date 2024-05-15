import one from "/public/image/services/service1.png";
import two from "/public/image/services/service2.png";
import three from "/public/image/services/service3.png";
import four from "/public/image/services/service4.png";
import five from "/public/image/services/service5.png";
import six from "/public/image/services/service6.png";

import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Body Surgery",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: one,
    },
    {
      id: 2,
      name: "Dental Care",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: two,
    },
    {
      id: 3,
      name: "service-content",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: three,
    },
    {
      id: 4,
      name: "Blood Cancer",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: three,
    },
    {
      id: 5,
      name: "Neurology Sargery",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: three,
    },
    {
      id: 6,
      name: "Allergic Issue",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: three,
    },
  ];

  return (
    <div className="w-full bg-[#f4f9fc] pt-10 pb-14">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#e12454] uppercase">
            Our Services
          </h3>
          <h2 className="text-3xl font-bold text-[#223645]">
            Services We Provide
          </h2>
        </div>
        <div className="mx-5 mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
