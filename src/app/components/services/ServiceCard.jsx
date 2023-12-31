"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./style.css";
const ServiceCard = ({ image, title }) => {
  return (
    <div>
      <div className="mx-4 sm:mx-0 service_card_container sm:w-[280px] rounded-2xl relative shadow-blue-400 shadow-xl">
        {/* image */}
        <img className="sm:w-[280px] rounded-2xl" src={image} alt="" />
        <div className="title hover:hidden">
          <div className="flex justify-start items-center gap-2 py-5 pl-6 rounded-b-2xl absolute bottom-0 bg-white w-full">
            <div className="bg-gradient-to-r from-[#6017CD] to-[#0B54E7] h-[5px] w-[40px] rounded-sm"></div>
            <h2 className="font-semibold text-xl">{title}</h2>
          </div>
        </div>
        {/* overly  */}
        <div className="overly w-full absolute top-0 h-full bg-gradient-to-tr from-[#0B54E7] to-[#6017CD] z-10 rounded-2xl">
          <div className="h-full">
            <div className="w-full h-full">
              <div className="absolute bottom-10 w-full">
                <h1 className="flex tracking-widest justify-between  items-center px-10 text-white">
                  Web Designer{" "}
                  <span className="text-orange-300">
                    <FaLongArrowAltRight />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
