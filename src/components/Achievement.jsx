import React from "react";
import { achievement } from "../../data";
import { FaTrophy } from "react-icons/fa";

const Achievement = () => {
  return (
    <div className="mt-10 bg-blue-900 flex flex-col justify-center items-center rounded-xl py-7 px-5">
      <div className="text-[#ffdb8a] flex flex-col justify-center items-center text-3xl">
        <FaTrophy />
        <p className="font-bold">Achievements</p>
      </div>
      <div className="flex flex-wrap justify-center p-10 gap-6 ">
        {achievement.map((data) => (
          <div
            key={data.id}
            className="px-6 py-[3rem] h-[150px] w-[200px] bg-white flex justify-center items-center rounded-xl "
          >
            <p className="text-center text-blue-900 text-lg font-semibold">
              {data.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Achievement;
