// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./header.css";

// import required modules
import { Navigation } from "swiper/modules";

import { FaPlay } from "react-icons/fa";

import heroOne from "/public/image/hero-image/hero-1.jpg";
import heroTwo from "/public/image/hero-image/hero-2.jpg";

const Header = () => {
  return (
    <div>
      <div className="">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8 mt-8 mb-8 font-custom"
        >
          <SwiperSlide>
            <img src={heroOne} alt="" className="rounded-lg" />
            <div className="absolute md:left-28 px-10 lg:px-0 md:text-left text-center max-w-[550px]">
              <p className="text-[#465e70] font-semibold">
                We are here for your care.
              </p>
              <h1 className="text-[#223645] font-bold text-2xl sm:text-5xl md:text-7xl sm:my-2 md:my-6">
                Best Care & Better Doctor.
              </h1>
              <p className="text-[#465e70] text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-3 sm:mt-4 md:mt-8 flex gap-4 justify-center md:justify-start">
                <button className="hover:bg-[#8fb569] bg-[#e12454] text-white rounded-full px-8 py-3 uppercase text-sm font-medium transition-all duration-300 ease-in-out shadow-custom cursor-pointer">
                  make appointment
                </button>
                <button className="hover:bg-[#8fb569] bg-[#e12454] text-white rounded-full w-14 h-14 uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-custom flex items-center justify-center cursor-pointer">
                  <FaPlay />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroTwo} alt="" className="rounded-lg" />
            <div className="absolute md:left-28 px-10 lg:px-0 md:text-left text-center max-w-[550px]">
              <p className="text-[#465e70] font-semibold">
                We are here for your care.
              </p>
              <h1 className="text-[#223645] font-bold text-2xl sm:text-5xl md:text-7xl sm:my-2 md:my-6">
                Best Care & Better Doctor.
              </h1>
              <p className="text-[#465e70] text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-3 sm:mt-4 md:mt-8 flex gap-4 justify-center md:justify-start">
                <button className="hover:bg-[#8fb569] bg-[#e12454] text-white rounded-full px-8 py-3 uppercase text-sm font-medium transition-all duration-300 ease-in-out shadow-custom cursor-pointer">
                  make appointment
                </button>
                <button className="hover:bg-[#8fb569] bg-[#e12454] text-white rounded-full w-14 h-14 uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-custom flex items-center justify-center cursor-pointer">
                  <FaPlay />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
