import React from 'react'
import OurServices from "./servicesComponent/OurServices";

import ForexOpCard from "./servicesComponent/ForexOpCard";
import ForexFaqData from "./servicesComponent/ForexFaqData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SocialScamData from './servicesComponent/SocialScamData';


const SocialMediaScam = () => {
  return (
    <div className="bg-green-300/35">
      <div className="bg-green-900/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6 border-b-2">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
          <h1 className="text-[#ffdb8a] text-4xl font-bold flex flex-col text-center md:text-left  lg:text-[4rem] lg:leading-[4rem]">
          Caught in the Web of Social Media Scam?
           
          </h1>
          <p className="text-center md:text-left text-xl text-white font-semibold  ">
          Retrace & recover your losses with our assistance!
          </p>
          <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            Book Free Consultation
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
        Our Social Media Scam Recovery Specialization
        </h2>
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
              <p className="text-sm  font-bold text-white lg:w-[500px]">
              As a leading scam recovery agency, social media scams are frequently reported to us. Having analysed and built effective speculations around these frauds, we’ve put a result-driven solution into action. Our enormous database, proficient team, and technological advancements strengthen our services.
              </p>
              <p className="text-sm  font-bold text-white lg:w-[500px]">
              Proactively identifying and resolving a fraudulent case is crucial to us. Furthermore, our free consultation session enables victims to assess their situation and take a reasonable step. Empowering our clients with a recovery process that promises maximum recovery of funds is our top priority. In ensuring the same, we work smartly and dedicatedly in every case. Reduce the burden that a legal complaint can single-handedly put onto your shoulders. Choose a recovery service that handles it all for you!
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726579895/Bitcoin/Caught-In-The-Web-of-Social-Media-Scam-1-1024x633_rt3zj8.webp"
                alt="Scam Recovery"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The third section of the page */}
      <div>
        <SocialScamData />
      </div>
      {/* the fourth section */}
      <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center">
        <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">
          Report The Scam, Recover Promptly
        </h1>
        <div className="flex flex-col gap-5 lg:text-xl">
          <p className="text-center text-white font-semibold">
          Everyone with a smartphone has a social media presence. Scammers use this to their advantage by creating fake stories to trick victims into sharing sensitive data or money.
          </p>
          <p className="text-center text-white font-semibold">
          Examples include romance scammers with fake profiles, phishing texts, and fake giveaways. The stories may differ, but the goal is the same – to benefit at the victim’s expense.
          </p>
          
        </div>
      </div>
      {/* the fifth section */}
      <div>
        <ForexOpCard />
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

export default SocialMediaScam