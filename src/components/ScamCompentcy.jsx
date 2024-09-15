import React, { useState } from "react";
import { scamCompentcy } from "../../data";

const ScamCompetency = () => {
  const [scamCompentcyData] = useState(scamCompentcy);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const currentServices = scamCompentcyData[index];

  const handleTabClick = (args) => {
    setActiveTab(args);
    setIndex(args);
  };
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900 py-8 px-3">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
          Our Scam Recovery Competency
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 px-5">
          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
            <p className="text-sm sm:text-lg font-bold text-white lg:w-[500px]">
              We at Capx Recovery work tirelessly to turn things around a Crypto
              scam. Our blockchain experts and proficient legal partners pursue
              justice for victims of terrifying fraud. With our advancements in
              forensic technology and an in-depth understanding of the crypto
              universe, we boast of an impressive track record of recoveries.
            </p>
            <p className="text-sm sm:text-lg font-bold text-white lg:w-[500px]">
              Our primary motto is ensuring maximum recovery of stolen funds,
              thereby restoring peace of mind and confidence among scam victims.
              Come join us in fighting for your scam recovery battle!
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:flex-1 w-full">
            <img
              className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726401299/Bitcoin/Our-Scam-Recovery-Competency-1024x383_ezsiqj.webp"
              alt="Scam Recovery"
            />
          </div>
        </div>
        <div>
          {/* visible for small screen */}
          <div className="flex flex-col lg:hidden gap-10 justify-center items-center py-7">
            {scamCompentcy.map((data) => (
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

        {/* // THis is only visible on large screen */}

        <div className="hidden lg:flex px-8">
          <div className="flex gap-0">
            <ul className="flex-1 flex flex-col  justify-between border-l rounded-xl  p-3">
              <li
                className={`${
                  activeTab === 0
                    ? "  bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(0)}
              >
                Crypto Scam Recovery Process
              </li>
              <li
                className={`${
                  activeTab === 1
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(1)}
              >
                Analysis and Evaluation
              </li>
              <li
                className={`${
                  activeTab === 2
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(2)}
              >
                International Financial Experts
              </li>
              <li
                className={`${
                  activeTab === 3
                    ? " bg-white py-3 px-1 font-bold text-sm text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(3)}
              >
                Finance Forensic and Cyber Experts
              </li>
              <li
                className={`${
                  activeTab === 4
                    ? " bg-white py-3 px-1 font-bold text-sm  text-blue-900 rounded"
                    : " border-b-2 py-3 font-bold text-sm text-[#fff] "
                } cursor-pointer`}
                onClick={() => handleTabClick(4)}
              >
                Recovery Phase
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
                  className="h-[30rem] rounded-xl "
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

export default ScamCompetency;
