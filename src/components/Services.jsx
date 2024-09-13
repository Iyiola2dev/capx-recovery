import React, { useState } from "react";
import { service } from "../../data";

const Services = () => {
  const [servicesData] = useState(service);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const currentServices = servicesData[index];

  const handleTabClick = (args) => {
    setActiveTab(args);
    setIndex(args);
  };
  return (
    <div className="bg-bitcoin3 bg-cover bg-transparent rounded-2xl text-[#ffdb8a]">
      <div className="mt-8 flex flex-col  gap-3 bg-green-300/35 py-8 px-3 rounded-2xl">
        <h1 className="text-2xl font-bold text-center">
          Specialized Services by Our Experts
        </h1>
        <div className="flex flex-col lg:hidden gap-5 justify-center items-center py-7">
          {service.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-center items-center gap-4 text-white "
            >
              <div className="h-[250px] w-[250px] object-center">
                <img
                  className="h-[250px]  w-[250px] object-center  rounded-2xl"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-bold text-[#ffdb8a]">
                  {data.title}
                </h4>
                <p className="text-center">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          <div className="flex gap-3">
            <ul className="flex-1 flex flex-col  justify-between  p-3">
              <li
                className={`${
                  activeTab === 0 ? "  bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(0)}
              >
                Crypto Scam Recovery
              </li>
              <li
                className={`${
                  activeTab === 1 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(1)}
              >
                Forex Scam Recovery
              </li>
              <li
                className={`${
                  activeTab === 2 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(2)}
              >
                NFT Scam Recovery
              </li>
              <li
                className={`${
                  activeTab === 3 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(3)}
              >
                Ponzi Scheme Recovery
              </li>
              <li
                className={`${
                  activeTab === 4 ? " bg-white py-3 px-1 font-bold text-base  text-blue-900rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(4)}
              >
                Romance Scam Recovery
              </li>
              <li
                className={`${
                  activeTab === 5 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(5)}
              >
                Tax Fraud Investigation
              </li>
              <li
                className={`${
                  activeTab === 6 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(6)}
              >
                Online Scam Recovery
              </li>
              <li
                className={`${
                  activeTab === 7 ? " bg-white py-3 px-1 font-bold text-base text-blue-900 rounded" : " border-b-2 py-3 font-bold text-base  "
                } cursor-pointer`}
                onClick={() => handleTabClick(7)}
              >
                Social Media Scam Recovery
              </li>
            </ul>
            <div className="flex-[3] flex bg-white  p-3">
              <div className="flex flex-col gap-5">
                <h2 className="text-blue-900 text-2xl font-semibold">{currentServices.title}</h2>
                <p className="text-black">{currentServices.text}</p>
              </div>
              <img className="h-[30rem]" src={currentServices.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
