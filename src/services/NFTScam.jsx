import React from "react";
import NftSxamData from "./servicesComponent/NftSxamData";
import ForexFaqData from "./servicesComponent/ForexFaqData";
import OurServices from "./servicesComponent/OurServices";
import NftCard from "./servicesComponent/NftCard";
import Footer from "../components/Footer";

const NFTScam = () => {
  return (
    <div className="bg-bitcoin">
      <div className="bg-green-900/35 flex flex-col md:flex-row justify-center md:justify-between items-center px-3 pt-10 md:px-6 border-b-2">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mx-auto">
          <h1 className="text-white text-4xl font-bold flex gap-3 text-center md:text-left  lg:text-[4rem] lg:leading-[4rem]">
            NFT
            <span className="text-[#ffdb8a]">SCAM</span>
          </h1>
          <p className="text-center md:text-left text-xl text-white font-semibold  ">
            Are you worried about your stolen NFTs? Trust our specialists to
            retrieve your funds!
          </p>
          <button className="primary-btn bg-[#ffdb8a]/35 mb-3 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            Recover Now
          </button>
        </div>
        <div className="flex-1 hidden md:flex xl:justify-end">
          <img
            className="rounded-lg"
            src=""
            alt=""
          />
        </div>
      </div>

      {/*second section of this page */}
      <div className="flex flex-col justify-center items-center gap-7 bg-green-900 py-8 px-3">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[#ffdb8a]">
        Capx Recovery's NFT Scam Recovery Expertise
        </h2>
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full lg:px-10 p-9 bg-green-300/35 rounded-2xl ">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1">
              <p className="text-sm  font-bold text-white lg:w-[500px]">
              You no longer have to deal with the burden of a financial tragedy all on your own. Given our track record of successfully recovering money lost to scams, we are confident in our approach and promise maximum recovery of funds. To ensure the same, we suggest reporting a fraud immediately, with all the relevant data around the scam.
              </p>
              <p className="text-sm  font-bold text-white lg:w-[500px]">
              Our advancements in the field of investigative proficiency and fund tracing enable us to provide efficient solutions. Right from understanding the emotional turmoil that a victim goes through, to uncovering the deepest darkest manipulations that a scammer utilizes, we have what it takes to crack a case. Without any further ado, connect with us over a free consultation session and learn the chances of regaining your lost investments or funds.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:flex-1 w-full">
              <img
                className="rounded w-full md:w-[500px] lg:w-[500px] mx-auto"
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726454532/Bitcoin/7372cd1e-94f9-4646-887a-a0c1bd9057fb.png"
                alt="Scam Recovery"
              />
            </div>
          </div>
        </div>
      </div>


       {/* The third section of the page */}
       <div>
        <NftSxamData/>
       </div>

{/* fourt section */}
<div>
  <NftCard/>
</div>

       <div>
        <div className="flex flex-col justify-center  items-center gap-5 border-y bg-green-600/35 border-white py-6">
          <h1 className="text-3xl text-center font-bold text-[#ffdb8a] md:w-[400px] md:mx-auto">
            Secure Money Lost to a Fake FX Broker
          </h1>
          <div>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
              
              Report Your case
            </button>
          </div>
        </div>
      </div>

      {/* The FAQ section */}
<div className="bg-green-600/35">
  <ForexFaqData/>
</div>
     
      {/* Our services section */}
      <div  className="bg-green-900 border-t">
      <OurServices />
      </div>
       {/* The footer section */}
       <div> <div><Footer/></div></div>
    </div>
  );
};

export default NFTScam;
