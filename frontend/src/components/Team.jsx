import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (

    <div className=' min-h-screen max-md:py-8 pt-16 m-16 grid justify-center'>
      <h1 className='text-5xl text-center font-semibold my-8' >Our Team</h1>
      <ul className='lg:flex grid gap-16 lg:mx-32'>
        <li className=' bg-gradient-to-r from-cyan-500 to-blue-500 w-60 h-80 grid justify-center items-center rounded-lg p-4'>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vUS93KYsenGDbJzCfQIu3qzT8Cv0p-pbbA&s" className='w-60 opacity-90 hover:opacity-100' alt="Alwin Sajan" />
          <h3 className='font-bold text-xl'>Alwin Sajan</h3>
          <div className='flex'>
            <p className=' opacity-90'>Founder & CEO</p>
            <img src={FaLinkedin} className='ml-8 w-6 h-6 ' />
          </div>
        </li>
        <li className=' bg-gradient-to-r from-sky-500 to-indigo-500 w-60 h-80 grid justify-center items-center rounded-lg p-4'>

          <img src="" className='w-60 opacity-90 hover:opacity-100 bg-white' alt="Thejus" />
          <h3 className='font-bold text-xl'>Thejus Krishna</h3>
          <div className='flex'>
            <p className=' opacity-90'>Co-Founder</p>
            <img src={FaLinkedin} className='ml-8 w-6 h-6 ' />
          </div>
        </li>
        <li className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-80 grid justify-center items-center rounded-lg p-4'>

          <img src="" className='w-60 opacity-90 hover:opacity-100 bg-white' alt="Shreehari" />
          <h3 className='font-bold text-xl'>Sreehari </h3>
          <div className='flex'>
            <p className=' opacity-90'>Co-Founder</p>
            <img src={FaLinkedin} className='ml-8 w-6 h-6 ' />
          </div>
        </li>
        <li className=' bg-gradient-to-r from-purple-500 to-pink-500 w-60 h-80 grid justify-center items-center rounded-lg p-4'>

          <img src="" className='w-60 opacity-90 hover:opacity-100 bg-white' alt="Ann samuel" />
          <h3 className='font-bold text-xl'>Ann Samuel</h3>
          <div className='flex'>
            <p className=' opacity-90'>Co-Founder</p>
            <img src={FaLinkedin} className='ml-8 w-6 h-6 ' />
          </div>
        </li>
      </ul>
    </div>

  )
}

export default Team