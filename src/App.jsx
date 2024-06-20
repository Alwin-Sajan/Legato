import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { back } from './assets';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const [darkmode, setdarkmode] = useState(false);
  const toggleDarkMode = () => {
    setdarkmode(prevMode => !prevMode);
  }
  return (
    <div className={`w-full relative h-auto min-h-screen ${darkmode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      <img src={back} className='fixed z-20' alt="" />
      <div className='relative z-30'>

        <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
        <div className='grid justify-center h-[50vh] pt-32 text-7xl'>
          Legato
        </div>

        <div className=' h-screen flex justify-center'>
          <ul className='flex gap-16 lg:mx-32'>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 1 </li>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 2 </li>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 3 </li>
          </ul>
        </div>

        <div className='h-[90vh] bg-orange-400'>

        </div>

        <Content />
        <Footer />

      </div>
    </div>
  )
}

export default App