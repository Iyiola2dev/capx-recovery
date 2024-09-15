import React from 'react'
import { signData } from '../../../data'
const SignCard = () => {
  return (
    <div className="bg-green-900 bg-bitcoin6 py-10 px-5">
    <div className="text-center text-[#ffdb8a]">
      <h1 className="text-3xl font-bold mb-4">
      Signs You’ve Been Scammed
      </h1>
      <p className="text-white mb-8">
      Signs You’ve Been Scammed We have a list of red flags to watch out for when con artists pull off a crypto trading scam. We have listed them below for you.
      </p>
    </div>

    {/* Scam Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {signData.map((scam, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#1f1147] mb-3">
            {scam.title}
          </h3>
          <p className="text-gray-700 mb-3">{scam.description}</p>
         
        </div>
      ))}
    </div>
  </div>
  )
}

export default SignCard