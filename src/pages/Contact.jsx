import React from "react";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="bg-green-300/35">
      <div className="flex justify-center items-center py-10 ">
        <h1 className="text-xl text-[#ffdb8a] font-bold">CONTACT US</h1>
      </div>
      {/* The second section of the page */}
      <div className="flex flex-col md:flex-row justify-center items-center px-5 md:py-10   gap-10 z-[10]">
      <div className="flex-1 flex flex-col ">
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
          <p className="text-base text-white font-bold text-center md:text-left">Address:- 5551, Shaw RD, Apt no 16/188, Jackson, MS – 39209</p>
          <p className="text-base text-white font-bold">Contact Number:- +1-601-689-3502</p>
          <p className="text-base text-white font-bold">Email id:- info@capxrecovery.com</p>
        </div>
        <MapComponent/>
      </div>
      <div className="flex-1">
        <Form/>
      </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
