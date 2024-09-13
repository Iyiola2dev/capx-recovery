import React from 'react'
import { recovery } from '../../data'

const Recovery = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-8 gap-3 px-3'>
            <h1 className='text-4xl font-bold text-white text-center'>How We Recover Your Funds</h1>
            <p className='text-center text-base lg:text-lg font-semibold text-white '>Recovering Bitcoins from a Scam Needs a Strong Plan. Our Fund Recovery Services Are Different Because We Go Beyond Just Meeting Challenges. Our Experts Understand Your Unique Situation, Evaluate It Thoroughly, and Create a Personalized Plan Just for You. Unlike Others, We Stay Connected and Support You Every Step of the Way, Both Emotionally and Financially. Trust Us to Help You Recover Your Funds with Care and Dedication.</p>
            <div className='flex flex-wrap justify-center gap-6 lg:gap-[4rem]'>
                {
                    recovery.map((data)=>(
                        <div key={data.id} className=' flex  bg-blue-900 gap-4 p-3 rounded-2xl'>
                            <div className='flex flex-col h-[250px] w-[250px] px-2 items-center justify-center text-[#ffdb8a] gap-2'>
                                <h3 className='text-2xl font-bold text-center'>{data.title}</h3>
                                <p className='text-center text-wrap text-white'>{data.text}</p>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Recovery