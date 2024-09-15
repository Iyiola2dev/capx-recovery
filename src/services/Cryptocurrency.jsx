import React from "react";
import ScamCompentcy from "../components/ScamCompentcy";
import ScamCard from "../components/ScamCard";
import CryptoOperatCard from "../components/CryptoOperatCard";

const Cryptocurrency = () => {
  return (
    <div className="bg-green-300/35  ">
      <div className="bg-green-300/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
          <h1 className="text-white text-4xl font-bold flex flex-col text-center md:text-left  lg:text-[4rem] lg:leading-[4rem]">
            Lost your Crypto{" "}
            <span className="text-[#ffdb8a]"> investments</span> to a fraud?
          </h1>
          <p className="text-center md:text-left text-xl text-white font-semibold  ">
            {" "}
            File a report to Capx Recovery and get your money back.
          </p>
          <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            Book a Free Consultation
          </button>
        </div>
        <div className="flex-1 hidden md:flex xl:justify-end">
          <img
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726398436/Bitcoin/Screenshot_15-9-2024_12613_capxrecovery.com-removebg-preview_vcyie0.png"
            alt=""
          />
        </div>
      </div>
      <div>
       <ScamCompentcy/>
      </div>
      <div>
        <ScamCard/>
      </div>
      <div>
        <CryptoOperatCard/>
      </div>
    </div>
  );
};

export default Cryptocurrency;
