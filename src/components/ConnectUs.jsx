import React from 'react'
import { Link } from 'react-router-dom'

const ConnectUs = () => {
  return (
    <div className=' mt-10 '>
        <div className="flex flex-col lg:flex-row  justify-center items-center gap-7 bg-green-300/35 py-8 rounded-xl px-3">
        <div className="mx-auto lg:flex-1 ">
          <img
            className="rounded"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726255655/Bitcoin/Why-us-1_i9kkhk.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 items-center lg:items-start lg:flex-1">
          <h2 className="text-3xl text-center font-bold text-[#ffdb8a]">Why Us</h2>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <p className="  text-lg font-bold text-white">
              Choose Capx Recovery for our expertise in all types of
              cryptocurrency scam recovery, including Bitcoin Fraud, Crypto
              Withdrawal Fraud, and Tax Fraud. We have a strong track record and
              have recovered billions of dollars for clients
            </p>
            <p className="  text-lg font-bold text-white">
              We know trust is important and understand your worries.
            </p>
            <p className="  text-lg font-bold text-white">
              We use advanced technology and a deep understanding of blockchain
              to find and recover assets. Our approach is not just about getting
              your money back; we also care about your peace of mind with
              empathy, honesty, and support.
            </p>
            <p  className="  text-lg font-bold text-white">
              When you choose Capx Recovery, you get a partner who is dedicated
              to a personalized and successful recovery process.
            </p>
          </div>
          <button className="rounded-3xl py-3 px-6 text-[#ffdb8a] bg-blue-900  font-bold">
          <Link to="/contact">  Connect with us</Link>
          
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectUs