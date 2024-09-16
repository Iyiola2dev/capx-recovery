import React from "react";
import { nftData } from "../../../data";

const NftCard = () => {
  return (
    <div className="border-t">
      <div className="min-h-screen bg-green-900 text-center  py-10 px-8 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-yellow-400 text-4xl font-bold mb-6">
            NFT Scam Recovery Process
          </h1>
          <p className="text-gray-300 text-xs  max-w-2xl font-semibold md:text-left">
            A methodical strategy to retrieve your digital assets.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center  ">
          {nftData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg shadow-lg p-6 m-4 w-[25rem] h-60 flex flex-col justify-center items-center"
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

export default NftCard;
