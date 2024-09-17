import { nftCardData } from "../../../data";

const PonziCard = () => {
  return (
    <div className="min-h-screen bg-green-300/35 text-center  py-10 px-8 ">
        <div className="flex flex-col gap-2 justify-center items-center" >
            <h1 className="text-yellow-400 text-4xl font-bold mb-6">Signs You're Facing a Ponzi Scam</h1>
            <p className="text-gray-300 text-lg  max-w-2xl font-semibold md:text-left">The obvious indicators that are better detected than neglected.</p>
        </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-center  ">
          {nftCardData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg text-xs shadow-lg p-6 m-4 w-[25rem] h-80 flex flex-col justify-center items-center"
            >
              <h2 className="text-xl text-[#ffdb8a] font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PonziCard;
