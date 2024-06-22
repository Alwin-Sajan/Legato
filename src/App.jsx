import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { back } from './assets';
import Team from './components/Team';
import Footer from './components/Footer';
import { motion } from "framer-motion"

const App = () => {
  const [darkmode, setdarkmode] = useState(true);
  const toggleDarkMode = () => {
    setdarkmode(prevMode => !prevMode);
  }
  return (
    <div className={`w-full overflow-hidden relative h-auto min-h-screen ${darkmode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      <img src={darkmode ? "https://img.freepik.com/free-vector/hexagonal-black-background-modern-design_1017-37442.jpg" : back} className='fixed bg-slate-500 opacity-60 w-full z-20' alt="" />
      <div className='relative z-30'>

        <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
        <div className='grid justify-center h-[50vh] pt-28 text-7xl'>
          Legato
        </div>

        <div className=' min-h-screen flex pb-8 justify-center'>
          <ul className='lg:flex grid gap-16 lg:mx-32'>
            <motion.li whileHover={{ scale: 1.2, rotateZ: -1.5, borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }} className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
              <h2 className='text-center font-semibold'>All in One</h2>
              <img src="https://static.thenounproject.com/png/188125-200.png" alt="" />
            </motion.li>
            <motion.li whileHover={{ scale: 1.2, rotateZ: 0, borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }} className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
              <h2 className='text-center font-semibold mb-4'>Secure</h2>
              <img src="https://i.pinimg.com/736x/f8/5d/1a/f85d1a6c3b416c7a4a2437b8be41ed09.jpg" className='m-auto w-[80%] h-auto' alt="" />
            </motion.li>
            <motion.li whileHover={{ scale: 1.2, rotateZ: 1.5, borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }} className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
              <h2 className='text-center font-semibold mb-4'>Secure</h2>
              <img src="https://c0.wallpaperflare.com/preview/275/188/982/wireless-connection-wifi-signal.jpg" className='m-auto w-[80%] h-auto' alt="" />
            </motion.li>
          </ul>
        </div>

        <div className='h-[14vh] sticky from-cyan-500 to-pink-500'></div>
        <div className='h-[76vh] bg-gradient-to-r from-cyan-500 to-pink-500'>

        </div>

        <Team />
        <Footer />

      </div>
    </div>
  )
}

export default App