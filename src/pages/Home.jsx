import React from 'react'

const Home = () => {
  return (
    <div className='bg-green-300/35 p-8 '>
        <div className='flex flex-col  lg:flex-row'>
            <div className='flex-1 flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start'>
                <h1 className='text-white text-3xl'>Recover Your Funds Lost To Cyber Fraud</h1>
                <p>With Capx Recovery, you can report and investigate Crypto scams, romance frauds and their sorts. Connect to navigate and regain your money.</p>
                <button className="primary-btn bg-green-300/35 p-4 hover:bg-green-300/25  text-white shadow-[5px_5px_0px_0px_#fff] flex items-center gap-2 rounded-2xl">
                GET YOUR MONEY BACK
                </button>
            </div>
            <div className='flex-1'></div>
        </div>
    </div>
  )
}

export default Home