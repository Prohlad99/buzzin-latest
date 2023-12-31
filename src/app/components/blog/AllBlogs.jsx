import Link from "next/link";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      img: "/assets/blog/img1.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 2,
      img: "/assets/blog/img2.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 3,
      img: "/assets/blog/img3.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 4,
      img: "/assets/blog/img1.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 5,
      img: "/assets/blog/img2.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 6,
      img: "/assets/blog/img3.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 7,
      img: "/assets/blog/img1.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 8,
      img: "/assets/blog/img2.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 9,
      img: "/assets/blog/img3.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 10,
      img: "/assets/blog/img1.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 11,
      img: "/assets/blog/img2.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
    {
      id: 12,
      img: "/assets/blog/img3.jpg",
      date: "FEBRUARY 5, 2020 ",
      type: "BUSINESS",
      title: "Grow Your Business & Start",
    },
  ];
  return (
    <div>
      {/* container */}
      <div className="grid grid-cols-12 sm:gap-6 md:gap-12 border-[1px] md:mx-10 mx-2 my-10 md:px-10 px-2 rounded-2xl shadow-2xl pb-20 border-stone-300">
        <div className="col-span-full mt-10 md:-mb-10 md:flex justify-end gap-3">
          <div className="justify-self-end  inline-block">
            <select
              id="sorting"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Sort by latest</option>
              <option value="US">Sort by oldest</option>
              <option value="CA">Sort by Business</option>
              <option value="FR">Sort by Politics</option>
            </select>
          </div>
        </div>
        {blogs.map((blog, index) => (
          <div className="md:col-span-6 col-span-12 mt-10 " key={index}>
            <div className="flex justify-center ">
              <div className=" inline-block">
                <Link href={`blog/${blog.id}`}>
                  <BlogCard
                    image={blog.img}
                    date={blog.date}
                    type={blog.type}
                    title={blog.title}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-full flex justify-center w-full mt-10 -mb-10">
          <button className="border-[1px] bg-gradient-to-r from-[#6017CD] to-[#0B54E7] text-white rounded-full px-10 py-2  font-semibold">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
