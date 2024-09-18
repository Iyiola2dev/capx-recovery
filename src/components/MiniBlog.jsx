import React from "react";
import { miniBlog } from "../../data";

const MiniBlog = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl py-10 px-5 md:px-7 bg-green-300/35 gap-5 mt-10 ">
      <h1 className="text-xl font-bold text-[#ffdb8a]">Latest News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-6 md:px-10 ">
        {miniBlog.map((blog) => (
          <div
            key={blog.id}
            className="flex justify-center items-center bg-green-900 p-4 gap-4 text-white rounded"
          >
            <div className="flex flex-col justify-center gap-4">
              <img
                className="md:h-[300px] lg:h-[200px] "
                src={blog.image}
                alt=""
              />
              <div className="lg:w-[300px] flex flex-col gap-4">
                <p className="text-[#ffdb8a]">{blog.title}</p>
                <p>{blog.dataText}</p>

                <p>{blog.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBlog;
