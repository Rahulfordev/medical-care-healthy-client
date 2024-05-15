import { HiOutlineClock } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const OurInfo = () => {
  return (
    <div className="mt-[70px] max-w-7xl mx-auto">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {/* part 1 */}
          <div className="pt-10 rounded-lg border border-[#eaedff]">
            <div className="text-center flex flex-col items-center mb-10">
              <div className="mt-1 flex items-center justify-center bg-[#8fb569] rounded-full w-36 h-36 shadow-md border-8 border-white mb-5">
                <HiOutlineClock
                  size={50}
                  className="text-white"
                ></HiOutlineClock>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-[#223645]">
                  Opening Hours
                </h6>
                <p className="text-base text-[#777c94]">
                  Open 10.00 am to 4.00pm Everyday
                </p>
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="pt-10 rounded-lg border border-[#eaedff]">
            <div className="text-center flex flex-col items-center mb-10">
              <div className="mt-1 flex items-center justify-center bg-[#8fb569] rounded-full w-36 h-36 shadow-md border-8 border-white mb-5">
                <MdLocationPin size={50} className="text-white"></MdLocationPin>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-[#223645]">
                  Our Locations
                </h6>
                <p className="text-base text-[#777c94]">
                  Chennai 120, Chennai -5000, India
                </p>
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className="pt-10 rounded-lg border border-[#eaedff]">
            <div className="text-center flex flex-col items-center mb-10">
              <div className="mt-1 flex items-center justify-center bg-[#8fb569] rounded-full w-36 h-36 shadow-md border-8 border-white mb-5">
                <BsFillTelephoneOutboundFill
                  size={50}
                  className="text-white"
                ></BsFillTelephoneOutboundFill>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-[#223645]">
                  Contact Us
                </h6>
                <p className="text-base text-[#777c94]">
                  +91 22 1234 5678 <br /> +91 22 1234 5678
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
