import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (

        <div className=' min-h-screen max-md:py-8 pt-16 m-16 grid justify-center'>
            <h1 className='text-5xl text-center font-semibold my-8' >Our Team</h1>
          <ul className='lg:flex grid gap-16 lg:mx-32'>
            <li className=' bg-gradient-to-r from-cyan-500 to-blue-500 w-60 h-80 grid justify-center items-center rounded-lg p-4'>
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vUS93KYsenGDbJzCfQIu3qzT8Cv0p-pbbA&s" className='w-60 opacity-80 hover:opacity-100' alt="" />
              <h3 className='font-bold text-xl'>Alwin Sajan</h3>
              <div className='flex'>
              <p className=' opacity-90'>Founder & CEO</p>
              <img src={FaLinkedin} className='ml-8 w-6 h-6 ' alt="" />
              </div>
            </li>
            <li className=' bg-gradient-to-r from-sky-500 to-indigo-500 w-60 h-80 flex justify-center rounded-lg p-8'>Team 2 </li>
            <li className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-80 flex justify-center rounded-lg p-8'>Team 3 </li>
            <li className=' bg-gradient-to-r from-purple-500 to-pink-500 w-60 h-80 flex justify-center rounded-lg p-8'>Team 3 </li>
          </ul>
        </div>

  )
}

export default Team