import { ImQuotesRight } from "react-icons/im";
const TestimonialCard = () => {
  return (
    <div>
      {/* container */}
      <div className="grid grid-cols-12 gap-2 md:mx-16 sm:mx-5 mx-2 border-[1px] border-stone-200 sm:h-[400px] h-[600px] rounded-2xl shadow-xl">
        {/* image  */}
        <div className="sm:col-span-4 md:col-span-4 col-span-12 justify-self-center sm:justify-self-start  h-[180px] sm:h-auto">
          <div className="relative">
            <div className="shadow-blue-700 shadow-md md:w-[220px] w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:h-[220px] rounded-2xl bg-gradient-to-t from-[#0B54E7] to-[#6017CD]"></div>

            <div className="absolute md:-top-8 md:-left-10 sm:-top-3 sm:-left-5 -top-8 -left-10">
              <img
                className="shadow-md w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-2xl"
                src="/assets/testimonial/img1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* text */}
        <div className="col-span-12 sm:col-span-8 md:col-span-8 mt-16">
          <div>
            <h2 className="md:text-3xl text-2xl px-2 sm:text-2xl text-slate-600">
              When it comes to barbequing, there are two main schools of thought
              for the techniques that you can use. Freshly eggs with applewood
              smoked bacon - are amazing!
            </h2>
            <div className="flex  justify-between items-center mt-10 mx-5">
              <h1 className="flex justify-center items-center gap-3 md:text-2xl text-lg sm:text-xl font-bold">
                <div className="h-[4px] w-[30px] rounded-md bg-gradient-to-r from-[#FFA524] to-[#FFDE1D]"></div>
                Albert Willson
              </h1>
              <span className="md:text-[60px] sm:text-3xl text-xl mr-10 text-[#FFA024]">
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
