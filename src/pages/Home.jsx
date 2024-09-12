import React from "react";

const Home = () => {
  return (
    <div className="bg-green-300/35 px-8 py-10 ">
      <div className="flex flex-col justify-center items-center  lg:flex-row">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
          <h1 className="text-white text-4xl font-bold text-center lg:text-left md:w-[500px] lg:text-[4rem] lg:leading-[4rem]">
            Recover Your Funds Lost To{" "}
            <span className="text-[#ffdb8a]">Cyber Fraud</span>{" "}
          </h1>
          <p className="text-center lg:text-left text-xl text-white font-semibold  md:w-[500px]">
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
        <div className="flex-1 w-[300px] md:w-full  ">
          <form
            // onSubmit={handleSubmit}
            className="flex flex-col max-w-md mx-auto border border-gray-500 p-4 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // onChange={handleChange}
                // value={formData.email}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                // value={formData.message}
                // onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
