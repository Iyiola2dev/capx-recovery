import React from "react";
import { ourServices } from "../../../data";

const OurServices = () => {
  return (
    <div className="py-10  ">
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="text-4xl font-bold mb-5 text-center text-[#ffdb8a]">Our Services</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-[2rem]  ">
          {ourServices.map((service) => (
            <div
              key={service.id}
              className="h-[150px] w-[250px] bg-blue-900 flex flex-col justify-center items-center rounded-xl px-3"
            >
              <div>
                <img src={service.image} alt="" />
              </div>
              <p className="text-[#ffdb8a] font-bold text-center">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
