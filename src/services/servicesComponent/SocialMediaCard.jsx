import React from 'react'
import { socialScamData } from '../../../data'

const SocialMediaCard = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col justify-center items-center '>
            <h1 className="text-yellow-400 text-4xl font-bold mb-6">Social Media Scam Recovery Process</h1>
            <p className="text-center text-white font-semibold max-w-2xl">Social media scams are unstoppable, but the ability to get your lost money back isn’t. Our competence and practice can assist you smoothen the recovery process in a planned manner.</p>
        </div>
         <div className="flex flex-wrap gap-4 justify-center  ">
          {socialScamData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg shadow-lg p-6 m-4 w-[25rem] h-60 flex flex-col justify-center items-center"
            >
              <h2 className="text-xl text-[#ffdb8a] font-bold mb-2">{item.title}</h2>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SocialMediaCard