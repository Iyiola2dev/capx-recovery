import React, { useState } from "react";
import { ponziForScam } from "../../../data";


const PonziCData = () => {
  const [ponziForScamData] = useState(ponziForScam);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const currentServices = ponziForScamData[index];

  const handleTabClick = (args) => {
    setActiveTab(args);
    setIndex(args);
  };
  return (
    // this was imported to src/services/ForexScam.jsx
    <div>
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900 py-8 px-3 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
            Forex Scam Recovery Process
          </h1>
        
        </div>

        {/* This will only show on small screen */}
        <div>
          {/* visible for small screen */}
          <div className="flex flex-col lg:hidden gap-10 justify-center items-center py-7">
            {ponziForScam.map((data) => (
              <div
                key={data.id}
                className="flex flex-col md:flex-row justify-center items-center gap-6 text-white md:px-5 "
              >
                <div className="h-[250px] w-[250px] flex-1">
                  <img
                    className="h-[250px]  w-[250px]   rounded-2xl"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center flex-1">
                  <h4 className="text-lg font-bold text-[#ffdb8a] text-center">
                    {data.title}
                  </h4>
                  <p className="text-center">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 
        This will only show on large screen */}
        <div className="hidden lg:flex  border">
          <div className="flex gap-0">
            <ul className="flex-1 flex flex-col  justify-between   p-3">
              <li
                className={`${
                  activeTab === 0
                    ? "  bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(0)}
              >
                Recovery Consultation
              </li>
              <li
                className={`${
                  activeTab === 1
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(1)}
              >
                Forex Scam Investigation
              </li>
              <li
                className={`${
                  activeTab === 2
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(2)}
              >
                Recovery
              </li>
              <li
                className={`${
                  activeTab === 3
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(3)}
              >
                Fund Tracing
              </li>
            </ul>
            <div className="flex-[3] flex bg-white rounded-xl gap-2  p-3">
              <div className="flex flex-col gap-5 flex-1">
                <h2 className="text-blue-900 text-2xl font-semibold">
                  {currentServices.title}
                </h2>
                <p className="text-black">{currentServices.text}</p>
              </div>
              <div className="flex-1">
                <img
                  className="h-[20rem] rounded-xl "
                  src={currentServices.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PonziCData;
