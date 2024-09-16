import ScamCompentcy from "./servicesComponent/ScamCompentcy";
import ScamCard from "./servicesComponent/ScamCard";
import CryptoOperatCard from "./servicesComponent/CryptoOperatCard";
import SignCard from "./servicesComponent/SignCard";
import FaqCrypto from "./servicesComponent/FaqCrypto";
import OurServices from "./servicesComponent/OurServices";
import Footer from "../components/Footer";

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
        <ScamCompentcy />
      </div>
      <div>
        <ScamCard />
      </div>
      <div>
        <CryptoOperatCard />
      </div>
      <div>
        <SignCard />
      </div>
      <div className=" p-5 lg:p-10 flex flex-col gap-6 md:justify-center md:items-center">
        <h1 className="text-3xl font-bold mb-4 text-[#ffdb8a] text-center">Act Fast and Recover What's Yours</h1>
        <div className="flex flex-col gap-5 lg:text-xl">
        <p className="text-center text-white font-semibold">Crypto recovery services are the need of the hour. Additionally, there are a lot of con artists that prey on innocent people. As per FTC, 690,000 US citizens fell for online scams amounting to $10.02 billion, and these are just those who reported them. These figures are bound to be huge as many refrain from filing a complaint with the authorities.</p>
        <p className="text-center text-white font-semibold">With the use of high-level blockchain forensics and state-of-the-art hardware, we aggressively pursue each crypto fraud through comprehensive cyber investigations. We make a point to maximize stolen financial assets by uncovering cyber crimes committed by these fraudsters.</p>
        <p className="text-center text-white font-semibold">Our team of crypto recovery services specialists has valuable years of experience and knowledge that allows us to track down those cryptos that you may have lost in an online crypto scam.</p>
        </div>
     
      </div>

      {/* second too last section of this page */}
      <div>
      <div className="flex flex-col justify-center mt-10 items-center gap-5 border-y border-white py-6">
      <h1 className="text-3xl text-center font-bold text-[#ffdb8a] md:w-[400px] md:mx-auto">Recover Access To Your Investments!</h1>
      <div>
      <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300"> BEGIN RECOVERY</button>
      </div>
     
      </div>
      </div>
      {/* faq section */}
      <div>
        <FaqCrypto/>
      </div>
      <div>
        <OurServices/>
      </div>
      <div> <div><Footer/></div></div>
    </div>
  );
};

export default Cryptocurrency;
