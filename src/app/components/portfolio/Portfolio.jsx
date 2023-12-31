import { Carousel } from "flowbite-react";
import { FaChevronRight } from "react-icons/fa6";
import PortfolioCard from "./PortfolioCard";
const Portfolio = () => {
  const porfolioes = [
    {
      id: 1,
      img: "/assets/portfolio/img1.jpg",
      title: "Golden Ballon",
      type: "Branding",
      cat: "Marketing",
    },
    {
      id: 2,
      img: "/assets/portfolio/img2.jpg",
      title: "Golden Ballon",
      type: "Branding",
      cat: "Marketing",
    },
    {
      id: 3,
      img: "/assets/portfolio/img3.jpg",
      title: "Golden Ballon",
      type: "Branding",
      cat: "Marketing",
    },
    {
      id: 4,
      img: "/assets/portfolio/img4.jpg",
      title: "Golden Ballon",
      type: "Branding",
      cat: "Marketing",
    },
  ];
  const customThem = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute  -bottom-[100px] -right-[130px] flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute  -bottom-[100px] -right-60 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    control: {
      base: "inline-flex shadow-stone-500 hover:bg-gradient-to-t from-[#0B54E7] to-[#6017CD] shadow-lg h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-black hover:text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  };
  return (
    <div>
      {/* container */}
      <div className="bg-gradient-to-t py-4 from-[#0B54E7] to-[#6017CD] h-[400px]">
        {/* content */}
        <div className="grid grid-cols-12 gap-6 md:pt-[180px]">
          {/* left */}
          <div className="md:col-span-9 col-span-12 order-2 md:order-1">
            <div className="hidden md:block h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel theme={customThem} indicators={false}>
                <div className="flex gap-8">
                  {porfolioes.map((item, index) => (
                    <div key={index}>
                      <PortfolioCard
                        image={item.img}
                        title={item.title}
                        type={item.title}
                        cat={item.cat}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-8">
                  {porfolioes.map((item, index) => (
                    <div key={index}>
                      <PortfolioCard
                        image={item.img}
                        title={item.title}
                        type={item.title}
                        cat={item.cat}
                      />
                    </div>
                  ))}
                </div>
              </Carousel>
            </div>
            <div className=" md:hidden mx-10 h-[500px] sm:h-[500px] xl:h-80 2xl:h-96">
              <Carousel indicators={false}>
                {porfolioes.map((item, index) => (
                  <div key={index}>
                    <PortfolioCard
                      image={item.img}
                      title={item.title}
                      type={item.title}
                      cat={item.cat}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* right */}
          <div className="md:col-span-3 col-span-12 order-1 md:order-2 mx-2 md:mx-0">
            <h2 className="md:text-2xl text-xl text-white font-semibold">
              <span className=" sm:pl-5 pl-3 py-1 rounded-l-md text-black bg-gradient-to-r from-[#FFA524] to-[#FFDE1D]  shadow-2xl">
                PORT
              </span>
              FOLIO
            </h2>
            <h1 className="md:text-4xl text-3xl sm:text-2xl font-sans mt-10 text-white">
              Experienced In Gallery
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-[180px] sm:mt-[220px] md:mt-[180px] flex justify-center">
        <button className="flex justify-center items-center gap-3 py-3 ">
          VIEW ALL PORTFOLIO{" "}
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
