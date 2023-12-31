import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-12 shadow-2xl">
        {/* heading text  */}
        <div className="sm:col-span-12 md:col-span-5 lg:col-span-5 col-span-12 order-2 sm:order-2 md:order-1">
          <div>
            <div>
              <img
                className="md:w-[300px] w-[100px] -ml-[30px]"
                src="/assets/banner/topcorner.svg"
                alt=""
              />

              <h3 className="tracking-widest text-xl sm:text-2xl ml-2">
                <span className="shadow-stone-600 sm:pl-5 pl-3 py-1  rounded-l-md text-white bg-gradient-to-r from-[#120b1e] to-[#1e2f4f] shadow-2xl">
                  BEST
                </span>{" "}
                BUSINSESS
              </h3>
              <h1 className="md:text-5xl text-3xl sm:text-5xl font-sans mt-10 ml-2">
                We&apos;re Equally Excited About Corporate
              </h1>
              <div className="h-[5px] ml-2 w-[100px] bg-slate-400 my-8 sm:my-8 rounded-sm"></div>
              <p className="tracking-wider text-stone-400 ml-2">
                Our mission is to provide quality English language instruction
                through a variety of courses to international and local.
              </p>
              <button className="mt-6 my-3 ml-2 sm:px-10 sm:py-3  py-1 px-6 rounded-full shadow-lg shadow-stone-400 hover:shadow-yellow-400 hover:bg-gradient-to-r hover:from-[#FFA524] hover:to-[#FFDE1D] hover:text-black bg-slate-600 text-white">
                LEARN MORE
              </button>
              <div className="flex gap-4 ml-[100px] sm:ml-[80px] sm:my-8 mt-2  mb-[60px]  text-stone-400">
                <p className="text-lg">Follow Us</p>
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

        {/* banner image  */}
        <div className="h-auto sm:col-span-12 md:col-span-7 lg:col-span-7 col-span-12 order-1 sm:order-1 md:order-2">
          <div className="relative -z-10 md:h-[750px] h-[450px] sm:h-[600px]  overflow-hidden  md:m-0">
            <div className="mr-[60px] md:hidden">
              <img
                className="md:w-[300px] sm:w-[200px] hidden sm:block md:hidden -ml-[30px]"
                src="/assets/banner/topcorner.svg"
                alt=""
              />
            </div>
            <div className="z-50 absolute md:-right-[100px] md:-top-[180px] -right-[110px] -top-[150px]">
              <img
                className="md:w-[800px] w-[600px] sm:w-[600px]"
                src="/assets/banner/home.png"
                alt=""
              />
            </div>
            <div className="absolute -top-[50px] -right-[80px]  -z-10">
              <img
                className="md:w-[800px] w-[600px] sm:w-[600px]"
                src="/assets/banner/homebg.svg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 right-3 hidden lg:block">
              <img src="/assets/banner/home_banner_bottom.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
