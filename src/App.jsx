import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { back } from './assets';
import Team from './components/Team';
import Footer from './components/Footer';
import { motion } from "framer-motion"
import Features from './components/Features';
import Reveal from './components/Reveal';

const App = () => {
  const [darkmode, setdarkmode] = useState(true);
  const [demo, setDemo] = useState(false);
  const toggleDarkMode = () => {
    setdarkmode(prevMode => !prevMode);
  }
  return (
    <div className={`w-full overflow-hidden relative h-auto min-h-screen ${darkmode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      <img src={darkmode ? "https://img.freepik.com/free-vector/hexagonal-black-background-modern-design_1017-37442.jpg" : back} className='fixed bg-slate-500 opacity-60 w-full z-20' alt="" />

      <div className={`ml-[10vw] mt-[10vh] rounded w-[80vw] h-[80vh] glass fixed z-50 ${demo ? "block" : 'hidden'}`}>
        <div className='flex p-8 relative'>
          <h3 className='text-4xl relative text-black'>Demo Video</h3>
          <button type="button" className='bg-[red] absolute right-1 h-16 p-4 rounded mx-60' onClick={() => setDemo(!demo)}>X</button>
        </div>
        <iframe width="980" height="360" className='mx-12 rounded mt-4'
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
      <div className={`${demo ? "opacity-80 " : ""} relative z-30`}>

        <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
        <div className='grid justify-center h-[50vh] pt-36 font-semibold text-7xl'>
          <Reveal>Legato</Reveal>
        </div>

        <Features darkmode={darkmode} />

        <div className='h-[90vh] bg-gradient-to-r from-cyan-500 to-pink-500'>
          <h1 className='pl-16 text-5xl font-bold mb-0 pt-16'>About Us</h1>
          <button type="button" className='bg-[red] my-16 rounded p-4 mx-60' onClick={() => setDemo(!demo)}>Demo</button>
        </div>

        <Team />
        <Footer />

      </div>

    </div>
  )
}

export default App