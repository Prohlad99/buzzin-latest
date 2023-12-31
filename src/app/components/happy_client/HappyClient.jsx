export const ClientCard = ({ title, mission, count, type, color }) => {
  return (
    <div className="flex justify-center items-center gap-6">
      <span className="relative">
        <h1 className={`sm:text-[80px] text-[50px] ${color}`}>{count}</h1>
        <p
          className={`absolute sm:top-3 sm:-right-5 sm:text-[30px] text-[20px] top-1 -right-4 ${color}`}
        >
          {type}
        </p>
      </span>
      <div>
        <p className={`text-2xl font-semibold mb-4 ${color}`}>{title}</p>
        <p className="text-slate-300">{mission}</p>
      </div>
    </div>
  );
};

const HappyClient = () => {
  const happyClients = [
    {
      id: 1,
      count: 99,
      type: "%",
      title: "Happy Clients",
      mission: "Our Mission Is To Provide Quality",
      color: "text-[#FFE91C]",
    },
    {
      id: 2,
      count: 17,
      type: "k",
      title: "User Customers",
      mission: "English Language Instruction",
      color: "text-[#FFFFFF]",
    },
    {
      id: 3,
      count: 11,
      type: "Y",
      title: "Years Exprience",
      mission: "Our Mission Is To Provide Quality",
      color: "text-[#FFE91C]",
    },
  ];
  return (
    <div>
      {/* container */}
      <div className="md:flex md:justify-center grid grid-cols-1 items-center bg-gradient-to-r from-[#0B54E7] to-[#6017CD] gap-3 py-4 rounded-2xl">
        {happyClients.map((item, index) => (
          <div
            className={
              index !== 0
                ? "border-t-[1px] border-sky-50 py-2 md:border-none"
                : "py-2 md:border-none"
            }
            key={index}
          >
            <ClientCard
              count={item.count}
              type={item.type}
              title={item.title}
              mission={item.mission}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClient;
