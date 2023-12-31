import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#212121] px-10 pt-20">
      {/* container */}
      <div>
        <div className="md:flex md:justify-between md:items-center grid grid-cols-1 justify-center">
          <div>
            <h1 className="text-white text-4xl">
              Have An Idea Or Project? Let&apos;s Talk
            </h1>
            <h2 className="text-stone-400 text-lg flex justify-start my-4 items-center gap-4">
              CONTACT US{" "}
              <span className="text-yellow-300">
                <FaArrowRightLong />
              </span>
            </h2>
          </div>
          <div>
            <h2 className="text-xl text-stone-300">
              Send Me Tips, Trends, Freebies, Updates & Offers.
            </h2>
            <div className="flex my-4 px-4 rounded-full justify-center bg-gradient-to-l from-[#FFA524] to-[#FFDE1D]  ">
              <input
                className="py-4  px-2 border-none w-full outline-none bg-transparent"
                type="email"
                placeholder="Insert Your Email Address"
              />
              <button className="font-semibold">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        {/* ************** */}
        <div className="md:flex md:justify-between md:items-center grid grid-cols-1 justify-center mt-10 mb-8">
          <div className="md:flex grid grid-cols-1 md:gap-5 md:text-xl text-lg text-stone-300">
            <h2>+1(888)123 45 67</h2>
            <h2 className="my-2 md:my-0">Phlox-Theme@Averta.Com</h2>
          </div>
          <div>
            <h2 className="md:text-xl text-base text-stone-300">
              Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx
              76051
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14 border-t-[1px] border-stone-500 py-10">
        <p className="text-stone-400">© 2023 BUZZIN. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
