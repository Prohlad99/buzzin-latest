import ServiceCard from "./ServiceCard";
const Services = () => {
  const img1 = "/assets/services/img1.jpg";
  const img2 = "/assets/services/img2.jpg";
  const img3 = "/assets/services/img3.jpg";
  const img4 = "/assets/services/img4.jpg";
  const img5 = "/assets/services/img5.jpg";

  return (
    <div>
      {/* container */}
      <div className="grid grid-cols-12">
        {/* left  */}
        <div className="md:col-span-5 sm:col-span-12 col-span-12 relative">
          <div>
            <h3 className="tracking-widest ml-2 text-xl sm:text-2xl">
              <span className="shadow-blue-600 sm:pl-5 pl-3  py-1 rounded-l-md text-white bg-gradient-to-r from-[#6017CD] to-[#0B54E7] shadow-2xl">
                OUR
              </span>
              SERVICES
            </h3>
            <h1 className="md:text-5xl ml-2 text-3xl sm:text-5xl font-sans mt-10">
              Demand First-Rate Best Services
            </h1>
            <div className="h-[5px] ml-2 w-[100px] bg-slate-400 my-8 sm:my-8  rounded-sm"></div>
            <p className="ml-2 tracking-wider text-stone-400">
              Our Mission Is To Provide Quality English Language Instruction
              Through A Variety Of Courses To International
            </p>
          </div>
          <div className="md:absolute bottom-20 right-10 my-10 ">
            <ServiceCard image={img1} title="Facebook Boosting" />
          </div>
        </div>

        {/* right */}
        <div className="md:col-span-7 sm:col-span-12 col-span-12 sm:mt-10 md:mt-0 relative">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <ServiceCard image={img2} title="Youtube Boosting" />
            </div>
            <div className="md:mt-16 sm:mt-8 mt-0">
              <ServiceCard image={img3} title="Facebook Marketing" />
            </div>
            <div>
              <ServiceCard image={img4} title="Email Marketing" />
            </div>
            <div className="md:mt-16 sm:mt-8 mt-0">
              <ServiceCard image={img5} title="Social Media Marketing" />
            </div>
          </div>
        </div>
        <div className="w-full col-span-12 grid justify-center">
          <button className="mt-6 my-8 md:my-8 sm:px-10 sm:py-2   py-2 hover:shadow-blue-200 shadow-yellow-200 shadow-lg md:py-3 md:px-12 px-6 rounded-full hover:bg-gradient-to-r from-[#FFA524] to-[#FFDE1D]  text-black bg-gradient-to-r hover:from-[#6017CD] hover:to-[#0B54E7]  hover:text-white">
            ALL SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
