"use client";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import TeamCard from "./TeamCard";

const TeamCarousel = () => {
  const team = [
    {
      id: 1,
      img: "/assets/team/img1.jpg",
      name: "Nila Copper",
      title: "CEO",
    },
    {
      id: 1,
      img: "/assets/team/img2.jpg",
      name: "Nila Copper",
      title: "Manager",
    },
    {
      id: 1,
      img: "/assets/team/img3.jpg",
      name: "Nila Copper",
      title: "Marketer",
    },
  ];
  const customTheme = {
    root: {
      base: "relative sm:h-[600px] h-[540px] md:h-full bg-[#212121] w-full px-2",
      leftControl:
        "absolute md:hidden top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 md:hidden right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hidden hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white hidden dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
  };
  return (
    <div className="md:h-[500px]">
      <Carousel className="hidden md:block" slide={false} theme={customTheme}>
        <div className="hidden md:block">
          <div className="flex justify-center gap-4">
            {team.map((member, index) => (
              <div key={index}>
                <TeamCard
                  image={member.img}
                  name={member.name}
                  title={member.title}
                />
              </div>
            ))}
          </div>
        </div>
      </Carousel>

      <Carousel className="md:hidden" slide={false} theme={customTheme}>
        {team.map((member, index) => (
          <div className="md:hidden" key={index}>
            <TeamCard
              image={member.img}
              name={member.name}
              title={member.title}
            />
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center">
        <Link href="members">
          <button className="text-white font-thin flex justify-center items-center gap-2">
            VIEW ALL TEAM{" "}
            <span>
              <FaAngleRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCarousel;
