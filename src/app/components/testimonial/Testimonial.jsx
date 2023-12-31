"use client";
import { Carousel } from "flowbite-react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const customTheme = {
    root: {
      base: "relative  h-full w-full",
      leftControl:
        "absolute  -top-10 sm:top-0 left-10 sm:-left-16 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute  -top-10 sm:top-0 right-10 sm:-right-16 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    control: {
      base: " hover:bg-gradient-to-b shadow-blue-600 shadow-md hover:shadow-orange-400  hover:shadow-md hover:from-[#FFA524] hover:to-[#FFDE1D] bg-gradient-to-b from-[#6017CD] to-[#0B54E7]   flex h-8 w-8 items-center justify-center rounded-full ",
      icon: "h-100 w-5 text-white hover:text-black  dark:text-gray-800 sm:h-6 sm:w-6",
    },
    indicators: {
      active: {
        off: "hidden bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "hidden bg-white dark:bg-gray-800",
      },
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  return (
    <div className="md:mx-28 mx-2 sm:mx-16  ">
      <Carousel theme={customTheme}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel>
    </div>
  );
};

export default Testimonial;
