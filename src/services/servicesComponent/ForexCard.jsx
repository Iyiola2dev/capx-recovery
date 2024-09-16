import React from "react";
import { forexScamData } from "../../../data";
const ForexCard = () => {
  return (
    <div>
      <div className="min-h-screen bg-green-300/35 text-center  py-10 px-8 ">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-yellow-400 text-4xl font-bold mb-6">
          Spot Trending Forex Scams
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center  gap-3">
            <div className="flex-1 flex flex-col gap-2">
            <p className="text-gray-300 text-xs  max-w-2xl font-semibold md:text-left">
            The Forex market, the largest global trading platform, may have some
            of the worst scams.
          </p>
          <p className="text-gray-300 text-xs  max-w-2xl font-semibold md:text-left">
            Not everyone understands trading in the financial market, especially
            in Forex. So, clients can still benefit by letting Forex brokers
            trade on their behalf.
          </p>
          <p className="text-gray-300 text-xs  max-w-2xl font-semibold md:text-left">
            Scammers trick victims with fake promises of big profits if they let
            them manage their Forex accounts. Some scammers trade recklessly,
            making big commissions and harming their clients’ finances.
          </p>
          <p className="text-gray-300 text-xs  max-w-2xl font-semibold md:text-left">
            Others send fake progress reports with exaggerated profits,
            encouraging more investment. When victims try to withdraw money,
            they face fees, denial, or both.
          </p>
            </div>
     
          <div className="flex-1">
            <img
            className="rounded-lg"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726448788/Bitcoin/Forex-Managed-Accounts-And-Broker-Scams-1536x604_gocros.webp"
              alt=""
            />
          </div>
        </div>

        </div>
        
        <div className="flex flex-wrap gap-4 justify-center  ">
          {forexScamData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg shadow-lg p-6 m-4 w-[25rem] h-60 flex flex-col justify-center items-center"
            >
              <h2 className="text-xl text-[#ffdb8a] font-bold mb-2">{item.title}</h2>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForexCard;
