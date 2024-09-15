import React from 'react'
import { scamsData } from '../../data'

const ScamCard = () => {
  return (
    <div className="bg-green-300/35 py-10 px-5">
    <div className="text-center text-[#ffdb8a]">
      <h1 className="text-3xl font-bold mb-4">Crypto Scams to Watch Out For</h1>
      <p className="text-white mb-8">Cryptocurrency is popular with scammers because its value can change quickly. Scammers love these opportunities to make quick money.</p>
    </div>

    {/* Scam Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {scamsData.map((scam, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#1f1147] mb-3">{scam.title}</h3>
          <p className="text-gray-700 mb-3">{scam.description}</p>
          <a href="#" className="text-[#ffdb8a] font-semibold">
            {scam.linkText} →
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ScamCard