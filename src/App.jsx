import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const[darkmode,setdarkmode] = useState(false);
    const toggleDarkMode =()=>{
      setdarkmode(prevMode => !prevMode);
    }
  return (
    <div className={`w-full h-auto min-h-screen ${darkmode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
      <div className='grid justify-center pt-16 text-7xl'>
        Legato

      </div>
      
    </div>
  )
}

export default App