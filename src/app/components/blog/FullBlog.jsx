"use client";
import { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { SlShareAlt } from "react-icons/sl";
const FullBlog = () => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="border-[1px] border-stone-300 rounded-2xl my-10 pb-10 bg-slate-100 mx-2 md:mx-10 px-5">
      {/* image container */}
      <div>
        <img src="/assets/blog/img1.jpg" alt="" />
      </div>
      {/* content */}
      <div>
        <div>
          <h1 className="md:text-4xl text-2xl font-bold my-10 text-blue-600">
            Working Together As Team
          </h1>
          <h5 className="flex items-center gap-2 text-sm font-semibold italic mb-5">
            FEBRUARY 5, 2020{" "}
            <p className="h-[4px] w-[4px] bg-blue-500 rounded-full"></p> BY KATE{" "}
            <p className="h-[4px] w-[4px] bg-blue-500 rounded-full"></p>
            BUSINESS
          </h5>
          <p className="text-slate-600 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse unde
            aspernatur odio repudiandae. Nemo labore possimus vel aut quia ipsum
            ullam quos eligendi aspernatur cumque tenetur facilis aliquid unde
            at blanditiis odio rem voluptatibus consequuntur, vitae enim ipsa!
            Corporis dolorum maiores laudantium esse doloremque magni incidunt
            saepe! Facere optio culpa, autem cupiditate odio voluptate est
            beatae quae deleniti commodi totam, vero ratione voluptas minus!
            Vero nobis consectetur unde odit sunt ab, blanditiis illo ipsum
            repellat, maiores beatae, excepturi obcaecati aspernatur ratione
            aperiam voluptates dolores modi reiciendis at sequi ipsa recusandae.
            Accusamus amet accusantium nobis vel excepturi iste, magnam ullam
            temporibus ratione explicabo voluptate ad nostrum saepe quidem
            commodi, cupiditate dolorem praesentium! Ad rem itaque laudantium
            illo sapiente mollitia quo, debitis omnis in provident velit
            voluptatem ab esse accusantium autem saepe consectetur natus!
            Suscipit quae temporibus nesciunt id itaque, fugiat natus odio
            libero, vel exercitationem nihil debitis unde alias veritatis porro
            ullam earum nulla neque iste sint modi! Labore nesciunt natus
            laboriosam aspernatur voluptatem, voluptatum perspiciatis placeat
            hic minima dignissimos quam fugiat consequatur ab dolore sequi esse,
            officiis tenetur velit error molestiae dolorem illum officia illo.
            Incidunt praesentium sequi laborum corporis dolorem sapiente iusto
            consequatur distinctio exercitationem optio possimus similique
            dignissimos, nisi quam tempora suscipit quidem velit corrupti eos
            dolor doloribus! Ducimus molestias placeat ab aut. Excepturi, rerum
            provident magnam iste beatae sapiente error commodi expedita vitae
            vel eaque consectetur voluptates! Ratione ipsam porro reiciendis
            explicabo temporibus. Magnam illo, tenetur, facilis ipsum minus vel
            enim totam officiis numquam rerum consectetur eius ullam omnis nemo
            hic eveniet sed dignissimos velit? Consequatur hic est dolorum ipsa
            eum nihil, atque odio in perferendis reprehenderit alias sint magnam
            numquam autem adipisci eos quod velit assumenda mollitia accusamus.
            Pariatur facilis placeat eius, quas deserunt accusamus enim porro
            eveniet qui officiis dolores quia obcaecati alias animi voluptatum,
            assumenda eaque ullam veniam. Reprehenderit hic a architecto ducimus
            quas maxime quaerat alias. Ullam animi placeat explicabo aliquid
            quisquam ea non eaque esse deserunt fugit ab excepturi itaque,
            temporibus, delectus eveniet enim sed necessitatibus repellat
            dignissimos recusandae natus dolores laudantium. Officiis, nam.
            Velit eum id eius, nemo voluptatem, doloremque provident incidunt ex
            voluptate aliquam facere delectus? Hic deserunt, iusto nisi fugiat a
            explicabo modi debitis corrupti ullam iste, quis numquam? Iure velit
            iusto illum? Iure, deserunt. Aperiam earum, natus veritatis amet
            consectetur eius, sed, error molestiae commodi delectus non
            praesentium expedita? Nam repudiandae est placeat voluptatem
            quibusdam iusto nesciunt ab?
          </p>
        </div>
      </div>

      {/* tag */}
      <div className="flex justify-between py-10 border-b-2 border-blue-300">
        <div>
          <h1 className="md:text-2xl text-xl font-semibold">Tags: No Tags</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-2xl border-[1px] border-blue-200 shadow-xl p-2 rounded-full"
            onClick={handleLike}
          >
            {like ? (
              <span>
                <IoMdHeart className="text-blue-600" />
              </span>
            ) : (
              <span>
                <IoIosHeartEmpty />
              </span>
            )}
          </button>
          <button className="text-2xl border-[1px] border-blue-200 shadow-xl p-2 rounded-full">
            <SlShareAlt />
          </button>
        </div>
      </div>

      {/* comment */}
      <div>
        <h1 className="md:text-3xl text-2xl py-10 font-semibold">
          Add a comment
        </h1>
        <p className="my-2 italic">
          Your email address will not be published. Required fields are marked *
        </p>

        <div>
          <form action="">
            <div>
              <input
                className="border-none outline-none md:md:w-[50%] w-full my-2 bg-stone-200 rounded-xl px-3 py-2"
                type="text"
                placeholder="Name(required)"
              />
            </div>
            <div>
              <input
                className="border-none outline-none md:w-[50%] w-full my-2 bg-stone-200 rounded-xl px-3 py-2"
                type="text"
                placeholder="Email(required)"
              />
            </div>
            <div>
              <input
                className="border-none outline-none md:w-[50%] w-full my-2 bg-stone-200 rounded-xl px-3 py-2"
                type="text"
                placeholder="Website"
              />
            </div>
            <div>
              <input
                className="border-[1px] border-blue-500 outline-none my-2 bg-stone-200 "
                type="checkbox"
                name="agree"
                value="agree"
              />
              <label className="ml-2" for="agree">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <div>
              <textarea
                name="comment"
                placeholder="Write your comment here..."
                id=""
                cols="30"
                className="border-none outline-none md:w-[50%] w-full my-2 bg-stone-200 rounded-xl px-3 py-2"
                rows="5"
              ></textarea>
            </div>
            <div className="md:w-[50%] w-full flex justify-between">
              <div></div>
              <button className="border-[1px] border-blue-600 px-10 bg-green-500 font-semibold py-2 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
