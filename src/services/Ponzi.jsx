import React from "react";
import OurServices from "./servicesComponent/OurServices";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PonziCard from "./servicesComponent/PonziCard";
import PonziCData from "./servicesComponent/PonziCData";
import PonziFaqData from "./servicesComponent/PonziFaqData";

const Ponzi = () => {
  return (
    <div className="bg-green-300/35">
      <div className="bg-green-900/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6 border-b-2">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
          <h1 className="text-white text-4xl font-bold flex gap-5 text-center  justify-center items-center md:text-left  lg:text-[4rem] lg:leading-[4rem]">
            Ponzi
            <span className="text-[#ffdb8a]">Schemes</span>
          </h1>
          <p className="text-center md:text-left text-xl text-white font-semibold  ">
            Schemed into losing your money? We've got just the scheme to recover
            it.
          </p>
          <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            Free Recovery Consultation
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
          Crafting Successful Recovery Stories
        </h2>
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
              <p className="text-sm  font-bold text-white lg:w-[500px]">
                Spotting a Ponzi scheme can get as difficult as rocket science,
                given how believable they make it for their targets. Yet, our
                curated team of specialists and investigators have cracked every
                case with precision. From our free consultation session to our
                maximum recovery endeavors, we back our clients throughout the
                way.
              </p>
              <p className="text-sm  font-bold text-white lg:w-[500px]">
                Our informative blogs also assist create a sense of awareness,
                making such schemes identifiable. If you’re sensing such a
                nuisance, we are awaiting crafting yet another successful
                recovery story, and this one could be yours!
              </p>
              <p className="text-sm  font-bold text-white lg:w-[500px]">
                Experience the financial liberty that comes from regaining
                control over your illegitimate losses.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726565237/Bitcoin/Confronting-Ponzi-Schemes-Crafting-Success-Stories-Through-Recovery-1024x468_cjndu0.webp"
                alt="Scam Recovery"
              />
            </div>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
          Discovering How Ponzi Schemes Unveil
        </h2>
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Image Section */}
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726565537/Bitcoin/Understanding-Ponzi-Schemes-1024x533_off5sv.webp"
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

      {/* fourth */}
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900/35 py-8 px-3">
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
      <div>
        <PonziCard />
      </div>

      {/* The sixth section of the page */}
      <div>
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
              <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
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
      <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center border-y">
        <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">
        Defend Yourself Against Schemers And Regain Your Money
        </h1>
        <div className="flex flex-col gap-5 lg:text-xl justify-center items-center">
          <p className="text-center text-white font-semibold">
          Have you encountered any investment opportunity that promises high returns in exchange for money? This may indicate a possible Ponzi scam or fraud, Capx Recovery is the place to go! Capx Recovery provides support and advice if you have lost money to a Ponzi fraud or believe you are about to be scammed. Our assistance includes informing you about the necessary steps that you can take depending on the type of scam and offering guidance on how to safeguard yourself in the future.
          </p>
          <div>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
              <Link to="/contact"> Report Your Scam</Link>
            </button>
          </div>
        </div>
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
  );
};

export default Ponzi;
