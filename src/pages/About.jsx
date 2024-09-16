import React from "react";
import Services from "../components/Services";
import StrategyData from "../components/StrategyData";
import CryptoCases from "../components/CryptoCases";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

      <div className="flex flex-col lg:flex-row bg-green-900  py-12  rounded-2xl items-center  px-3 gap-4">
        <div className="flex-1 rounded-2xl">
          <img
            className="rounded-2xl"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726264825/Bitcoin/Our-approach_1_qke5me.webp"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 b px-2 rounded text-center lg:text-start">
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
        <StrategyData />
      </div>
      <div>
        <Services />
      </div>
      <CryptoCases />

      <div>
        <div className="flex flex-col justify-center mt-10 items-center gap-5">
          <h1 className="text-3xl text-center font-bold text-[#ffdb8a] md:w-[400px] md:mx-auto">
            Begin The Process Immediately For A Greater Chance Of Asset Recovery
          </h1>
          <div>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
              <Link to="/contact">Report Your Case</Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
