const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#f1d0a3] to-[#938c62] flex justify-center p-4 md:p-10">
      {/* container */}
      <div className="shadow-lg shadow-slate-400 md:px-10 px-3 py-8 w-full md:w-[50%] rounded-xl inline-block  bg-gradient-to-l from-[#6017CD] to-[#0B54E7]">
        <h1 className="text-center text-2xl font-bold mb-6 text-stone-300">
          Let&apos;s Talk . . .
        </h1>
        <form action="">
          <div>
            <div>
              <label
                className="font-semibold text-white tracking-widest my-1 font-serif"
                htmlFor="name"
              >
                Your Full Name
              </label>
            </div>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg placeholder:text-stone-300 my-1 bg-transparent border-white focus:border-white text-white"
                placeholder="ex: Prohlad Mandal"
              />
            </div>
          </div>
          <div className="my-4">
            <div>
              <label
                className="font-semibold text-white tracking-widest font-serif"
                htmlFor="email"
              >
                Your Email
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg placeholder:text-stone-300 my-1 bg-transparent border-white focus:border-white text-white"
                name="email"
                placeholder="ex: demo@gmail.com"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="font-semibold text-white tracking-widest font-serif"
                htmlFor="message"
              >
                Your Message
              </label>
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                className="w-full rounded-lg placeholder:text-stone-300 my-1 bg-transparent border-white focus:border-white text-white"
                placeholder="Write your message here..."
                cols="30"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="py-2 px-3 shadow-sm shadow-yellow-200 rounded-full my-4 bg-gradient-to-l from-[#FFA524] to-[#FFDE1D]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
