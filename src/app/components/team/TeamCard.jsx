import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamCard = ({ image, name, title }) => {
  return (
    <div>
      {/* container */}
      <div className="md:w-[250px] shadow-xl shadow-stone-600 w-full sm:w-[400px] mx-auto rounded-2xl relative">
        <div>
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center w-[86%] bg-gradient-to-l  from-[#6017CD] to-[#0B54E7]  rounded-2xl absolute -bottom-14 ">
            <div className="flex flex-col items-center justify-center   my-2 font-bold font-sans text-white">
              <p className="text-lg tracking-wider">{name}</p>

              <p className="text-base font-thin my-2 tracking-wider">{title}</p>
              <div className="flex justify-center items-center gap-4">
                <button className="hover:text-blue-700 transition-all delay-200 ease-in-out">
                  <FaFacebookF />
                </button>
                <button className="hover:text-blue-500 transition-all delay-200 ease-in-out">
                  <FaTwitter />
                </button>
                <button className="hover:text-red-700 transition-all delay-200 ease-in-out">
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
