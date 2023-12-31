import TeamCard from "./TeamCard";
const all_members = [
  {
    id: 1,
    img: "/assets/team/img1.jpg",
    name: "Nila Copper",
    title: "CEO",
  },
  {
    id: 2,
    img: "/assets/team/img2.jpg",
    name: "Nila Copper",
    title: "Manager",
  },
  {
    id: 3,
    img: "/assets/team/img3.jpg",
    name: "Nila Copper",
    title: "Marketer",
  },
  {
    id: 4,
    img: "/assets/team/img1.jpg",
    name: "Nila Copper",
    title: "CEO",
  },
  {
    id: 5,
    img: "/assets/team/img2.jpg",
    name: "Nila Copper",
    title: "Manager",
  },
  {
    id: 6,
    img: "/assets/team/img3.jpg",
    name: "Nila Copper",
    title: "Marketer",
  },
  {
    id: 7,
    img: "/assets/team/img1.jpg",
    name: "Nila Copper",
    title: "CEO",
  },
  {
    id: 8,
    img: "/assets/team/img2.jpg",
    name: "Nila Copper",
    title: "Manager",
  },
  {
    id: 9,
    img: "/assets/team/img3.jpg",
    name: "Nila Copper",
    title: "Marketer",
  },
  {
    id: 10,
    img: "/assets/team/img1.jpg",
    name: "Nila Copper",
    title: "CEO",
  },
  {
    id: 11,
    img: "/assets/team/img2.jpg",
    name: "Nila Copper",
    title: "Manager",
  },
  {
    id: 12,
    img: "/assets/team/img3.jpg",
    name: "Nila Copper",
    title: "Marketer",
  },
];
const AllMembers = () => {
  return (
    <div>
      {/* container */}
      <div className="grid grid-cols-12 bg-stone-100  sm:6 md:gap-12 border-[1px] md:mx-10 mx-2 my-10 md:px-10 px-2 rounded-2xl shadow-2xl pb-20 border-stone-300">
        <h1 className="font-semibold -mb-10 mt-10 text-blue-400 col-span-12 text-xl sm:text-2xl">
          Our All Members
        </h1>
        {all_members.map((member, index) => (
          <div
            className="md:col-span-4  col-span-12 mt-20 md:mt-10 "
            key={index}
          >
            <div className="flex justify-center ">
              <div className=" inline-block">
                <TeamCard
                  image={member.img}
                  name={member.name}
                  title={member.title}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-full flex justify-center w-full mt-20 -mb-10 ">
          <button className="border-[1px] bg-gradient-to-r from-[#6017CD] to-[#0B54E7] text-white rounded-full px-10 py-2  font-semibold">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;
