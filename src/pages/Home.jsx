import React from "react";
import Form from "../components/Form";
import { specialData } from "../../data";
import Recovery from "../components/Recovery";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-green-300/35   px-8 py-10 flex flex-col  ">
      <div className="flex flex-col justify-center items-center  lg:flex-row gap-3">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
          <h1 className="text-white text-4xl font-bold flex flex-col text-center lg:text-left md:w-[500px] lg:text-[4rem] lg:leading-[4rem]">
            <span> Recover Your Funds Lost To</span>

            <span className="text-[#ffdb8a]">Cyber Fraud</span>
          </h1>
          <p className="text-center lg:text-left text-xl text-white font-semibold  md:w-[400px]">
            With Capx Recovery, you can report and investigate Crypto scams,
            romance frauds and their sorts. Connect to navigate and regain your
            money.
          </p>
          <button className="primary-btn bg-green-300/10 p-4 hover:bg-green-300/25  text-white  flex items-center gap-2 rounded-2xl">
            GET YOUR MONEY BACK
          </button>
          <img
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726148225/Bitcoin/Group_922-removebg-preview-300x125_a4nfqu.webp"
            alt=""
          />
        </div>
        {/* The form section and it was imported */}
        <div className="flex-1">
          <Form />
        </div>
      </div>

      {/* What you get section */}
      <div className="  bg-bitcoin3 bg-cover bg-transparent rounded-2xl  mt-7">
        <div className="flex flex-col justify-center items-center rounded-2xl py-10 bg-green-300/35 gap-5">
        <p className="text-white text-4xl font-bold">What You Get</p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-[4rem] ">
          {specialData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center bg-blue-900 w-[200px] h-[200px] rounded-2xl gap-1">
                <div className="h-[4rem] w-[3.5rem]">
                  <img src={data.image} alt="" />
                </div>
                <div className="w-[150px] text-center text-[#ffdb8a] font-semibold text-lg">{data.title}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
       
      </div>

      {/* Recovery section */}
      <div>
        <Recovery/>
      </div>
      <div>
        <Services/>
      </div>
    </div>
  );
};

export default Home;
