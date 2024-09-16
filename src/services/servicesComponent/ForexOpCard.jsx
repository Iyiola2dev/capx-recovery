import React from "react";

const ForexOpCard = () => {
  return (
    <div className=" mt-10  bg-green-300/35 py-8 rounded-xl px-3 lg:px-7 ">
      <h2 className="text-3xl text-center font-bold text-[#ffdb8a] py-4 mx-auto">
        How Fake FX Brokers Function
      </h2>
      <div className="flex flex-col lg:flex-row  justify-center items-center gap-7 ">
        <div className="mx-auto lg:flex-1 flex lg:justify-end">
          <img
            className="rounded "
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726451775/Bitcoin/Asset-59-1024x364_zqzzqf.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 items-center lg:items-start lg:flex-1">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <p className="  text-sm font-bold text-white">
              As a global market with many opportunities, it is hard to spot
              right or wrong investments. Fake FX brokers target new or innocent
              investors by introducing fake platforms or other tricks to get
              your money. This could involve asking investors to transfer money
              to a wallet or providing login information. In any of these cases,
              we highly recommend not giving in to their requests.
            </p>
            <p className="  text-sm font-bold text-white">
              Trusted recovery services like Capx Recovery offer free case
              assessments to check if you are being scammed. If it is a scam,
              our experts can help you recover your funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexOpCard;
