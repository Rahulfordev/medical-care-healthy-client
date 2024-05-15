import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./header.css";

// import required modules
import { Navigation } from "swiper/modules";

const Header = () => {
  return (
    <div>
      <div className="mx-5">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 mt-8 mb-8 font-custom"
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3845657/pexels-photo-3845657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-lg"
            />
            {/* <div className="absolute px-10 lg:px-0 text-blue-700">
            <p className="md:font-semibold">The Medical Care Healthy</p>
            <h1 className="font-bold text-sm md:text-2xl lg:text-4xl">
              Consult Our Trusted Surgeons, Make an appointment
            </h1>
            <p className="md:font-semibold">
              The best of modern healthcare to ensure you stay healthy, always.
            </p>
          </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-lg"
            />
            {/* <div className="absolute px-10 lg:px-0 text-blue-700">
            <p className="md:font-semibold">The Medical Care Healthy</p>
            <h1 className="font-bold text-sm md:text-2xl lg:text-4xl">
              Consult Our Trusted Surgeons, Make an appointment
            </h1>
            <p className="md:font-semibold">
              The best of modern healthcare to ensure you stay healthy, always.
            </p>
          </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slide image"
              className="rounded-lg"
            />
            {/* <div className="absolute px-10 lg:px-0 text-blue-700">
            <p className="md:font-semibold">The Medical Care Healthy</p>
            <h1 className="font-bold text-sm md:text-2xl lg:text-4xl">
              Consult Our Trusted Surgeons, Make an appointment
            </h1>
            <p className="md:font-semibold">
              The best of modern healthcare to ensure you stay healthy, always.
            </p>
          </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
