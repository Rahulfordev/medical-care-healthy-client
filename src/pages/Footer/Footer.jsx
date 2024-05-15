/* eslint-disable react/no-unescaped-entities */

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import logoWhite from "/public/image/logo-white.png";
import playStore from "/public/image/footer-image/playStore.svg";
import appStore from "/public/image/footer-image/appStore.svg";
import Guardians_Community from "/public/image/footer-image/Guardians_Community.svg";
import Tutor_Community from "/public/image/footer-image/Tutor_Community.svg";

const Footer = () => {
  return (
    <footer className="bg-[#e12454] py-8">
      <div className="mx-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <img src={logoWhite} alt="logo" className="mb-4 w-[200px]" />
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
            </div>
            <div className="">
              <h3 className="text-[22px] font-bold text-white mb-8">
                Quick Links
              </h3>
              <ul className="text-white flex flex-col gap-1">
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Departments
                </li>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Our Doctors
                </li>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  News
                </li>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Contact Us
                </li>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  FAQ
                </li>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Book an Appointment
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-[22px] font-bold text-white mb-8">Social</h3>
              <div className="text-white">
                <a href="#" className="flex items-center gap-1 pb-1">
                  <FaFacebookF />{" "}
                  <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                    Facebook
                  </span>
                </a>
                <a href="#" className="flex items-center gap-1 pb-1">
                  <FaYoutube />{" "}
                  <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                    Youtube
                  </span>
                </a>
                <a href="#" className="flex items-center gap-1 pb-1">
                  <FaLinkedinIn />{" "}
                  <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                    Linkedin
                  </span>
                </a>
                <a href="#" className="flex items-center gap-1">
                  <FaInstagram />{" "}
                  <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                    Instagram
                  </span>
                </a>
              </div>
              <h2 className="text-[22px] font-bold text-white pt-1">
                Join Our Community
              </h2>
              <div className="flex items-center gap-2 pt-1">
                <img
                  src={Guardians_Community}
                  className="cursor-pointer w-28"
                  alt="Guardians_Community"
                />
                <img
                  src={Tutor_Community}
                  className="cursor-pointer w-28"
                  alt="Tutor_Community"
                />
              </div>
            </div>
            <div className="">
              <h3 className="text-[22px] font-bold text-white mb-8">
                Office Address
              </h3>
              <p className="text-white">Chennai 120, Chennai -5000, India</p>
              <h2 className="text-[22px] font-bold text-white pt-10">
                Download Our App
              </h2>
              <div className="flex items-center gap-2 pt-1">
                <img
                  src={playStore}
                  className="cursor-pointer w-28"
                  alt="playstore"
                />
                <img
                  src={appStore}
                  className="cursor-pointer w-28"
                  alt="appstore"
                />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-center text-base font-bold text-white">
              Copyright © 2024 Rahulfordev. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
