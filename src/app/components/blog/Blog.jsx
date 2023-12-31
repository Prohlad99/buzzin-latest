import Link from "next/link";
import BlogCard from "./BlogCard";

const Blog = () => {
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
  ];
  return (
    <div>
      <div className="grid grid-cols-12 md:gap-4 mt-10">
        {/* text container */}
        <div className="md:m-8 m-2 mt-[80px] sm:mt-2 text-black md:col-span-5 col-span-12 sm:col-span-6">
          <h2 className="md:text-2xl text-xl font-semibold">
            <span className="shadow-blue-600 sm:pl-5 pl-3 py-1 rounded-l-md text-white bg-gradient-to-r from-[#6017CD] to-[#0B54E7] shadow-2xl mr-1">
              OUR
            </span>
            BLOG
          </h2>
          <h1 className="md:text-5xl text-3xl sm:text-4xl font-sans mt-10 ">
            The Premier Source For Everything Blog
          </h1>
          <div className="h-[5px] w-[100px] bg-slate-400 my-8 sm:my-8  rounded-sm"></div>
          <p className=" tracking-wider text-stone-400">
            Our Mission Is To Provide Quality English Language Instruction
            Through A Variety Of Courses To International And Local Students.
          </p>
          <Link href="all_blogs">
            <button className="mt-6 my-8 md:my-8 sm:px-10 sm:py-2   py-2 hover:shadow-blue-200 shadow-yellow-200 shadow-lg md:py-3 md:px-12 px-6 rounded-full bg-gradient-to-r from-[#FFA524] to-[#FFDE1D]  text-black hover:bg-gradient-to-r hover:from-[#6017CD] hover:to-[#0B54E7]  hover:text-white">
              VIEW ALL BLOG
            </button>
          </Link>
        </div>

        <div className="md:col-span-7 justify-self-center col-span-12 sm:col-span-6">
          {/* blog container */}
          <Link href={`blog/${blogs[0].id}`}>
            <BlogCard
              image={blogs[0].img}
              title={blogs[0].title}
              type={blogs[0].type}
              date={blogs[0].date}
            />
          </Link>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-12 justify-items-center">
            {blogs.map((blog, index) =>
              blog.id !== 1 ? (
                <div
                  key={index}
                  className="sm:col-span-6 col-span-12 mt-[40px] sm:mt-0"
                >
                  <Link href={`blog/${blog.id}`}>
                    <BlogCard
                      image={blog.img}
                      title={blog.title}
                      date={blog.date}
                      type={blog.type}
                    />
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
