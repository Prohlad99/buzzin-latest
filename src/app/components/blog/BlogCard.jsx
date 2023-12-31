"use client";

const BlogCard = ({ image, title, date, type }) => {
  return (
    <div>
      {/* container */}
      <div className="relative shadow-2xl shadow-black rounded-2xl w-[320px] sm:w-[450px] sm:h-[300px] mx-4 sm:mx-auto">
        <div>
          <img className="rounded-2xl w-full sm:h-[300px]" src={image} alt="" />
        </div>
        <div className="opacity-[0.9] sm:opacity-[0.9] sm:-bottom-10 shadow-md shadow-blue-500 -bottom-2 sm:-left-10 overflow-hidden py-3 px-4 absolute w-full bg-gradient-to-l rounded-2xl from-[#6017CD] to-[#0B54E7] ">
          <p className="font-semibold text-base text-stone-300 flex gap-1 justify-center items-center">
            {date}
            <span className="w-[3px] h-[3px] bg-stone-300 rounded-full"></span>{" "}
            {type}
          </p>
          <h2 className="flex text-white sm:text-2xl text-lg sm:my-3 my-1 -ml-14 justify-center items-center gap-1">
            <span className="bg-gradient-to-r from-[#FFA524] to-[#FFDE1D] h-[3px] w-[40px] rounded-sm"></span>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
