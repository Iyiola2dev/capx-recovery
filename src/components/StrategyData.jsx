import React from 'react'
import { strategyData } from '../../data'

const StrategyData = () => {
  return (
    <div className="min-h-screen bg-green-300/35 text-white p-5 md:p-10 rounded-2xl mt-10">
    <h1 className="text-4xl font-bold mb-5 text-center text-[#ffdb8a]">Our Strategy</h1>
    <p className="text-center text-lg mb-5 font-semibold">
      Our approach has been successful over time and is easy to adapt to each situation.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {strategyData.map((item, index) => (
        <div
          key={index}
          className="bg-green-900 p-4 md:p-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#ffdb8a]">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <button className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors duration-300">
        Report Your Case
      </button>
    </div>
  </div>
  )
}

export default StrategyData