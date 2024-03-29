import { HiOutlineClock } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const OurInfo = () => {
  return (
    <div className="mt-[70px] max-w-7xl mx-auto">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* part 1 */}
          <div className="bg-orange-600 p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-1">
                <HiOutlineClock size={32}></HiOutlineClock>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Opening Hours
                </h6>
                <p className="text-white text-xl">
                  Open 10.00 am to 4.00pm Everyday
                </p>
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="bg-green-700 p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-1">
                <MdLocationPin size={32}></MdLocationPin>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Our Locations
                </h6>
                <p className="text-white text-xl">
                  Chennai 120, Chennai -5000, India
                </p>
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className="bg-fuchsia-600 p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-2">
                <BsFillTelephoneOutboundFill
                  size={32}
                ></BsFillTelephoneOutboundFill>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Contact Us
                </h6>
                <p className="text-white text-xl">
                  +91 22 1234 5678 <br />
                  +91 22 1234 5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
