import React from 'react'
import OurServices from "./servicesComponent/OurServices";
import ForexScamData from "./servicesComponent/ForexScamData";
import ForexCard from "./servicesComponent/ForexCard";
import ForexOpCard from "./servicesComponent/ForexOpCard";
import ForexFaqData from "./servicesComponent/ForexFaqData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const InternetScam = () => {
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
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
              <p className="text-sm  font-bold text-white lg:w-[500px]">
                The Forex market is large and volatile, making it a prime target
                for scams. Our trained professionals and skilled investigators
                have handled thousands of cases with great results. Although
                getting your money back from a scam isn’t easy, we make it as
                smooth as possible. You don’t have to worry about high legal
                fees because our team handles everything systematically and
                efficiently.
              </p>
              <p className="text-sm  font-bold text-white lg:w-[500px]">
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

      {/* The third section of the page */}
      <div>
        <ForexScamData />
      </div>
      {/* the fourth section */}
      <div>
        <ForexCard />
      </div>
      {/* the fifth section */}
      <div>
        <ForexOpCard />
      </div>
      <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center">
        <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">
          Report The Scam, Recover Promptly
        </h1>
        <div className="flex flex-col gap-5 lg:text-xl">
          <p className="text-center text-white font-semibold">
            Falling for a Forex scam isn’t your fault, but choosing not to act
            is. Partner with a transparent, established recovery agency like
            Capx Recovery. Our experts gather evidence to support your legal
            case and assure a money-back policy. Exercise your rights and we’ll
            support you through every step of your recovery.
          </p>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="flex flex-col justify-center mt-10 items-center gap-5 border-y border-white py-6">
          <h1 className="text-3xl text-center font-bold text-[#ffdb8a] md:w-[400px] md:mx-auto">
            Secure Money Lost to a Fake FX Broker
          </h1>
          <div>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
            <Link to="/contact">  Report Your case</Link>
             
            </button>
          </div>
        </div>
      </div>

      {/* The FAQ section */}
      <div>
        <ForexFaqData />
      </div>

      {/* Our services section */}
      <OurServices />

      {/* The footer section */}
      <div>
        {" "}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default InternetScam