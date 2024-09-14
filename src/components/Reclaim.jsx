import React from 'react'
import Form from './Form'

const Reclaim = () => {
  return (
    <div className='mt-10 flex flex-col justify-center items-center bg-green-300/35 py-12  rounded-2xl gap-5'>
        <h1 className='text-3xl text-[#ffdb8a] font-bold text-center'>Reclaim Your Scammed Money</h1>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
        <div className='flex-1'>
            <Form/>
        </div>
        <div className='flex-1'>
            <img src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726307403/Bitcoin/capx-recovery-contact-us-removebg-preview_yueknt.png" alt="" />
        </div>
        </div>
       
    </div>
  )
}

export default Reclaim