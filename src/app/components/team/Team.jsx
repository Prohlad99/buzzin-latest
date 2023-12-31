import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <div className="bg-[#212121] py-14">
      {/* context */}
      <div className="text-center">
        <h2 className="tracking-[6px] text-white md:text-2xl text-xl font-semibold">
          <span className="shadow-yellow-200 sm:pl-5 pl-3 py-1 rounded-l-md text-black bg-gradient-to-r from-[#FFA524] to-[#FFDE1D] shadow-2xl">
            OUR
          </span>
          TEAM
        </h2>
        <h1 className="md:text-5xl text-3xl text-white sm:text-4xl font-sans mt-10 ">
          Committed To Team Excellence
        </h1>
        <div className="mx-auto h-[5px] w-[100px] bg-slate-400 my-8 sm:my-8  rounded-sm"></div>
      </div>

      {/* carousel  */}
      <div>
        <TeamCarousel />
      </div>
    </div>
  );
};

export default Team;
