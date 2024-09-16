import React from "react";
import { blogCardData } from "../../data";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-green-300/35">
      <div className="min-h-screen  text-center py-10 px-5">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {blogCardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg p-4 m-4 w-[15rem] md:w-80 h-96 flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-md h-40 object-cover mb-4"
              />
              <div className="flex-grow">
                <p className="text-yellow-400 font-semibold">{card.category}</p>
                <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{card.author}</p>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="flex gap-4 text-2xl font-bold text-green-900">
          <p className="  hover:bg-white px-3 py-2">1</p>
          <p className=" hover:bg-white px-3 py-2">2</p>
          <p className=" hover:bg-white px-3 py-2">3</p>
          <p className=" hover:bg-white px-3 py-2">4</p>
        </div>
        <div className="flex gap-3 justify-center items-center text-2xl font-bold text-white">
          <p>Next</p>
          <div className="flex justify-end">
          <FaArrowRight />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
