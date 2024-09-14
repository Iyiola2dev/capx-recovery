import React from "react";
import Services from "../components/Services";

const About = () => {
  return (
    <div className="bg-green-300/35   px-8 py-10 flex flex-col items-center ">
      <div className="  bg-cover bg-transparent rounded-2xl">
        <div className="  flex flex-col items-center py-10 gap-5 rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ffdb8a]">
            About us
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-white text-center  md:w-[600px]">
            At Capx Recovery, we understand that cryptocurrency can be complex
            and risky. If you’ve lost money, faced security issues, or need help
            protecting your digital assets, we are here to help.
          </p>
          <p className="text-lg md:text-2xl font-semibold text-white text-center  md:w-[600px]">
            Our offices are in the United States and Canada, and we have
            fully-staffed operations.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-green-300/35  py-12  rounded-2xl items-center  px-3 gap-4">
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726264825/Bitcoin/Our-approach_1_qke5me.webp"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 ">
          <h2 className="text-3xl font-bold text-[#ffdb8a]">Our Strategy</h2>

          <p className="text-lg text-white  font-bold ">
            Our mission is to help people and businesses confidently handle the
            changing world of cryptocurrencies. We provide expert solutions to
            recover and protect your valuable digital assets.
          </p>
          <p className="text-lg text-white font-bold">
            We are a team of experienced professionals in cryptocurrency
            recovery, blockchain technology, and cybersecurity. Our experts stay
            updated with industry developments to deliver complete and
            up-to-date solutions for our clients.
          </p>
          <p className="text-lg text-white font-bold">
            At Capx Recovery, we use a clear and detailed process to ensure
            thorough results.
          </p>
        </div>
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
};

export default About;
