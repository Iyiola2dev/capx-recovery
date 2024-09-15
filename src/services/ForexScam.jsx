import React from "react";
import OurServices from "./servicesComponent/OurServices";

const ForexScam = () => {
  return (
    <div className="bg-green-300/35">
      <div className="bg-green-900/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6 border-b-2">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
          <h1 className="text-white text-4xl font-bold flex flex-col text-center md:text-left  lg:text-[4rem] lg:leading-[4rem]">
            Fell victim to
            <span className="text-[#ffdb8a]">Forex a Fake</span> Broker
          </h1>
          <p className="text-center md:text-left text-xl text-white font-semibold  ">
            Let our forensics experts help recover your investments!
          </p>
          <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            Report Your Case
          </button>
        </div>
        <div className="flex-1 hidden md:flex xl:justify-end">
          <img
            className="rounded-lg"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726419627/Bitcoin/scam_evhxrw.jpg"
            alt=""
          />
        </div>
      </div>
      {/* second section of this page */}
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
          Our Expertise in Forex Scam Recovery
        </h2>
        <div className="bg-bitcoin3 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
              <p className="text-sm sm:text-lg font-bold text-white lg:w-[500px]">
                The Forex market is large and volatile, making it a prime target
                for scams. Our trained professionals and skilled investigators
                have handled thousands of cases with great results. Although
                getting your money back from a scam isn’t easy, we make it as
                smooth as possible. You don’t have to worry about high legal
                fees because our team handles everything systematically and
                efficiently.
              </p>
              <p className="text-sm sm:text-lg font-bold text-white lg:w-[500px]">
                We cover all types of scams to ensure investors don’t suffer
                losses from trusting the wrong people. With us by your side,
                getting your money back from a forex fraud doesn’t have to be
                uncertain. Start your recovery journey with a trusted partner.
                We’re just a phone call away.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726420200/Bitcoin/What-Is-A-Forex-Scam-1024x395_ujbb98.webp"
                alt="Scam Recovery"
              />
            </div>
          </div>
        </div>
      </div>






      {/* Our services section */}
      <OurServices/>
    </div>
  );
};

export default ForexScam;
