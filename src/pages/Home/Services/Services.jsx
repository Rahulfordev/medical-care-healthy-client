import React from "react";
import one from "/public/image/one.svg";
import two from "/public/image/two.svg";
import three from "/public/image/three.svg";

import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Orthopedics",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: one,
    },
    {
      id: 2,
      name: "Neurology and neurosurgery",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: two,
    },
    {
      id: 3,
      name: "Oncology and oncosurgery",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: three,
    },
  ];

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-xl font-bold text-blue-700 uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
