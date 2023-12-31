import "./style.css";
const PortfolioCard = ({ image, title, type, cat }) => {
  return (
    <div>
      {/* container  */}
      <div className="cursor-pointer md:w-[210px] w-full portfolio_card_container rounded-2xl shadow-slate-400 shadow-lg">
        <div>
          <img className="rounded-t-2xl w-full" src={image} alt="" />
        </div>

        <div className="py-4 portfolio_card_footer rounded-b-2xl bg-white">
          <div className="flex justify-start ml-3 items-center gap-3">
            <div className="bg-gradient-to-r from-[#FFA524] to-[#FFDE1D]  h-[3px] w-[30px] rounded-sm"></div>
            <h2 className="font-semibold text-lg">{title}</h2>
          </div>
          <div className="flex justify-start pl-4 md:pl-0">
            <h1 className="flex justify-center items-center gap-2">
              {type}
              <p className="h-[5px] w-[5px] rounded-full bg-stone-500"></p>{" "}
              {cat}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
