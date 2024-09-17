import React from 'react'
import OurServices from "./servicesComponent/OurServices";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PonziFaqData from './servicesComponent/PonziFaqData';
import PonziCData from './servicesComponent/PonziCData';
import PonziCard from './servicesComponent/PonziCard';

const TaxFraud = () => {
  return (
    <div className="bg-green-300/35">
    <div className="bg-green-900/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6 border-b-2">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
        <h1 className="text-[#ffdb8a] text-4xl font-bold flex flex-col gap-2 lg:gap-5 text-center   md:text-left  lg:text-[4rem] lg:leading-[4rem]">
        TAX FRAUD INVESTIGATION
         
        </h1>
        <p className="text-center md:text-left text-xl text-white font-semibold  ">
        Feel like you've been charged with inappropriate taxes? Let's put it to test & retrieve your money from a taxation fraud!
        </p>
        <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
         Start Recovering
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
      Tie Up with Proficient Tax Fraud Investigators
      </h2>
      <div className=" rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
            <p className="text-sm  font-bold text-white lg:w-[500px]">
            Capx Recovery, though primarily known as a trustworthy scam recovery firm, has undeniable potential with forensics and tax fraud investigations. From investment platforms to impersonation schemes, tax scams can occur in various ways. To outsmart these deceptive operatives, we lean on strong research, analyses, and investigations.
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
            We’ve worked dedicatedly through countless cases, ensuring a maximum recovery of lost funds. Undergoing shame and anxiety may be a victim’s first response. But, enduring it all by themselves may not help.
            </p>
           <p className="text-sm  font-bold text-white lg:w-[500px]">Our free consultation sessions encourage people who suspect tax or other heinous frauds to attain professional support. By standing up to fraudulent entities, you retrieve both your lost money and confidence.</p>
          </div>

          {/* Image Section */}
          <div className="lg:flex-1 w-full">
            <img
              className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726571664/Bitcoin/Romance-Scam-Recovery-Undoing-Financial-Damage-1024x492_vlf9a1.webp"
              alt="Scam Recovery"
            />
          </div>
        </div>
      </div>
    </div>

    {/* third section */}
<div className='border-y'>
    <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
      Our Romance Scam Recovery Process
      </h2>
      <p className="text-sm  font-bold text-white lg:w-[500px] text-center">Replacing the instability and financial mistrust that scams introduce with a procedural solution, we promise diligent work in recovering the majority of your lost funds. Here’s the recovery framework that our specialists follow and has proven credible.</p>
      <div className=" rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
          {/* Image Section */}
          <div className="lg:flex-1 w-full">
            <img
              className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726572131/Bitcoin/About-Internet-Dating-Scams-790x1024_s7susl.webp"
              alt="Scam Recovery"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Primarily functioning as an investment fraud, Ponzi schemes are
              built around the illusion of “huge financial gains”. Entirely
              operational on the concept “borrow from Tom to pay off Harry”,
              the scheme sells no actual products or services.
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              The biggest selling point for these schemes is the sense of
              community building and belongingness. Other key motivators are
              false claims of lucrative returns, lowered risks, strategies,
              and quality products/services. The money keeps on circulating
              from one person to another, while keeping the scheme going. The
              schemers as well as the promoters keep pocketing money
              throughout the cycle.
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Once the scheme reaches its dry spell, with little to no inflow
              of investments, things take a dreadful turn. Several investors
              become victims to the scheme, thereby losing all of their
              capital.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* fourth */}
    <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3 border-y">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
        Securely Retrieve Your Lost Funds!
      </h2>
      <div className=" rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Have you encountered any investment opportunity that promises
              high returns in exchange for money? This may indicate a possible
              Ponzi scam or fraud. But, don’t sweat about it.
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Capx Recovery is the place to go!
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Capx Recovery provides support and advice if you have lost money
              to a Ponzi fraud or believe you are about to be scammed. Our
              assistance includes informing you about the necessary steps that
              you can take depending on the type of scam and offering guidance
              on how to safeguard yourself in the future.
            </p>
            <p className="text-sm  font-bold text-white lg:w-[500px]">
              Book your free consultation session and join us as we commit
              towards retrieving your losses.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:flex-1 w-full">
            <img
              className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726565944/Bitcoin/The-Biggest-Ponzi-Scam-To-Exist-1024x435_couvos.webp"
              alt="Scam Recovery"
            />
          </div>
        </div>
      </div>
    </div>
    {/* the fifth section */}
    <div className='border-y'>
      <PonziCard />
    </div>

    {/* The sixth section of the page */}
    <div className='border-y'>
      <PonziCData />
    </div>

    {/* the fifth section */}
    <div className="border-y">
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
          How To Avoid Ponzi Schemes
        </h2>
        <p className="text-lg  font-bold text-white ">
          Investment and Ponzi scams share traits investors should recognize,
          such as:
        </p>
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726568769/Bitcoin/How-To-Avoid-Ponzi-Schemes-1024x774_vnwm27.webp"
                alt="Scam Recovery"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1 ">
              <ul className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
                <li className="text-sm  font-bold text-white lg:w-[500px]">
                  Unusually High Returns with Low or No Risk High returns with
                  no risk usually indicate a scam.
                </li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">
                  Abnormally Consistent Returns Stable, high returns despite
                  market changes are suspicious.
                </li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">
                  Unregistered Investments SEC registration ensures
                  transparency in an investment’s finances and management.
                </li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">
                  Unlicensed Sellers Avoid investments from unlicensed
                  sellers.
                </li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">Rogue Brokers Check brokers’ registration and disciplinary history using FINRA’s Broker Check database.</li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">Secretive and Complex Strategies Lack of transparency should be a red flag.</li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">Paperwork Errors or Inconsistencies This may indicate fraudulent activity.</li>
                <li className="text-sm  font-bold text-white lg:w-[500px]">Problems with Payments Ponzi schemes limit payouts, causing delayed or missed payments. Be wary of funds that discourage cashing out.</li>
              </ul>
          
            </div>

           
          </div>
        </div>
      </div>
    </div>

     {/* The FAQ section */}
     <div>
      <PonziFaqData />
    </div>

    {/*  */}
    <div className='bg-green-900 border-y'>
    <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center">
        <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">
        Move Proactively & Regain Your Funds
        </h1>
        <div className="flex flex-col gap-5 lg:text-xl">
          <p className="text-center text-white font-semibold">
          Begin by cutting off any contact immediately if you suspect that the person you are talking to may be a scammer, and notify the dating site or app where you met them. The next move is to be prompt with reporting the case. With a reliable and transparent recovery agency like Capx Recovery, you can stay stress free and assured.
          </p>
          <p className="text-center text-white font-semibold">Staying cautious and skeptical of online relationships is essential, particularly when someone asks for money or personal information. However, there’s no shame in reporting an online crime. If you’re someone who wants to get help while remaining anonymous, we address your concerns with utmost confidentiality.</p>
          <p className="text-center text-white font-semibold">Understanding the sensitivity of the case, we contribute the best of our resources towards recovering the maximum of your lost funds. Kickstart with a free consultation session and find your way out of a terrifying scam.</p>
        </div>
      </div>
    </div>
  
    {/*  */}
    <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center border-y">
      <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">
      Report the case and get your stolen funds back!
      </h1>
      <div className="flex flex-col gap-5 lg:text-xl justify-center items-center">
        <p className="text-center text-white font-semibold">
        If you have been scammed or suspect that you might fall victim to a dating scam, Capx Recovery is the place to go! Capx Recovery provides support and advice if you have lost money to a scam or believe you are about to be scammed. Our assistance includes informing you about the necessary steps that you can take depending on the type of scam and offering guidance on how to safeguard yourself in the future.
        </p>
        <div>
          <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
            <Link to="/contact"> Initiate Recovery</Link>
          </button>
        </div>
      </div>
    </div>
   

   

    {/* Our services section */}
    <OurServices />

    {/* The footer section */}
    <div>
     
      <div>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default TaxFraud